import Link from 'next/link'
import scss from './Footer.module.scss'

function Footer() {
  return (
    <div className={scss.footer}>
        <div className={scss.footerTopDiv}>
          <div className={scss.leftDiv}>
            <div>
              <h2>SolidHome</h2>
              <p>Добро пожаловать на SolidHome - сайт по покупке, аренде и продаже недвижимости в Кыргызстане!    Наша платформа предлагает широкий спектр возможностей для тех, кто заинтересован в покупке, аренде или продаже недвижимости в этой прекрасной стране. Если вы ищете уютную квартиру в центре Бишкека или просторную виллу в пригороде, у нас есть из чего выбрать.</p>
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
              <h3>Аренда</h3>
              <div className={scss.line}></div>
              <div className={scss.content}>
                <Link href="/purchase">Комнаты</Link>
                <Link href="/purchase">Квартиры</Link>
                <Link href="/purchase">Дома</Link>
                <Link href="/purchase">Участка</Link>
                <Link href="/purchase">Коммерчиская</Link>
                <Link href="/purchase">Посуточная аренда</Link>
                <Link href="/purchase">Все объявления об аренде</Link>
              </div>
            </div>
            <div>
              <h3>Покупка</h3>
              <div className={scss.line}></div>
              <div className={scss.content}>
                
                <Link href="/purchase">Квартиры</Link>
                <Link href="/purchase">Новостройки</Link>

                <Link href="/purchase">Дома</Link>
                <Link href="/purchase">Участка</Link>
                <Link href="/purchase">Коммерчиская</Link>
                <Link href="/purchase">Купить от собственника</Link>
                <Link href="/purchase">Купить от риелтора</Link>

                <Link href="/purchase">Все объявления</Link>
              </div>
            </div>
            <div>
              <h3>Продажа</h3>
              <div className={scss.line}></div>
              <div className={scss.content}>
              <Link href="/purchase">Мои обьявления</Link>
              <Link href="/purchase">Руководство для продавцов</Link>
              <Link href="/purchase">Найти риелтора</Link>


                
              </div>
            </div>
          </div>
        </div>
        <div className={scss.line}/>
        <div className={scss.footerBottomDiv}>
          <span>©2023 SolidHome. Все права защищены</span>
          <span>Created by Sofia</span>
        </div>
    </div>
  )
}

export default Footer