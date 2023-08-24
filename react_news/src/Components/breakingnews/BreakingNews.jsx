import React from "react";
import CityAnchor from "./CityAnchor";

function BreakingNews() {
  return (
    <div id="axom-breaking-news" className="news-div-first">
      <div className="news-div-titles">
        <h3>অসম</h3>
        <div className="news-title-buttons">
          <CityAnchor name="আটাইবোৰ" className="active_news_button" />
          <CityAnchor name="Nalbari" className="" />
          <CityAnchor name="Sonitpur" className="" />
          <CityAnchor name="Guwahati" className="" />
          <CityAnchor name="Jorhat" className="" />
          <CityAnchor name="Dibrugarh" className="" />
          {/* <a id="nalbari" href="#"></a>
          <a id="sonitpur" href="#"></a>
          <a id="gauhati" href="#"></a>
          <a id="jorhat" href="#"></a>
          <a id="dibrugarh" href="#"></a> */}
        </div>
      </div>
      <div className="news-card-content">
        <div id="axom-breaking-big-card-append">
          {/*---------------------------------------*/}
          {/* Big card is going to be appended here */}
          {/*---------------------------------------*/}
        </div>
        <div className="vertical-devider" />
        <div id="axom-breaking-vertical-append" className="axom-news-cards">
          {/*---------------------------------------*/}
          {/* 5 cards are going to be appended here */}
          {/*---------------------------------------*/}
        </div>
        <div className="vertical-devider" />
        <div>
          <div id="axom-breaking-medium-card-append">
            {/*------------------------------------------*/}
            {/* Medium card is going to be appended here */}
            {/*------------------------------------------*/}
          </div>
          <br />
          <div className="watch-more-button" id="watch-more-assam">
            <a href="#">অধিক পঢ়ক </a>
            <i
              className="fa-solid fa-arrow-right"
              style={{ color: "#ff0000" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreakingNews;
