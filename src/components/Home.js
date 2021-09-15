import React from 'react'
import jl from './jl.png'
import jtt from './jtt.jpg'
import kong from './kong.jpg'
import loki from './loki.jpg'
import friends from './friends.jpeg'
import naruto from './naruto.jpg'
import Wish from './bookmark.png'
import {Link} from "react-router-dom";
import Signup from './Signup'
import Trailer from './trailer.jpg'
import Play from './play.png'
import Johnwick from './johnwick.jpg'
import Boys from './boys.jpg'
import Hh from './hh.jpg'
import Money from './money.jpg'
import Nav from './nav.jpeg'
import Sar from './sar.jpg'



function Home() {
  return (

    <center>
     
        <img src={Johnwick} alt="johnwick" className="cover" />
    
      <p className="newrel">|  New releases</p>
      <div className="newreleases">
        <img src={Trailer} alt="spiderman" className="noway" width="100%"/>
      </div>
      <div className="play">
        <a href="https://youtu.be/rt-2cxAiPJk"><img src={Play} alt="play button" width="35%"/></a>
      
        </div>
        <div className="watch">
          <p>Watch the teaser trailer</p>
        </div><br/>
        <p className="newrel">| Featured</p>
      <div classNamee="ho">
        <div className="row1">
          <div className="column1">

            <img src={jl} width={280} className="poster" />
            <p>JUSTICE LEAGUE</p>

          </div>
          <div className="column1">
            <img src={naruto} width={280} className="poster" />
            <p>NARUTO</p>

          </div>
          <div className="column1">
            <img src={kong} width={280} className="poster" />
            <p>GODZILLA vs KONG</p>
          </div></div>


        <div className="row1">
          <div className="column1">
            <img src={loki} width={280} className="poster" />
            <p>LOKI</p>

          </div>
          <div className="column1">
            <img src={friends} width={280} className="poster" />
            <p>F.R.I.E.N.D.S</p>

          </div>
          <div className="column1">
            <img src={jtt} width={270} className="poster" />
            <p>JAGAME THANTHIRAM</p>

          </div>
        </div>
      </div>

      <p className="newrel">|  WatchList</p>
      <div className="wishlist">
        <img src={Wish} alt="wishlist" width="66%"/>
        </div>
        <p className="wish">Watchlist</p>
        <p className="si">Lets you keep track of movie and TV shows you want to watch in a customized list</p>
        <p><Link to="/Signup" className="signin_wish" >Sign in</Link></p>
        <br/><p className="newrel">|  TV Shows</p>
        
        <div className="row2">
          <div className="column1">
          <a href="https://youtu.be/MN8fFM1ZdWo"><img src={Boys} width={280} className="poster" /></a>
            <p>THE BOYS</p>

          </div>
          <div className="column1">
          <a href="https://youtu.be/3eqxXqJDmcY"><img src={Hh} width={280} className="poster" /></a>
            <p> THE HAUNTING OF HILL HOUSE</p>

          </div>
          <div className="column1">
          <a href="https://youtu.be/p_PJbmrX4uk"><img src={Money} width={230} className="poster" /></a>
            <p>MONEY HEIST</p>

          </div>
          
        </div>
        <br/><p className="newrel">|  TOP PICKS</p>
        <div className="ro">
          <div className="colum">
          <a href="https://youtu.be/XTTAHt4VlUA"><img src={Sar} width={440} className="poster" /></a>
            <p>SARPATTA PARAMBARAI</p>

          </div>
          <div className="colum">
          <a href="https://youtu.be/Go6O1wX8H-c"><img src={Nav} width={350} className="poster" /></a>
            <p> NAVARASA</p>

          </div>
          </div>
    </center>
  );
};

export default Home;