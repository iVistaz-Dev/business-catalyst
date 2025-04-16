"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import NextSeo from "@/components/NextSeo/NextSeo"
import Header from "@/components/Header"

const Page = ({ params }) => {
  const [insightsData, setInsightsData] = useState([])

  const myUrl = params.slug

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://docs.cms.org.in/wp-json/wp/v2/seo-blog---bc?_embed&slug=${params.slug}`
        )
        console.log(response.data)

        const formattedData = response.data.map((item) => ({
          id: item.id,
          //imageUrl: item["acf"]["post_desktop_images"]["url"],
          //category: item.categories.includes(1) ? "Blog" : "Blog", // Adjust based on actual categories
          title: item.title.rendered,
          content: item.content.rendered,
          desc: item.content.rendered.replace(/<[^>]+>/g, ""), // Remove HTML tags
          metaTitle: item.acf.meta_title,
          metaDesc: item.acf.meta_description,
        }))

        console.log(formattedData)

        setInsightsData(formattedData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [params.slug])

  return (
    <>
      {insightsData.map((item) => {
        return (
          <div key={item.id}>
            <NextSeo
              title={item.metaTitle}
              description={item.metaDesc}
              path={myUrl}
              metaImage=""
            />

            <Header />

            <div className="p-10 bg-cms-primary h-[60vh] flex justify-center items-center">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-white"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </div>

            <div className="">
              <div className="p-10">
                <p
                  className="wp-hyperlink"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Page
