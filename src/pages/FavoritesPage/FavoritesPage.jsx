import React from "react";
import scss from "./FavoritesPage.module.scss";
import Header from "@/componets/HomePage/header/Header";
import FavoriteCard from "@/componets/FavoritesPage/FavoriteCard/FavoriteCard";
import Footer from "@/componets/HomePage/footer/Footer";

function FavoritesPage() {
  return (
    <div className={scss.favorites}>
      <Header />
      <div className={scss.favoritesCard}>
        <h1>Избранное</h1>
        <div className={scss.card}>
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
