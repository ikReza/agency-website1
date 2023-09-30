"use client";

import { usePathname } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const SubNav = () => {
  const pathname = usePathname();

  return (
    <div
      className={`${jakarta.className} flex flex-col px-4 md:px-8 lg:px-16 my-8 md:my-12 lg:my-16`}
    >
      <p className="text-xl md-2xl lg:text-3xl font-bold mb-4 capitalize tracking-wide">
        {pathname.slice(1)}
      </p>
      <div className="flex items-center gap-x-4 font-semibold">
        <Link href="/">Home</Link>
        <p>
          <IoIosArrowForward />
        </p>
        <p className="capitalize text-green-600">{pathname.slice(1)}</p>
      </div>
    </div>
  );
};

export default SubNav;
