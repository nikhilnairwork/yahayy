import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import banner1 from "../../public/banner1.webp";
import banner2 from "../../public/banner2.webp";
import banner3 from "../../public/banner3.webp";
import banner4 from "../../public/banner4.webp";

import Link from "next/link";
import Image from "next/image";
type Props = {};

export default function HomeOffer({}: Props) {
  return (
    <div className="bg-zinc-100 w-full my-5 px-3 md:px-16  py-1 sm:py-6 relative rounded-[8px] sm:rounded-[20px]">
      <h2 className="text-[18px] py-2 sm:text-xl text-[#2E0C7D] font-semibold pb-0.5 sm:pb-1.5">
        Offers & more
      </h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="pb-3"
      >
        <CarouselPrevious className="hover:bg-[#8A2BEC] hidden lg:flex hover:text-white " />
        <CarouselNext className="hover:bg-[#8A2BEC] hidden lg:flex hover:text-white " />
        <CarouselContent className="px-1">
          <CarouselItem className=" mx-auto lg:basis-1/3">
            <Link href={"/zomato-e-gift-card-b2c"}>
              <Image src={banner1} alt="Zomato E-Gift Card" />
            </Link>
          </CarouselItem>

          <CarouselItem className="  lg:basis-1/3">
            <Link href={"/bigbasket-e-gift-card"}>
              {" "}
              <Image src={banner2} alt="bigbasket e-gift card" />
            </Link>
          </CarouselItem>
          <CarouselItem className="  lg:basis-1/3">
            <Link href={"/makemytrip-hotel-e-gift-card"}>
              {" "}
              <Image src={banner3} alt="Makemytrip Hotel E-Gift Card" />{" "}
            </Link>
          </CarouselItem>
          <CarouselItem className=" lg:basis-1/3">
            <Link href={"/lifestyle-e-gift-card-b2c"}>
              <Image src={banner4} alt="Lifestyle E-Gift Card-B2C" />
            </Link>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
