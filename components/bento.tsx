import { randomInt } from "crypto";
import Image from "next/image"
import Link from "next/link";



export default function Bento({ images, className }: { images: string[], className?: string }) {



    let acumulator = 1;
    let before = false;
    const list_images = images.map((image, i) => {
        const randValue = Math.floor(Math.random() * 3) === 0;
        let isWide = (acumulator < 4 || acumulator % 4 !== 0) && randValue && !before;

        acumulator += isWide ? 2 : 1;
        before = isWide;


        return (
            <li
                className={`hover:scale-110 transition-all duration-500 ease-in-out relative list-none  ${isWide ? "col-span-2" : ""}`}
                key={i}

            >
                <Link href={`/obras/${i + 1}`}>
                    <img
                        width={1000} height={500}
                        src={image}
                        loading={i < 10 ? "eager" : "lazy"} 
                        // priority={i < 10 ? true : false}
                        alt={`Image ${i + 1}`}
                        className="object-cover w-full h-[20rem] rounded-xl z-[500]"
                    />
                    <div className="absolute h-full inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300 rounded-xl"></div>
                </Link>
            </li>
        )
    });

    return (
        <div className={className}>
            {/* <div className={`${hover ? 'block' : 'hidden'} fixed w-full h-full z-[100] bg-black/60 inset-0 ${hover ? 'pointer-events-none' : ''}`}></div> */}
            <ul className="space-y-4 mx-auto lg:space-y-0 lg:grid lg:grid-cols-4 text-center w-full md:w-1/2 lg:w-full lg:gap-4 auto-cols-[30rem]">
                {list_images}
            </ul>
        </div>
    )
}
