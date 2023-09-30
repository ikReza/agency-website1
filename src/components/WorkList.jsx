import Link from "next/link";
import { Activity, Heart, Work } from "./Icons";
import { BiRightArrowAlt } from "react-icons/bi";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/WorkList");

  if (!res.ok) {
    throw new Error("WorkList Calling Failed");
  }

  return res.json();
}

const WorkList = async () => {
  const data = await getData();

  return (
    <section className="flex flex-col mt-8 pt-8 pb-4 md:pb-8 bg-white px-4 md:px-8 lg:px-20">
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
        <p className="text-sm uppercase text-green-600 font-semibold my-4">
          Work List
        </p>
        <h3 className="text-xl md:text-2xl font-bold mb-8 leading-relaxed capitalize">
          We provide the Perfect Solution to your business growth
        </h3>
      </div>
      <div>
        <div className="flex flex-col md:flex-row gap-x-4 mt-4 md:mt-8">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="mb-8 w-full lg:w-1/3 px-4 text-left shadow-lg rounded-md pt-4"
              >
                <span className="flex items-center bg-green-100 rounded-lg p-5 h-16 w-16 mb-4">
                  {i + 1 === 1 ? (
                    <Activity />
                  ) : i + 1 === 2 ? (
                    <Heart />
                  ) : (
                    <Work />
                  )}
                </span>
                <h3 className="mb-4 text-lg md:text-xl font-bold font-heading">
                  {item["title"]}
                </h3>
                <p className="text-gray-500 lg:leading-loose">{item["des"]}</p>
                <Link href="/" className="group flex items-center gap-2">
                  Learn More{" "}
                  <span className="text-xl my-4 group-hover:translate-x-1 duration-300">
                    <BiRightArrowAlt />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkList;
