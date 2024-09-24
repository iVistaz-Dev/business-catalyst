"use clients"

import React, { useEffect } from "react"
import Link from "next/link"
import Script from "next/script"
import { envelope, phone } from "@/utils/icon"

export default function Footer() {
  useEffect(() => {
    // Handle form submission event when it's triggered
    const handleFormSent = (event) => {
      if (event.detail.contactFormId == "10377") {
        window.gtag("event", "conversion", {
          send_to: "AW-16667385703/NDw2CKjAvtMZEOe-0Is-",
        })
      }
    }

    // Attach the event listener to handle form submissions
    document.addEventListener("wpcf7mailsent", handleFormSent, false)

    // Handle page load event
    const handlePageLoad = () => {
      if (window.location.pathname === "/") {
        window.gtag("event", "conversion", {
          send_to: "AW-16667385703/xLbaCKSflcoZEOe-0Is-",
        })
      }
    }

    // Attach the load event listener
    window.addEventListener("load", handlePageLoad)

    // Cleanup listeners on unmount
    return () => {
      document.removeEventListener("wpcf7mailsent", handleFormSent)
      window.removeEventListener("load", handlePageLoad)
    }
  }, [])

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

      {/* Google Tag Manager Scripts */}
      <Script
        id="gtag-init"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener(
            "wpcf7mailsent",
            function (event) {
              if ("10377" == event.detail.contactFormId) {
                gtag("event", "conversion", {
                  send_to: "AW-16667385703/NDw2CKjAvtMZEOe-0Is-",
                });
              }
            },
            false,
          );
        `,
        }}
      />
      <Script
        id="gtag-page-load"
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener("load", function () {
            if (window.location.pathname == "/") {
              gtag("event", "conversion", {
                send_to: "AW-16667385703/xLbaCKSflcoZEOe-0Is-",
              });
            }
          });
        `,
        }}
      />
    </div>
  )
}
