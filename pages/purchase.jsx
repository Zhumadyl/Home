import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import scss from "@/pages/HomePage/Home.module.scss";
import HomePage from "@/pages/HomePage/HomePage";
import PrivateRoute from "@/constants/PrivateRoute/PrivateRoute";
import Header from "@/componets/HomePage/header/Header";
import PurchaseCard from "@/componets/PurchasePage/PurchaseCard/PurchaseCard";
import PurchaseFilter from "@/componets/PurchasePage/PurchaseFilter/PurchaseFilter";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@/componets/PurchasePage/Paginate/Pagination";
import Map from "@/componets/PurchasePage/Map/Map";
import Footer from "@/componets/HomePage/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Purchase() {
  const [isCard, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(18);

  useEffect(() => {
    const getCard = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://652d5af4f9afa8ef4b2750f6.mockapi.io/purchaseCard"
      );
      setCard(res.data);
      setLoading(false);
    };
    getCard();
  }, []);

  const lastCardIndex = currentPage * cardPerPage;
  const firstCardIndex = lastCardIndex - cardPerPage;
  const currentCardIndex = isCard.slice(firstCardIndex, lastCardIndex);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h1 className={scss.preloader}>Loading . . . . </h1>;
  }

  return (
    <PrivateRoute>
      <>
        <div className={scss.wrapper}>
          <Header />
          <PurchaseFilter />
          <div className={scss.mapping}>
            <div className={scss.map}>
              <Map />
            </div>
            <div className={scss.cards}>
              <div className={scss.title}>
                <h1>Недвижимость и дома на продажу</h1>
                <div className={scss.result}>
                  <h2>178, 990 result</h2>
                  <select>
                    <option>Сортировать по</option>
                  </select>
                </div>
              </div>
              <PurchaseCard isCard={currentCardIndex} loading={loading} />
              <div className={scss.btns}>
                <button onClick={prevPage} disabled={currentPage === 1}>
                  <img
                    src="/assets/images/purchasePage/Vector_left.png"
                    alt=""
                  />
                </button>
                <Pagination
                  totalCard={isCard.length}
                  cardPerPage={cardPerPage}
                  paginate={paginate}
                />
                <button
                  onClick={nextPage}
                  disabled={
                    currentPage === Math.ceil(isCard.length / cardPerPage)
                  }
                >
                  <img
                    src="/assets/images/purchasePage/Vector_right.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    </PrivateRoute>
  );
}
