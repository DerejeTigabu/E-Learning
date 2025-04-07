import React,{useState,useEffect,useRef} from 'react'
import Title from '../Title'
import Button from '../Button'
import FormGroup from '../FormGroup';

export default function LoginForm({
  handleCancle,
  onLoginSuccess,
  showRegister,
loggedin
}) {
//state
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleSubmit = (e) => {
    e.preventDefault();
   const events={
    email:email,
    password:password,
    id:Math.floor(Math.random()*1000),
   };
   //console.log(events)
    validateLoginForm
   resetForm();
    onLoginSuccess();
};

 function resetForm(){
  setEmail("");
  setPassword("")

}

function validateLoginForm(){
  (email.length===0 || password.length===0)?
    alert("please fill all fields")
 : loggedin();
  }






//referance
let emailRef=useRef();
let passwordRef=useRef();
// handler
const changeEmail=(e)=>{
      setEmail(e.target.value);
    //console.log(e.target.value)
    //console.log(emailRef.current.value)
}
    const changePassword=(e)=>{
          setPassword(e.target.value);
}
//const  changeInput=(e)=>{
// emailRef.current.focus() && setEmail(e.target.value);
// passwordRef.current.focus() && setPassword(e.target.value);
//}

//Effect

useEffect(()=>{
   emailRef.current.focus();
}, []);
return (
    <div className='form fadeIn' style={{ maxWidth: 600}} >
         <div className="active-title">
          <h2 className="text-center font-bold text-xl mb-2">Login</h2>
          <p className="text-center text-sm mb-6">Enter your credential</p>
        
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-6 " >    
                <FormGroup 
                lable={"Email"} 
                placeholder={"Enter your email"} 
                type={"email"} 
               value={email}
               onChange={changeEmail}
               //onChange={changeInput}
               referance={emailRef}
                />
                <FormGroup 
                lable={"Password"} 
                placeholder={"Enter your password"} 
                type={"password"} 
                value={password}
                onChange={changePassword}
                //onChange={changeInput}
               referance={passwordRef}
                />                
            </div>
            <div className="flex justify-between space-x-4">
                <Button classes={"btn-primary flex-1 py-3"} text={"Login"} type={"submit"} onClick={()=>
                    window.alert("form submission")}
                  />
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
                            onClick={handleCancle}
                            />


                <Button 
                classes={"btn-primary flex-1 py-3"} 
                text={"Register"} 
                onClick={showRegister} 
                type={"button"}/>
            </div>
        </form>
        </div>
    </div>
);
}