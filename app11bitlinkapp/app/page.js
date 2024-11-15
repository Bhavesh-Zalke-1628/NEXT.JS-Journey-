import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" bg-purple-100">
      <section className=" grid grid-cols-2 h-[50vh] ">
        <div className=" flex flex-col gap-4  items-center justify-center">
          <p className="text-2xl font-bold capitalize">
            the best url shortner  in the market
          </p>
          <p className=" px-24">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener

          </p>
        </div>
        <div className=" flex relative">
          <Image className=" mix-blend-darken" src='/vector.jpg' fill={true} />
        </div>
        <div className=" flex gap-3 w-full justify-center mb-10">
          <Link href='/shorten'>
            <button className=' bg-purple-500 shadow-lg text-center text-white px-3 rounded-lg font-bold py-1' >
              Try Now
            </button>
          </Link>
          <Link href='/github'>
            <button className=' text-center text-white bg-purple-500 shadow-lg px-3 rounded-lg font-bold py-1'>
              GitHub
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
