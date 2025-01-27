import Image from "next/image"

import type { BrandDetails as BrandDetailsType } from "@/types/brand"
import Denomination from "@/Component/Denomination"

interface BrandDetailsProps {
  brand: BrandDetailsType
}

export default function BrandDetails({ brand }: BrandDetailsProps) {

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <div className="relative h-48 p-10 w-48  rounded-lg overflow-hidden">
          <Image className="w-48 lg:w-[20rem] text-xs  " src={brand.image || "/placeholder.svg"} alt={brand.name} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="md:w-1/2">
        {/* <h1 className="text-3xl font-bold mb-4">{brand.name}</h1>
        {brand.discount !== "0.00" && (
          <p className="text-lg text-green-600 font-semibold mb-2">{brand.discount}% Off</p>
        )}
        <p className="text-lg mb-4">
          Price Range: ${brand.price_json.min} - ${brand.price_json.max}
        </p>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
            Select Amount
          </label>
          <select
            id="amount"
            name="amount"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={selectedAmount}
            onChange={handleAmountChange}
          >
            <option value="">Choose an amount</option>
            {brand.price_json.denominations ? (
              brand.price_json.denominations.map((amount) => (
                <option key={amount} value={amount}>
                  ${amount}
                </option>
              ))
            ) : (
              <>
                <option value={brand.price_json.min}>${brand.price_json.min}</option>
                <option value={brand.price_json.max}>${brand.price_json.max}</option>
              </>
            )}
          </select>
        </div> */}
        {/* <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
          disabled={!selectedAmount}
        >
          Add to Cart
        </button> */}
        <Denomination/>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 mb-4">{brand.desc}</p>
          <h2 className="text-xl font-semibold mb-2">Terms and Conditions</h2>
          <p className="text-gray-700 mb-4"  dangerouslySetInnerHTML={{ __html: brand.t_c_content || "" }}></p>
        </div>
      </div>
    </div>
  )
}
