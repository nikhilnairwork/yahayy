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
    <div className="flex flex-col sm:flex-row px-5  py-5  flex-wrap justify-center lg:gap-x-32  lg:gap-y-16 rounded-lg">
      {initialBrands.map((brand,i) => (
                  <Link href={`/${brand.url}`} key={i} className="block">
                  <div className="min-w-[90px] mx-2 :mx-0 md:w-[110px] lg:min-w-[150px]">
                    <div className="w-[100px] sm:w-56 h-auto ">
                      <Image
                        src={brand.image || "/placeholder.svg"}
                        alt={brand.name}
                        width={300}
                        height={200}
                        layout="responsive"
                        objectFit="cover"
              
                      />
                    </div>
                    <div className="lg:px-2 w-96">
                      <h2 className={`text-[9.5px] md:text-[11px] lg:text-[14.5px] font-semibold text-zinc-800 text-justify hidden md:block`}>{truncateText(brand.name,25)}</h2>
                      {/* <p className="text-sm text-gray-600 mb-2">
                        Price Range: ${brand.price_json.min} - ${brand.price_json.max}
                      </p> */}
                      {brand.discount !== "0.00" ? (
                        <p className="text-[#388d13] text-[9.5px] lg:text-[18.5px] lg:text-sm font-bold py-1.5">{brand.discount}% Off</p>
            
                      ):( <p className="text-[#388d13] text-[9.5px] lg:text-[18.5px] lg:text-sm font-bold py-1.5">buy Now</p>)}
                      {!brand.is_stock && (
                        <p className="text-sm text-red-600 font-semibold">Out of Stock</p>
                      )}
                    </div>
                  </div>
                </Link>
      ))}
    </div>
  );
}
