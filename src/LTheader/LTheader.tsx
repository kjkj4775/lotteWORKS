import React from "react";
import './LTheader.css';

function header() {
  return (
    <div className="header">
        <div className="navi_top">
              <div className="link_list">
                <ul className="link_select">
                  <li>
                    <a href="" title="">서비스</a>
                  </li>
                  <li>
                    <a href="" title="">우수고객라운지</a>
                  </li>
                  <li>
                   <a href="" title="">롯데갤러리</a>
                  </li>
                  <li>
                    <a href="" title="">롯데웨딩</a>
                  </li>
                  <li>
                    <a href="" title="">문화센터</a>
                  </li>
                  <li>
                    <a href="" title="">온라인상담실</a>
                  </li>
                  <a className="btn_search">
                    <img src="/image/header_icon.png" alt="" />
                  </a>
                </ul>
              </div>
                  
      </div>
        <div className="gnb_wrap">
          <h1>
            <img src="/image/header_logo.png " alt="" />
          </h1>
            <div className="menu3"> 
              <li className="backwha">
                <a href="">롯데백화점</a>
              </li>
              <li>아비뉴엘</li>
              <li>영플라자</li>
              <li>프리미엄아울렛</li>
              <li>아울렛</li>
              <li>롯데몰</li>
              <li>엘큐브</li>
              <div className="location">
              <img src="/image/location.png" alt="" />
              <a href="">지점/매장안내</a>
            </div>
            </div>
        </div>
    </div>
  );
}

export default header;