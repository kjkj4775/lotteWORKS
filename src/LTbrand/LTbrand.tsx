import React, { useState } from "react";
import './LTbrand.css';

function LTbrand() {

    const [isScrolled, setIsScrolled]= useState(false);
    window.addEventListener('scroll', ()=>{
        console.log(window.scrollY);
        if(window.scrollY >= 2650){
          setIsScrolled(true);
        }else{
          setIsScrolled(false);
        }
    })
    
  return (
    <div className="brand">
        <div className="sec1">
            <div className="lab_animate">
                <img src="/image/brand1.png" alt="" />
            
            
            {isScrolled &&
            <div className="ani animate">
                <div className="lab_lotte">
                    <a href="">롯데에서만 만날 수 있는 브랜드</a>
                </div>

                <div className="lab_lifestyle">
                    <a href="">앨리든,롯데탑스,남파고택,시시호시 등 롯데백화점에서만 만날 수 있는 특별한 브랜드를 소개합니다
                    </a>
                </div>
            </div>
        }
            </div>
                <div className="munwha_button">
                    <button className="button1">전체보기</button>
                </div>
        </div>


        <div className="sec2">
            <div className="pic1">
                <img src="/image/brand_img_01.jpeg" alt="" />
                <div className="word">
                    <a href="">앨리든</a>
                </div>
            </div>
            <div className="pic2">
                <img src="/image/brand_img_02.jpeg" alt="" />
                <div className="word">
                <a href="">롯데탑스</a>
                </div>
            </div>
            <div className="pic3">
                <img src="/image/brand_img_03.jpeg" alt="" />
                <div className="word">
                <a href="">남파고택</a>
                </div>
            </div>
            <div className="pic4">
                <img src="/image/brand_img_04.jpeg" alt="" />
                <div className="word">
                <a href="">시시호시</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LTbrand;