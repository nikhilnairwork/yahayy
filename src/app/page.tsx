import HomeCarousel from "@/Component/HomeCarousel"
import GiftCardSection from "@/Component/GiftCardSection"
import { getHomeData } from "@/api/ApiService"
import HomeOffer from "@/Component/HomeOffer"
import Link from "next/link"

type HomeData = {
  all_brands: Array<{}>
  newly_added: Array<{}>
  popular: Array<{}>
  top_discounts: Array<{}>
}

// Force static rendering
export const dynamic = "force-static"

// This function generates the static data at build time
export async function generateStaticParams() {
  const homeData = await getHomeData()
  return {
    props: {
      homeData: homeData.data.data as HomeData,
    },
  }
}


export default async function Home() {
  // Use cached data from build time
  const response = await getHomeData()
  const homeData = response.data.data as HomeData
  const { all_brands, newly_added, popular, top_discounts } = homeData

  return (
    <>
      <div className="px-[2.68%] lg:px-[13.68%]">
        <HomeCarousel />
      </div>
      <div className="px-[2.68%] lg:px-[11.68%] my-5">
        <GiftCardSection data={popular} heading={"Top Offers on Popular Gift Cards."} />
      </div>
      <div className="px-[2.68%] lg:px-[13.68%] my-5">
         <HomeOffer/>
      </div>
      <div className="px-[2.68%] lg:px-[11.68%] bg-gradient-to-t from-[#2E0C7D] to-[#0E0E2C] py-3 my-5">
        <GiftCardSection data={newly_added} heading={"Newly added Gift cards."} text_color="text-white" />
      </div>
      <div className="px-[2.68%] lg:px-[11.68%]">
        <GiftCardSection data={top_discounts} heading={"Top Discounts on Gift Cards."}  />
      </div>
      <div className="px-[2.68%] lg:px-[11.68%]">
        <GiftCardSection data={all_brands} heading={"All brands"}  />
      </div>
      <div className="flex justify-center py-3">
        <Link href={'/brands'}>
      <button className="p-2 bg-purple-700 text-white rounded-full ">
        Explore All
      </button>
      </Link>
      </div>
     

    </>
  )
}

