import React from 'react'
import { useSelector } from 'react-redux'
import './Style.css';


function Dashboard() {

  const user=useSelector((state)=>state.auth.user)

  return (
    <div>
      <h1>Welcome</h1>
    </div>
  )
}

export default Dashboard
