import React from "react";
import { Icon } from "../Icons";

export const Text = () => {

    return (
    
        <div className="Left">
            
            <div> 
                <Icon type ="Home" width ="20px"/> &nbsp; &nbsp;
                < a href="https://www.youtube.com/" target="blank">Home</a>
            </div>

            <div> 
            <Icon type = "Shorts" width = "20px"/> &nbsp; &nbsp;
            <a href="https://www.youtube.com/shorts/jRas1tC-vfw" target="blank">Shorts</a> &nbsp; &nbsp;

            </div>

            <div className="Subscriptions">
                <Icon type = "Subscription" width = "20px"/> &nbsp; &nbsp;
                <a href="https://www.youtube.com/feed/subscriptions" target="blank">Subscriptions</a>
            </div>

            <div>
                <Icon type = "Library" width =  "20px"/> &nbsp; &nbsp;
                <a href="https://www.youtube.com/feed/library" target="blank"> Library</a> &nbsp; &nbsp;
            </div>

            <div>
                <Icon type= "History" width = "20px"/> &nbsp; &nbsp;
                <a href="https://www.youtube.com/feed/history">History</a>
            </div>

            <div>
                <Icon type = "Your-Video" width = "20px"/> &nbsp; &nbsp;
                <a href="https://studio.youtube.com/channel/UCuW2H0freSdFAJv_4oWWiAQ/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D"> Your Video</a> &nbsp; &nbsp;
            </div>

             <div>
                <Icon type = "Watch-later" width = "20PX" /> &nbsp; &nbsp;
                <a href="https://www.youtube.com/playlist?list=WL" target="blank">Watch Later</a>
            </div>

            <div>
                <Icon type= "Liked-Video" width = "20px"/> &nbsp; &nbsp;
                <a href="https://www.youtube.com/feed/history">Like Video</a>
            </div>

           
        </div>
    
    )
}