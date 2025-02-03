'use client'

import React, { useState } from 'react'

type Props = {
  denomination?:string[]|undefined
  title?:string
}

export default function Denomination({denomination,title}: Props) {
  
const [selectedDenomination, setSelectedDenomination] = useState("500")
  const [customDenomination, setCustomDenomination] = useState("")
  const [quantity, setQuantity] = useState("1")

  const denominations = ["500", "1000", "2000", "5000"]

  const calculatePrice = () => {
    const basePrice = Number.parseInt(selectedDenomination) || Number.parseInt(customDenomination) || 0
    const discountedPrice = basePrice * 0.8 // 20% off
    return (discountedPrice * Number.parseInt(quantity)).toFixed(2)
  }

  return (
    <div className="border-2 bg-white w-[280px] text-zinc-700 sm:w-[310px] md:w-[500px] rounded-[15px] p-4 ">
      <div>
        <h1 className="text-sm sm:text-2xl font-bold">
          {title} <br />
          <span className="text-green-700 font-semibold">20% off</span>
        </h1>
      </div>
      <h2 className="capitalize text-xs sm:text-base py-1">Gift Card Denominations</h2>

      <div className="flex flex-wrap justify-start gap-2.5 sm:gap-5 sm:py-5">
        {denomination?.map((item,i) => (
          <button
            key={i}
            onClick={() => setSelectedDenomination(item)}
           
            className="sm:basis-1/4 transition-colors delay-100 sm:mx-2 py-2.5 sm:py-3 px-2 sm:px-4 text-xs sm:text-xl font-semibold"
          >
            ₹{item}
          </button>
        ))}

        <div className="sm:mx-2 py-2 sm:py-3 px-2 sm:px-4 rounded-md border-purple-600 border text-xs sm:text-xl font-semibold">
          ₹
          <input
            type="number"
            min={500}
            max={10000}
            value={customDenomination}
            onChange={(e) => {
              setCustomDenomination(e.target.value)
              setSelectedDenomination("")
            }}
            placeholder="Custom"
            className="sm:p-1 text-center outline-none w-20 inline-block"
          />
        </div>
      </div>

      <div className="flex sm:mx-2 justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="text-sm">Qty</h3>
          <select value={quantity} onChange={(e)=>setQuantity(e.target.value)} >
          
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num.toString()}>
                  {num}
                </option>
              ))}
           
          </select>
        </div>

        <div className="text-sm sm:text-xl">
          <p>You Pay</p>
          <div className="font-bold text-sm sm:text-xl transition-opacity duration-150 delay-100 py-1">
            ₹{calculatePrice()} <br />
          </div>
          <h4 className="text-green-700 text-sm sm:text-xl font-medium">Instant 20% off</h4>
        </div>
      </div>

      <div className="flex justify-center my-4">
        <button className="bg-gradient-to-r from-[#43248A] to-[#9941F2] w-[90%] mx-auto py-1.5 sm:py-3 px-2 sm:px-4 rounded-full hover:bg-transparent hover:scale-110 transition-all delay-150 text-white border-purple-600 border text-base sm:text-lg font-semibold">
          Buy Now
        </button>
      </div>
      <h2 className="text-center text-[10px] sm:text-xs font-poppins font-semibold text-zinc-500">
        Your gift card will be instantly ⚡ delivered to your registered email address
      </h2>
      <h2 className="text-center text-[10px] sm:text-xs font-poppins font-semibold text-purple-500/90">
        Safe & Secure Payment
      </h2>
    </div>
  )
}