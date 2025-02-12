import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/types/brand";

interface BrandListProps {
  initialBrands: Brand[];
}

export default function BrandList({ initialBrands }: BrandListProps) {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <div className="flex flex-col sm:flex-row   py-5 md:py-1  flex-wrap justify-center lg:gap-x-16  lg:gap-y-0 rounded-lg">
      {initialBrands.map((brand, i) => (
        <Link href={`/${brand.url}`} key={i} className="block">
          <div className="flex justify-start items-center  md:flex-col w-full py-5   rounded-lg md:w-[110px]  lg:min-w-[150px]  md:bg-gradient-to-t md:from-white md:to-white">
            <img
              src={brand?.image}
              alt={brand?.name}
              className=" w-28 h-28  sm:w-72 sm:h-auto "
            />
            <div className="lg:px-1.5 md:pt-1 ">
              <h3
                className={` md:text-[11px] lg:text-[13.5px] font-medium  hidden md:block`}
                title={brand.name}
                aria-label={brand.name}
              >
                {brand.name}
                {/* Adjust 20 to your preferred character limit */}
              </h3>
              <h3
                className={`text-[15.5px]  pl-3 pt-3 font-semibold  md:hidden block`}
                title={brand.name}
                aria-label={brand.name}
              >
                {/* {truncateText(title, 16)}{" "} */}
                {brand.name}
                {/* Adjust 20 to your preferred character limit */}
              </h3>
              {brand.max && brand.min && (
                <p className="text-[11.5px] sm:hidden s pl-3 sm:pl-0    lg:text-[12.5px] lg:text-sm font-semibold">
                  ₹{brand.min} - ₹{brand.max}
                </p>
              )}
              {brand.discount != "0.00" ? (
                <p className="text-[#388d13] text-[18.5px] sm:text-[13px]  pt-1.5 sm:pt-1 pl-3 sm:pl-0  py-2 lg:text-[16.5px]  font-bold">
                  {brand.discount}% <span className="font-bold">OFF</span>
                </p>
              ) : (
                <p className="text-[#388d13] text-[18.5px] sm:text-[13px] pt-1.5 sm:pt-1  pl-3 sm:pl-0 py-2 lg:text-[16.5px]  font-bold">
                  Buy Now
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
