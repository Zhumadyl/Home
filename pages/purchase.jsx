import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from '@/styles/Home.module.scss'
import HomePage from "@/pages/HomePage/HomePage";
import PrivateRoute from "@/constants/PrivateRoute/PrivateRoute";
import Header from "@/componets/HomePage/header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PrivateRoute>
      <>
        <Head>
          <title>Purchase</title>
        </Head>
        <Header />
        <h1>Helloss</h1>
      </>
    </PrivateRoute>
  );
}
