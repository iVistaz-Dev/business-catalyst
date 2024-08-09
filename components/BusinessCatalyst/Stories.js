"use client"

import { stories } from "@/utils/data"
import React, { useRef } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const Stories = React.forwardRef((props, ref) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <div className="p-6 bg-[#E0FAF5]" ref={ref}>
      <div className="flex flex-col items-center mb-20 mt-10 text-center">
        <h2 className="text-2xl md:text-3xl">Success Stories</h2>
        <img
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/arrow.png"
          className="mt-4"
        />
      </div>
      {/* <div className="flex flex-col md:flex-row gap-4 mx-auto justify-center"> */}
      <div>
        <Carousel
          responsive={responsive}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
          //   customTransition="all .5"
          //   dotListClass="border-red-500 border"
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
  )
})

export default Stories
