import type { Metadata } from "next"
import { getAllBrands } from "@/api/ApiService"
import BrandList from "./BrandList"

export const metadata: Metadata = {
  title: "All Brands | Gift Cards",
  description: "Browse our selection of gift cards from various brands.",
}

// This forces Next.js to statically generate this page
export const dynamic = "force-static"

// This is the App Router equivalent of getStaticProps
async function getBrandsData() {
  const brandsData = await getAllBrands()
  return {
    props: {
      brands: brandsData?.data?.data || []
    }
  }
}

export default async function BrandsPage() {
  const { props } = await getBrandsData()

  return (
    <main className="container mx-auto px-12 py-8">
      <h1 className="text-3xl font-bold mb-6">All Brands</h1>
      <BrandList initialBrands={props.brands} />
    </main>
  )
}