import signIn from '../../assets/sign-in.svg'
import burgerMenu from '../../assets/burger.svg'
import './style.css'
import { useState } from 'react'

function Header() {
  const [showAside, setShowAside] = useState(false)

  return (
    <header className="header">
      <aside className={`aside ${showAside && 'mobile'}`}>
        <div className="information">
          <span>БИЛЕТЫ И АБОНЕМЕНТЫ</span>
          <button className="btn_close" onClick={() => setShowAside(false)}>
            X
          </button>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#" className="nav_link">
                Как Купить?
              </a>
            </li>
            <li>
              <a href="#" className="nav_link">
                Правила
              </a>
            </li>
            <li>
              <a href="#" className="nav_link">
                Возврат билетов
              </a>
            </li>
          </ul>
        </nav>
        <button className="sign_in">
          <img src={signIn} alt="Sign in" width="20px" height="15px" />
          Войти
        </button>
      </aside>
      <button className="btn_burger" onClick={() => setShowAside(!showAside)}>
        <img
          src={burgerMenu}
          alt="Burger menu button"
          height="20px"
          width="20px"
        />
      </button>
    </header>
  )
}

export default Header
