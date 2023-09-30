import Image from "next/image";
import Link from "next/link";
import Brands from "./Brands";
import AnimatedText from "../AnimatedText";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/HeroList");

  if (!res.ok) {
    throw new Error("HeroList Calling Failed");
  }

  return res.json();
}

const HeroList = async () => {
  const data = await getData();

  return (
    <section className="flex flex-col md:mt-8">
      <div className="grid lg:grid-cols-12 gap-8 px-4 md:px-8 lg:px-20">
        <div className="max-w-md mx-auto md:col-span-4 lg:col-span-5 flex flex-col items-start justify-center">
          <h2 className="my-4">
            <AnimatedText
              text={data.title}
              className="text-left text-2xl md:text-3xl lg:text-4xl"
            />
          </h2>
          <p className="text-lg text-gray-600 font-medium my-4 leading-loose">
            {data.description}
          </p>
          <Link
            href="/"
            className="py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl my-4 leading-loose"
          >
            Get Started
          </Link>
        </div>
        <div className="md:col-span-8 lg:col-span-7 max-sm:flex">
          <div className="flex flex-wrap">
            <Image
              src={data.image1}
              alt="image-1"
              width={200}
              height={0}
              className="object-cover w-full md:w-1/2 lg:w-1/3 lg:h-64 p-2 rounded-2xl"
              loading="lazy"
            />
            <Image
              src={data.image2}
              alt="image-2"
              width={600}
              height={0}
              className="object-fill w-full md:w-1/2 lg:w-2/3 lg:h-64 p-2 rounded-2xl"
              loading="lazy"
            />
          </div>
          <div className="flex flex-wrap">
            <Image
              src={data.image3}
              alt="image-3"
              width={600}
              height={0}
              className="object-fill w-full md:w-1/2 lg:w-2/3 lg:h-64 p-2 rounded-2xl"
              loading="lazy"
            />
            <Image
              src={data.image4}
              alt="image-4"
              width={200}
              height={400}
              className="object-cover w-full md:w-1/2 lg:w-1/3 lg:h-64 p-2 rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="relative flex bg-white w-full py-8 mt-12 mb-4 overflow-x-hidden">
        <Brands extraStyle="animate-marquee whitespace-nowrap" />
        <Brands extraStyle="absolute animate-marquee2 whitespace-nowrap" />
      </div>
    </section>
  );
};

export default HeroList;
