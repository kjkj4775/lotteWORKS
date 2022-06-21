import React, { useState } from "react";
import './LTgallery.css';

function LTgallery() {

    const [isScrolled, setIsScrolled]= useState(false);
    window.addEventListener('scroll', ()=>{
        console.log(window.scrollY);
        if(window.scrollY >= 1100 ){
          setIsScrolled(true);
        }else{
          setIsScrolled(false);
        }
    })
    
  return (
    <div className="gallery">
        <div className="GA_secton1">
            <div className="GA_animate">
                <img src="/image/gallery.jpeg" alt="" />
            
            {isScrolled &&
            <div className="ani animate">
                <div className="lab_lotte">
                    <a href="">롯데백화점 문화센터</a>
                </div>

                <div className="lab_lifestyle">
                    <a href="">당신의 라이프스타일 연구소</a>
                </div>
                <div className="lab_class">
                    <a href="">다채롭고 수준 높은 클래스를 통한 고품격 고감성의
                    <br/>복합 문화공간을 즐겨보세요</a>
                </div>
            </div>
        }
        

            <div className="munwha_button">
                <button className="button1">문화센터 바로가기</button>
            </div>
            </div>
        </div>

        <div className="GA_secton2">
            <img src="/image/gallery_pic.jpeg" alt="" />
        </div>
    </div>
  );
}

export default LTgallery;