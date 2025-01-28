import type { Metadata } from "next"
import { getAllBrands } from "@/api/ApiService"
import BrandList from "./BrandList"

export const metadata: Metadata = {
  title: "All Brands | Gift Cards",
  description: "Browse our selection of gift cards from various brands.",
}

export const dynamic = "force-static";

export default async function BrandsPage() {
  const brandsData = await getAllBrands()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-zinc-600">All Brands</h1>
      <BrandList initialBrands={brandsData.data.data} />
    </main>
  )
}
