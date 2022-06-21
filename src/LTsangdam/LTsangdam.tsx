import React, { useState } from "react";
import './LTsangdam.css';

function LTsangdam() {

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
    <div className="sangdam">
        <div className="mvg_loot">
            <div className="mvg_sec1">
                <div className="lab_animate">
            
            
            {isScrolled &&
            <div className="ani animate">
                <div className="lab_lotte">
                    <a href="">롯데백화점 상담실 안내</a>
                </div>

                <div className="lab_lifestyle">
                    <a href="">
                        온라인상담실 운영시간은 10:30 ~ 18:30입니다
                    </a>
                </div>
            </div>
        }
            </div>
                
        </div>


        <div className="mvg_sec2">
            <div className="pic1">
                <img src="/image/sangdam_notice.jpeg" alt="" />
            </div>
            <div className="mvg_button">
                <button className="button1">우수고객 혜택</button>
            </div>
        </div>
    </div>
    </div>
  );
}

export default LTsangdam;