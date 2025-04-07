import { useState,useEffect,useRef } from "react"
import React from 'react'
import Button from "../Button";
function ErrorBoundaries({
    hasError=false,
    handleError,
    message="Something went wrong",
    children,
}) {
    const [error,setError]=useState(hasError);
    useEffect(()=>{
        setError(hasError)
    },[hasError]);
         //handle error
        if(error){
          return (
            <div className="alert alert-danger">
             <p className="mr-1">{message}</p>
             <Button text={"Try again"} onClick={handleError}/>
            </div>
          )
        }
 

  return 
    children;
  
}

export default ErrorBoundaries
