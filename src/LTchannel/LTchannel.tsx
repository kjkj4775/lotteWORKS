import React, { useState } from "react";
import './LTchannel.css';

function LTchannel() {

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
    <div className="channel mg-top">
        <div className="CH_secton1">
            <div className="CH_animate">
                <img src="/image/channel_letter.png" alt="" />
            
            {isScrolled &&
            <div className="ani animate">
                <div className="lab_lotte">
                    <a href="">롯데백화점 쇼핑소식을<br/>가장 빠르게 만나보세요!</a>
                </div>

                <div className="lab_class">
                </div>
            </div>
        }
        

            <div className="CH_button">
                <div className="insta">
                <button className="button1"></button>
                </div>
            </div>
            </div>
        </div>

        <div className="CH_secton2">
            <img src="/image/channel_pic.jpeg" alt="" />
        </div>
    </div>
  );
}

export default LTchannel;