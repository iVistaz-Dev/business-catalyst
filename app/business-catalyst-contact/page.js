"use client"

import React, { useRef } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import ContactUs from "@/components/ContactUs/ContactUs"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SuccessStories from "@/components/HomePage/SuccessStories"

export default function page() {
  useEffect(() => {
    AOS.init({
      delay: 0,
      duration: 400,
      easing: "ease",
    })
  })

  const section1Ref = useRef(null)
  const scrollToSection1 = () => {
    section1Ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Header onClick={scrollToSection1} data-aos="fade-up" />
      <ContactUs />
      <Footer />
    </>
  )
}
