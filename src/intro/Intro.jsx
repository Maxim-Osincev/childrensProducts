import React, {useState} from "react";
import "./intro.scss";

function Intro() {
    let [productValue, setProductValue] = useState(1);
    let [selectedType, setSelectedType] = useState('Корзину');
    let [selectedProduct, setSelectedProduct] = useState('Пижама для девочек');

    function decrementProductValue(){
        productValue <= 1 ? productValue : setProductValue(prev => prev - 1);
    }
    function incrementProductValue(){
        productValue >= 99 ? productValue : setProductValue(prev => prev + 1);
    }

    document.addEventListener('click', e => {
      if(e.target.closest('.list_size-item')){
        document.querySelector('.list_size').classList.remove('visible');
        document.querySelector('.list_size-value').textContent = e.target.closest('.list_size-item').textContent;
      } else if(e.target.closest('.intro__right-size_input')){
        document.querySelector('.list_size').classList.add('visible');
      } else {
        document.querySelector('.list_size').classList.remove('visible')
      }
    });

    document.addEventListener('click', e => {
      if(e.target.closest('.intro__left-item_photo')){
        let mainSrc = document.querySelector('.intro__left-main_img').src;
        let secondSrc = e.target.src;

        document.querySelector('.intro__left-main_img').src = secondSrc;
        e.target.src = mainSrc;
      }
    });


    function addToBasket(){
      document.querySelector('.intro__addedItem-content').classList.add('active');
      document.querySelector('.intro__addedItem-window').classList.add('active');
      setSelectedType('Корзину');
      setTimeout(() => {
        document.querySelector('.intro__addedItem-content').classList.remove('active');
        document.querySelector('.intro__addedItem-window').classList.remove('active');
      }, 2000)
    }
    
    function addToFavorite(e){
      e.target.closest('.intro__right-add_favorites').classList.toggle('active');
      if(e.target.closest('.intro__right-add_favorites.active')){
        document.querySelector('.intro__addedItem-content').classList.add('active');
        document.querySelector('.intro__addedItem-window').classList.add('active');
        setSelectedType('Избранное');
        setTimeout(() => {
          document.querySelector('.intro__addedItem-content').classList.remove('active');
          document.querySelector('.intro__addedItem-window').classList.remove('active');
        }, 2000)
      }      
    }


  return (
    <div className="intro">
      <div className="intro__addedItem">
        <div className="intro__addedItem-window">
          <div className="intro__addedItem-content">
            {`Товар "${selectedProduct}" в количестве ${productValue} успешно добавлен в ${selectedType}`}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="intro__content">
          <div className="intro__left">
          <img
                className="intro__left-main_img"
                src={require("../img/intro/intro_left_main.png")}
              />
              <ul className="intro__left-list_photo">
                <li className="intro__left-item_photo">
                  <img src={require("../img/intro/intro_item_photo_1.png")} />
                </li>
                <li className="intro__left-item_photo">
                  <img src={require("../img/intro/intro_item_photo_2.png")} />
                </li>
                <li className="intro__left-item_photo">
                  <img src={require("../img/intro/intro_item_photo_3.png")} />
                </li>
                <li className="intro__left-item_photo">
                  <img src={require("../img/intro/intro_item_photo_4.png")} />
                </li>
                <li className="intro__left-item_photo">
                  <img src={require("../img/intro/intro_item_photo_5.png")} />
                </li>
              </ul>
          </div>
          <div className="intro__right">
            <div className="intro__right-main">
              <div className="intro__right-title">{selectedProduct}</div>
              <div className="intro__right-code">Арт. 02765/46</div>
              <div className="intro__right-reviews">
                <span>Отзывы</span>
                <svg
                  className="row_stars"
                  width="60"
                  height="20"
                  viewBox="0 0 60 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M54 7.565L54.485 8.71L54.72 9.265L55.32 9.315L56.555 9.42L55.615 10.235L55.16 10.63L55.295 11.22L55.575 12.425L54.515 11.785L54 11.465L53.485 11.775L52.425 12.415L52.705 11.21L52.84 10.62L52.385 10.225L51.445 9.41L52.68 9.305L53.28 9.255L53.515 8.7L54 7.565ZM54 5L52.595 8.315L49 8.62L51.73 10.985L50.91 14.5L54 12.635L57.09 14.5L56.27 10.985L59 8.62L55.405 8.315L54 5Z" />
                  <path d="M42 12.635L45.09 14.5L44.27 10.985L47 8.62L43.405 8.315L42 5L40.595 8.315L37 8.62L39.73 10.985L38.91 14.5L42 12.635Z" />
                  <path d="M30 12.635L33.09 14.5L32.27 10.985L35 8.62L31.405 8.315L30 5L28.595 8.315L25 8.62L27.73 10.985L26.91 14.5L30 12.635Z" />
                  <path d="M18 12.635L21.09 14.5L20.27 10.985L23 8.62L19.405 8.315L18 5L16.595 8.315L13 8.62L15.73 10.985L14.91 14.5L18 12.635Z" />
                  <path d="M6 12.635L9.09 14.5L8.27 10.985L11 8.62L7.405 8.315L6 5L4.595 8.315L1 8.62L3.73 10.985L2.91 14.5L6 12.635Z" />
                </svg>
                <a href="#">
                  <span>14 отзывов</span>
                  <svg
                    className="details_reviews"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 1L12 8L4 14.5" />
                  </svg>
                </a>
              </div>
              <div className="intro__right-prices">
                <div className="intro__right-price">800 ₽</div>
                <div className="intro__right-price_no_discount">1 500 ₽</div>
                <svg
                  className="details_reviews"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 1L12 8L4 14.5" />
                </svg>
              </div>
              <div className="intro__right-discounts">
                <div className="intro__right-discount">скидка -36%</div>
                <div className="intro__right-stock">акция -20%</div>
              </div>
              <div className="intro__right-size">
                <div className="intro__right-size_input">
                  <ul className="list_size">
                    <li className="list_size-item">36-38</li>
                    <li className="list_size-item">38-40</li>
                    <li className="list_size-item">40-42</li>
                    <li className="list_size-item">42-44</li>
                  </ul>
                  <span className="list_size-value">Выбрать размер</span>
                </div>
                <a href="#">
                  <div className="intro__right-size_help">
                    Определить размер
                  </div>
                </a>
              </div>
              <div className="intro__right-add">
                <div className="intro__right-add_counter">
                  <div className="intro__right-add_decrement" onClick={decrementProductValue}>-</div>
                  <div className="intro__right-add_count">{productValue}</div>
                  <div className="intro__right-add_increment" onClick={incrementProductValue}>+</div>
                </div>
                <div className="intro__right-add_basket" onClick={addToBasket}>
                  Добавить в корзину
                </div>
                <div className="intro__right-add_favorites" onClick={addToFavorite}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9 7.0948C10.6998 1.47892 1.40881 5.90389 5.76037 11.6018C10.1119 17.2996 12.4 19.4908 12.4 19.4908"
                    />
                    <path
                      d="M11.8941 7.0948C13.0944 1.47892 22.7304 5.90389 18.3789 11.6018C14.0273 17.2996 11.7 19.5 11.7 19.5"
                    />
                    <path
                      d="M11.391 6.70752L12.4043 6.70757L12.3834 7.24079H11.391V6.70752Z"
                    />
                  </svg>
                </div>
              </div>
                <a href="#"><div className="intro__right-buy_click">Купить в 1 клик</div></a>
            </div>
            <div className="intro__right-footer">
              <div className="intro__right-description">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="7" stroke="#333333" />
                  <path
                    d="M6 8C6.24928 8 8.75787 6.5 8.75787 6.5H10.0043H11.2507C11.2507 6.5 13.7507 8 14 8"
                    stroke="#333333"
                  />
                  <path
                    d="M6.01577 7.39283L6.01576 9.17806L7.76075 9.4756L7.76075 13.9386"
                    stroke="#333333"
                  />
                  <path
                    d="M13.9842 7.39283L13.9842 9.17806L12.2393 9.4756L12.2478 13.9386"
                    stroke="#333333"
                  />
                  <line
                    x1="7.51145"
                    y1="13.4385"
                    x2="12.4971"
                    y2="13.4385"
                    stroke="#333333"
                  />
                  <path
                    d="M8.50859 6.5C8.50859 6.5 9.00716 8.28522 10.0043 8.28522C11.0014 8.28522 11.5 6.5 11.5 6.5"
                    stroke="#333333"
                  />
                </svg>
                <a href='#'><p>Описание товара</p></a>
              </div>
              <div className="intro__right-delivery">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="7" fill="white" stroke="#333333" />
                  <path
                    d="M9.55453 5.5L9.55453 10.7061L13.5 13"
                    stroke="#333333"
                  />
                </svg>
                <a href='#'><p>Доставка и возврат</p></a>
              </div>
              <div className="intro__right-payment_methods">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3.5"
                    y="5.5"
                    width="13"
                    height="9"
                    rx="0.5"
                    stroke="#333333"
                  />
                  <rect x="4" y="8" width="12" height="2" fill="#333333" />
                </svg>
                <a href='#'><p>Способы оплаты</p></a>
              </div>
            </div>
          </div>
        </div>
        <a href='#'><div className="intro__all_styles"><span>Посмотреть все стили</span></div></a>
      </div>
    </div>
  );
}

export default Intro;
