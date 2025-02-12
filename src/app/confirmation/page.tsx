"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import orderplaced from "../../../public/orderpalced.gif";
import { getOrderDetails } from "@/api/ApiService";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
type Props = {};

export default function page() {
  const OrderID = useSelector((state: RootState) => state?.order?.orderID);
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
    <div className="h-screen">
      <Image
        src={orderplaced}
        alt="Order Success Celebration"
        width={200}
        height={200}
        className="rounded-lg mx-auto"
      />
      <h1 className="text-center text-2xl font-bold flex items-center justify-center gap-2">
        Order Placed Successfully!
      </h1>
      <p className="text-center text-muted-foreground">
        Thank you for your purchase! Your order has been received and is being
        processed.
      </p>
      <img
        src={orderDetails?.brand_image}
        alt="Order Success Celebration"
        width={200}
        height={200}
        className="rounded-lg mx-auto"
      />
      <h2 className="text-center text-xl text-muted-foreground py-2">{orderDetails?.brand_name}</h2>
      {orderDetails?.vouchers.length >0 && ( <div className="  md:w-[45%] mx-auto py-5">
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
  );
}
