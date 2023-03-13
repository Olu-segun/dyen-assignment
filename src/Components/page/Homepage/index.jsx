import React from "react";
import { Icon } from "../../atoms/Icons";

export const Homepage = () => {
return (
<div className="Landingpage">

        <div className="Top">
             <Icon type="hamburger" width="24px"/>  
             <h2><a href="https://www.youtube.com/" target="blank"> YouTube<sup style={{color:"black"}}>NG</sup></a></h2>
             <Icon type= 'search' width= "15px"/>  
             <Icon type= 'audio' width= "15px"/> 
             
             
        </div>
            

        <div className="Left">
            <div className="home">  <a href="https://www.youtube.com/" target="blank">Home</a> </div>
            <div className="shots"> <a href="https://www.youtube.com/shorts/jRas1tC-vfw" target="blank">Shorts</a> </div>
            <div><a href="https://www.youtube.com/feed/subscriptions" target="blank">Subscriptions</a></div>
            <div><a href="https://www.youtube.com/feed/library" target="blank"> Library</a> </div>
            
            
            <div><a href="https://www.youtube.com/playlist?list=WL">Watch Later</a></div>
           
        </div>


    

        <div>Middle</div>
        
</div>
        

)
      
    
}