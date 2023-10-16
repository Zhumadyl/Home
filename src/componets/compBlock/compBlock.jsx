import React from 'react'
import scss from './compBlock.module.scss'

function CompBlock() {
  return (
    <div className={scss.compBlock}>
        <div className={scss.container}>
          <div className={scss.compTopDiv}>
            <h2>Строительные компании</h2>
            <a href="/"><button>Смотреть больше <img src='./Union.svg' alt="" /></button></a>
          </div>
          <div className={scss.compBottomDiv}>
            <div>
              <div>
                <img src="./picture(3).png" alt="" />
                <img src="./logo primex.png" alt="" />
              </div>
              <div>
                <h3>Primex</h3>
                <div className={scss.line}></div>
                <p>Строительная компания «Авангард Cтиль» – лидер строительного рынка.</p>
                <button>Перейти на сайт компании</button>
              </div>
            </div>
            <div>
              <div>
                <img src="./picture(2).png" alt="" />
                <img src="./logo star.png" alt="" />
              </div>
              <div>
                <h3>Starforge</h3>
                <div className={scss.line}></div>
                <p>Экологически безопасное строительство с современным дизайном.</p>
                <button>Перейти на сайт компании</button>
              </div>
            </div>
            <div>
              <div>
                <img src="./picture(1).png" alt="" />
                <img src="./logo terra.png" alt="" />
              </div>
              <div>
                <h3>Terraguard</h3>
                <div className={scss.line}></div>
                <p>Инновационные решения. Поразительные строительные проекты.</p>
                <button>Перейти на сайт компании</button>
              </div>
            </div>
            <div>
              <div>
                <img src="./picture.png" alt="" />
                <img src="./logo pro.png" alt="" />
              </div>
              <div>
                <h3>Probuilding</h3>
                <div className={scss.line}></div>
                <p>Качественные строительные услуги для достижения превосходных результатов.</p>
                <button>Перейти на сайт компании</button>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default CompBlock