import { notFound } from "next/navigation";
import { getAllCategory, getCategoryById } from "@/api/ApiService";
import Image from "next/image";
import Link from "next/link";


type Props = {
  params: Promise<{
    category: string;
    id: string;
  }>;
};

export const dynamic = "force-static";

export async function generateStaticParams() {
  const categories = await getAllCategory();
  return categories.data.data.map((item: any) => ({
    category: item[0],
    id: item[1].toString(),
  }));
}

async function getCategoryData(id: string) {
  try {
    const categoryData = await getCategoryById(id);
    if (!categoryData || !categoryData.data || !categoryData.data.data) {
      return null;
    }
    return categoryData.data.data;
  } catch (error) {
    console.error("Error fetching category:", error);
    return null;
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category, id } = await params;
  const categoryData = await getCategoryData(id);

  if (!categoryData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg p-6">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-4 mt-10 text-center">
          Enjoy {decodeURIComponent(category)}{" "}
          <span className="text-purple-400" aria-label="Gift cards">
            🎁
          </span>
        </h1>
        <p className="text-sm text-gray-700 px-2 mb-4 text-center">
          Perfect for any occasion <span aria-label="Celebration">🎉</span>.
          Shop now and share the joy!
        </p>
        <div className="flex flex-col sm:flex-row px-5 py-5 flex-wrap justify-center lg:gap-5 xl:gap-7 rounded-lg">
          {categoryData.map((brand: any) => (
            <Link href={`/${brand.url}`} key={brand.url} className="block">
              <div className="min-w-[90px] mx-2 :mx-0 md:w-[110px] lg:min-w-[150px]">
                <div className="w-[100px] sm:w-full h-auto">
                  <Image
                    src={brand.image || "/placeholder.svg"}
                    alt={brand.name}
                    width={300}
                    height={200}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xs text-zinc-600 font-semibold mb-2 text-start">
                    {brand.name}
                  </h2>
                  {brand.discount !== "0.00" ? (
                    <p className="text-sm text-green-600 font-semibold">
                      {brand.discount}% Off
                    </p>
                  ) : (
                    <p className="text-sm text-green-600 flex items-end font-semibold">
                      Buy Now
                    </p>
                  )}
                  {!brand.is_stock && (
                    <p className="text-sm text-red-600 font-semibold">
                      Out of Stock
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
