import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Disclaimer from "./components/common/Disclaimer";
import HomePage from "./homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [mobileMenu, openMobileMenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        openMobileMenu(true);
      } else {
        openMobileMenu(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {mobileMenu ? (
        <div>
          <Disclaimer />
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
}
