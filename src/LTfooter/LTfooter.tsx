import React, { useState } from "react";
import './LTfooter.css';

function LTfooter() {
  return (
    <div className="footer">
        <div className="centerbox">
            <div className="inner">
                <div className="lottes">
                    <a>롯데쇼핑(주)</a>
                </div>
                <div className="menu">
                        <li>자주하는 질문</li>
                        <li>온라인상담실</li>
                        <li>상담실안내</li>
                        <li>가상계좌</li>
                        <li>공지사항</li>
                </div>
                <div className="btn_top">
                    <a>TOP</a>
                </div>
            </div>
        </div>

        <div className="inner">
            <div className="box_wrap03">
                <div className="family_warp">
                    <div className="family_text">
                        <button>LOTTEFAMILY</button>
                    </div>
                </div>
            </div>
            <div className="box_wrap02">
                <div className="link_box">
                </div>
            </div>
        </div>
    </div>
  );
}

export default LTfooter;