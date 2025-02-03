import HomeCarousel from "@/Component/HomeCarousel"
import GiftCardSection from "@/Component/GiftCardSection"
import { getHomeData } from "@/api/ApiService"

type HomeData = {
  all_brands: Array<{}>
  newly_added: Array<{}>
  popular: Array<{}>
  top_discounts: Array<{}>
}

// Force static rendering
export const dynamic = "force-static"
export const revalidate = false
export const fetchCache = "force-cache"
export const preferredRegion = "edge"

// This function generates the static data at build time
export async function generateStaticParams() {
  return [{}]
}

// Generate static props
export async function generateMetadata() {
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
      <div className="px-[2.68%] lg:px-[13.68%]">
        <GiftCardSection data={popular} heading={"Top Offers on Popular Gift Cards."} />
      </div>
      
    </>
  )
}

