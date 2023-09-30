import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/FeaturedProject");

  if (!res.ok) {
    throw new Error("FeaturedProject Calling Failed");
  }

  return res.json();
}

const FeaturedProject = async () => {
  const data = await getData();

  return (
    <section className="flex flex-col py-8 px-4 md:px-8 lg:px-20 bg-green-50">
      <div className="flex flex-col md:w-1/2 lg:w-1/3">
        <p className="text-sm uppercase text-green-600 font-semibold my-4 tracking-wider">
          Featured Project
        </p>
        <h3 className="text-xl md:text-2xl font-bold mb-12">
          We provide the Perfect Solution to your business growth
        </h3>
      </div>
      <div className="flex flex-wrap -mx-4 mb-4">
        {data.slice(0,5).map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col w-full md:w-1/2 lg:w-1/3 mb-8 px-4"
            >
              <a target="_blank" href={item["live"]}>
                <Image
                  width={400}
                  height={100}
                  className="h-80 w-full mx-auto object-cover rounded-lg"
                  src={item["image"]}
                  alt=""
                />
              </a>
              <p className="text-gray-500 mt-2 mb-4 text-sm">
                App Design - June 20, 2022
              </p>
              <p>{item["title"]}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProject;
