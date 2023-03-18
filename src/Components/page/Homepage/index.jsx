import React from "react";

import { Icon } from "../../atoms/Icons";
import { Navbar } from "../../atoms/Button";
import { Text } from "../../atoms/Text";


export const Homepage = () => {
return (
<div className="Landingpage">

        <div className="Top">
            <div>
            <Icon className= "hamburger" type="hamburger" width="24px"/> 
            </div>

            <div className="Youtube">
            <Icon type= "Youtube-Logo" width="35px"/>

            </div>

            <div>
            <Icon className= "bell" type ="bell" width= "20"></Icon> 
            </div>

            <div>
            <Icon className= "audio" type= 'audio' width= "15px"/>
            </div>
            
        </div>

        <div className="Middle">
            <div className="Left">
                <Text/>
            </div>

            <div>
                <Navbar/>
            </div>
        </div>


        <div className="Videos">
        <iframe src="https://www.youtube.com/embed/UIIrq63KQZY" frameborder="8" title="Enoch" width={300} height= "200"></iframe>
        <iframe src="https://www.youtube.com/embed/g6JMYNMUXAQ" frameborder="8" title=" Arise News" width={300} height=
        {200}></iframe>

        <iframe src="https://www.youtube.com/embed/S6yadRofCsM" frameborder="8" title="Havard" width={300} height={200}></iframe>

        <iframe src="https://www.youtube.com/embed/xc3a_CJhjCc" frameborder="8" title="Havard" width={300} height={200}></iframe>
        </div>
        
        



</div>
)
}