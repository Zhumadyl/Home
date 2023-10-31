import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/pages/HomePage/Home.module.scss";
import HomePage from "@/pages/HomePage/HomePage";
import PrivateRoute from "@/constants/PrivateRoute/PrivateRoute";
import store from "@/redux/store";
import Purchase from "./purchase";
import Favorites from "./favourites";
import Create from "./create";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PrivateRoute>
        <Head>
          <title>Home</title>
        </Head>
        {/* <HomePage /> */}
        {/* <Favorites /> */}
        <Create />
      </PrivateRoute>
    </>
  );
}
