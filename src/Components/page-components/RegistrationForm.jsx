import React, { useEffect, useRef, useState } from 'react'
import Title from '../Title'
import Button from '../Button'
import FormGroup from '../FormGroup'

export default function RegistrationForm({handleCancel,showLogin}) {
 
  let fullname=useRef();
  useEffect(()=>{
    fullname.current.focus();
  },[])

  const [registration,setRegistration]=useState({
         fullName:"",
         email:"",
         password:"",
         passwordConf:""

  })
 const handlerInputChange=(e)=>{
   setRegistration({...registration,[e.target.name]:e.target.value})
 }

  const handleRegistration=()=>{

  }
  return (
    <div className="active-title">
         <Title 
         text={"Registration"} 
         classes={"text-center mb-4"}/>
          <Button 
          text={"x"} 
          classes={"btn-close"} 
          style={{
            position: "absolute", 
            top: 20, 
            right: 30, 
            color: "white", 
            border: "1px solid black",
            background:"black", 
            borderRadius: "50%"}}
          onClick={handleCancel}
          />
          <form onSubmit={handleRegistration}>
            <FormGroup 
            lable={"Name"} 
            placeholder={"Enter Your Name"}
              referance={fullname}
              value={registration.fullName}
              onChange={handlerInputChange} 
              name="fullName"           
              />{" "}
              <FormGroup 
              lable={"Email"} 
              placeholder={"Enter Your Email"}
              type={"email"}
              value={registration.email}
              onChange={handlerInputChange} 
              name="email"           
              />{" "}
              <FormGroup 
              lable={"Password"} 
              placeholder={"Enter Your password"}
             type={"password"}
              value={registration.password}
              onChange={handlerInputChange}
              name="password"             
              />{" "}
              <FormGroup 
              lable={"Confirm Password"} 
              placeholder={"Enter Your password again"}
             type={"password"}
              value={registration.passwordConf}
              onChange={handlerInputChange}
              name="passwordConf"             
              />
              
            </form>

          <div className="flex justify-between space-x-4">
                          <Button 
                          classes={"btn-primary flex-1 py-3"} 
                          text={"Register"} type={"submit"} 
                          onClick={()=>window.alert("Registered")}
                          />
                             
          
                          <Button 
                          classes={"btn-lg flex-1 py-3"} 
                          text={"Login"} 
                          type={"button"}
                          onClick={showLogin}
                          />
                          
                      </div>
          
          
          </div>
  )
}
