import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBrands, getGiftCardDetail } from "@/api/ApiService";
import BrandDetails from "./BrandDetails";
import { BrandDetails as BrandDetailsType } from "@/types/brand";

interface Props {
  params: Promise<{ slug: string }>
}

export const dynamic = "force-static"

// Removed `BrandDetailsProps` since it was redundant
export async function generateStaticParams() {
  const brandsData = await getAllBrands();

  if (!brandsData || !brandsData.data) {
    throw new Error("Failed to fetch brands data");
  }

  return brandsData.data.data.map((brand: BrandDetailsType) => ({
    slug: brand.url,
  }));
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
    <main className="container mx-auto px-4 py-8">
      <BrandDetails brand={brandDetails.data.data} />
    </main>
  );
}
