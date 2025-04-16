"use client"

import { stories } from "@/utils/data"
import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { usePathname } from "next/navigation"

const SuccessStories = () => {
  const pathname = usePathname()

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <>
      <div id="successStories" className="p-6 bg-[#E0FAF5]">
        <div className="flex flex-col items-center mb-20 mt-10 text-center">
          <h2 className="text-2xl md:text-3xl">Success Stories</h2>
          <img
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/arrow.png"
            className="mt-4"
          />
        </div>
        <div>
          <Carousel
            responsive={responsive}
            showDots={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            className="h-[80vh]"
          >
            {stories.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg w-[95%]  flex flex-col justify-center items-start relative"
              >
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/quotes.png"
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                />
                <p className="text-lg md:text-xl mt-4 h-[40vh] overflow-auto">
                  {item.story}
                </p>
                <img src={item.image} className="py-4" />
                <p className="text-[#7F3F97] font-semibold">{item.name}</p>
                <p className="h-[50px]">{item.designation}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {pathname === "/" && (
        <div
          className="p-8 md:p-12 lg:p-14 w-full md:w-10/12 lg:w-7/12 text-lg md:text-xl lg:text-2xl mx-auto text-center"
          data-aos="flip-left"
        >
          CMS collaborates with partners to create meaningful social impact,
          ensuring sustainable results through innovative development solutions
          and strategic investments.
        </div>
      )}
    </>
  )
}

export default SuccessStories
