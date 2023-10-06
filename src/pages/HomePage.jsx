import Footer from "@/componets/footer/Footer";
import Header from "@/componets/header/Header";
import i18n from "@/i18next/i18next";
import React from "react";

function HomePage() {
  const { t } = i18n;
  return (
    <div>
      <Header />
      <Footer/>
    </div>
  );
}

export default HomePage;
