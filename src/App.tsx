import * as React from "react";
import "./App.css";

import { HandySvg } from "handy-svg";

import logo from "./img/Oculus_Quest_logo.svg";
import basket from "./img/basket.svg";
import play from "./img/play.svg";

type tabsBtnItemType = { title: string; data: number };
type tabsContentType = { title: string; text: string; urlImg: string; textBtn: string };
type gameItemType = {
  title: string;
  urlImg: string;
  urlLink: string;
  textLink: string;
  text: string;
};
type accessoriesType = {
  title: string;
  text: string;
  price: number;
  price2: number;
  imgUrl: string;
};
const tabsBtnItem: tabsBtnItemType[] = [
  { title: "01 Graphics", data: 0 },
  { title: "02 Controls", data: 1 },
  { title: "03 Processor", data: 2 },
  { title: "04 Set up your play area", data: 3 },
  { title: "05 Gardian activity", data: 4 },
  { title: "06 Headset casting", data: 5 },
];

const tabsContent: tabsContentType[] = [
  {
    title: "Graphics",
    text: "With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible",
    urlImg: "/img/content_1.jpg",
    textBtn: "Watch the video",
  },
  {
    title: "Graphics",
    text: "With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible",
    urlImg: "/img/content_1.jpg",
    textBtn: "Watch the video",
  },
  {
    title: "Graphics",
    text: "With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible",
    urlImg: "/img/content_1.jpg",
    textBtn: "Watch the video",
  },
  {
    title: "Graphics",
    text: "With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible",
    urlImg: "/img/content_1.jpg",
    textBtn: "Watch the video",
  },
  {
    title: "Graphics",
    text: "With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible",
    urlImg: "/img/content_1.jpg",
    textBtn: "Watch the video",
  },

  {
    title: "Graphics",
    text: "With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps to 360 0 videos look beyond incredible",
    urlImg: "/img/content_1.jpg",
    textBtn: "Watch the video",
  },
];

const gameItem: gameItemType[] = [
  {
    title: "Blade & Sorcery: Nomad",
    urlImg: "/img/game_1.jpg",
    urlLink: "#",
    textLink: "see more",
    text: "Step into a medieval fantasy sandbox that uses phisics to serve up some of the most realistic combat in VR",
  },
  {
    title: "Population: One",
    urlImg: "/img/game_2.jpg",
    urlLink: "#",
    textLink: "see more",
    text: "Climb anything. Fight everywhere. Experience battle royale only possible in VR",
  },
  {
    title: "Supernatural",
    urlImg: "/img/game_3.jpg",
    urlLink: "#",
    textLink: "see more",
    text: "Box, Flow, Meditate and Stretch with real coaches in stunning destinations from around the world. Enjoy new workouts every day.",
  },
];

const accessories: accessoriesType[] = [
  {
    title: "Meta Quest 2 Carrying Case",
    text: "Protect your system–at home or away.",
    price: 59.99,
    price2: 0,
    imgUrl: "/img/acce_1.jpg",
  },
  {
    title: "Link Cable",
    text: "Harness the power of your PC with this premium fiber-optic cable.",
    price: 79.99,
    price2: 0,
    imgUrl: "/img/acce_2.jpg",
  },
  {
    title: "Meta Quest 2 Active Pack",
    text: "A wipeable facial interface, wrist straps, and knuckle straps.",
    price: 69.99,
    price2: 0,
    imgUrl: "/img/acce_3.jpg",
  },
  {
    title: "Meta Quest Gift Cards",
    text: "Redeemable on 350+ games and apps.",
    price: 15,
    price2: 50,
    imgUrl: "/img/acce_4.jpg",
  },
];

