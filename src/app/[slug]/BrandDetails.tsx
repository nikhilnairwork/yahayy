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
        <Link href={"/brands"}>
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
        {/* <div className="mt-8">
          <h2 className=" text-gray-900 text-xl font-semibold mb-2">
            Description
          </h2>
          <p className="text-gray-700 mb-4">{brand.desc}</p>
          <h2 className=" text-gray-900 text-xl font-semibold mb-2">
            Terms and Conditions
          </h2>
          <p
            className="text-gray-700 mb-4"
            dangerouslySetInnerHTML={{ __html: brand.t_c_content || "" }}
          ></p>
        </div> */}
      </div>
      <section className="hidden lg:flex lg:w-[398px] lg:flex-col py-4">
        <div className="gap-5 lg:sticky lg:flex lg:flex-col lg:top-[85px]">
        
        </div>
      </section>
    </div>
  );
}
