import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/pages/HomePage/Home.module.scss";
import HomePage from "@/pages/HomePage/HomePage";
import PrivateRoute from "@/constants/PrivateRoute/PrivateRoute";
import { Provider } from "react-redux";
import store from "@/redux/store";
import PurchaseCard from "@/componets/PurchasePage/PurchaseCard/PurchaseCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PrivateRoute>
        <Head>
          <title>Home</title>
        </Head>
        <HomePage />
        <PurchaseCard />
      </PrivateRoute>
    </>
  );
}
