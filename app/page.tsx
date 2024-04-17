import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" bg-gray-200 flex min-h-screen flex-col items-center justify-between">
      <section>
        <Image
          src={"/static/img/main2.webp"}
          alt={" imagen principal"}
          width={5055}
          height={3416}
          className="w-screen h-screen object-cover aspect-video"
        ></Image>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex w-full">
          <div className=" bg-gray-200/60 backdrop-blur-lg h-[14rem] 2xl:h-[18rem] items-center grid rounded-r-2xl">
            <h1 className=" text-white text-4xl 2xl:text-5xl font-light text-center px-24 2xl:px-32  tracking-[0.2em] ">Ulises Blanco</h1>
          </div>
          <nav className="items-center flex mx-auto text-center space-x-10 pl-32">
            <Link href={"/"}>
              <button
                className="border-white border-2 px-6 py-2 font-light text-xl tracking-widest hover:animate-pulse text-white rounded-xl"
              >BIO</button>
            </Link>
            <Link href={"/obras"}>
              <button
                className="border-white border-2 px-6 py-2 font-light text-xl tracking-widest hover:animate-pulse text-white rounded-xl"
              >OBRAS</button>
            </Link>
          </nav>
        </div>
      </section>
      <section className="bg-white w-full p-4">

      </section>
    </main>
  );
}
