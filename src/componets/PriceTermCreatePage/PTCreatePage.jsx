import React from 'react'
import scss from './PTCreatePage.module.scss'
import { useTranslation } from 'react-i18next'



function PTCreatePage() {
    const { t } = useTranslation()
  return (
    <div className={scss.wrapper}>
        <h2>{t("createPage.PTCreatePage.h2")}</h2>
        <div>
            <p>{t("createPage.PTCreatePage.m2PriceP")}</p>
            <div>
                <input type="number" />
                <select name="" id="">
                <option value="">$</option>
                    <option value="">£</option>
                    <option value="">€</option>
                    <option value="">₸</option>
                    <option value="">¥</option>
                    <option value="">₽</option>
                </select>
            </div>
        </div>
        <div>
            <p>{t("createPage.PTCreatePage.totalCost")}</p>
            <div>
                <input type="number" />
                <select name="" id="">
                    <option value="">$</option>
                    <option value="">£</option>
                    <option value="">€</option>
                    <option value="">₸</option>
                    <option value="">¥</option>
                    <option value="">₽</option>

                </select>
            </div>
        </div>
        <div>
            <div>
                <input type="checkbox" />
                <p>{t("createPage.PTCreatePage.Possibility of installments")}</p>
            </div>            <div>
                <input type="checkbox" />
                <p>{t("createPage.PTCreatePage.Possibility of mortgage")}</p>
            </div>

            <div>
                <input type="checkbox" />
                <p>{t("createPage.PTCreatePage.Possibility of exchange")}</p>
            </div>

        </div>

    </div>
  )
}

export default PTCreatePage