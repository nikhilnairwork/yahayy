"use client"

import React from 'react'
import { EditProfile, getOrder } from "@/api/ApiService";
import { useEffect, useState } from "react";
import OrderCard from '@/Component/OrderCard';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { updateUser } from "@/lib/features/userSlice";  // Import the reducer action
import type { UserState } from "@/lib/features/userSlice";
import { UserRoundPen } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { setUser } from '@/lib/features/userSlice';

export default function page() {
  const dispatch = useDispatch()
  const userProfile = useSelector((state: RootState) => state?.user);
  const [userData, setUserData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

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

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);

      const formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("mobile_no", phoneNumber);
      try {
        const response = await EditProfile(formData)
        if (response?.data) {
          const updated: Partial<UserState> = {};
    
          if (firstName) updated.firstName = firstName;
          if (lastName) updated.lastName = lastName;
          if (email) updated.email = email;
          if (phoneNumber) updated.phone = phoneNumber;
    
          dispatch(updateUser(updated)); // Dispatch only updated fields
        }
    
        console.log(response?.data)
      } catch (error) {
       console.log(error)
      } finally{
        setIsLoading(false)
        setIsOpen(false)
      }
    };

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">My Profile</h1>
      <div className="flex justify-center flex-wrap gap-10 md:min-h-screen p-5">
    
        <div className="p-3  h-fit w-full sm:w-fit bg-zinc-100  rounded-lg">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild >
        <button
          className="flex gap-3 items-center justify-end"
        >
     <UserRoundPen/>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
           Edit profile
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) =>
                  setPhoneNumber(e.target.value.replace(/\D/g, ""))
                }
                
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Saving Profile..." : "Save"}
            </Button>
        
          </form>
      </DialogContent>
    </Dialog>
          <h2 className="text-2xl font-semibold">Name: {userProfile?.firstName} {userProfile?.lastName}</h2>
          <h4 className="text-base font-semibold">Email: {userProfile?.email}</h4>
          <h4 className="text-base font-semibold">Mobile: {userProfile?.phone}</h4>
        </div>
        <div className="h-fit bg-[#43248A]/20   p-4 rounded-lg">
        <h2>Your Orders</h2>
              <OrderCard orders={userData} />
        </div>
      </div>
        
    </div>
  )
}