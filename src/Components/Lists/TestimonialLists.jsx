import React,{useEffect, useState} from 'react'
import testmonialData from "../../db/testimonial-list.json"  
import TestimonialCard from '../TestimonialCard'
export default function TestimonialLists() {
    //const [testimonials,setTestimonials] = useState(testmonialData)

    const [testimonials,setTestimonials] = useState(()=>
      {return JSON.parse(localStorage.getItem("testmonialData"));
    
    });
    useEffect(()=>{
      setTestimonials(testmonialData)
     localStorage.setItem("testimonialData",JSON.stringify(testmonialData))

    }),[testimonials]
    

  return (
    <>
    {testimonials && testimonials.map((item) => (
  <TestimonialCard 
    key={item.id}
    fullName={item.fullName}
    jobTitle={item.jobTitle} 
    twitterHandle={item.twitterHandle}
    text={item.text}
    img={item.img}
    
  />

))}


 



    






    
    
    
    </>
  )
}
  