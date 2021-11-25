import React  from "react";

const VideoDetail = (props)=>{
    
    console.log("atthe Videop Det", props)
    if(!props.displayThisVideo){
        return(
            <div> Loading </div>
        )
    }
  
    else{
        const vidSrc = `https://www.youtube.com/embed/${props.displayThisVideo.id.videoId}`
        return(
            <div>
                <div className="ui embed">
                <iframe title='video player'    src={vidSrc} />
                </div>
                <div className="ui segment">
                    <h4 className=" ui header ">
                    {props.displayThisVideo.snippet.title}
                   
                    </h4>
                    <p>
                        {props.displayThisVideo.snippet.description}
                    </p>
            
                </div>
              
            </div>
        )
    }
    
}
export default VideoDetail;