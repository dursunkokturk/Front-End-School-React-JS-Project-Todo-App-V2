import LightThemeMobileBackground from './assets/img/light-theme-mobile-background.png'
import SwitchingLightThemeDarkTheme from './assets/img/switching-light-theme-dark-theme.png'
import './App.css'

export default function App() {

  return (
    <>
      <div className="container">
        <header className="header">
          <div className="title-and-switch">
            <h1>TODO</h1>
            <img src={SwitchingLightThemeDarkTheme} alt="" />
          </div>
          <img
            src={LightThemeMobileBackground}
            className='light-theme-mobile-background'
            alt=""
          />
        </header>
        <main className="main">
          <div className="new-todo">
            <input type="radio" name="todo" value="newtodo" id="new-todo-radio" />
            <label htmlFor='new-todo-radio'>Yeni Görev Oluştur</label>
          </div>
        </main>
      </div>
    </>
  )
}