import React, { useState } from "react";
import "./footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    let [followSaleInput, setFollowSaleInput] = useState('')
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__buyer footer__column">
            <div className="footer__buyer-title footer__title">покупателям</div>
            <div className="footer__buyer-list footer__list">
              <a href='#'><div className="footer__buyer-item footer__item">Каталог</div></a>
              <a href='#'><div className="footer__buyer-item footer__item">Акции</div></a>
              <a href='#'><div className="footer__buyer-item footer__item">Бренды</div></a>
            </div>
          </div>
          <div className="footer__about_us footer__column">
            <div className="footer__about_us-title footer__title">о нас</div>
            <div className="footer__about_us-list footer__list">
              <a href='#'><div className="footer__about_us-item footer__item">О компании</div></a>
              <a href='#'><div className="footer__about_us-item footer__item">Новости</div></a>
              <a href='#'><div className="footer__about_us-item footer__item">Команда</div></a>
            </div>
          </div>
          <div className="footer__follow_sale footer__column">
            <div className="footer__follow_sale-title footer__title">Узнайте первыми о новинках и акциях</div>
            <form className="footer__follow_sale-form">
                <div className="input__wrapper">
                    <input className="footer__follow_sale-input" type='text' placeholder='Адрес электронной почты' value={followSaleInput} onChange={e => setFollowSaleInput(e.target.value)}/>
                    <FontAwesomeIcon className="footer__follow_sale-input_close" icon={faXmark} onClick={() => setFollowSaleInput('')}/>
                </div>
                <button type="submit" className="footer__follow_sale-button" onClick={e => e.preventDefault()}>Подписаться</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
