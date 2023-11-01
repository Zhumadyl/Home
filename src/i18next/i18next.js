import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../public/assets/locales/en.json'
import ru from '../../public/assets/locales/ru.json'
import { useState } from 'react';
import { useSelector } from 'react-redux';


// const {ru, en, status} = useSelector((state) => state)
// const [en1, setEn] = useState({})
// const [ru1, setRu] = useState({})
// {
//   status
//   ?
//   // (setEn(en) ,setRu(ru))
//   (console.log(ru),
//   console.log(en))
//   :
//   null
// }
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru} ,
    },
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

