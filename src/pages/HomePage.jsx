import DiscountsBLock from "@/componets/discountsBLock/DiscountsBLock";
import Footer from "@/componets/footer/Footer";
import Header from "@/componets/header/Header";
import RieltorsBLock from "@/componets/rieltorsBLock/RieltorsBLock";
import ServicesBlock from "@/componets/servicesBLock/ServicesBlock";
import i18n from "@/i18next/i18next";
import React from "react";

function HomePage() {
  const { t } = i18n;
  return (
    <div>
      <Header />
      <DiscountsBLock />
      {/* <RieltorsBLock /> */}
      {/* <ServicesBlock /> */}
      {/* <Footer/> */}
    </div>
  );
}

export default HomePage;
