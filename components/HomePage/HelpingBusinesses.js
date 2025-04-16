import React from "react"
import Link from "next/link"
import { businesses, growthServices } from "@/utils/data"

export default function HelpingBusinesses() {
  return (
    <div className="pt-[68px] md:pt-20">
      <img
        src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/business-catalysts-banner.png"
        className="w-full "
        data-aos="zoom-in"
      />
      <div
        className="p-10 text-center flex flex-col justify-center items-center gap-4"
        data-aos="fade-up"
      >
        <h1 className="lg:text-5xl text-[#7E3F98] text-center text-3xl">
          Helping Businesses Achieve
          <br /> Growth and Profitability
        </h1>
        <h2 className="lg:text-3xl text-center text-2xl">
          Results We Aim to Achieve for Businesses
        </h2>
        <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/arrow.png" />
      </div>
      <div className="flex mx-auto lg:w-10/12 flex-col lg:flex-row">
        {businesses.map((item, index) => (
          <div
            className="text-center flex flex-col justify-center items-center gap-2 border-r border-[#E1F8F4] px-4 lg:w-[280px]"
            key={index}
            data-aos={item.action}
          >
            <img src={item.icons} className="h-200px" />
            <h2 className="text-xl text-center text-[#7E3F98] min-h-[60px]">
              {item.title}
            </h2>
            <p className="h-[140px]">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#E1F8F4]">
        <div className="flex flex-col items-center p-10">
          <h2 className="text-3xl text-center">Growth Services</h2>
          <img
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/arrow.png"
            className="mt-6"
          />
        </div>
        <div className="w-10/12 mx-auto gap-4">
          <div className="grid lg:grid-cols-2 gap-10">
            {growthServices.map((headline, index) => (
              <div key={index} data-aos="fade-right">
                <div className=" bg-[#7f3e96] flex items-center gap-4">
                  <div className="p-2 bg-[#a05bba]">
                    <img src={headline.icons} alt={headline.title} />
                  </div>
                  <div className="text-xl font-semibold text-white">
                    {headline.title}
                  </div>
                </div>
                <div className="bg-white p-4 min-h-[400px]">
                  <p className="mb-6">{headline.desc}</p>
                  {headline.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className="flex gap-4 p-2 py-2 items-center border-b border-gray-300 last:border-none"
                    >
                      <img
                        src={service.icon}
                        alt={service.serviceDesc}
                        width={45}
                        height={45}
                        className="p-1"
                      />
                      <p className="text-1xl">{service.serviceDesc}</p>
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link
            href="/business-catalyst-contact"
            className="py-2 bg-cms-primary p-4 text-xl rounded-lg text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
