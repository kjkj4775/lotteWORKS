import React, { useState } from "react";
import './LTmagazine.css';

function LTmagazine() {

    const [isScrolled, setIsScrolled]= useState(false);
    window.addEventListener('scroll', ()=>{
        console.log(window.scrollY);
        if(window.scrollY >= 1700 ){
          setIsScrolled(true);
        }else{
          setIsScrolled(false);
        }
    })
    
  return (
    <div className="magazine">
        <div className="section1">
            <div className="lab_animate">
                <img src="/image/magazine_pic.png" alt="" />
            
            
            {isScrolled &&
            <div className="ani animate">
                <div className="lab_lotte">
                    <a href="">일상을 빛낼 트렌드 가이드</a>
                </div>

                <div className="lab_lifestyle">
                    <a href="">패션,문화,라이프 스타일의 최신 트렌드를 쉽고 빠르게 확인해 보세요
                    </a>
                </div>
            </div>
        }
            </div>
                <div className="munwha_button">
                    <button className="button1">문화센터 바로가기</button>
                </div>
        </div>


        <div className="section2">
            <div className="pic1">
                <img src="/image/book1.jpeg" alt="" />
                <div className="word">
                    <a href="">아티스트가 지구를 지키는 창의적인 방법들</a>
                </div>
                <button>매거진 보기</button>
            </div>
            <div className="pic2">
                <img src="/image/book2.jpeg" alt="" />
                <div className="word">
                <a href="">신혼부부 취향저격 아이템</a>
                </div>
                <button>매거진 보기</button>
            </div>
            <div className="pic3">
                <img src="/image/book3.jpeg" alt="" />
                <div className="word">
                <a href="">사랑하는 사람을 위한 선물</a>
                </div>
                <button>매거진 보기</button>
            </div>
        </div>
    </div>
  );
}

export default LTmagazine;