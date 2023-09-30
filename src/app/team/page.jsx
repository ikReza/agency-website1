import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TeamList");

  if (!res.ok) {
    throw new Error("TeamList Calling Failed");
  }

  return res.json();
}
const Team = async () => {
  const data = await getData();

  return (
    <section className="flex flex-col py-16 bg-white px-4 md:px-8 lg:px-20">
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
        <p className="text-sm uppercase text-green-600 font-semibold my-4">
          Our Team Members
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-8 capitalize">
          Check our awesome team members
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-x-12 justify-between">
        {data.slice(0, 3).map((item, i) => (
          <div key={i} className="mb-6 w-full md:w-4/12 lg:w-3/12 mx-auto">
            <div className="flex flex-col items-center text-center bg-green-50 pt-4 rounded-lg shadow overflow-hidden">
              <div className="relative">
                <Image
                  width={200}
                  height={0}
                  className="w-full h-80 object-cover rounded-lg"
                  src={item["image"]}
                  alt=""
                />
                <div className="absolute bottom-2 left-[25%] flex bg-[whitesmoke] rounded-full px-2 text-gray-600 cursor-pointer">
                  <p className="p-2">
                    <FaFacebookF />
                  </p>
                  <p className="p-2 border-x">
                    <FaTwitter />
                  </p>
                  <p className="p-2">
                    <FaInstagram />
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-2/3 lg:pl-6 p-4">
                <h4 className="mb-2 text-2xl font-bold font-heading">
                  {item["name"]}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
