"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col text-center py-8 px-4 md:px-8 lg:px-12 border-t-2 bg-[black] text-white">
      <div className="grid grid-cols-6 gap-x-2 md:gap-x-4 my-4">
        <div className="col-span-6 mb-4 md:mb-0 md:col-span-2">
          <p className="text-xl md:text-2xl font-semibold mb-4">WEB LOGO</p>
          <p className="md:text-left mb-4 text-sm md:text-base">
            A creative design studio that specializes in web design, branding,
            and digital marketing. Contact us today to learn more.
          </p>
          <div className="flex justify-center md:justify-start gap-x-2 md:gap-x-4">
            <p className="bg-green-600 rounded-full p-2">
              <FaFacebookF />
            </p>
            <p className="bg-green-600 rounded-full p-2">
              <FaTwitter />
            </p>
            <p className="bg-green-600 rounded-full p-2">
              <FaLinkedinIn />
            </p>
            <p className="bg-green-600 rounded-full p-2">
              <FaInstagram />
            </p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2">
          <p className="font-semibold text-lg md:text-xl mb-4">Quick Links</p>
          <div className="flex flex-col text-sm md:text-base">
            <Link href="/service" className="mb-1">
              Services
            </Link>
            <Link href="/service" className="my-1">
              Portfolio
            </Link>
            <Link href="/service" className="my-1">
              About Us
            </Link>
            <Link href="/service" className="mt-1">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 text-left">
          <p className="font-semibold text-lg md:text-xl mb-4">Address</p>
          <p className="flex flex-col text-sm md:text-base">
            <span>Design Agency Head Office</span>
            <span>Airport Road</span>
            <span>United Arab Emirates</span>
          </p>
        </div>
      </div>
      <p className="md:flex md:flex-start mt-4">
        &copy; Design Agency &nbsp;<span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
