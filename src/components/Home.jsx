import React from "react";
import "../components/Home.css";
import k from "../images/twi-logo.jpg";
import h from "../images/git.png";
import j from "../images/link.png";

const Home = () => {
   return (
      <div className="zz">
         <div className="jj">
            <h1>T V AMOGH</h1>
            <h2>Web Developer</h2>
            <div className="tt">
               <a href="https://twitter.com/Arceus_98" target="_blank">
                  <img src={k} alt="twitter-logo" />
               </a>
               <a href="https://github.com/AmoghGowda98" target="_blank">
                  <img src={h} alt="instagram-logo" />
               </a>
               <a
                  href="https://www.linkedin.com/in/amogh-gowda-705b521a9/"
                  target="_blank"
               >
                  <img src={j} alt="linkdin-logo" />
               </a>
            </div>
         </div>
      </div>
   );
};

export default Home;
