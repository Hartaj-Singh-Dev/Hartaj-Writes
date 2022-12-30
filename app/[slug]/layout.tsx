import Comment from "../../components/Comments";
import Footer from "../Footer";

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{backgroundColor:"#071a2d"}}>{children}
      <Comment/>
      <Footer/>
      </body>
    </html>
  );
}