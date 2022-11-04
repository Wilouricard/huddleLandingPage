import React from "react";

export default function Body() {
  return (
    <main className="lg:flex lg:gap-6">
      <div className="">
        <img src="public\images\logo.svg" alt="" className="w-36 m-10 absolute lg:w-44 lg:mx-20 lg:mt-14" />
      </div>
      <div className="flex flex-col items-center lg:w-1/2">
        <img
          src="images\illustration-mockups.svg"
          alt=""
          className="absolute pt-32 w-4/5 lg:pt-40 lg:relative lg:z-10 lg:ml-20 lg:w-full"
        />
      </div>
      <img src="public\images\bg-mobile.svg" alt="" className="w-full lg:w-1 lg:h-1" />
      <img src="public\images\bg-desktop.svg" alt="" className="w-1 h-1 lg:w-auto lg:h-full lg:absolute lg:z-0" />
      <div className="lg:w-1/2">
        <div className="flex flex-col text-center mx-10 gap-6 lg:relative lg:pt-52 lg:w-[600px] lg:text-start lg:gap-8">
          <h1 className="text-white text-3xl font-semibold lg:text-5xl">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-white text-md lg:text-[19px]">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="bg-white py-3 text-Violet rounded-full mx-8 shadow-xl hover:opacity-80 active:bg-Soft-Magenta active:text-white lg:w-60 lg:mx-0">Register</button>
        </div>
      </div>
    </main>
  );
}
