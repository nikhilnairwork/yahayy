"use client";

import { CreateOrder } from "@/api/ApiService";
import { getToken } from "@/session";
import { toast } from "sonner"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch} from "react-redux";
import { setOrderID } from "@/lib/features/orderSlice";
type Props = {
  denomination?: string[] | undefined;
  title?: string;
  url?:string
  brandID?:string
  discount: string// Changed to string
  min?: number;
  max?: number;
};

export default function Denomination({ denomination, brandID , url , title, discount }: Props) {
  
  const dispatch = useDispatch()
  const [selectedDenomination, setSelectedDenomination] = useState("500");
  const [customDenomination, setCustomDenomination] = useState("");
  const [quantity, setQuantity] = useState("1");
  const router = useRouter();

  const calculatePrice = () => {
    const basePrice = Number.parseInt(selectedDenomination) || Number.parseInt(customDenomination) || 0
    const discountPercentage = Number.parseFloat(discount) || 0 // Convert discount to number
    const discountedPrice = basePrice * (1 - discountPercentage / 100)
    return (discountedPrice * Number.parseInt(quantity)).toFixed(2)
  }

  const handleCreateorder = async ()=>{
    if(getToken()){
      let body = {
        denomination_amount: selectedDenomination,
        quantity: quantity,
        url: url,
      };
      try {
        const response = await CreateOrder(body, brandID);
        if (response?.status == 200) {
          dispatch(setOrderID(response?.data?.data?.order_id))
          displayRazorpay(response?.data?.data);
        }
      } catch (error) {
        console.log(error);
        toast.error("An error occurred while creating the order")
      }
    }else{
      toast.error("Please login before purchase")

    }

  }

  useEffect(() => {
    if (denomination && denomination.length > 0) {
      setSelectedDenomination(denomination[0])
    }
  }, [denomination])

  function loadScript(src: string) {
    return new Promise((resolve) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay(data:any) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_3MLnVyBR8YYOmA", // Enter the Key ID generated from the Dashboard
      amount: data?.amount,
      currency: "INR",
      name: "Yahayy ",
      image: "../../public/logo.svg",
      order_id: data?.payment_order_id,
      handler: async function (response:any) {
        router.push("/orderdetails");
      },
      prefill: {
        name: data?.name,
        email: data?.email,
        contact: data?.mobile,
      },

      theme: {
        color: "#8a00c2",
      },
    };

    if (typeof window !== "undefined" && window.Razorpay) {
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  }
  const numericDenominations = denomination?.map(Number); // Convert to numbers

  const firstDenomination = Math.min(...numericDenominations || []);
  const lastDenomination = Math.max(...numericDenominations || []);
  return (
    <div className="border-2 bg-white w-[280px] text-zinc-700 sm:w-[310px] md:w-[500px] rounded-[15px] p-4 mx-auto mt-10  relative z-10">
      <div>
        <h1 className="text-sm sm:text-2xl font-bold">
          {title} <br />
          {discount != "0.00" && (
            <span className=" text-green-700 font-semibold">
              {Math.floor(Number(discount))}% off
            </span>
          )}
        </h1>
      </div>
      <h2 className="capitalize text-xs sm:text-base py-1">
        Gift Card Denominations
      </h2>

      <div className="flex flex-wrap justify-start gap-2.5 sm:gap-5 sm:py-5">
        {denomination?.map((item, i) => (
          <button
            key={i}
            onClick={() => setSelectedDenomination(item)}
            className={`sm:basis-1/4 transition-colors delay-100 border-purple-600 border rounded-md sm:mx-2 py-2.5 sm:py-3 px-2 sm:px-4 text-xs sm:text-xl font-semibold ${
              selectedDenomination === item
                ? "bg-purple-500/80 text-white scale-105 transition-all"
                : "text-zinc-700"
            }`}
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
              setCustomDenomination(e.target.value);
              setSelectedDenomination("");
            }}
            placeholder="Custom"
            className="sm:p-1 text-center outline-none w-20 inline-block"
          />
        </div>
      </div>
      {(Number(customDenomination) < firstDenomination ||
          Number(customDenomination) > lastDenomination) &&
          customDenomination !== "" && (
            <div className="text-red-500 text-sm mt-2 text-center font-bold">
              Choose denomination between ₹{firstDenomination} and ₹
              {lastDenomination}
            </div>
          )}
      <div className="flex sm:mx-2 justify-between items-center">
        <div className="flex items-center gap-2">

          <h3 className="text-sm">Qty</h3>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
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
          <h4 className="text-green-700 text-sm sm:text-xl font-medium">
             {discount != "0.00" && (
            <span className=" text-green-700 font-semibold">
             Instant {Math.floor(Number(discount))}% off
            </span>
          )}
          </h4>
        </div>
      </div>

      <div className="flex justify-center my-4">
        <button onClick={()=>handleCreateorder()} className="bg-gradient-to-r from-[#43248A] to-[#9941F2] w-[90%] mx-auto py-1.5 sm:py-3 px-2 sm:px-4 rounded-full hover:bg-transparent hover:scale-110 transition-all delay-150 text-white border-purple-600 border text-base sm:text-lg font-semibold">
          Buy Now
        </button>
      </div>
      <h2 className="text-center text-[10px] sm:text-xs font-poppins font-semibold text-zinc-500">
        Your gift card will be instantly ⚡ delivered to your registered email
        address
      </h2>
      <h2 className="text-center text-[10px] sm:text-xs font-poppins font-semibold text-purple-500/90">
        Safe & Secure Payment
      </h2>
    </div>
  );
}
