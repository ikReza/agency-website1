import { Followers, Happy, Like, Scan } from "./Icons";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/StatList");

  if (!res.ok) {
    throw new Error("StatList Calling Failed");
  }

  return res.json();
}

export const ListItem = ({ Icon, statNumber }) => (
  <div className="flex flex-col items-center justify-center shadow-lg w-full h-48 lg:h-72 rounded-lg">
    <span className="flex items-center bg-green-100 rounded-lg p-2 lg:p-4 w-12 h-12 lg:h-16 lg:w-16 mb-4">
      <Icon />
    </span>
    <p className="text-base lg:text-xl font-semibold lg:tracking-wider">
      {statNumber}
    </p>
    <p className="text-sm md:text-base">Followers</p>
  </div>
);

const StatList = async () => {
  const data = await getData();

  return (
    <section className="flex items-center gap-x-4 md:gap-x-8 justify-between pt-12 pb-20 bg-white px-4 md:px-12 lg:px-20">
      <ListItem Icon={Followers} statNumber={data.followers} />
      <ListItem Icon={Like} statNumber={data.solved} />
      <ListItem Icon={Happy} statNumber={data.customers} />
      <ListItem Icon={Scan} statNumber={data.projects} />
    </section>
  );
};

export default StatList;
