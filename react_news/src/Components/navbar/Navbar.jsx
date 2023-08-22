import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar" className="navbar">
      <div className="menu_mobile">
        <i
          id="side-menu"
          className="fa-solid fa-bars fa-xl"
          style="color: #000000;"></i>
        <div
          id="displayMenu"
          className="menu-items-outer"
          style="display: none;">
          <div className="logo_new">
            <img
              src="https://images.news18.com/assam/uploads/2020/11/desktop-assam-navlogo.png"
              alt="logo"
            />
            <i
              id="close"
              className="fa-solid fa-xmark fa-xl"
              style="color: #000000;"></i>
          </div>
          <div className="links menu-links" id="link">
            <div className="horizontal-line"></div>
            <a href="#" className="active">
              অসম
            </a>
            <div className="horizontal-line"></div>
            <a href="#">দেশ</a>
            <div className="horizontal-line"></div>
            <a href="#">অপৰাধনামা</a>
            <div className="horizontal-line"></div>
            <a href="#">মনোৰঞ্জন</a>
            <div className="horizontal-line"></div>
            <a href="#">ব্যৱসায়</a>
            <div className="horizontal-line"></div>
            <a href="#">ক্ৰীড়া</a>
            <div className="horizontal-line"></div>
            <a href="#">জীৱনশৈলী</a>
            <div className="horizontal-line"></div>
            <a href="#">প্ৰযুক্তি</a>
            <div className="horizontal-line"></div>
          </div>
          <div className="follow-icons follow-menu">
            <a href="https://facebook.com/" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                className="social-icon"
              />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img
                src="https://w7.pngwing.com/pngs/421/879/png-transparent-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf-media.png"
                className="social-icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="news-logo">
        <img
          src="https://images.news18.com/assam/uploads/2020/11/desktop-assam-navlogo.png"
          alt="website-logo"
        />
      </div>
      <div className="second-half">
        <div className="search-box">
          <div className="search-box-outer">
            <input
              type="text"
              placeholder="Search"
              id="search"
              className="search"
              autocomplete="off"
            />
            <i
              className="fa-solid fa-magnifying-glass"
              style="color: rgb(0, 0, 0, 0.6);"></i>
          </div>
          <div className="follow-icons">
            <a href="https://facebook.com/" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                className="social-icon"
              />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img
                src="https://w7.pngwing.com/pngs/421/879/png-transparent-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf-media.png"
                className="social-icon"
              />
            </a>
          </div>
        </div>
        <div className="links" id="link">
          <a href="#">অসম</a>
          <a href="#">দেশ</a>
          <a href="#">অপৰাধনামা</a>
          <a href="#">মনোৰঞ্জন</a>
          <a href="#">ব্যৱসায়</a>
          <a href="#">ক্ৰীড়া</a>
          <a href="#">জীৱনশৈলী</a>
          <a href="#">প্ৰযুক্তি</a>
        </div>
      </div>
    </div>
  );
}
