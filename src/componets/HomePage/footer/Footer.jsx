import Link from 'next/link'
import scss from './Footer.module.scss'
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <div className={scss.footer}>
        <div className={scss.footerTopDiv}>
          <div className={scss.leftDiv}>
            <div>
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

export default Footer