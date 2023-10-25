import Footer from '@/componets/HomePage/footer/Footer'
import Header from '@/componets/HomePage/header/Header'
import React, { useState } from 'react'

function PurchasePage() {
    const [founderContent, setfounderContent] = useState('')
  return (
    <div>
        <Header/>
        <section className={scss.filter}>
        <input 
         type="text"
         className={scss.founder} 
         placeholder='Город, улица, адрес' 
         value={founderContent} 
         onChange={(e) => { setfounderContent(e.target.value) }} 
         />
         <div className={scss.select}>
          <select>
            <option><span>Цена</span></option>
          </select>
         </div>
         <div className={scss.select}>
          <select>
            <option><span>Комнаты и ванны</span></option>
          </select>
         </div>
         <div className={scss.select}>
          <select>
            <option><span>Тип жилья</span></option>
          </select>
         </div>
         <div className={scss.select}>
          <select>
            <option><span>Еще</span></option>
          </select>
         </div>
        <button>Сохранить поиск</button>
      </section>
      <Footer/>
    </div>
  )
}

export default PurchasePage