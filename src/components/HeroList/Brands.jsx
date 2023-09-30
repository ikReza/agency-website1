import { FcGoogle } from "react-icons/fc";
import { FaTrello, FaSlack } from "react-icons/fa";
import { CgMonday } from "react-icons/cg";
import { SiNotion } from "react-icons/si";

const Brands = ({ extraStyle }) => {
  return (
    <div
      className={`flex gap-x-12 md:gap-x-20 lg:gap-x-40 items-center justify-between px-12 text-xl ${extraStyle}`}
    >
      <div className="flex items-center">
        <span className="mr-2">
          <FcGoogle />
        </span>
        <p className="font-semibold">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </p>
      </div>
      <div className="flex items-center">
        <span className="mr-2">
          <FaTrello className="text-blue-700" />
        </span>
        <p className="font-bold text-gray-700">Trello</p>
      </div>
      <div className="flex items-center">
        <span className="mr-2">
          <CgMonday />
        </span>
        <p className="font-bold">
          monday<sub className="font-normal">.com</sub>
        </p>
      </div>
      <div className="flex items-center">
        <span className="mr-2">
          <SiNotion />
        </span>
        <p className="text-sm font-semibold">Notion</p>
      </div>
      <div className="flex items-center lg:mr-12">
        <span className="mr-2">
          <FaSlack />
        </span>
        <p className="font-bold">Slack</p>
      </div>
    </div>
  );
};

export default Brands;
