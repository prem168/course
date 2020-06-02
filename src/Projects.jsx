import React, {Component} from 'react';
import projects from './data/projects'

class Project extends Component{
    render(){
        console.log("this.props",this.props)
        return(
            <div>
                {this.props.projects}
            </div>
           
        )
    }
}
class Projects extends Component{


    
    
    render(){
        return(
            <div>
                
                <h2>Highlighted projects</h2>
                <div>
                    {
                        projects.map(PRO=>{
                            return(
                                <Project key={PRO.id} project={PRO}/>
                            //     <div>
                            // <img src={PRO.image} ></img>    
                            // <Project key={PRO.id}>{PRO.title}</Project>
                            // <div key={PRO.id}>{PRO.description}</div>
                            // <div key={PRO.id}>{PRO.link}</div>
                            //     </div>
                            )
                        })
                    }
                   
                </div>

            </div>
        )

    }
}
export default Project