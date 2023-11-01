import React from 'react'
import scss from './PTCreatePage.module.scss'



function PTCreatePage() {
  return (
    <div className={scss.wrapper}>
        <h2>Цена и условия сделки</h2>
        <div>
            <p>Цена за m²</p>
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
            <p>Общая стоимость</p>
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
                <p>Возможность рассрочки</p>
            </div>            <div>
                <input type="checkbox" />
                <p>Возможность ипотеки</p>
            </div>

            <div>
                <input type="checkbox" />
                <p>Возможность обмена</p>
            </div>

        </div>

    </div>
  )
}

export default PTCreatePage