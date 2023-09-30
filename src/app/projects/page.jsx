import Image from "next/image";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllProject");

  if (!res.ok) {
    throw new Error("AllProject Calling Failed");
  }

  return res.json();
}

const Projects = async () => {
  const data = await getData();

  return (
    <section className="flex flex-col py-16 bg-white px-4 md:px-8 lg:px-20">
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
        <p className="text-sm uppercase text-green-600 font-semibold my-4">
          All Project
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-8 capitalize">
          Better Agency/SEO Solution At Your Fingertips
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-12 my-8">
        {data.slice(0, 6).map((item, i) => (
          <div key={i} className="shadow-2xl rounded-xl p-2 md:p-4 lg:p-8 flex flex-col">
            <div className="mb-4">
              <Image
                width={400}
                height={0}
                src={item["image"]}
                alt=""
                className="object-cover rounded w-full h-full"
              />
            </div>
            <p className="uppercase font-semibold text-center">
              {item["title"]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
