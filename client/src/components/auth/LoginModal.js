import React ,{useState}from 'react'
import {Modal,ModalBody,ModalHeader,ModalFooter,Button,InputGroup,InputGroupText,Input} from "reactstrap"
import { loginUser, registeUser } from '../../redux/actions'
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'
function LoginModal() {
  const[modal,setModal]=useState(false)
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const toggle=()=>{
    setModal(!modal)
  }
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogin=()=>{
    const formdata={email,password}
    dispatch(loginUser(formdata))
navigate("/Dashboard")
toggle()
  }
  return (
    <div>
         <Button color="danger" onClick={toggle}>
Login      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
  <InputGroup>
    <Input placeholder="email" onChange={(event)=>setEmail(event.target.value)} />
    <InputGroupText>
      @example.com
    </InputGroupText>
  </InputGroup>
  <InputGroup>
    <Input placeholder="password" onChange={(event)=>setPassword(event.target.value)}/>
  </InputGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleLogin}>
Login          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  )
}

export default LoginModal


