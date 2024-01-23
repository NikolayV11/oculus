import * as React from "react";
import "./App.css";

import { HandySvg } from "handy-svg";

import logo from "./img/Oculus_Quest_logo.svg";
import basket from "./img/basket.svg";

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
    </>
  );
}

export default App;
