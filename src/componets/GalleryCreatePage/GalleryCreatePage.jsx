import scss from './GalleryCretaePage.module.scss'

function GalleryCreatePage() {
  return (
    <div className={scss.wrapper}>
        <h2>Галерея</h2>
        <div className={scss.GalleryBlock}>
            <button><img src="./et_download.svg" alt="" />Загрузить фотографии</button>
            <p>или перетащите их сюда </p>
        </div>
        <div>
            <div>
                <img src="./fluent_image-sparkle-20-regular.svg" alt="" />
                <p>Главное фото</p>
            </div>
            <div>
                <img src="./fluent_image-sparkle-20-regular.svg" alt="" />
            </div><div>
                <img src="./fluent_image-sparkle-20-regular.svg" alt="" />
            </div><div>
                <img src="./fluent_image-sparkle-20-regular.svg" alt="" />
            </div><div>
                <img src="./fluent_image-sparkle-20-regular.svg" alt="" />
            </div><div>
                <img src="./fluent_image-sparkle-20-regular.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default GalleryCreatePage