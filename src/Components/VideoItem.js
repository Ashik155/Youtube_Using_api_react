import React from 'react';
import "./vi.css";

const VideoItem = (props)=>{
    console.log(props)
    return(
    
        <div onClick={e=>{props.onVideoSelect(props.video)}} className="video-item item "> 
            <img className="ui  image" alt={props.video.snippet.title} src={  props.video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">
                {props.video.snippet.title} 
                </div>
            
            </div>
           
       </div>
    
           
    )
}

export default VideoItem;