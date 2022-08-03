import React from "react";
import "../components/About.css";
import y from "../images/profile.jpeg";

const About = () => {
   return (
      <div className="a">
         <div className="gg2">
            <div className="txt">
               <h1>About Me</h1>
               <p>
                  I'm T.V.Amogh from Bangalore, and I build cool web apps. I
                  really enjoy learning languages and frameworks like JavaScript
                  and React. I also enjoy building MERN applications. I have
                  specialised thus far in MERN technologies and I am currently
                  thinking of learning Node JS and Express JS
               </p>

               <h2>EDUCATION</h2>
               <h3>BACHELORS:</h3>
               <div className="span">
                  <span>Dayananda Sagar College Of Engineering -</span>
                  <span>7.6 CGPA</span>
               </div>
               <h3>PUC:</h3>
               <div className="span">
                  <span>SriChaitanya PU College</span>
               </div>
               <h3>SCHOOL:</h3>
               <div className="span">
                  <span>BGS Public School</span>
               </div>
            </div>

            <img src={y} alt="" className="imggg" />
         </div>
      </div>
   );
};

export default About;
