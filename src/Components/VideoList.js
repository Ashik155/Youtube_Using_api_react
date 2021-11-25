import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) =>{

  
    const SingleVideos = props.videos.map(video=>{
        
        return <VideoItem key={video.id.videoId} onVideoSelect={props.onVideoSelect} video={video} />
    })
return(
    <div className="ui relaxed divided list"> {SingleVideos}</div>
)
}

export default VideoList;