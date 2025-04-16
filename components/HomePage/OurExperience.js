"use client"
import React from "react"
import { experience } from "../../utils/data"
import CountUp from "react-countup"

export default function OurExperience() {
  return (
    <div className="bg-cms-primary-green p-6">
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="text-2xl md:text-3xl text-white">Our Experience</h2>
        <img
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/white-arrow.png"
          className="mt-4"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
          <img
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/Experience.png"
            className="w-full h-auto max-w-full"
            data-aos="fade-right"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg sm:text-xl md:text-2xl">
            {experience.map((item, index) => (
              <div
                className="flex flex-col items-center h-auto p-2"
                key={index}
                data-aos="fade-up"
              >
                <CountUp
                  end={item.count}
                  suffix="+"
                  className="text-3xl md:text-4xl text-white"
                />
                <hr className="bg-cms-primary h-[1.2px] border-0 my-2 w-16 sm:w-24 md:w-32" />
                <p className="text-lg sm:text-xl md:text-2xl text-white text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
