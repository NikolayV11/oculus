import * as React from "react";
import "./App.css";

import { HandySvg } from "handy-svg";

import logo from "./img/Oculus_Quest_logo.svg";
import basket from "./img/basket.svg";
import { url } from "inspector";

function App() {
  return (
    <>
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
        <div className="top">
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
        </div>
      </main>
    </>
  );
}

export default App;
