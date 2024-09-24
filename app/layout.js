import "@/styles/globals.css"
import Script from "next/script"

export const metadata = {
  title: "Business Consultation for MSMEs | Facilitating growth for MSMEs",
  description:
    "Through Business Catalyst, we partner with MSMEs to address their challenges regarding growth and profitability by following a 4A delivery model of Advisory, Adoption, Access and Adherance",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Business Consultation for MSMEs | Facilitating growth for MSMEs
        </title>
        <meta
          name="description"
          content="Through Business Catalyst, we partner with MSMEs to address their challenges regarding growth and profitability by following a 4A delivery model of Advisory, Adoption, Access and Adherance"
        />
        <link rel="canonical" href="https://cms.org.in/business-catalyst/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Business Consultation for MSMEs | Facilitating growth for MSMEs"
        />
        <meta
          property="og:description"
          content="Through Business Catalyst, we partner with MSMEs to address their challenges regarding growth and profitability by following a 4A delivery model of Advisory, Adoption, Access and Adherance"
        />
        <meta
          property="og:url"
          content="https://cms.org.in/business-catalyst/"
        />
        <meta property="og:site_name" content="CMS.ORG.IN" />
        <meta
          property="article:modified_time"
          content="2024-05-15T06:00:37+00:00"
        />
        <meta
          property="og:image"
          content="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/business-catalysts-banner.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16667385703"
        ></Script>
        <Script
          id="gtm-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16667385703');
            `,
          }}
        />

        {children}
      </body>
    </html>
  )
}
