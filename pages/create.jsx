import Head from "next/head";
import { Inter } from "next/font/google";
import PrivateRoute from "@/constants/PrivateRoute/PrivateRoute";
import scss from "@/pages/CreatePage/CreatePage.module.scss";
import CreatePage from "@/pages/CreatePage/CreatePage";

const inter = Inter({ subsets: ["latin"] });

export default function Create() {
  return (
    <>
      <PrivateRoute>
        <Head>
          <title>Create</title>
        </Head>
        <div className={scss.create}>
          <CreatePage />
        </div>
      </PrivateRoute>
    </>
  );
}
