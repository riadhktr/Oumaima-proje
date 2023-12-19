import React,{ useState }  from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { SignIn } from '../../api/authApi';
import {  Link, useNavigate } from 'react-router-dom';
import {  isAuthenticated, setAuthentification } from '../../helpers/auth';
function  Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate()

    const handelSubmit= async()=>{
      await SignIn({email:email,password:password})
      .then((responce)=>{
        setAuthentification(responce.token,responce.found)
        console.log(responce)
        if(isAuthenticated() && isAuthenticated().role ==="user"){
          navigate('/')
        }else if(isAuthenticated() && isAuthenticated().role ==="admin") {
         navigate('/adminDash')
        }
       
      })
      .catch((err)=>{
        console.log(err)})
    
    }

  return (
    <div style={{display:"flex", justifyContent:"space-around", height:"600px",alignItems:"center"}}>
      <img src="https://www.pizzavroom-oytier.com/uploaded/102421/livreur.jpg" alt="background" height={400}/>
      
    <div style={{ display:"flex",flexDirection:"column",
    alignItems:"center", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:"10%",padding:"80px"}}>
      <h3>SignIn</h3>
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="13">
          <Form.Control type='email' placeholder="email@example.com" onChange={(e)=>setEmail(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="13">
          <Form.Control type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
        </Col>
      </Form.Group>
    </Form>
    <Button variant="secondary" onClick={()=>handelSubmit()}>login</Button>
    <Link to="/register"> you don't have an account ?</Link>
    </div>
    </div>
  )
}

export default Login
