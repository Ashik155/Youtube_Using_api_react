import React from "react";
import SerachBar from "./SearchBar";

class App extends React.Component{


    callYoutubeApi=(keywordFromChild)=>{
        console.log("keyword Rec From the Child..", keywordFromChild)
        console.log("calling api with this kwyword... Loading please wait ")
    }
    render (){
        return(
            <div className="ui container "> 
             <SerachBar  runThisWhenUserCallsSubmit={this.callYoutubeApi}/>   
            </div>
        )
    }
}

export default App;