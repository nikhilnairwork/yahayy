import HomeCarousel from "@/Component/HomeCarousel"
import GiftCardSection from "@/Component/GiftCardSection"
import { getHomeData } from "@/api/ApiService"
import HomeOffer from "@/Component/HomeOffer"
import Link from "next/link"
import Head from "next/head"

type HomeData = {
  all_brands: Array<{}>
  newly_added: Array<{}>
  popular: Array<{}>
  top_discounts: Array<{}>
}

// Force static rendering
export const dynamic = "force-static"




export default async function Home() {
  // Use cached data from build time
  const response = await getHomeData()
  const homeData = response.data.data as HomeData
  const { all_brands, newly_added, popular, top_discounts } = homeData

  return (
    <>
        <Head>
     
        <title>Yahayy</title>
        <meta name="keywords" content="online gifts, gifts for family, gifts for friends, gifts for colleagues, birthday gifts, special occasion gifts"/>
        <meta name="description" content="Find the perfect online gifts for your loved ones, family, friends, colleagues, and more. Shop unique presents for all occasions."/>
        <meta name="author" content="yahayy.com" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Yahayy" />
        <meta property="og:description" content="Find the perfect online gifts for your loved ones, family, friends, colleagues, and more. Shop unique presents for all occasions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yahayy.com/" />
        <meta property="og:image" content="https://www.yahayy.com/assets/mob-logo-CoEb6Vu6.webp" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gift Cards & Discounts | Home" />
        <meta name="twitter:description" content="Find the best offers on gift cards and save on your purchases." />
        <meta name="twitter:image" content="https://www.yahayy.com/assets/mob-logo-CoEb6Vu6.webp" />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.yahayy.com/" />
      </Head>

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

