import React from "react";

const Subscribe = () => {
  return (
    <section className="py-4 md:py-8 lg:py-16 bg-white px-4">
      <div className="flex flex-col items-center md:w-1/2 lg:w-1/3 mx-auto text-center">
        <p className="uppercase text-green-600 font-semibold my-4 tracking-wider">
          Subscribe
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl font-bold capitalize my-4">
          Subscribe to get the latest news about us
        </p>
        <p className="text-gray-500 capitalize">
          Please drop your email below to get daily update about what we do
        </p>
        <form className="my-4 relative w-full">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full rounded-xl border border-gray-800 px-2 py-3 md:py-4 placeholder:text-sm placeholder:md:text-base"
          />
          <button className="absolute right-2 top-1.5 md:top-1 bg-[tomato] hover:bg-orange-600 text-white text-sm md:text-base rounded-xl px-2 md:px-4 py-2 md:py-3">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