function App() {
  const [activeBtn, setActiveBtn] = React.useState<number>(0);

  function onClickBtn(dataId: number) {
    setActiveBtn(dataId);
  }
  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <ul className="menu">
              <li className="menu__list">
                <a href="#" className="menu__link">
                  SHOP
                </a>
              </li>
              <li className="menu__list">
                <a href="#" className="menu__link">
                  GAMES
                </a>
              </li>
              <li className="menu__list">
                <a href="#" className="menu__link">
                  METAVERSE
                </a>
              </li>
            </ul>
            <a className="logo" href="#">
              <HandySvg src={logo} />
            </a>
            <a className="basket" href="#">
              <HandySvg src={basket} />
              <span>9</span>
            </a>
          </nav>
        </div>
      </header>
      <main className="main">
        <section className="top">
          <div className="container">
            <h1 className="title">Meta Quest 2</h1>
            <p className="subtitle">Get an Elite Strap free</p>
            <p className="top__text">
              For a limited time only, save $59.99 USD. Offer ends 1/19/23
            </p>
            <button className="buy-btn">
              <span className="buy-btn__text">BUY NOW</span>
              <span className="buy-btn__price">399,99 USD</span>
            </button>
            <p className="buy__text">Meta Quest 2 is for ages 13+</p>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <div className="features__titles">
              <h2 className="features__title section-title">PRODUCT FEATURES</h2>
              <p className="features__text">Easy to set up and safe to use</p>
            </div>
            <div className="tabs">
              <div className="tabs__btn">
                {tabsBtnItem.map((items): any => {
                  return (
                    <button
                      key={items.data}
                      onClick={() => onClickBtn(items.data)}
                      className={`tabs__btn-item ${
                        activeBtn === items.data ? "tabs__btn-item--active" : ""
                      }`}>
                      {items.title}
                    </button>
                  );
                })}
              </div>
              <div className="tabs__content">
                {tabsContent.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`tabs__content-item ${
                        activeBtn === index ? "tabs__content-item--active" : ""
                      }`}>
                      <img className="tabs__content-img" src={item.urlImg} alt="content_1" />
                      <div className="tabs__content-box">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                      <div className="video">
                        <button className="video__btn">
                          <HandySvg src={play} />
                        </button>
                        <span>{item.textBtn}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="game">
          <div className="container">
            <h2 className="section-title game__title">GAMES</h2>
            <div className="game__inner">
              <div className="game__descr">
                <p className="game__descr-title">It’s all fun and games</p>
                <p className="game__descr-text">
                  Discover new adventures, master epic challenges or revisit classic moments in your
                  favourite games and experiences
                </p>
                <a className="game__descr-link" href="#">
                  SEE ALL GAMES
                </a>
              </div>

              {gameItem.map((item, index) => {
                return (
                  <div key={index} className="game__item">
                    <img className="game__item-img" src={item.urlImg} alt="" />
                    <h3 className="game__item-title">{item.title}</h3>
                    <p className="game__item-text">{item.text}</p>
                    <a href={item.urlLink} className="game__item-link">
                      {item.textLink}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="buy">
          <p className="buy__bg">OCULUS</p>
          <img src="/img/oculus.png" alt="" className="buy__img" />{" "}
          <button className="buy-btn buy-btn-oculus">
            <span className="buy-btn__text">BUY NOW</span>
            <span className="buy-btn__price">399,99 USD</span>
          </button>
          <p className="buy__text">Meta Quest 2 is for ages 13+</p>
        </div>
        <section className="equipment">
          <div className="container">
            <h2 className="equipment__title section-title">IN THE BOX</h2>
            <div className="equipment__box">
              <div className="equipment__box-item equipment__box-item--one">
                <img src="/img/eq_1.png" alt="" className="equipment__box-img" />
                <p className="equipment__box-text">VR Headset</p>
              </div>
              <div className="equipment__box-item">
                <img src="/img/eq_2.png" alt="" className="equipment__box-img" />
                <p className="equipment__box-text">Two Touch Controllers & AA Batteries</p>
              </div>
              <div className="equipment__box-item">
                <p className="equipment__box-title">What's included</p>
              </div>
              <div className="equipment__box-item">
                <img src="/img/eq_3.png" alt="" className="equipment__box-img" />
                <p className="equipment__box-text">Charging Cable & Power Adapter</p>
              </div>
              <div className="equipment__box-item">
                <img src="/img/eq_4.png" alt="" className="equipment__box-img" />
                <p className="equipment__box-text">Glasses Spacer</p>
              </div>
            </div>
          </div>
        </section>
        <div className="promo">
          <div className="container">
            <div className="promo__inner">
              <button className="promo__btn">GO</button>
            </div>
          </div>
        </div>
        <section className="accessories">
          <div className="container">
            <h2 className="accessories__title section-title">ACCESSORIES</h2>
            <p className="accessories__text">Personalize every experience</p>
            <div className="accessories__items">
              {accessories.map((item, index) => {
                return (
                  <div key={index} className="accessories__item">
                    <img className="accessories__item-img" src={item.imgUrl} alt="" />
                    <h3 className="accessories__item-title">{item.title}</h3>
                    <p className="accessories__item-text">{item.text}</p>
                    <p className="accessories__item-price">
                      ${item.price}
                      {item.price2 > 0 ? `-${item.price2}` : ""} USD
                    </p>
                    <button className="accessories__item-btn">BUY NOW</button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
