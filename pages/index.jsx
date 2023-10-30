import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/pages/Home.module.scss";
import HomePage from "@/pages/HomePage";
import PrivateRoute from "@/constants/PrivateRoute/PrivateRoute";
import store from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PrivateRoute>
        <Head>
          <title>Home</title>
        </Head>
        <HomePage />
      </PrivateRoute>
    </>
  );
}
