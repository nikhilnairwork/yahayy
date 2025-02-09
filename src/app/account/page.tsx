"use client"

import React from 'react'
import { getOrder } from "@/api/ApiService";
import { useEffect, useState } from "react";
import OrderCard from '@/Component/OrderCard';
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function page() {
  const userProfile = useSelector((state: RootState) => state?.user);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // setLoading(true);
        const response = await getOrder();
        if(response.status == 200){
        console.log(response?.data?.results)
          setUserData(response?.data?.results);
        }
        
      } catch (err) {
        // setError("Failed to fetch data.");
      } finally {
        // setLoading(false);
      }
    };

    fetchOrders();
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">My Account</h1>
      <div className="flex justify-center flex-wrap gap-10 md:min-h-screen p-5">
        <div className="p-3  h-fit w-full sm:w-fit bg-zinc-100  rounded-lg">
          <h2 className="text-2xl font-semibold">Name: {userProfile?.firstName} {userProfile?.lastName}</h2>
          <h4 className="text-base font-semibold">Email: {userProfile?.email}</h4>
        </div>
        <div className="h-fit bg-[#43248A]/20   p-4 rounded-lg">
        <h2>Your Orders</h2>
              <OrderCard orders={userData} />
        </div>
      </div>
        
    </div>
  )
}