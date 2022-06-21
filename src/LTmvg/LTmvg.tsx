import React, { useState } from "react";
import './LTmvg.css';

function LTmvg() {

    const [isScrolled, setIsScrolled]= useState(false);
    window.addEventListener('scroll', ()=>{
        console.log(window.scrollY);
        if(window.scrollY >= 4050){
          setIsScrolled(true);
        }else{
          setIsScrolled(false);
        }
    })
    
  return (
    <div className="mvg">
        <div className="mvg_loot">
            <div className="mvg_sec1">
                <div className="lab_animate">
                    <img src="/image/mvg_img.png" alt="" />
            
            
            {isScrolled &&
            <div className="ani animate">
                <div className="lab_lotte">
                    <a href="">진정한 가치가 있는 이름</a>
                </div>

                <div className="lab_lifestyle">
                    <a href="">
                        삶을 더욱 여유롭게 해줄 롯데백화점 VIP서비스, 비교 불가능한 특별한 서비스를 누려보세요
                    </a>
                </div>
            </div>
        }
            </div>
                <div className="mvg_button">
                    <button className="button1">우수고객 혜택</button>
                </div>
        </div>


        <div className="mvg_sec2">
            <div className="pic1">
                <img src="/image/mvg_large.jpeg" alt="" />
            </div>
        </div>
    </div>
    </div>
  );
}

export default LTmvg;