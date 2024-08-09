import Contact from "@/utils/contact"
import React from "react"

export default function BusinessContact() {
  return (
    <div className="">
      <img
        src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/BC-Banner-01.jpg"
        className="w-full"
      />

      <div className="bg-[#E1F8F4]">
        <div className="p-10 text-center flex flex-col justify-center items-center gap-4">
          <h2 className="text-3xl text-center">
            To avail our services, please fill the form below
          </h2>
          <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/arrow.png" />
        </div>
        <Contact />
      </div>
    </div>
  )
}
