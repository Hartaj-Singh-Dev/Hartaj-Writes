import "../styles/globals.css"
import Bg from "./Bg";
import localFont from "@next/font/local"

const ClashDisplay = localFont({src:"../public/fonts/ClashDisplay-Bold.woff2" , variable:"--clash-display"})

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500&display=swap" rel="stylesheet"></link>
      <body className={ClashDisplay.className}>
        <Bg/>
        {children}
        </body>
    </html>
  );
}