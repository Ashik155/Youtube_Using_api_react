import React from "react";
import SerachBar from "./SearchBar";
import VideoList from "./VideoList";
import YoutubeApi from "./YoutubeApi";
import "./vi.css";
import VideoDetail from "./VideoDetail";
class App extends React.Component{


    state = {videos:[], selectedVideo:null}

    callYoutubeApi=async (keywordFromChild)=>{
        console.log("keyword Rec From the Child..", keywordFromChild)
        console.log("calling api with this kwyword... Loading please wait ")
       const vids = await YoutubeApi.get('/search',{
            params:{
                q: keywordFromChild
            }
        })
     
        this.setState({
            videos : vids.data.items,
            selectedVideo : vids.data.items[0]
        })
    }

componentDidMount= ()=>{
    this.callYoutubeApi('COVID UPDATE')
}
    onVideoSelect = (vid)=>{
        console.log("from the video comp,,,,,", vid)
        this.setState({selectedVideo: vid})
    }
    render (){
        console.log("Fetched Data", this.state.videos)
        return(
            <div className=" ui container "> 
             <SerachBar  runThisWhenUserCallsSubmit={this.callYoutubeApi}/>   
             <div className="ui grid">
                 <div className="ui row">
                 <div className="ui eleven wide column">
                <VideoDetail displayThisVideo={this.state.selectedVideo} />
                </div>
                <div  className="ui five wide column">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                </div>
                 </div>
                
             </div>
                 

             
        
            </div>
        )
    }
}

export default App;