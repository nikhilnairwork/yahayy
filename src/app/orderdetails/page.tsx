"use client"

import React, { useEffect, useState } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getOrderDetails } from "@/api/ApiService";

import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import Image from 'next/image';

type Props = {}

export default function page({}: Props) {

const OrderID = useSelector((state: RootState)=>state?.order?.orderID)
const [orderDetails, setOrderDetails] = useState<any>(null);

useEffect(() => {
  const fetchOrderDetails = async () => {
    try {
      const data = await getOrderDetails(OrderID); // Call your API function
      setOrderDetails(data?.data); // Store the API data
    } catch (error) {
      console.error("Error fetching order details:", error);
    } 
  };

  fetchOrderDetails();
}, []);
  return (
    <div className="w-[90%] sm:w-[60%] mx-auto py-10">
    <div className="flex justify-center sm:justify-evenly flex-wrap">
      <div className="w-72">
        <img  src={orderDetails?.brand_image} alt="Gift card" />
      </div>
      <div className=" rounded-lg shadow-lg bg-[#f8f8fd] p-4">
        <div className="p-1.5 flex gap-6 justify-between">
          <h2 className="border-b border-white">Order id:</h2>
          <span>{orderDetails?.order_ref}</span>
        </div>
        <div className="p-1.5 flex gap-6 justify-between">
          <h2 className="border-b border-white">Name:</h2>
          <span>{orderDetails?.name}</span>
        </div>
        <div className="p-1.5 flex gap-6 justify-between">
          <h2 className="border-b border-white">Email:</h2>
          <span>{orderDetails?.email}</span>
        </div>
        <div className="p-1.5 flex gap-6 justify-between">
          <h2 className="border-b border-white">Brand:</h2>
          <span>{orderDetails?.brand_name}</span>
        </div>
        <div className="p-1.5 flex gap-6 justify-between">
          <h2 className="border-b border-white">Email sent:</h2>
          <span className={orderDetails?.email_sent ?`bg-green-700/80 text-white p-1.5 rounded-md text-xs`:`bg-red-700/80 text-white p-1.5 rounded-md text-xs`}>{orderDetails?.email_sent ? "Yes" : "No"}</span>
        </div>
        <div className="p-1.5 flex gap-4 justify-between">
          <h2 className="border-b border-white">Payment status:</h2>
          <span>{orderDetails?.is_completed ? "Completed" : "Pending"}</span>
        </div>
        <div className="p-1.5 flex gap-4 justify-between">
          <h2 className="border-b border-white">Amount:</h2>
          <span>{orderDetails?.total_amount}</span>
        </div>
        <div className="p-1.5 flex gap-4 justify-between">
          <h2 className="border-b border-white">Quantity:</h2>
          <span>{orderDetails?.quantity}</span>
        </div>
        <div className="p-1.5 flex gap-4 justify-between">
          <h2 className="border-b border-white">Date:</h2>
          <span>
            {new Date(orderDetails?.created_on).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
    {orderDetails?.vouchers.length >0 && ( <div className="  md:w-[70%] mx-auto py-5">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="bg-[#0E0E2C] text-white rounded-tl-md">
              Order Id
            </TableHead>
            <TableHead className="bg-[#0E0E2C] text-white text-center">
              Code
            </TableHead>
            <TableHead className="bg-[#0E0E2C] text-white text-center">
              Pin
            </TableHead>
            <TableHead className="bg-[#0E0E2C] text-white">Value</TableHead>
            <TableHead className="bg-[#0E0E2C] text-white">Amount</TableHead>
            <TableHead className="bg-[#0E0E2C] text-white text-center rounded-tr-md">
              Expiry
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderDetails?.vouchers.map((voucher: any) => (
            <TableRow key={voucher.voucher_id}>
              <TableCell className="font-medium text-">{voucher?.voucher_id}</TableCell>
              <TableCell className="text-center text-">{voucher?.code}</TableCell>
              <TableCell className="text-center text-">{voucher?.pin}</TableCell>
              <TableCell>{orderDetails?.denomination}</TableCell>
              <TableCell>{voucher?.amount}</TableCell>
              <TableCell className="text-center">
                {new Date(voucher.expiry).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>)}
   
  </div>
  )
}