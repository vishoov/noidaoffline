import React from 'react'
import { useParams } from 'react-router-dom';


const Project = () => {
    const { variable } = useParams();
    // useEffect(async ()=>{
    //     //fetch project details using projectId
    //     const respnse = await fetch(`https://api.example.com/projects/${projectId}`);
    //     const data = await respnse.json();
    //     //set project details to state
    // })


const projects = [
    {id: 1, name: 'Project 1'},
    {id: 2, name: 'Project 2'},
    {id: 3, name: 'Project 3'},
]
return (
    <div>
            <h1>Project Page</h1>
            <h2>Project ID: {variable}</h2>
            <h3>Project Name: {projects.find(project => project.id === parseInt(variable))?.name || 'Not Found'}</h3>
    </div>
)
}

export default Project