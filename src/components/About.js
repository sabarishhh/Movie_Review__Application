import React from 'react'
import Gif from './Logo.gif'
import Social from './Social.png'
function About(){
    return(
        <div className="contain">
            <center><div className="tit">
               <img src={Gif} alt="gif"/>
               </div>
               <div className="con">
                   <p>Mail: moviereview@gmail.com</p>
                   <p>Phone: 044-324623847623</p>
                   <p>Follow us on social media </p>
                   <img src={Social} alt="social media" width="15%"/>
                   <br/><p>Copyright © 2021 Movie Review</p>
                   </div>
                  
            </center>
            </div>
        

    );
}

export default About;   