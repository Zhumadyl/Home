import scss from './TextareaCreatePage.module.scss'

function TextareaCreatePage() {
  return (
    <div className={scss.wrapper}>
        <h2>Текст обьявлений</h2>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div>

        <button>Добавить обьявление</button>
        </div>
    </div>
  )
}

export default TextareaCreatePage