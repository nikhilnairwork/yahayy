import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import bigBasket from "../../public/Big Basket.webp";
import Dominos from "../../public/Dominos.webp";
import Myntra from "../../public/Myntra.webp"
import MamaEarth from "../../public/Mamaearth.webp"

export default function HomeCarousel() {
  return (
    <Carousel className=" mx-auto mt-5 md:mt-12 lg:mt-1 drop-shadow-md w-[90%]">
      <CarouselContent>
        <CarouselItem>
          <Image src={bigBasket} alt="bigBasket" width={1200} height={200}  className="rounded-lg w-full" />
        </CarouselItem>
        <CarouselItem>
          <Image src={Dominos} alt="Dominos"  width={1200} height={200}  className="rounded-lg w-full"/>
        </CarouselItem>
        <CarouselItem>
          <Image src={Myntra} alt="Myntra"   width={1200} height={200} className="rounded-lg w-full"/>
        </CarouselItem>
        <CarouselItem>
          <Image src={MamaEarth} alt="Mamaearth"   width={1200} height={200} className="rounded-lg w-full"/>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
