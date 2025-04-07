import React,{useEffect, useState} from 'react'
import testmonialData from "../../db/testimonial-list.json"  
import TestimonialCard from '../TestimonialCard'
import Button from "../Button"
import ErrorBoundaries from '../Custom/ErrorBoundaries';
export default function TestimonialLists() {
    //const [testimonials,setTestimonials] = useState(testmonialData)

    const [testimonials,setTestimonials] = useState(()=>
      {return JSON.parse(localStorage.getItem("testmonialData"));
    
    });

    //data state
    const [data,setData]=useState(null);
    const [isLoading,setIsLoading]=useState(true); 
    const [hasError,setHasError]=useState(false);

    let parseData;
    const getLocalData=()=>{
     setIsLoading(true);
     setHasError(false);
     
     //simulate random error
     function getRandomInt(){
      let int = Math.floor(Math.random()*4);
      return int;
     }

     setTimeout(()=>{
      parseData=JSON.parse(localStorage.getItem("testimonialData"));
      //setData(parseData);
     //if(getRandomInt()<=2){
     // setHasError(true);
     //}else{
     // setData(parseData);
     //}
     getRandomInt()<=2 ? setHasError(true): setData(parseData);
      setIsLoading(false);
    },2000);
   };
   
    useEffect(()=>{
      //setTestimonials(testmonialData)
     localStorage.setItem("testimonialData",JSON.stringify(testmonialData))

     const fatchData=async()=>{
      try {
        setIsLoading(true);
        getLocalData();
      } catch (Error) {
       setHasError(error);
       setIsLoading(false);
      }
     };
     fatchData();

    }),[!data]
    
    if(isLoading) {
      <div className="alert alert-warning">Loading...</div>
    }  
   
     {/*
      if(hasError){
              return (
                <div className="alert alert-danger">
                 <p className="mr-1">{message}</p>
                 <Button text={"Try again"} onClick={handleError}/>
                </div>
              )
            }
     */}


  return (
    <>

    {/* {!hasError && data && data.map((item) => (
  <TestimonialCard 
    key={item.id}
    fullName={item.fullName}
    jobTitle={item.jobTitle} 
    twitterHandle={item.twitterHandle}
    text={item.text}
    img={item.img}*/}
    <ErrorBoundaries hasError={hasError} handleError={getLocalData}>
    {data && data.map((item) => (
  <TestimonialCard 
    key={item.id}
    fullName={item.fullName}
    jobTitle={item.jobTitle} 
    twitterHandle={item.twitterHandle}
    text={item.text}/>
    ))}

    </ErrorBoundaries>
    
    
  </>

)}


 



    






    
  