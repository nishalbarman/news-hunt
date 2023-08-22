import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [mobileInputValue, setMobileInputValue] = useState("");
  const [sideMenuShow, setSideMenuShow] = useState(false);

  const handleMobileSearchClick = () => {};

  const handleMobileSearchChange = (e) => {
    console.log(e.target.value);
    setMobileInputValue(e.target.value);
  };

  const handleMobileMenu = () => {
    setSideMenuShow(true);
  };

  const handleNavClose = () => {
    setSideMenuShow(false);
  };

  return (
    <div id="navbar" className={styles.navbar}>
      {!sideMenuShow || (
        <div
          onClick={() => {
            setSideMenuShow(false);
          }}
          className={styles.black_screen_cover}></div>
      )}
      <div className={styles.menu_mobile}>
        <i
          onClick={handleMobileMenu}
          id={styles.side_menu}
          className="fa-solid fa-bars fa-xl"
          style={{ color: "#000000" }}></i>
        <div
          id="displayMenu"
          className={`${styles.menu_items_outer}`}
          style={{
            display: sideMenuShow ? "block" : "none",
            left: sideMenuShow ? "0" : "-80%",
          }}>
          <div className={styles.logo_new}>
            <img
              src="https://images.news18.com/assam/uploads/2020/11/desktop-assam-navlogo.png"
              alt="logo"
              className={sideMenuShow ? styles.fadeIn : styles.fadeOut}
            />
            <i
              id={styles.close}
              className="fa-solid fa-xmark fa-xl"
              style={{ color: "#000000" }}
              onClick={handleNavClose}></i>
          </div>
          <div className={`${styles.links} ${styles.menu_links}`} id="link">
            <div className={styles.horizontal_line}></div>
            <div className={styles.mobile_menu_search}>
              <input
                type="text"
                placeholder="Search for news ..."
                onChange={handleMobileSearchChange}
              />
              <button onClick={handleMobileSearchClick}>Search</button>
            </div>
            <div className={styles.horizontal_line}></div>
            <a href="#" className={styles.active}>
              অসম
            </a>
            <div className={styles.horizontal_line}></div>
            <a href="#">দেশ</a>
            <div className={styles.horizontal_line}></div>
            <a href="#">অপৰাধনামা</a>
            <div className={styles.horizontal_line}></div>
            <a href="#">মনোৰঞ্জন</a>
            <div className={styles.horizontal_line}></div>
            <a href="#">ব্যৱসায়</a>
            <div className={styles.horizontal_line}></div>
            <a href="#">ক্ৰীড়া</a>
            <div className={styles.horizontal_line}></div>
            <a href="#">জীৱনশৈলী</a>
            <div className={styles.horizontal_line}></div>
            <a href="#">প্ৰযুক্তি</a>
            <div className={styles.horizontal_line}></div>
          </div>
          <div className={`${styles.follow_icons} ${styles.follow_menu}`}>
            <a href="https://facebook.com/" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                className={styles.social_icon}
              />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img
                src="https://w7.pngwing.com/pngs/421/879/png-transparent-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf-media.png"
                className={styles.social_icon}
              />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${styles.news_logo} ${
          !sideMenuShow ? styles.fadeIn : styles.fadeOut
        }`}>
        <img
          src="https://images.news18.com/assam/uploads/2020/11/desktop-assam-navlogo.png"
          alt="website-logo"
        />
      </div>
      <div className={styles.second_half}>
        <div className={styles.search_box}>
          <div className={styles.search_box_outer}>
            <input
              type="text"
              placeholder="Search"
              id="search"
              className={styles.search}
              autoComplete="off"
            />
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "rgb(0, 0, 0, 0.6)" }}></i>
          </div>
          <div className={styles.follow_icons}>
            <a href="https://facebook.com/" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                className={styles.social_icon}
              />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img
                src="https://w7.pngwing.com/pngs/421/879/png-transparent-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf-media.png"
                className={styles.social_icon}
              />
            </a>
          </div>
        </div>
        <div className={styles.links} id="link">
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
