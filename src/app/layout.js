import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Provider from "./Provider";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gaurab Movie",
  description: "created by gaurab kumar magar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar />
            {children}
          <Footer />
        </Provider>
        </body>
    </html>
  );
}
