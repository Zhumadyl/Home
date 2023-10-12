import Footer from "@/componets/footer/Footer";
import Header from "@/componets/header/Header";
import i18n from "@/i18next/i18next";
import React, { useState } from "react";
import CompBlock from "@/componets/compBlock/compBlock";



function HomePage() {
  const { t } = i18n;
  const [founderContent, setfounderContent] = useState('')
  return (
    <div>
      <Header />
      <CompBlock/>
      <Footer />
    </div>
  );
}

export default HomePage;
