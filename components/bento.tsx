import { randomInt } from "crypto";
import Image from "next/image"
import Link from "next/link";



export default function Bento({ images, className }: { images: string[], className?: string }) {

    

    let acumulator = 1;
    let before = false;
    const list_images = images.map((image, i) => {
        const randValue = Math.floor(Math.random() * 3) === 0;
        let isWide = false;

        if (acumulator < 4 && randValue)
            isWide = true && !before;
        else if (acumulator % 4 !== 0 && randValue)
            isWide = true && !before;

        if (isWide) {
            acumulator += 2;
            before = true;
        } else {
            acumulator += 1;
            before = false;
        }

        return (
            <li
                className={`hover:scale-110 transition-all duration-500 ease-in-out relative list-none row-span-1 ${isWide ? "col-span-2" : ""}`}
                key={i}

            >
                <Link href={`/obras/${i+1}`}>
                    <img
                        src={image}
                        alt={`Image ${i+1}`}
                        className="object-cover w-full h-[20rem] rounded-xl z-[500]"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300 rounded-xl"></div>
                </Link>
            </li>
        )
    });

    return (
        <div className={className}>
            {/* <div className={`${hover ? 'block' : 'hidden'} fixed w-full h-full z-[100] bg-black/60 inset-0 ${hover ? 'pointer-events-none' : ''}`}></div> */}
            <ul className="grid grid-cols-4 gap-4 auto-cols-[30rem]">
                {list_images}
            </ul>
        </div>
    )
}
