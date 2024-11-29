import React from 'react'
import Logo from '../../assets/Logo.png'
import Burger from "../../assets/Burger.png"
import Search from "../../assets/Search.png"
import Wk from "../../assets/Wk.png"
import Love from "../../assets/Love.png"
import Buy  from "../../assets/Buy.png"
import "./navbar.css"
function Navbar() {
  return (
    <div className='wrapper'>
      <div className="navbar">
        <div className='navbar-logo'>
          <div className='navbar-logo-text'>
            <div>
              <img src={Logo} alt="" />
            </div>
            <div>
              <h1>ХОЗУФА</h1>
              <p>ХОЗТОВАРЫ С ДОСТАВКОЙ</p>
            </div>
          </div>

          <button>
            <img src={Burger} alt="" />
            Каталог товаров
          </button>
        </div>
        <div className='navbar-search'>
          <div>
            <input type="text" placeholder='Введите артикул или название товара...' />
            <div>
              <img src={Search} alt="" />
            </div>
          </div>
        </div>
        <div className='navbar-menu'>
           <div className='navbar-menu-app'>
            <img src={Wk} alt="" />
            <img src={Wk} alt="" />
            <img src={Wk} alt="" />
           </div>

           <div className='navbar-menu-links'>
                 <div className="navbar-menu-link">
                   <img src={Love} alt="" />
                 </div>
                 <div className="navbar-menu-link">
                   <img src={Buy} alt="" />
                 </div>
           </div>
           <div className="navbar-menu-buttons">
            <button className='navbar-menu-button'>Зарегистрироваться</button>
           </div>
        </div>
      </div>
      <br />
      <hr />
      <div className="navbar-kategorya">
        <ul>
          <li>Главная</li>
          <li>Акции</li>
          <li>Распродажа</li>
          <li>Оплата и доставка</li>
          <li>Гарантия и возврат</li>
          <li>О нас</li>
          <li>Контакты</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar