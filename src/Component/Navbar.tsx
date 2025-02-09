import Image from "next/image";
import Link from "next/link";
import React from "react";
import CategoryDropDown from "./NavComponent/CategoryDropDown";
import Searchbar from "./NavComponent/Searchbar";
import AuthModal from "./NavComponent/AuthModal";
import Profile from "./NavComponent/Profile";

type Props = {};

export default function Navbar({}: Props) {
  return (
    
    <div className="flex justify-evenly mb-3 sm:mb-0 py-2.5 sm:py-5 sticky z-50 lg:justify-center backdrop-blur-lg items-center bg-gradient-to-r from-indigo-300/50 via-purple-200/20 to-purple-300/30 rounded-b-3xl  md:bg-gradient-to-r md:from-white/65 md:via-white/65 to-purple-300lg:gap-4 xl:gap-16 ">
      <div>
        <Link href={"/"}>
          <Image
            aria-hidden
            src="/logo.svg"
            alt="logo"
            className="hidden md:block w-20 md:w-40"
            width={16}
            height={16}
          />
        </Link>
        <Link href={"/"}>
          <Image
            aria-hidden
            src="/mob-logo.webp"
            alt="logo"
            className="block md:hidden w-6 "
            width={10}
            height={10}
          />
        </Link>
      </div>
      <div className="nav hidden lg:block">
        <ul className="flex text-[13px] xl:text-base justify-between items-center gap-6 font-medium">
          <li>
            <Link href={"/brands"} className="text-zinc-800">
              All brands
            </Link>
          </li>
          <li>
            <CategoryDropDown/>
          </li>
          <li>
          <Link href={"/brands"} className="text-zinc-800">
              For business
            </Link>
          </li>
          <li>
          <Link href={"/brands"} className="text-zinc-800">
              Giftcard balance 
            </Link>
          </li>
          
        </ul>

      </div>
    
          <Searchbar type="text"
            DivclassName="outline-none relative flex items-center p-1 w-48 sm:w-fit lg:px-4 bg-white outline-none  rounded-full md:border-[#9941F2] border-2"
            placeholder="Search for brands here"
            className="w-[80%] sm:w-96 lg:w-48 text-xs md:text-base bg-none rounded-full outline-none border-none p-0.5"
             />
             
             <Profile/>
     
    </div>
  );
}
