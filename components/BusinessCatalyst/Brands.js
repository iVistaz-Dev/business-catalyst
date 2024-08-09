"use client"

import { brands } from "@/utils/data"
import React from "react"

export default function Brands() {
  return (
    <div className="p-6">
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-3xl text-center">Our Brand Associates</h2>
        <img
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/arrow.png"
          className="mt-6"
        />
      </div>
      {brands.map((item, index) => (
        <div
          className="border-cms-secondary-green border rounded-lg w-9/12 mx-auto relative mt-20"
          key={index}
        >
          <div className="flex justify-center items-center lg:-top-[165px] absolute inset-0 -top-[475px]">
            <img src={item.banner} width={240} height={240} />
          </div>
          <div className="flex gap-2 py-[60px] flex-col lg:flex-row">
            {item.partners.map((image, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-4 mx-auto"
                data-aos="fade-right"
              >
                <img src={image.icons} width={150} height={150} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
