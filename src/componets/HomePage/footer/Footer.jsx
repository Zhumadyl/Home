import Link from 'next/link'
import scss from './Footer.module.scss'
import { useTranslation } from 'react-i18next';



function Footer() {
  const user = () => {
    'Asan' + 'Bek'
  }

function Footer() {
  const { t } = useTranslation();
  return (
    <div className={scss.footer}>
        <div className={scss.footerTopDiv}>
          <div className={scss.leftDiv}>
            <div>
              <h2>{'SolidHome'}</h2>
              <p>Добро пожаловать на SolidHome - сайт по покупке, аренде и продаже недвижимости в Кыргызстане!    Наша платформа предлагает широкий спектр возможностей для тех, кто заинтересован в покупке, аренде или продаже недвижимости в этой прекрасной стране. Если вы ищете уютную квартиру в центре Бишкека или просторную виллу в пригороде, у нас есть из чего выбрать.</p>
              <h2>SolidHome</h2>
              <p>{t("footer.info")}</p>
            </div>
            <div>
              <Link href="https://www.apple.com/ru/app-store/">
                <img src="/AppStoreSvg.svg" alt="" />
              </Link>
              <Link href="https://play.google.com/store/apps?hl=ru&gl=US&pli=1">
                <img src="/PlayMarketSvg.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className={scss.rightDiv}>
            <div>
              <h3>{t("footer.rent.name")}</h3>
              <div className={scss.line}></div>
              <div className={scss.content}>
                {/* <Link href="/list/rent/rooms">Комнаты</Link>
                <Link href="/list/rent/apartments">Квартиры</Link>
                <Link href="/list/rent/houses">Дома</Link>
                <Link href="/list/rent/plots">Участка</Link>
                <Link href="/list/rent/commerical">Коммерчиская</Link>
                <Link href="/list/rent/daily">Посуточная аренда</Link>
                <Link href="/list/rent/">Все объявления об аренде</Link> */}
                <Link href="/purchase">{t("footer.rent.content.0")}</Link>
                <Link href="/purchase">{t("footer.rent.content.1")}</Link>
                <Link href="/purchase">{t("footer.rent.content.2")}</Link>
                <Link href="/purchase">{t("footer.rent.content.3")}</Link>
                <Link href="/purchase">{t("footer.rent.content.4")}</Link>
                <Link href="/purchase">{t("footer.rent.content.5")}</Link>
                <Link href="/purchase">{t("footer.rent.content.6")}</Link>
              </div>
            </div>
            <div>
              <h3>{t("footer.buy.name")}</h3>
              <div className={scss.line}></div>
              <div className={scss.content}>
                
                {/* <Link href="/list/purchase/apartments">Квартиры</Link>
                <Link href="/list/purchase/newBuildings">Новостройки</Link>

                <Link href="/list/purchase/houses">Дома</Link>
                <Link href="/list/purchase/plots">Участка</Link>
                <Link href="/list/purchase/commerical">Коммерчиская</Link>
                <Link href="/list/purchase/byOwner">Купить от собственника</Link>
                <Link href="/list/purchase/realtor">Купить от риелтора</Link>

                <Link href="/list/purchase/">Все объявления</Link> */}
                <Link href="/purchase">{t("footer.buy.content.0")}</Link>
                <Link href="/purchase">{t("footer.buy.content.1")}</Link>
                <Link href="/purchase">{t("footer.buy.content.2")}</Link>
                <Link href="/purchase">{t("footer.buy.content.3")}</Link>
                <Link href="/purchase">{t("footer.rent.content.4")}</Link>
                <Link href="/purchase">{t("footer.buy.content.4")}</Link>
                <Link href="/purchase">{t("footer.buy.content.5")}</Link>
                <Link href="/purchase">{t("footer.buy.content.6")}</Link>
              </div>
            </div>
            <div>
              <h3>{t("footer.sell.name")}</h3>
              <div className={scss.line}></div>
              <div className={scss.content}>
              // <Link href={`/list/${user}`}>Мои обьявления</Link>
              // <Link href="/management">Руководство для продавцов</Link>
              // <Link href="/asd">Найти риелтора</Link>
              <Link href="/purchase">{t("footer.sell.content.0")}</Link>
              <Link href="/purchase">{t("footer.sell.content.1")}</Link>
              <Link href="/purchase">{t("footer.sell.content.2")}</Link>


                
              </div>
            </div>
          </div>
        </div>
        <div className={scss.line}/>
        <div className={scss.footerBottomDiv}>
          <span>©2023 SolidHome. {t("footer.rights")}</span>
          <span>Created by Sofia</span>
        </div>
    </div>
  )
}
}

export default Footer