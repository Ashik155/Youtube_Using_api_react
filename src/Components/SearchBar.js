import React from "react";


class SerachBar extends React.Component{

    

    state = {term : 'type keyword here'}

    onInputChange = (e)=>{
    
        this.setState({
            term : e.target.value
        })
        
    }

    onFormSubmit = (e)=>{
        e.preventDefault()
        console.log("this Term Will be submit for api...", this.state.term)
        this.props.runThisWhenUserCallsSubmit(this.state.term)
    }
    
    render(){
        console.log("term,",this.state.term)
        return (
            <div className="search-bar ui segment"> 
                <form  
                onSubmit={
                        this.onFormSubmit
                } className="ui form">
                    <div className=" field">
                    <label>
                        Search
                    </label>
                    <input type="text" value={this.state.term}
                    onChange= {this.onInputChange} >
                    </input>
                    </div>
                   
                </form>
            </div>
        )
    }
}

export default SerachBar;