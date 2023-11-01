import Main from "@/componets/HomePage/Main/Main";
import DiscountsBLock from "@/componets/HomePage/discountsBLock/DiscountsBLock";
import Footer from "@/componets/HomePage/footer/Footer";
import Header from "@/componets/HomePage/header/Header";
import RieltorsBLock from "@/componets/HomePage/rieltorsBLock/RieltorsBLock";
import ServicesBlock from "@/componets/HomePage/servicesBLock/ServicesBlock";
import i18n from "@/i18next/i18next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTranslations } from "@/redux/asyncThunk";
import { useState } from "react";
import CompBlock from "@/componets/HomePage/compBlock/compBlock";



function HomePage() {
  const { t } = i18n;
  const [founderContent, setfounderContent] = useState('')

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchTranslations())
    }, [])
  

function HomePage() {
  const { t } = i18n;
  const [founderContent, setfounderContent] = useState("");
  return (
    <div>
      <Header />
      <Main /> 
      <DiscountsBLock />
       <CompBlock />
      <RieltorsBLock />
      <ServicesBlock />
      <Footer /> 
    </div>
  );
}
}

export default HomePage;
