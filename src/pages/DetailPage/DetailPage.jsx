import scss from './Detail.module.scss'
import Link from "next/link";




function DetailPage() {
    const [leftpos, setleftPos] = useState(0)

    const moveLeft = () => {
      if(leftpos - 50 >= -boundary){
          setleftPos(leftpos-732)
      }else{
          setleftPos(0)
      } 
      
  }
  const boundary = 2196
  
  const moveRight = () => {
      if(leftpos == 0){
          setleftPos(-boundary)
      }else{
          setleftPos(leftpos+732)
      }
  }
  
  
  return (
    <div>
    <Header />
    <section className={scss.preInfo}>
      <div>
        <i>Дата публикации: 23.06.2023</i>
        <h1>Квартира Бишкек</h1>
      </div>
      <div className={scss.info}>
        <div>
          <button onClick={moveRight}><img src="ep_arrow-left-bold.svg" alt="" /></button>
          <button onClick={moveLeft}><img src="ep_arrow-left-bold.svg" alt="" /></button>

          <div style={{position: 'relative' , left: `${leftpos}px`, transition: 'left 0.3s ease' }}>
          <img src="./image 9.png" alt="" />
          <img src="./image 9.png" alt="" />
          <img src="./image 9.png" alt="" />
          <img src="./image 9.png" alt="" />

          </div>
        </div>
        <div>
          <div>
            <h1>2 комн. кв. 70 м2, 7эт из 10</h1>
            <button>Связаться</button>
          </div>
          <div>
            <div>
              <div>
                
              </div>
              <img src="./image1.png" alt="" />
              <h2> <img src="./mdi_location.svg" alt="" />Турусбекова 207</h2>
            </div>
            <div>
              <p>
              Продаю Элитную 3-х комнатную квартиру в Новом элитном клубном доме Премиум - класса в Центре. Адрес: Турусбекова/Рыскулова. Дизайнерский Евро ремонт, сделанный из высококачественных дорогостоящих строительных материалов: - Итальянские обои. - Немецкий ламинат. - Испанский кафель. - Чешская сантехника.  
              </p>
              <div>
                <div><img src="./tabler_wifi.svg" alt="" /> Wi-Fi</div>
                <div><img src="./material-symbols_videocam-outline.svg" alt="" />Видеонаблюдение</div>
                <div><img src="./material-symbols_security.svg" alt="" />Охрана</div>
                <div><img src="./mingcute_parking-fill.svg" alt="" />Парковка</div>
                <div><img src="mdi_playground-seesaw.svg" alt="" />Десткая площадка</div>

              </div>
              <h2>85 000$</h2>
            </div>
          </div>
          <img src="./solar_heart-bold.svg" alt="" className={scss.Like}/>
        </div>
      </div>
    </section>
    <section className={scss.mainInfo}>
        <h1>Основная информация</h1>
        <div>
          <div>
            <p>Обьявление от: <Link href={'/'}>Собственника</Link></p>
            <p>Серия: <span>106 улучшенная</span></p>
            <p>Высота потолков: <span>3 метра</span></p>
            <p>Коммуникации: <span>Центральные</span></p>
            <p>Тип строения: <span>Кирпичный</span></p>
            <p>Год сдачи в эксплуатацию: <span>2019 год</span></p>
          </div>
          <div>
            <p>Этаж: <span>7 из 10</span></p>
            <p>Площадь: <span>70 m2</span></p>
            <p>Отопление: <span>Центральное</span></p>
            <p>Состояние: <span>Перчичка</span></p>
            <p>Сан узел: <span>2 санузла</span></p>
            <p>Мебель: <span>Полностью мебелированна</span></p>
          </div>
        </div>
    </section>
    <section className={scss.mightLike}>
      <h1>Похожие обьявления</h1>
      <div>
        <div>
          <div>
            <img src="./image 11.png" alt="" />
            <div>Рассрочка</div>
          </div>
          <div>
            <div>
              <div>
                <h2>Квартира</h2>
                <i>23.06.2023</i>
              </div>
              <span>Бишкек</span>
            </div>
            <div>
              <h2>2-х комн. кв., 70 кв. м2, 7 эт. из 10</h2>
              <div>
                <div><img src="./tabler_wifi.svg" alt="" /> <span>Wi-Fi</span></div>
                <div><img src="./material-symbols_videocam-outline.svg" alt="" /><span>Видеонаблюдение</span></div>
                <div><img src="./material-symbols_security.svg" alt="" /><span>Охрана</span></div>
                <div><img src="./mingcute_parking-fill.svg" alt="" /><span>Парковка</span></div>
                <div><img src="mdi_playground-seesaw.svg" alt="" /><span>Десткая площадка</span></div>

              </div>
            </div>
            <div>
              <h2>85 000 $</h2>
              <img src="./solar_heart-bold.svg" alt="" className={scss.Like}/>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="./image 11.png" alt="" />
            
          </div>
          <div>
            <div>
              <div>
                <h2>Квартира</h2>
                <i>23.06.2023</i>
              </div>
              <span>Бишкек</span>
            </div>
            <div>
              <h2>2-х комн. кв., 70 кв. м2, 7 эт. из 10</h2>
              <div>
                <div><img src="./tabler_wifi.svg" alt="" /> <span>Wi-Fi</span></div>
                <div><img src="./material-symbols_videocam-outline.svg" alt="" /><span>Видеонаблюдение</span></div>
                <div><img src="./material-symbols_security.svg" alt="" /><span>Охрана</span></div>
                <div><img src="./mingcute_parking-fill.svg" alt="" /><span>Парковка</span></div>
                <div><img src="mdi_playground-seesaw.svg" alt="" /><span>Десткая площадка</span></div>

              </div>
            </div>
            <div>
              <h2>85 000 $</h2>
              <img src="./solar_heart-bold.svg" alt="" className={scss.Like}/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

  )
}

export default DetailPage