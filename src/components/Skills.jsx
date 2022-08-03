import React from "react";
import "../components/Skills.css";
import { FaNodeJs } from "react-icons/fa";
import { AiFillHtml5  } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";

const Skills = () => {
   return (
      <div className="s">
        <h1>TECH STACK</h1>
         <div className="center">
            <div className="txt">
               <p>
                  MERN Stack developer with major focus on JavaScript and React.
                  Proficient in HTML, CSS, Bootstrap, JavaScript, 
                  React JS, Redux, node.js, Express, MongoDB, SQL and Git. Over the
                  next few weeks and months I plan on learning Next.js and React
                  Native.
               </p>
            </div>
            <div className="skills">
               <div className="icons_info">
                  <FaNodeJs
                     size={90}
                     style={{
                        background: "yellow",
                        borderRadius: "20px",
                        display: "inline-block",
                        padding: "5px",
                     }}
                  />
                  <h3>JAVASCRIPT</h3>
               </div>
               <div className="icons_info">
                  <AiFillHtml5
                     size={90}
                     style={{
                        background: "#ff7530",
                        borderRadius: "20px",
                        display: "inline-block",
                        padding: "5px",
                     }}
                  />
                  <h3>HTML</h3>
               </div>
               <div className="icons_info">
                  <IoLogoCss3
                     size={90}
                     style={{
                        background: "#2a88fa",
                        borderRadius: "20px",
                        display: "inline-block",
                        padding: "5px",
                     }}
                  />
                  <h3>CSS</h3>
               </div>
               <div className="icons_info">
                  <RiReactjsFill
                     size={90}
                     style={{
                        background: "#3a92fc",
                        borderRadius: "20px",
                        display: "inline-block",
                        padding: "5px",
                     }}
                  />
                  <h3>REACT</h3>
               </div>
               <div className="icons_info">
                  <DiMongodb
                     size={90}
                     style={{
                        background: "#e1edfc",color:'green',
                        borderRadius: "20px",
                        display: "inline-block",
                        padding: "5px",
                     }}
                  />
                  <h3>MONGODB</h3>
               </div>
               <div className="icons_info">
                  <SiMysql
                     size={90}
                     style={{
                        background: "#ffb742",
                        borderRadius: "20px",
                        display: "inline-block",
                        padding: "5px",
                     }}
                  />
                  <h3>SQL</h3>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Skills;
