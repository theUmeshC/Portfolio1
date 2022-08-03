import React from "react";
import "../components/Contact.css";
import {ImLocation2} from 'react-icons/im'
import {AiOutlineMail} from 'react-icons/ai'
import {FcContacts} from 'react-icons/fc'

const Contact = () => {
   return (
      <div className="c">
         <div className="header">
            <h1>CONTACT ME</h1>
         </div>
         <div className="mail">
            <div className="footer">
               <div className="mm">
                  <span><i><ImLocation2 size={20} style={{marginRight:'10px'}}/></i> Location:</span>
                  <span>RR Nager, Bangalore</span>
               </div>
               <div className="mm">
               <i><AiOutlineMail size={20} style={{marginRight:'10px'}}/></i> 
                  <span>Mail Id:</span>
                  <span>tv.amoghgowda@gmail.com</span>
               </div>
               <div className="mm">
                
               <i><FcContacts size={20} style={{marginRight:'10px'}}/></i> 
                  <span>Contact:</span>
                  <span>9535758314</span>
               </div>
            </div>
            <div>

            <form
               action="https://formsubmit.co/2eb5c5e764b2f09780c4ece550fa63a4"
               method="POST"
               >
                <h2>Message Me</h2>
               <div class="input">
                  <input type="text" name="Name" placeholder="Name" />
               </div>
               <div class="input">
                  <input
                     type="email"
                     name="email"
                     placeholder="Email Address"
                     required
                  />
               </div>
               <div class="input-txt">
                  <textarea id="message" rows="5"></textarea>
               </div>
               <button className="button bt">Submit</button>
            </form>
                     </div>
         </div>
      </div>
   );
};

export default Contact;
