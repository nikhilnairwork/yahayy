"use client"
import Link from "next/link"
import { ChevronDown } from "lucide-react"


import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


import { categories } from "@/constant"

export default function CategoryDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-[13px] xl:text-base flex items-center font-medium outline-none">
          Categories <ChevronDown className="ml-2 h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="lg:w-[700px]">
        
          <div className="flex  gap-1 p-3">
            <div className="w-full">
              <h4 className="text-base font-semibold px-2 mb-2">By Category</h4>
              {categories.slice(0, 19).map((category) => (
                <DropdownMenuItem key={category[1]} className="block text-[13px] w-fit rounded-full p-1 px-1.5 hover:!bg-purple-600 hover:!text-white" asChild>
                  <Link
                    href={`/categories/${category[0]}/${category[1]}`}
                    className="block text-[13px] w-fit rounded-full p-1 px-1.5 hover:bg-purple-600 hover:!text-white"
                  >
                    {category[0]}
                  </Link>
                </DropdownMenuItem>
              ))}
            </div>
            <div className="w-full ">
              <h3 className="text-base font-semibold px-2 mb-2">By Occasion</h3>
              {categories.slice(19, 34).map((category) => (
                <DropdownMenuItem key={category[1]} className="block text-[13px] w-fit rounded-full p-1 px-1.5 hover:!bg-purple-600 hover:!text-white" asChild>
                  <Link
                    href={`/categories/${category[0]}/${category[1]}`}
                    className="block text-[13px] w-fit rounded-full p-1 px-1.5 hover:bg-purple-600 hover:!text-white"
                  >
                    {category[0]}
                  </Link>
                </DropdownMenuItem>
              ))}
            </div>
            <div className="w-full ">
              <h3 className="text-base font-semibold px-2 mb-2">By Recipient</h3>
              {categories.slice(34, 43).map((category) => (
                <DropdownMenuItem key={category[1]} className="block text-[13px] w-fit rounded-full p-1 px-1.5 hover:!bg-purple-600 hover:!text-white" asChild>
                  <Link
                    href={`/categories/${category[0]}/${category[1]}`}
                    className="block text-[13px] w-fit rounded-full p-1 px-1.5 hover:!bg-purple-600 hover:!text-white"
                  >
                    {category[0]}
                  </Link>
                </DropdownMenuItem>
              ))}
            </div>
          </div>
      
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

