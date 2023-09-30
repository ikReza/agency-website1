import Image from "next/image";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TestimonialList");

  if (!res.ok) {
    throw new Error("TestimonialList Calling Failed");
  }

  return res.json();
}

const Testimonials = async () => {
  const data = await getData();

  return (
    <section className="flex flex-col py-16 bg-white px-4 md:px-8 lg:px-20">
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
        <p className="text-sm uppercase text-green-600 font-semibold my-4">
          Testimonial List
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-8 capitalize">
          Better Agency/SEO Solution At Your Fingertips
        </h3>
      </div>
      <div className="grid grid-cols-6 gap-8 my-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="col-span-6 md:col-span-3 lg:col-span-2 shadow-2xl rounded-xl p-2 md:p-8 flex flex-col items-center text-center"
          >
            <div className="mb-8">
              <Image
                width={100}
                height={100}
                src={item["image"]}
                alt=""
                className="object-cover w-28 h-28 rounded-2xl"
              />
            </div>
            <p className="text-sm md:text-base text-gray-500 mb-8">{item["msg"]}</p>
            <p className="md:text-lg lg:text-xl font-bold mb-4 uppercase">{item["name"]}</p>
            <p className="font-semibold text-gray-700">{item["designation"]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
