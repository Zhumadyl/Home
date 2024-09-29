import React from 'react'
import scss from './compBlock.module.scss'


function CompBlock() {
  const compName = ['Primex', 'Starforge', 'Terraguard', 'Probuilding']
  return (
    <div className={scss.compBlock}>
        <div className={scss.container}>
          <div className={scss.compTopDiv}>
            <h2>Строительные компании</h2>
            <a href="/compsnies"><button>Смотреть больше <img src='./Union.svg' alt="" /></button></a>
          </div>
          <div className={scss.compBottomDiv}>
            <div>
              <div>
                <img src="./picture(3).png" alt="" />
                <img src="./logo primex.png" alt="" />
              </div>
              <div>
                <h3>{compName[0]}</h3>
                <div className={scss.line}></div>
                <p>Строительная компания «Авангард Cтиль» – лидер строительного рынка.</p>
                <a href='/compSite'><button>Перейти на сайт компании</button></a>
              </div>
            </div>
            <div>
              <div>
                <img src="./picture(2).png" alt="" />
                <img src="./logo star.png" alt="" />
              </div>
              <div>
                <h3>{compName[1]}</h3>
                <div className={scss.line}></div>
                <p>Экологически безопасное строительство с современным дизайном.</p>
                <a href='/compSite'><button>Перейти на сайт компании</button></a>
              </div>
            </div>
            <div>
              <div>
                <img src="./picture(1).png" alt="" />
                <img src="./logo terra.png" alt="" />
              </div>
              <div>
                <h3>{compName[2]}</h3>
                <div className={scss.line}></div>
                <p>Инновационные решения. Поразительные строительные проекты.</p>
                <a href='/compSite'><button>Перейти на сайт компании</button></a>
              </div>
            </div>
            <div>
              <div>
                <img src="./picture.png" alt="" />
                <img src="./logo pro.png" alt="" />
              </div>
              <div>
                <h3>{compName[3]}</h3>
                <div className={scss.line}></div>
                <p>Качественные строительные услуги для достижения превосходных результатов.</p>
                <a href='/compSite'><button>Перейти на сайт компании</button></a>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default CompBlock