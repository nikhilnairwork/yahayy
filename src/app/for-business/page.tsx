import BusinessForm from "@/Component/BusinessForm";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="bg-gradient-to-t from-[#2E0C7D] to-[#9941F2] max-w-2xl my-3  flex flex-wrap m-2 justify-center  p-5 rounded-md sm:mx-auto">
      <div>
        <h1 className="text-white p-3 text-3xl sm:text-4xl font-semibold">
          Looking to Buy in Bulk or Need a
          <span className="text-[#0E0E2C]"> Custom Solution</span>? We've Got
          You Covered!
        </h1>
      </div>
      <div className="w-full">
        <BusinessForm/>
      </div>
    </div>
  );
}
