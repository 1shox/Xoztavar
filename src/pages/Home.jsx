import React, { useState, useEffect } from 'react';
import ProductImage from "../assets/bebg.png"; // Chap tomondagi mahsulot tasviri
import Logo from "../assets/logo.png"; // Logotip tasviri
import "./home.css";
import Better from '../assets/better.png'
import axios from "axios";
import { api } from "../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Like from '../assets/Like.svg'

function Home() {
  const [val, setVal] = useState([])
  const [val2, setVal2] = useState([])
  useEffect(() => {
    axios.get(`${api}/new-img/get`)
      .then(res => {
        setVal(res.data.data);
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  useEffect(() => {
    axios.get(`${api}/product/get`)
      .then(res => {
        setVal2(res.data.data);
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };



  return (

    <div>
      <div className="section">
        <div className="wrapper">
          <div className="content">
            <div className="left-content">
              <div className="features">
                <div className="feature">
                  <img src={Better} alt="Большой ассортимент" />
                  <p>Большой ассортимент и выбор товаров</p>
                </div>
                <div className="feature">
                  <img src={Better} alt="Качественные товары" />
                  <p>Предлагаем только качественные товары</p>
                </div>
                <div className="feature">
                  <img src={Better} alt="Работаем с производителями" />
                  <p>Работаем напрямую с производителями</p>
                </div>
                <div className="feature">
                  <img src={Better} alt="Гарантия на товары" />
                  <p>Предоставляем гарантию на все товары</p>
                </div>
                <div className="feature">
                  <img src={Better} alt="Бесплатная доставка" />
                  <p>Бесплатная доставка товаров на дом</p>
                </div>
                <div className="feature">
                  <img src={Better} alt="Безопасная система оплаты" />
                  <p>Безопасная система онлайн-оплаты</p>
                </div>
              </div>
            </div>
            <div className="right-content">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
              >
                {val.map((e, index) => (
                  <SwiperSlide key={index}>
                    <img src={e.url} alt={`Slide ${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="wrapper">
          <div className="product-content">
            <div className="left-product">

            </div>
            <div className="right-product">
              <div className="cards">
                {val2.map((e, index) => (
                  <div className="card">
                    <img src={e.url} alt={index} />
                    <h1>{e.name}</h1>
                    <div className='Price'>
                      <h3>{e.seil}%</h3>
                      <h4>{e.oldPrice}</h4>
                    <h2>{e.newPrice}</h2>
                    </div>
                    <p>{e.info}</p>
                    <button>
                     <img src={Like} alt="" />
                    </button>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="section3">
          <div className="left-section">
            <img src={ProductImage} alt="Products" className="product-image" />
          </div>
          <div className="center-section">
            <div className="logo-container">
              <h2>Поможем выбрать лучшее!</h2>

              <img src={Logo} alt="Logo" className="logo" />
              <p className="logo-text">Хозуфа</p>
              <p className="subtext">Хозтовары с доставкой</p>
            </div>
          </div>
          <div className="right-section">
            <h3>Проконсультируем и поможем Вам с выбором!</h3>
            <form className="form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Ваше имя" className="input" required />
              <input
                type="text"
                placeholder="Номер телефона"
                className="input"
                required
              />
              <button type="submit" className="button">
                Получить консультацию
              </button>
              <div className="checkbox-container">
                <input type="checkbox" id="agree" required />
                <label htmlFor="agree">
                  Согласен на обработку персональных данных *
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
