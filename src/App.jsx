import React,{Component} from 'react';
class App extends Component{
    constructor(){
        super();
        this.state={showbio:false,
        message:"read more"}
    }
    toggleshowbio=()=>{
        this.setState({showbio:!this.state.showbio})
        if(this.state.message="read more"){
            this.setState({message:"read less"})
        }
        else if(this.state.message="read less"){
            this.setState({message:"read more"})
        }
        console.log("worked")
    }
    render=()=>{
        
        
        return(
        <div>
            <h1>Hello World</h1>
            <p>This is Prem Sai, I'm a Software engineer.</p>
            <p>Im looking for a good opportunity to prove my best at a reputed organization</p>
            {
                this.state.showbio ?
                <div>
                <p>PREVIOUS EXPERIANCE</p>
                <p>Worked as Intern at Publicis Sapient</p>
               <p>I like to work on FrontEnd Development</p>
                </div>:null
           }
           <button onClick={this.toggleshowbio}>{this.state.message}</button>
           </div>
        )
    }
}
export default App;
