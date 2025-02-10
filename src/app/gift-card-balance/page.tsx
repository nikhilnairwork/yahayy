"use client"

import React,{useState} from 'react'
import { getBalance } from "@/api/ApiService";
import cb from "../../../public/check balance.webp"
import logo from "../../../public/check balance.webp"
import Image from 'next/image';
type Props = {}

export default function page({}: Props) {
  const [cardNumber, setCardNumber] = useState<string>("");
    const [cardpin, setCardPin] = useState<string>("");
    const [balance, setBalance] = useState<number | null>(null);
    const [expiry ,setExpiry] =useState<string|null>(null)
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleCheckBalance = async () => {
      setLoading(true);
      setBalance(null);
      setError(null);

      let body = {
        card_code:cardNumber,
        card_pin:cardpin
      }
  
      const response = await getBalance(body);
      setLoading(false);
      if(response.status ==200 ){
        setBalance(response?.data?.balance)
        setExpiry(response?.data?.expiry)
      }
        
    };
  return (
    <div className="max-w-xl mx-auto p-5 bg-white rounded-md my-10 h-[80vh] sm:h-[90vh]">
    <h1 className="text-xl font-bold text-center mb-4">Check Gift Card Balance</h1>
        <Image className="w-72 mx-auto" src={cb} alt="check-balance" />
    <input
      type="text"
      value={cardNumber}
      onChange={(e) => setCardNumber(e.target.value)}
      placeholder="Enter gift card number"
      className="w-full p-2 border-2 border-gray-500 outline-none rounded-md mb-4"
    />
      <input
      type="text"
      value={cardpin}
      onChange={(e) => setCardPin(e.target.value)}
      placeholder="Enter gift card pin"
      className="w-full p-2 border-2 border-gray-500 outline-none rounded-md mb-4"
    />

    <button
      onClick={handleCheckBalance}
      disabled={!cardNumber || loading}
      className={`w-full p-2 text-white rounded-md ${
        loading
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-purple-500 hover:bg--600"
      }`}
    >
      {loading ? "Checking..." : "Check Balance"}
    </button>

    {balance !== null && (<>
      <div className="mt-4 p-6 bg-gradient-to-r from-purple-400  to-purple-600 text-white rounded-lg shadow-md sm:w-96 mx-auto">
<div className="flex justify-between items-start mb-4">
  <div>
    <h2 className="text-lg font-bold">Gift Card</h2>
    <p className="text-sm">Your exclusive balance</p>
  </div>
  <div className="w-8 h-8"><Image src={logo} alt="logo" /></div> {/* Placeholder for a logo */}
</div>
  

<div className="text-sm mb-6">
  <div className="flex justify-between">
    <span className="font-light">Card Number:</span>
    <span className="font-semibold tracking-wider">{cardNumber}</span>
  </div>
  <div className="flex justify-between mt-2">
    <span className="font-light">PIN:</span>
    <span className="font-semibold">{cardpin}</span>
  </div>
</div>

<div className="text-sm">
  <div className="flex justify-between mb-2">
    <span className="font-light">Balance:</span>
    <span className="font-bold text-xl">₹{balance}</span>
  </div>
  <div className="flex justify-between">
    <span className="font-light">Expiry:</span>
    <span className="font-semibold">{expiry}</span>
  </div>
</div>
</div>

      </>
    )}
    {error && (
      <div className="mt-4 p-2 bg-red-100 text-red-800 rounded-md">
        {error}
      </div>
    )}
  </div>
  )
}