"use client";

import { type ChangeEvent, useState, useRef, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { globalSearch } from "@/api/ApiService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

type SearchItem = {
  name: string;
  discount: number;
  image: string;
  url: string;
};

type Props = {
  type?: string;
  placeholder?: string;
  className?: string;
  DivclassName?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  img?: string;
};

export default function Searchbar({
  type = "text",
  placeholder = "Search...",
  onChange,
  className,
  value = "",
  DivclassName,
  img,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(value);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const debounceTimeout = useRef<number | null>(null);
  const router = useRouter();

  const handleItemClick = (url: string) => {
    const absoluteUrl = url.startsWith("/") ? url : `/${url}`;
    router.push(absoluteUrl);
  };

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    try {
      const response = await globalSearch(query);
      const results = response?.data?.data as SearchItem[];
      setSearchResults(results || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (onChange) onChange(e);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = window.setTimeout(() => handleSearch(newQuery), 200);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 200);
  };

  const renderResultItem = (item: SearchItem) => (
    <Link key={item.url} href={`/${item.url}`}>
      <div className="text-sm font-medium w-full p-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} width={40} height={40} className="rounded-full" />
        <span>{item.name}</span>
        {item.discount > 0 && <span className="text-green-600">{item.discount}% off</span>}
      </div>
    </Link>
  );

  return (
    <div ref={wrapperRef} className={`relative ${DivclassName}`}>
      {img && <Image src={img} alt="" width={20} height={20} className="px-1" />}
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
      />
      {isFocused && (searchResults.length > 0 || loading) && (
        <div className="absolute bg-white p-3 shadow-2xl rounded-lg w-full overflow-y-auto  max-h-80 top-10 right-0 mt-1 z-10">
          {loading ? (
            [...Array(5)].map((_, index) => (
              <div key={index} className="text-sm font-medium w-full p-2 flex items-center gap-2">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="w-20 h-4" />
                <Skeleton className="w-16 h-4" />
              </div>
            ))
          ) : searchResults.length > 0 ? (
            searchResults.slice(0, 10).map(renderResultItem)
          ) : (
            <div className="text-sm font-medium text-gray-500 p-2">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}
