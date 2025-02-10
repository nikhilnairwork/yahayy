"use client"
import React from 'react'
import { useState } from "react";
import { Input } from "../components/ui/input"; 
import { ForBusiness } from "@/api/ApiService";
type Props = {}

export default function BusinessForm({}: Props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [successMessage, setSuccessMessage] = useState("");
      const [errorMessage, setErrorMessage] = useState("");
    
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");
    
        // Simulate form submission (you can replace this with an API call)
        try {
          const response = await ForBusiness(formData);
          if(response.status == 200){
            // showNotification( "success","Thank you! Your message has been sent." )
            setSuccessMessage("Thank you! Your message has been sent.");
            setFormData({
              name: "",
              email: "",
              mobile: "",
              message: "",
         
            });
          }else {
            throw new Error('Failed to submit the form. Please try again.');
          }
          
        } catch (error) {
    
          setErrorMessage('An unexpected error occurred.');
        }finally{
          setIsSubmitting(false)
        }
      };
  return (
    <div className=" mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-[#0E0E2C] mb-2">Get in touch</h2>

      {/* Display Success Message */}
      {successMessage && (
        <div className="text-green-600 text-center "></div>
      )}

      {/* Display Error Message */}
      {errorMessage && (
        <div className="text-red-600 text-center "></div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
           Buisness Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="mt-1 p-3 w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="mt-1 p-3 w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile No
          </label>
          <Input
            type="number"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            className="mt-1 p-3 w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

      

        {/* Message Textarea */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            maxLength={350}
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="mt-1 p-3 w-full border-gray-300 border rounded-md shadow-sm"
            rows={4}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full  bg-gradient-to-r from-[#43248A] to-[#9941F2] text-white p-3 rounded-md "
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  )
}