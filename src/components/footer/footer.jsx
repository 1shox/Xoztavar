import React from 'react'
import "./footer.css"
import Logo2 from "../../assets/Logo2.png"
function Footer() {
  return (
    <div className='wrapper'>
      <div className='footer'>
        <div className='footer-logo'>
          <div className='footer-logo-text'>
            <div>
              <img src={Logo2} alt="" />
            </div>
            <div>
              <h1>ХОЗУФА</h1>
              <p>ХОЗТОВАРЫ С ДОСТАВКОЙ</p>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="footer-container">
          <div className="footer-section">
            <h3>Разделы сайта</h3>
            <ul>
              <li>Главная</li>
              <li>Акции</li>
              <li>Распродажа</li>
              <li>Оплата и доставка</li>
              <li>Гарантии и возврат</li>
              <li>О нас</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Каталог товаров</h3>
            <ul>
              <li>Афганские скороворки</li>
              <li>Казаны и котлы</li>
              <li>Утварь</li>
              <li>Товары для дома и сада</li>
              <li>Кастрюли</li>
              <li>Мантоварки</li>
              <li>Сковороды</li>
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              <li>Термосы</li>
              <li>Чайники и френч-прессы</li>
              <li>Сервировочная посуда</li>
              <li>Столовые приборы</li>
              <li>Бытовая техника</li>
              <li>Бытовая химия</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Контакты</h3>
            <ul>
              <li>Революционная 56</li>
              <li>+7 (347) 276-91-92</li>
              <li>Ежедневно 10:00-21:00</li>
              <li>info@newsite.ru</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Политика компании в отношении обработки персональных данных</p>
          <p>Copyright © 2015-2022. ООО «ХОЗЮНА». Все права защищены</p>
          <p>WEBBES - Создание и продвижение сайтов</p>
        </div>
      </div>
    </div>
  )
}

export default Footer