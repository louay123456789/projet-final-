import React from 'react'
import logo from './img/logo2.png'
const projects = [
    {
      imageUr2: logo ,
    },
  ];

function Dashboard() {
  return (
    <div>
        
                 <h2>
        {projects.map((props) => (
            <img src={props.imageUr2}/>
        ))}</h2>
    </div>
  )
}

export default Dashboard