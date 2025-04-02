import React,{useState} from 'react'
import { BsStarFill, BsStar, BsTwitter } from 'react-icons/bs';
import TestimonialLists from './Lists/TestimonialLists' // Removed as it's unused
export default function TestimonialCard({
   img, 
   fullName="Full Name", 
   jobTitle= "Job Title", 
   twitterHandle="Twitter handler", 
   text="Text",
   ratingStars
   }) {


  const [rating, setRating] = useState(ratingStars);
  
  return (
      <div className='card testimonial in-view'>
        <div className="card-header">
          <div className={`card-img ${img}`}></div>
          <div className="card-body">
            <h3 className='card-title'>{fullName}</h3>
            <p className='card-text'>{jobTitle}</p>
            <div className="twitter-handle">
              <BsTwitter size={"1.5em"} />
              <span>{twitterHandle}</span> 
            </div>
          </div>
        </div>
        <div className='card-body'>
          <p>{text}</p>
        </div>
        <div className="card-footer d-flex">
       {/*< BsStarFill className='mr-1'/>  < BsStarFill className='mr-1'/>  < BsStarFill className='mr-1'/>   
        < BsStar className='mr-1'/>  < BsStar className='mr-1'/> */}
    {[...Array(5)].map((start,index)=>
     {
         const ratingValue=index+1;
        return (
          <label
          key={index}
          
          htmlFor="rating"
          onClick={()=>setRating(ratingValue)}
          style={{cursor: "pointer", color:"gold", fontSize:"1.5rem"}}>
           <input type="radio"
           value={ratingValue}
           style={{display: "none"}} 
           />
           {ratingValue<=rating? (< BsStarFill className='mr-1'/>):(< BsStar className='mr-1'/>)}

          </label>

        );
      })}

     
    
    

     
     
     
      </div>
    
      </div>
     );
    }
  


