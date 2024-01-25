import React ,{useState}from 'react'
import {Alert,Modal,ModalBody,ModalHeader,ModalFooter,Button,InputGroup,InputGroupText,Input} from "reactstrap"
import { loginUser, registeUser } from '../../redux/actions'
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom' 
import logo from './img/logo2.png'
import './styles.css';
const projects = [
  {
    imageUr2: logo ,
  },
];
function LoginModal() {
  const[modal,setModal]=useState(false)
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const toggle=()=>{
    setModal(!modal)
  }
  const errors=useSelector((state)=>state.err)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogin=()=>{
    const formdata={email,password}
    dispatch(loginUser(formdata,navigate))


  }
  return (
    <div className='LoginModal'>
         <Button className='btn2' onClick={toggle}>
Login      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
  <InputGroup>
    <Input placeholder="email" onChange={(event)=>setEmail(event.target.value)} />
    <InputGroupText>
      @example.com     </InputGroupText>
  </InputGroup>
  <InputGroup>
    <Input placeholder="password" onChange={(event)=>setPassword(event.target.value)}/>
  </InputGroup>
  <InputGroup>


{errors && (
                <Alert >
                  {errors.map((err) => (
                    <div >{err.msg}</div>
                  ))}

                </Alert>
              )}
              <h2>
        {projects.map((props) => (
            <img src={props.imageUr2}/>
        ))}</h2>
</InputGroup> 
        </ModalBody>
        <ModalFooter>
          <Button  onClick={handleLogin}>
Login          </Button>{' '}
          <Button  onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  )
}

export default LoginModal


