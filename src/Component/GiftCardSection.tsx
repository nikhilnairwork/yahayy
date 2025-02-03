import React from "react";
import Giftcard from "./Giftcard";
import Link from "next/link";

type Props = {
  data: any;
  heading?:string
};

export default function GiftCardSection({ data,heading }: Props) {
  return (
    <div className=" md:my-[20px] lg:my-[40px] my-1.5 sm:my-3 relative">
      <div className="flex justify-between items-center">
        <h2 className=" font-bold capitalize text-[12px] md:text-[18px]">
         {heading}
        </h2>
        <p className="text-right md:hidden">{">"}</p>
      </div>

      <div className=" overflow-x-auto scrollbar-hide z-1 my-1  relative">
        <div className="flex justify-between  items-start">
          {data?.slice(0, 6).map(
            (
              item: {
                name: string;
                url: string;
                discount: string;
                image: string;
              },
              index: any
            ) => (
              <Link href={`/${item.url}`} key={index}>
                <div className=" w-40 md:w-36 my-2.5  md:m-2.5" >
                  <Giftcard
                    title={item.name}
                    discount={item.discount}
                    giftCard_img={item.image}
                  />
                </div>
              </Link>
            )
          )}
        </div>
        <div className="flex justify-between  sm:mt-2 items-start">
          {data?.slice(6, 12).map(
            (
              item: {
                name: string;
                url: string;
                discount: string;
                image: string;
              },
              index: any
            ) => (
              <Link href={`/${item.url}`} key={index} >
                <div className=" w-40 md:w-36 my-2.5  md:m-2.5" >
                  <Giftcard
                    title={item.name}
                    discount={item.discount}
                    giftCard_img={item.image}
                  />
                </div>
              </Link>
            )
          )}
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full lg:hidden block w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white/25 from-10% to-transparent pointer-events-none"></div>
    </div>
  );
}
