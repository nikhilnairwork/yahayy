import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/types/brand";

interface BrandListProps {
  initialBrands: Brand[];
}

export default function BrandList({ initialBrands }: BrandListProps) {
  return (
    <div className="flex flex-col sm:flex-row px-5  py-5  flex-wrap justify-center lg:gap-5 xl:gap-7 rounded-lg">
      {initialBrands.map((brand) => (
        <Link href={`/brands/${brand.url}`} key={brand.url} className="block">
          <div className=" w-fit rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-52 w-52 mx-auto">
              <Image
                src={brand.image || "/placeholder.svg"}
                alt={brand.name}
                width={300}
                height={200}
                layout="responsive"
                objectFit="cover"
      
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg text-zinc-600 font-semibold mb-2 text-center w-44">{brand.name}</h2>
              {/* <p className="text-sm text-gray-600 mb-2">
                Price Range: ${brand.price_json.min} - ${brand.price_json.max}
              </p> */}
              {brand.discount !== "0.00" ? (
                <p className="text-sm text-green-600 font-semibold">{brand.discount}% Off</p>
    
              ):( <p className="text-sm text-green-600 font-semibold">buy Now</p>)}
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
