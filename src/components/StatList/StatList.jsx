import { Followers, Happy, Like, Scan } from "../Icons";
import { ListItem } from "./ListItem";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/StatList");

  if (!res.ok) {
    throw new Error("StatList Calling Failed");
  }

  return res.json();
}

const StatList = async () => {
  const data = await getData();

  return (
    <section className="flex flex-col md:flex-row items-center gap-4 md:gap-x-8 justify-between pt-12 pb-20 bg-white px-4 md:px-12 lg:px-20">
      <div className="flex gap-x-4 w-full">
        <ListItem Icon={<Followers />} statNumber={data.followers} />
        <ListItem Icon={<Like />} statNumber={data.solved} />
      </div>
      <div className="flex gap-x-4 w-full">
        <ListItem Icon={<Happy />} statNumber={data.customers} />
        <ListItem Icon={<Scan />} statNumber={data.projects} />
      </div>
    </section>
  );
};

export default StatList;
