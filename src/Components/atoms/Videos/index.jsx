import React from "react";

export const Video = (props) => {

    if (props.type === 'Tutorial') {
        return (
            <video width={300} height={200} control>
                <source src="https://www.youtube.com/watch?v=vzGllw18DkA"/>
            </video>
        );
    }

    return  <div>Video</div>
}