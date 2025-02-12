"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { setOrderID } from "@/lib/features/orderSlice";
  import Link from "next/link";
import { useDispatch } from "react-redux";
  
  interface Order {
    brand_name: string;
    brand_image: string;
    created_on: string; // ISO date string
    denomination: number;
    discount: string;
    discounted_amount: string;
    email: string;
    email_sent: boolean;
    is_completed: boolean;
    name: string;
    order_ref: string;
    payment_id: string;
    quantity: number;
    total_amount: string;
  }
  // Define the props for the OrderCard component
  interface OrderCardProps {
    orders: Order[] | null;
  }
  
  function OrderCard({ orders }: OrderCardProps) {
    const dispatch = useDispatch()
   
    return (
      <div className="bg-[#FAFCFE] rounded-lg shadow-md my-3 overflow-x-auto sm:overflow-hidden w-72 min-h-[20vh] sm:w-full border p-3">
        <Table>
          <TableCaption>A list of your recent Orders.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Created On</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Qty</TableHead>
              <TableHead>Denomination</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders?.map((order) => (
              <TableRow key={order.order_ref}>
                <TableCell className="font-medium">{order.order_ref}</TableCell>
                <TableCell className="flex items-center w-64 gap-2"><img className="w-5" src={order.brand_image} alt="" />{order.brand_name}</TableCell>
                <TableCell>
                  {" "}
                  {new Date(order.created_on).toLocaleDateString("en-US", {
                    month: "short", // Displays the month as a short name (e.g., Jan, Feb, Mar)
                    day: "2-digit",
                    year: "numeric",
                  })}
                </TableCell>
                <TableCell>
                  {order.is_completed ? (
                    <span className="text-green-600">Completed</span>
                  ) : (
                    <span className="text-red-600">Pending</span>
                  )}
                </TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>{order.denomination}</TableCell>
                <TableCell>{order.total_amount}</TableCell>
                <TableCell>
                  <Link
                    href={`/orderdetails`}
                    className="text-blue-600 hover:underline"
                  onClick={()=>dispatch(setOrderID(order.order_ref))}
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={6} className="font-semibold">
              Total
            </TableCell>
            <TableCell className="text-right text-green-800">
              $
              {orders?
                .reduce((total, order) => total + parseFloat(order.total_amount), 0)
                .toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter> */}
        </Table>
      </div>
    );
  }
  
  export default OrderCard;