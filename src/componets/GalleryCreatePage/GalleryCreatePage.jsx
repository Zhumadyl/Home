import { useTranslation } from 'react-i18next';
import scss from './GalleryCretaePage.module.scss'

function GalleryCreatePage() {
    const { t } = useTranslation();
  return (
    <div className={scss.wrapper}>
        <h2>{t("createPage.GalleryCreatePage.h2")}</h2>
        <div className={scss.GalleryBlock}>
            <button><img src="./et_download.svg" alt="" />{t("createPage.GalleryCreatePage.btn")}</button>
            <p>{t("createPage.GalleryCreatePage.ordragthem")} </p>
        </div>
        <div>
            <div>
                <img src="./fluent_image-sparkle-20-regular (1).svg" alt="" />
                <p>{t('createPage.GalleryCreatePage.mainImage')}</p>
            </div>
            <div>
                <img src="./fluent_image-sparkle-20-regular (1).svg" alt="" />
            </div><div>
                <img src="./fluent_image-sparkle-20-regular (1).svg" alt="" />
            </div><div>
                <img src="./fluent_image-sparkle-20-regular (1).svg" alt="" />
            </div><div>
                <img src="./fluent_image-sparkle-20-regular (1).svg" alt="" />
            </div><div>
                <img src="./fluent_image-sparkle-20-regular (1).svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default GalleryCreatePage