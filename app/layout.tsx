import "../styles/globals.css";
import localFont from "@next/font/local";
import AnalyitcsWrap from "../components/AnalyitcsWrap";

const ClashDisplay = localFont({
  src: "../public/fonts/ClashDisplay-Bold.woff2",
  variable: "--clash-display",
});
//@ts-ignore

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" translate="no">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500&display=swap"
        rel="stylesheet"
      ></link> 
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <body className={ClashDisplay.className}>
        {children}
        <AnalyitcsWrap/>
        </body>
    </html>
  );
}
