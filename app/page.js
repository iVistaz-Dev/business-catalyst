"use client"

import React, { useRef, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import Header from "@/components/BusinessCatalyst/Header"
import Footer from "@/components/BusinessCatalyst/Footer"
import BusinessesAchieve from "@/components/BusinessCatalyst/BusinessesAchieve"
import OurExperience from "@/components/BusinessCatalyst/OurExperience"
import Brands from "@/components/BusinessCatalyst/Brands"
import Stories from "@/components/BusinessCatalyst/Stories"
import Cta from "@/components/BusinessCatalyst/Cta"

export default function page() {
  useEffect(() => {
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease",
    })
  })

  const section1Ref = useRef(null)
  const scrollToSection1 = () => {
    section1Ref.current.scrollIntoView({ behavior: "smooth" })
  }
  // const title =
  //   "Business Consultation for MSMEs | Facilitating growth for MSMEs"
  // const desc =
  //   "Through Business Catalyst, we partner with MSMEs to address their challenges regarding growth and profitability by following a 4A delivery model of Advisory, Adoption, Access and Adherance"
  // const image =
  //   "https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/business-catalysts-banner.png"
  return (
    <>
      <Header onClick={scrollToSection1} data-aos="fade-up" />
      <BusinessesAchieve data-aos="fade-up" />
      <OurExperience />
      <Brands />
      <Stories ref={section1Ref} />
      <Cta />
      <Footer />
    </>
  )
}
