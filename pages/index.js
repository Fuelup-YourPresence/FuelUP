import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import HomePage from "./homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [mobileMenu, openMobileMenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
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
          <h1>Currently serving desktop versions</h1>
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
}
