import React, { useState } from "react";
import './LTwedding.css';

function LTwedding() {

    const [isScrolled, setIsScrolled]= useState(false);
    window.addEventListener('scroll', ()=>{
        console.log(window.scrollY);
        if(window.scrollY >= 3350){
          setIsScrolled(true);
        }else{
          setIsScrolled(false);
        }
    })
    
  return (
    <div className="wedding">
        <div className="background">
            <img src="/image/wedding.jpeg" alt="" />
        </div>
        <div className="text_box">
            <div className="lab_animate text">
                <img src="/image/wedding2.png" alt="" />
            {isScrolled &&
            <div className="ani animate">
                <div className="lab_lotte">
                    <a href="">스마트한 결혼준비의 시작</a>
                </div>

                <div className="lab_lifestyle">
                    <a href="">
                        롯데백화점이 보증하는 고객 맞춤 웨딩서비스로 고객님의 설레는 출발을 응원합니다
                    </a>
                </div>
            </div>
        }
            </div>
                <div className="wedding_button ">
                    <button className="button1">롯데웨딩 바로가기</button>
                </div>

        </div>
    </div>
  );
}

export default LTwedding;