/** @format */
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import HomeCss from "./Home.module.css";
function Home() {
  return (
    <div className='home'>
      <p className={HomeCss.hellow}>HELLO</p>
      <h1>
        I'm
        <span className={HomeCss.position}>
          <Typewriter
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            words={[" Mohamed Rashed", " UI Developer", " UI/UX Designer"]}
          />
        </span>
      </h1>
    </div>
  );
}

export default Home;
