"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { CircleUser } from "lucide-react";
import AuthModal from "./AuthModal";
import { clearUser } from "@/lib/features/userSlice";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
export default function Profile() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const user = useSelector((state: RootState)=>state.user.firstName)

  return (
    <div>
      {isLoggedIn ? (
        <Popover>
          <PopoverTrigger>
            {" "}
          <div className="flex items-center justify-center gap-2 bg-purple-100 rounded-full p-1.5 px-2"> <CircleUser size={24} color="#6600ff" strokeWidth={1.75} /> Hi' {user}</div> 
          </PopoverTrigger>
          <PopoverContent className="w-32 text-left">
            <ul>
              <Link href={"/account"}>
                {" "}
                <li className="hover:bg-purple-600/30  p-1.5 rounded-md cursor-pointer">
                  My Profile
                </li>
              </Link>
              <hr />
              <li
                className="hover:bg-purple-600/30  p-1.5 rounded-md cursor-pointer"
                onClick={() => dispatch(clearUser())}
              >
                Logout
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        <AuthModal />
      )}
    </div>
  );
}
