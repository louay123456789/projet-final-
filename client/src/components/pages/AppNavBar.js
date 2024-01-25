import React ,{useState,Fragment}from 'react'
import {Navbar,NavbarBrand,Container,Nav,Collapse,NavbarToggler,NavItem,NavLink} from "reactstrap"
import LoginModal from '../auth/LoginModal'
import RegisterModal from '../auth/RegisterModal'
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { logoutUser } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
import './Style.css';
import logo from './image/logo.png'
const projects = [
  {
    imageUrl: logo ,
  },
];

function AppNavBar() {
    const [isOpen,setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)

    }


    const user=useSelector((state)=>state.auth.user)
console.log(user)
const dispatch=useDispatch()
const navigate=useNavigate()
const handleLogout=()=>{
    dispatch(logoutUser())
    navigate("/")

}
    const guestLinks = (
        <>
          <NavItem>
            <RegisterModal />
          </NavItem>
          <NavItem>
            <LoginModal />
          </NavItem>
        </>
      );

      const authLinks = (
        <Fragment>          
          <NavItem >
         
              <span className="navbarlou4">
              <Link to="/Home">
              <strong>Home</strong>
              </Link>
              </span>
            
          </NavItem>
          
          <NavItem >
         
         <span className="navbarlou3">
         <Link to="/Projet">
          
         <strong>project</strong>
         </Link>
         </span>
       
     </NavItem>
     <h2>
        {projects.map((props) => (
            <img src={props.imageUrl}/>
        ))}</h2>
     <NavItem >
         
         <span className="navbarlou2">
         <Link to="/Moi">
         <strong>Info</strong>
         </Link>
         </span>
       
     </NavItem>
     
     <NavItem >
         <NavLink>
         <span className="navbarlou1">
         <Link to="/Contact">
         <strong>réservation</strong>
         </Link>
         </span>
         </NavLink>
     </NavItem>
     <NavLink href="#" onClick={handleLogout} >
     
     <strong className="LOGOWTNAV"> Logout</strong> 
  
     </NavLink>
     
     
        </Fragment>
      );
  return (
    <div>
    <Navbar color="dark" dark expand="sm" className="mb-5">
      <Container>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          {user && user ? authLinks: guestLinks}
          
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
    
  </div>
  )
}


export default AppNavBar