"use client"

import React, { useRef } from "react"
import BusinessContact from "@/components/BusinessCatalyst/BusinessContact"
import Footer from "@/components/BusinessCatalyst/Footer"
import Header from "@/components/BusinessCatalyst/Header"

export default function page() {
  const section1Ref = useRef(null)
  const scrollToSection1 = () => {
    section1Ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Header onClick={scrollToSection1} />
      <BusinessContact />
      <Footer />
    </>
  )
}
