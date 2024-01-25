import React ,{useState}from 'react'
import {Alert,Modal,ModalBody,ModalHeader,ModalFooter,Button,InputGroup,InputGroupText,Input} from "reactstrap"
import { registeUser } from '../../redux/actions'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import './styles.css';


function RegisterModal() {
  const[modal,setModal]=useState(false)
  const[email,setEmail]=useState("")
  const[name,setName]=useState("")
  const[lastName,setLastName]=useState("")
  const[password,setPassword]=useState("")

  const toggle=()=>{
    setModal(!modal)
  }
  const dispatch=useDispatch()
  const navigate=useNavigate()
const isAuth=useSelector((state)=>state.isAuth)
  const errors=useSelector((state)=>state.err)
console.log(errors,"hellllo")
console.log(isAuth,"kkkkkkkkk")
  const handleRegister=()=>{
     
    const formdata={name,email,password,lastName}
    dispatch(registeUser(formdata,navigate))

 if (isAuth ===true){
toggle()
 }

  }

  

  return (
    <div className='RegisterModal'>
         <Button className='btn1'  onClick={toggle}>
register      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>

          <InputGroup>
    <Input placeholder="name" onChange={(event)=>setName(event.target.value)} />
  </InputGroup>
  <InputGroup>
    <Input placeholder="lastName" onChange={(event)=>setLastName(event.target.value)}/>
  </InputGroup>
  <InputGroup>
    <Input placeholder="email" onChange={(event)=>setEmail(event.target.value)} />
    <InputGroupText>
      @example.com
    </InputGroupText>
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
</InputGroup> 
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleRegister}>
            register
          </Button>{' '}
          <Button onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  )
}

export default RegisterModal
