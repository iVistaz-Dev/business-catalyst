"use client"

import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import OurExperience from "@/components/HomePage/OurExperience"
import OurBrands from "@/components/HomePage/OurBrands"
import HelpingBusinesses from "@/components/HomePage/HelpingBusinesses"
import SuccessStories from "@/components/HomePage/SuccessStories"
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      delay: 0,
      duration: 400,
      easing: "ease",
    })
  }, [])

  useEffect(() => {
    // Check if we have the scrollTo query param and the router is ready
    if (router.isReady && router.query.scrollTo === "successStories") {
      const section = document.getElementById("successStories")
      if (section) {
        // Scroll to the section with the id "successStories"
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        })
        // Clean up the query param after navigating
        router.replace("/", undefined, { shallow: true })
      }
    }
  }, [router.query, router.isReady])

  return (
    <>
      <Header />
      <HelpingBusinesses />
      <OurExperience />
      <OurBrands />
      <SuccessStories id="successStories" />
      <Footer />
    </>
  )
}
