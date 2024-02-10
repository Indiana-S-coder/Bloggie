import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The awesome blog app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <div className="container">
          <div className="wrapper">
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
