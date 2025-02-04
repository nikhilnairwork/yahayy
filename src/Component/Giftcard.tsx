import Image from "next/image";

type Props = {
    giftCard_img: string;
    title: string;
    discount?: string;
    textColor?: string;
    min?: string;
    max?: string;
  };
  
  function Giftcard({ giftCard_img, title, discount, textColor }: Props) {
    // Truncate function
    const truncateText = (text: string, maxLength: number) => {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
      }
      return text;
    };
  
    return (
      <div className="min-w-[80px] mx-2 :mx-0 md:w-[110px] lg:min-w-[150px]">
        {giftCard_img && (
  <Image 
    src={giftCard_img} 
    alt={title} 
    width={150} // Provide width
    height={100} // Provide height
    className="w-[90px] sm:w-full h-auto hover:scale-105"
  />
)}
        <div className="lg:px-2">
          <h3
            className={`text-[9.5px] md:text-[11px] lg:text-[12px] font-medium ${textColor} hidden md:block`}
            title={title}
            aria-label={title}
          >
            {truncateText(title, 28)}{" "}
            {/* Adjust 20 to your preferred character limit */}
          </h3>
          <h3
            className={`text-[10.5px] md:text-[11px] lg:text-[13.5px] font-medium ${textColor} md:hidden block`}
            title={title}
            aria-label={title}
          >
            {truncateText(title, 14)}{" "}
            {/* Adjust 20 to your preferred character limit */}
          </h3>
          {discount != "0.00" ? (
            <p className="text-[#388d13] text-[9.5px] lg:text-[18px]  font-bold">
              {discount}% <span className="font-bold">OFF</span>
            </p>
          ) : (
            <p className="text-[#388d13] text-[9.5px] lg:text-[18px] font-bold">
              Buy Now
            </p>
          )}
        </div>
      </div>
    );
  }
  
  export default Giftcard;
  