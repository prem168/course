import React, {Component} from 'react';
import projects from './data/projects'

class Project extends Component{
    constructor(title,description,link,title){
        super();

    }



    render(){
        return(
            <div>
                <h2>Highlighted projects</h2>
                <div>
                    {
                        projects.map(PRO=>{
                            return(
                                <div>
                            <img src={image} ></img>    
                            <div key={id}>{title}</div>
                            <div key={id}>{description}</div>
                            <div key={id}>{link}</div>
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