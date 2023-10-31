import Head from "next/head";
import { Inter } from "next/font/google";
import PrivateRoute from "@/constants/PrivateRoute/PrivateRoute";
import Header from "@/componets/HomePage/header/Header";
import FavoritesPage from "@/pages/FavoritesPage/FavoritesPage";

const inter = Inter({ subsets: ["latin"] });

export default function Favorites() {
  return (
    <>
      <PrivateRoute>
        <Head>
          <title>favorites</title>
        </Head>
        <FavoritesPage />
      </PrivateRoute>
    </>
  );
}
