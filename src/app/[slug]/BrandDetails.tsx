import Image from "next/image";

import type { BrandDetails as BrandDetailsType } from "@/types/brand";

import Link from "next/link";

interface BrandDetailsProps {
  brand: BrandDetailsType;
}

export default function BrandDetails({ brand }: BrandDetailsProps) {
  return (
    <div >
      <div className="">
        <Link href={"/"}>
          <button className="mx-5 my-2 text-zinc-800 font-semibold text-xs md:text-base bg-zinc-100 rounded-md p-1 hover:underline hover:bg-purple-500 hover:text-white">
            {"<Back"}
          </button>
        </Link>
        <div className="relative w-48 h-48 mx-auto lg:w-[25rem] lg:h-[25rem] rounded-lg overflow-hidden">
          <Image
            src={brand.image || "/placeholder.svg"}
            alt={brand.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
