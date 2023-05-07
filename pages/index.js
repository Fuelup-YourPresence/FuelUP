import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "./homepage";
import Navbar from "@/pages/components/Navbar";
import PriceQuote from "@/pages/components/common/PriceQuote";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <HomePage />
      {/* <PriceQuote /> */}
    </div>
  );
}
