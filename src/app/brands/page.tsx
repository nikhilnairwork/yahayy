import type { Metadata } from "next"
import { getAllBrands } from "@/api/ApiService"
import BrandList from "./BrandList"

export const metadata: Metadata = {
  title: "All Brands | Gift Cards",
  description: "Browse our selection of gift cards from various brands.",
}

// This ensures the page is statically generated at build time
export const dynamic = "force-static"

// This function is used to generate the static props at build time
async function getBrandsData() {
  const brandsData = await getAllBrands()
  return brandsData.data.data
}

export default async function BrandsPage() {
  // Fetch data at build time
  const brands = await getBrandsData()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-zinc-600">All Brands</h1>
      <BrandList initialBrands={brands} />
    </main>
  )
}

// This function is not strictly necessary for SSG in this case,
// but it's good practice to include it for consistency and future-proofing
export async function generateStaticParams() {
  return [{}] // This page has no dynamic params, so we return an empty object
}

