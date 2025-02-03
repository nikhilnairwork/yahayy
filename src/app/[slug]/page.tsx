import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBrands, getGiftCardDetail } from "@/api/ApiService";
import BrandDetails from "./BrandDetails";
import { BrandDetails as BrandDetailsType } from "@/types/brand";
import Denomination from "@/Component/Denomination";
import BrandContent from "./BrandContent"

interface Props {
  params: Promise<{ slug: string }>
}

export const dynamic = "force-static"

// Removed `BrandDetailsProps` since it was redundant
export async function generateStaticParams() {
  try {
    const brandsData = await getAllBrands()

    if (!brandsData || !brandsData.data) {
      throw new Error("Failed to fetch brands data")
    }

    return brandsData.data.data.map((brand: BrandDetailsType) => ({
      slug: brand.url,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const brandDetails = await getGiftCardDetail(slug)
  
  if (!brandDetails) {
    return {
      title: "Brand Not Found",
    };
  }

  return {
    title: `${brandDetails.data.data.name} Gift Card | Buy Now`,
    description: `Purchase ${brandDetails.data.data.name} gift cards. ${
      brandDetails.data.data.discount !== "0.00"
        ? `Get ${brandDetails.data.data.discount}% off!`
        : "Great deals available."
    } ${brandDetails.data.data.description}`,
    openGraph: {
      title: `${brandDetails.data.data.name} Gift Card`,
      description: `${brandDetails.data.data.description}...`,
      images: [{ url: brandDetails.data.data.image }],
    },
  };
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params
  const brandDetails = await getGiftCardDetail(slug)

  if (!brandDetails) {
    notFound();
  }

  return (
    <main className=" mx-auto px-4 py-8 flex items-start justify-center gap-10">
      <div className="w-[30%]">
      <BrandDetails brand={brandDetails.data.data} />
      <BrandContent desc={brandDetails.data.data.desc} terms={brandDetails.data.data.t_c_content}/>
      </div>
      <div  className="gap-5 lg:sticky lg:flex lg:flex-col lg:top-[85px]">

      <Denomination denomination={brandDetails.data.data.checkout.denominations} title={brandDetails.data.data.name}/>
      </div>
    </main>
  );
}
