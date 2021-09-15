import React from 'react'
import jtt from './jtt.jpg'
import loki from './loki.jpg'
import friends from './friends.jpeg'
function Wishlist(){
    return(
       <center>
           <h2 className="whead">WATCHLIST</h2>
           <div className="row1">
          <div className="column1">
            <img src={loki} width={280} className="poster" alt="loki"/>
            <p>LOKI</p>

          </div>
          <div className="column1">
            <img src={friends} width={280} className="poster" alt="friends"/>
            <p>F.R.I.E.N.D.S</p>

          </div>
          <div className="column1">
            <img src={jtt} width={270} className="poster" alt="jtt"/>
            <p>JAGAME THANTHIRAM</p>

          </div></div>
           </center>

    );
}

export default Wishlist;   