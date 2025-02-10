"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../lib/store"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Register,
  VerifySignUpOTP,
  Login,
  VerifyLoginOTP,
} from "@/api/ApiService";
import { setSession } from "@/session";
import { setUser } from "@/lib/features/userSlice";
type Step = "phone" | "otp" | "signup";

export default function AuthModal() {

  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  console.log(otp);

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const loginResponse = await Login({ mobile_no: phoneNumber });

      if (loginResponse.status === 200) {
        console.log("OTP sent for login");
        setIsLogin(true);
        setCurrentStep("otp");
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      setIsLogin(false);
      setCurrentStep("signup");
      console.log("User not found, registering...");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent default form submission

    setIsLoading(true);

    try {
      if (isLogin) {
        const otpResponse = await VerifyLoginOTP({
          mobile_no: phoneNumber,
          otp,
        });

        if (otpResponse.status === 200) {
          console.log("Login successful:",otpResponse?.data?.access);
          setSession(otpResponse?.data?.access)
          const userdata = otpResponse?.data?.user
          setFirstName(userdata?.first_name)
          setLastName(userdata?.last_name)
          setEmail(userdata?.email)
          setPhoneNumber(userdata?.mobile_no)

          dispatch(setUser({firstName:userdata?.first_name, lastName:userdata?.last_name, email:userdata?.email, phone: phoneNumber}))
          setIsOpen(false);
        } else {
          console.log(
            "OTP verification failed. Trying sign-up verification..."
          );
        }
      }else{
        const signUpOtpResponse = await VerifySignUpOTP({
          mobile_no: phoneNumber,
          otp,
        });

        if (signUpOtpResponse.status === 200) {
          console.log("Signup OTP verified :",signUpOtpResponse.data);
          setSession(signUpOtpResponse?.data?.access)
          const userdata = signUpOtpResponse?.data?.user

          setFirstName(userdata?.first_name)
          setLastName(userdata?.last_name)
          setEmail(userdata?.email)
          setPhoneNumber(userdata?.mobile_no)

          dispatch(setUser({firstName:userdata?.first_name, lastName:userdata?.last_name, email:userdata?.email, phone: phoneNumber}))
          setCurrentStep("signup");
        } else {
          console.error("Invalid OTP");
        }
      }
          
        
      
    } catch (error) {
      console.error("Error during OTP verification:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const registerResponse = await Register({
        first_name: firstName,
        last_name: lastName,
        email,
        mobile_no: phoneNumber,
      });

      if (registerResponse.status === 200) {
        console.log("Signup successful");
        setIsLogin(false);
        setCurrentStep("otp");
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case "phone":
        return (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
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
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending OTP..." : "Continue"}
            </Button>
          </form>
        );
      case "otp":
        return (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp">One-Time Password</Label>
              <Input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                placeholder="Enter OTP"
                type="text"
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full">
              {isLoading ? "Verifying..." : "Verify OTP"}
            </Button>
          </form>
        );
      case "signup":
        return (
          <form onSubmit={handleSignUpSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
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
                required
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
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing Up..." : "Complete Sign Up"}
            </Button>
            {/* <p className="text-sm text-center mt-2">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setCurrentStep("phone")}
              >
                Login
              </span>
            </p> */}
          </form>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild >
        <Button
          variant="outline"
          className="bg-gradient-to-r from-[#43248A] to-[#9941F2] text-white rounded-full hover:bg-[#8119aa] hover:text-purple-200 text-xs "
        >
          Login / Sign Up
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {currentStep === "phone" && "Login With Phone Number"}
            {currentStep === "otp" && "Enter OTP"}
            {currentStep === "signup" && "Complete Sign Up"}
          </DialogTitle>
        </DialogHeader>
        {renderStep()}
      </DialogContent>
    </Dialog>
  );
}
