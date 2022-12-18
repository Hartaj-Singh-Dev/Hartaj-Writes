import "../styles/globals.css"
import Bg from "./Bg";


export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Bg/>
        {children}</body>
    </html>
  );
}