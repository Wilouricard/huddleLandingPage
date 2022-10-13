import React from "react";

export default function Body() {
  return (
    <main className="lg:flex">
      <div className="">
        <img src="images\logo.svg" alt="" className="w-36 m-10 absolute" />
      </div>
      <div className="flex flex-col items-center">
        <img
          src="images\illustration-mockups.svg"
          alt=""
          className="absolute pt-32 w-4/5"
        />
      </div>
      <img src="images\bg-mobile.svg" alt="" className="w-full lg:w-1" />
      <div>
        <div className="flex flex-col text-center mx-10 gap-6">
          <h1 className="text-white text-3xl font-semibold">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-white text-md">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="bg-white py-3 text-Violet rounded-full mx-8 shadow-xl hover:opacity-80 active:bg-Soft-Magenta active:text-white">Register</button>
        </div>
      </div>
    </main>
  );
}
