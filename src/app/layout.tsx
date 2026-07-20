import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/Common/Layout/Navbar";
import Footer from "@/Components/Common/Layout/Footer";
import Script from "next/script";

const cabinetGrotesk = localFont({
  src: [
    {
      path: "./fonts/CabinetGrotesk-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-cabinet",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cabinetGrotesk.className}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T82FHZZ4');
        `}</Script>

        <meta
          name="google-site-verification"
          content="KunnZdKQZ8b3z1Kr_tctfRDDeZ9nIEoe_PfWbChTShc"
        />
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T82FHZZ4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}