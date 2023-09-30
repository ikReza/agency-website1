import Image from "next/image";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");

  if (!res.ok) {
    throw new Error("AllService List Calling Failed");
  }

  return res.json();
}

const Service = async () => {
  const data = await getData();

  return (
    <section className="flex flex-col py-16 bg-white px-4 md:px-8 lg:px-20">
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
        <p className="text-sm uppercase text-green-600 font-semibold my-4">
          Our All Services
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-8 capitalize">
          We provide best web design services
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:gap-12 my-8">
        {data.map((item, i) => (
          <div key={i} className="col-span-2 lg:col-span-1 shadow-2xl rounded-xl p-8">
            <p className="text-xl font-semibold uppercase my-4">
              {item["title"]}
            </p>
            <p className="text-gray-500 capitalize mb-8">{item["des"]}</p>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="col-span-2 lg:col-span-3 h-44">
                <Image
                  width={200}
                  height={0}
                  src={item["image1"]}
                  alt=""
                  className="object-cover rounded w-full h-full"
                />
              </div>
              <div className="col-span-2 lg:col-span-1 h-44">
                <Image
                  width={200}
                  height={0}
                  src={item["image2"]}
                  alt=""
                  className="object-cover rounded w-full h-full"
                />
              </div>
              <div className="col-span-2 h-44">
                <Image
                  width={400}
                  height={0}
                  src={item["image3"]}
                  alt=""
                  className="object-cover rounded w-full h-full"
                />
              </div>
              <div className="col-span-2 h-44">
                <Image
                  width={400}
                  height={0}
                  src={item["image4"]}
                  alt=""
                  className="object-cover rounded w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
