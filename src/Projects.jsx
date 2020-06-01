import React, {Component} from 'react';
import projects from './data/projects'

class Project extends Component{



    render(){
        return(
            <div>
                <h2>Highlighted projects</h2>
                <div>
                    {
                        projects.map(PRO=>{
                            return(
                                <div>
                            <img src={PRO.image} ></img>    
                            <div key={PRO.id}>{PRO.title}</div>
                            <div key={PRO.id}>{PRO.description}</div>
                            <div key={PRO.id}>{PRO.link}</div>
                                </div>
                            )
                        })
                    }
                   
                </div>

            </div>
        )

    }
}
export default Project