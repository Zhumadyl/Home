import { useTranslation } from 'react-i18next'
import scss from './TextareaCreatePage.module.scss'

function TextareaCreatePage() {
  const {t} = useTranslation()
  return (
    <div className={scss.wrapper}>
        <h2>{t("createPage.TextareaCreatePage.h2")}</h2>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div>

        <button>{t("createPage.TextareaCreatePage.btn")}</button>
        </div>
    </div>
  )
}

export default TextareaCreatePage