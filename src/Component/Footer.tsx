// components/Footer.js
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly border-t pt-5 flex-wrap gap-20 items-start text-gray-800 ">
        <div>
          {/* Uncomment and replace the path for logos if required */}
          <Image
            className="w-32"
            src="/logo.svg"
     
            alt="Logo"
            width={550} // Specify width
            height={150} // Specify height
          />
          <h3 className="text-sm py-3">
            <Image
              className="w-20"
              src="/logo2.webp"
          
              alt="Logo"
              width={150} // Specify width
              height={50} // Specify height
            />
            <p className="text-[10px]">
              Yahayy.com is the brand of EEXCITED Digital Solutions LLP.
            </p>
          </h3>
          <h3 className="uppercase font-bold text-gray-600 pt-3">Contact us</h3>
          <button className="bg-gradient-to-r from-[#43248A] to-[#9941F2] p-2 rounded-md my-2 cursor-pointer text-white">
            Get In Touch
          </button>
        </div>
        <div>
          <div className="flex gap-x-24 flex-wrap">
            <div>
              <h3 className="uppercase font-bold text-gray-600">
                Popular categories
              </h3>
              <ul className="py-2.5">
                <li className="cursor-pointer"> <Link href={'/categories/New%20year%20Gift%20Card/23'}>New Year</Link></li>
                <li className="cursor-pointer"> <Link href={'/categories/Grocery%20Gift%20Card/4'}>Groceries</Link></li>
                <li className="cursor-pointer"> <Link href={'/categories/Entertainment%20Gift%20Card/9'}>Entertainment</Link></li>
                <li className="cursor-pointer"> <Link href={'/categories/Electronics%20Gift%20Card/11'}>Electronics</Link></li>
                <li className="cursor-pointer"> <Link href={'/categories/Fashion%20&%20Lifestyle%20Gift%20Card/3'}>Fashion</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="uppercase font-bold text-gray-600">
                Popular gift cards
              </h3>
              <ul className="py-2.5">
                <li>
                  <Link href="/amazon-pay-e-gift-card">
                    Amazon pay e-gift card
                  </Link>
                </li>
                <li>
                  <Link href="/flipkart-e-gift-card">
                    Flipkart e-gift card
                  </Link>
                </li>
                <li>
                  <Link href="/ajio-e-gift-card">
                    AJIO E-Gift Card
                  </Link>
                </li>
                <li>
                  <Link href="/bewakoof-brands-e-gift-card">
                    Bewakoof Brands E-Gift Card
                  </Link>
                </li>
                <li>
                  <Link href="/lifestyle-e-gift-card-b2c">
                    Lifestyle E-Gift Card-B2C
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-x-24 mt-5 flex-wrap">
            <div>
              <h3 className="uppercase font-bold text-gray-600">Quick Links</h3>
              <ul className="py-2.5">
                <li>
                  <Link href="/privacy-policy">Privacy policy</Link>
                </li>
                <li>
                  <Link href="/terms-condition">Terms & conditions</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="uppercase font-bold text-gray-600">Company</h3>
              <ul className="py-2.5">
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 py-5">
        Copyright © 2024. EEXCITED Digital Solutions LLP. All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;
