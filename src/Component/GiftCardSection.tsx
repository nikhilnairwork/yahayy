import React from "react";
import Giftcard from "./Giftcard";
import Link from "next/link";

type Props = {
  data: any;
  heading?:string
  text_color?:string
};

export default function GiftCardSection({ data,heading,text_color }: Props) {
  return (
    <div className=" md:my-[20px] lg:my-[40px] my-1.5 sm:my-3 relative">
      <div className="flex justify-between items-center">
        <h2 className={` lg:px-10 font-bold capitalize text-[12px] md:text-[20px] ${text_color}`}>
         {heading}
        </h2>
        <p className="text-right md:hidden">{">"}</p>
      </div>

      <div className=" overflow-x-auto scrollbar-hide z-1 my-1  relative">
        <div className="flex justify-start lg:justify-between items-start">
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
                <div className=" w-[6rem] md:w-36 my-2.5  md:m-2.5" >
                  <Giftcard
                    title={item.name}
                    discount={item.discount}
                    giftCard_img={item.image}
                    textColor={text_color}
                  />
                </div>
              </Link>
            )
          )}
        </div>
        <div className="flex justify-start lg:justify-between  sm:mt-2 items-start">
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
                <div className=" w-[6rem] md:w-36 my-2.5  md:m-2.5" >
                  <Giftcard
                    title={item.name}
                    discount={item.discount}
                    giftCard_img={item.image}
                    textColor={text_color}
                  />
                </div>
              </Link>
            )
          )}
        </div>
      </div>
     
    </div>
  );
}
