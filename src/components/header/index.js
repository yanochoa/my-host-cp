import React from "react";

import "./_header.scss";
import logo from "./logo-my-host.png";

const Header = () => (
  <header className="header">
    <div className="special">
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <img className="header-logo" src={logo} alt="logo" />

            <nav className="header-nav">
              <ul className="header-nav-list">
                <li className="header-nav-list-item">
                  <a href="#features">My Listings</a>
                </li>

                <li className="header-nav-list-item">
                  <a href="#howto">How To</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
