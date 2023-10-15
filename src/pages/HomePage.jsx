import Main from "@/componets/HomePage/Main/Main";
import DiscountsBLock from "@/componets/HomePage/discountsBLock/DiscountsBLock";
import Footer from "@/componets/HomePage/footer/Footer";
import Header from "@/componets/HomePage/header/Header";
import RieltorsBLock from "@/componets/HomePage/rieltorsBLock/RieltorsBLock";
import ServicesBlock from "@/componets/HomePage/servicesBLock/ServicesBlock";
import i18n from "@/i18next/i18next";
import React from "react";

function HomePage() {
  const { t } = i18n;
  return (
    <div>
      <Header />
      <Main/>
      <DiscountsBLock />
      <RieltorsBLock />
      <ServicesBlock />
      {/* <Footer/> */}
    </div>
  );
}

export default HomePage;
