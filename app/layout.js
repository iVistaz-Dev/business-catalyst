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
        <meta
          name="google-site-verification"
          content="-1mm8QlMUW2-NkTE7H1DM1Ya3qnLXa_RuF4nbtaG9dI"
        />
        <link rel="canonical" href="https://cms.org.in/business-catalyst/" />
        <meta name="robots" content="index, follow" />
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
      <body>{children}</body>
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8V8MC99056"
      />
      <Script
        id="google-analytics-init"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8V8MC99056');
            `,
        }}
      />
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NHV672NK');
    `,
        }}
      />
    </html>
  )
}
