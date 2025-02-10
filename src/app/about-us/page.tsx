import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <>
     <div className="">
    <h1 className="text-5xl mt-12 text-center font-bold text-[#2E0C7D]">
      Moments of Magic and Meaning with Yahayy
    </h1>
    <p className="text-justify mx-auto md:w-[60%] mt-5">
      Yahayy.com is a gifting platform dedicated to transforming the way
      people express appreciation, celebrate milestones, and create
      meaningful connections. Designed to serve both individual consumers
      and corporate clients, Yahayy.com specializes in curating personalized
      gifting solutions that leave a lasting impression.
    </p>
    <div className="my-10">
    {/* <img
      src={hero}
      alt="about-us-hero-image"
      className="mx-auto mt-10 md:w-[60%] "
    />
    <img
      src={info}
      alt="information about yahayy"
      className="mx-auto mt-4 md:w-[60%] "
    /> */}
    </div>
    
  </div>
  <div>
    <h2 className="text-4xl mt-10  text-center font-bold">Our Mission</h2>
    <p className="text-justify mx-auto md:w-[60%] mt-5">
      At Yahayy.com, our mission is to redefine gifting by creating moments
      of magic and meaning. We aim to bring thoughtfulness and innovation to
      every gift, whether it's a gesture for a loved one or a strategy to
      strengthen corporate bonds.
    </p>
  </div>
  <div>
    <h2 className="text-4xl mt-10 text-center font-bold">
      Our Unique Offerings
    </h2>
    <div className="flex flex-col justify-center flex-wrap gap-3 mt-5 mx-auto md:w-[60%]">
      <div className="md:w-[33rem] mx-auto">
        <h3 className="bg-purple-300 p-3 rounded-t-lg">For Individuals</h3>
        <ul className="list-inside">
          <li className="bg-purple-200 p-3">
            1.Customizable gift cards with seamless API integration.
          </li>
          <li className="bg-purple-200 p-3">
            2.Bespoke gifts crafted by expert designers.
          </li>
          <li className="bg-purple-200 p-3 rounded-b-lg">
            3.Curated experiences and immersive activities.
          </li>
        </ul>
      </div>
      <div className="md:w-[33rem] mx-auto">
        <h3 className="bg-purple-400 p-3 rounded-t-lg">For Businesses</h3>
        <ul className="list-inside">
          <li className="bg-purple-200 p-3">
            1.Enhance brand relationships.
          </li>
          <li className="bg-purple-200 p-3 rounded-b-lg">
            2.Foster loyalty and commemorate achievements at scale.
          </li>
        </ul>
      </div>
      <div className="md:w-[33rem] mx-auto">
        <h3 className="bg-purple-500 p-3 rounded-t-lg">Other Features</h3>
        <ul className="list-inside">
          <li className="bg-purple-200 p-3">
            1.Mastery and mobile games for engagement.
          </li>
          <li className="bg-purple-200 p-3 rounded-b-lg">
            2.Options tailored to diverse tastes and occasions.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div>
    <h2 className="text-4xl mt-10 text-center font-bold">
      Why Yahayy.com?
    </h2>
    <p className="text-justify mx-auto md:w-[60%] mt-5">
      We understand that every gift tells a story. Our versatile range of
      options ensures that every moment, big or small, is celebrated in a
      meaningful way. Whether you're an individual looking for the perfect
      gift or a business aiming to make an impact, Yahayy.com is your
      trusted partner.
    </p>
    <p className="text-justify mx-auto md:w-[60%] my-5 mb-20">
      We specialize in helping businesses enhance brand relationships,
      foster loyalty, and commemorate achievements at scale. Yahayy.com is
      here to make your corporate gifting seamless, strategic, and
      memorable.
    </p>
   
  </div>
    </>
   
  )
}