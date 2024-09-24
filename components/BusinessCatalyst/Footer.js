import React from "react"

import Link from "next/link"
import { envelope, phone } from "@/utils/icon"

export default function Footer() {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="flex flex-col items-center p-4 md:p-6">
        <h3 className="text-xl md:text-3xl font-normal mb-4 text-center">
          For more information, contact
        </h3>
        <img
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/arrow.png"
          alt="Arrow"
          className="mb-6"
        />
        <div className="flex flex-col md:flex-row gap-4 text-lg md:text-xl w-10/12 mx-auto justify-evenly">
          <div className="flex flex-col items-center">
            <Link className="flex gap-2 items-center" href="tel:+91-9945972835">
              {phone} +91-9945972835
            </Link>
            <hr className="bg-cms-primary-green h-1 my-4 w-3/4 md:w-full" />
          </div>
          <div className="flex flex-col items-center">
            <Link
              className="flex gap-2 items-center"
              href="mailto:business.catalyst@catalysts.org"
            >
              {envelope} business.catalyst@catalysts.org
            </Link>
            <hr className="bg-cms-primary-green h-1 my-4 w-3/4 md:w-full" />
          </div>
          {/* <div className="flex flex-col items-center">
            <p className="flex gap-2 items-center">
              {globe} www.cms.org.in/business-catalyst/
            </p>
            <hr className="bg-cms-primary-green h-1 my-4 w-3/4 md:w-full" />
          </div> */}
        </div>
      </div>

      <div className="bg-[#7F3F97] p-4">
        <div className="text-center mb-4 w-10/12 mx-auto">
          <p className="text-lg md:text-xl text-white text-start">Address</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 w-10/12 mx-auto">
          <div className="p-4 text-white">
            <p className="text-lg md:text-xl font-semibold">Bengaluru:</p>
            <hr className="py-1 my-2" />
            <p>
              #25, 1st Main, AECS Layout,&nbsp;
              <br className="lg:hidden block" />
              Ashwath Nagar, Bengaluru, 560094
            </p>
          </div>
          <div className="p-4 text-white">
            <p className="text-lg md:text-xl font-semibold">Delhi:</p>
            <hr className="py-1 my-2" />
            <p>
              A-10, Second Floor, Green Park, <br className="lg:hidden block" />
              New Delhi, 110016
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full text-center bg-[#713289] py-4">
        <p className="text-white ">
          &copy; 2024 Catalyst Management Services Pvt. Ltd.{" "}
          <br className="block md:hidden" /> All rights reserved.
        </p>
      </div>
    </div>
  )
}
