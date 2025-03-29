import React from 'react'
import { BsStar, BsStarFill, BsTwitter } from 'react-icons/bs'

export default function TestimonialCard(
    img,
    fullName="FullName",
    jobTitle= "job Title",
    twitterHandle="twitterHandle",
    text="text",
    ratingStar,






) {
  return (
    <div className='card testimonial in-view' >
      <div className="card-header">
        <div className={` card-img ${img}`}></div>
        <div className="card-body" >
            <h3 className='card-title'>{fullName}</h3>
            <p className='card-text'>{jobTitle}</p>
            <div>
                <BsTwitter size={"1.5em"}/>

                {twitterHandle}
            </div>
        </div>
      </div>
      <div  className=' cacrd body' >
        <p>{text}</p>
      </div>
      <div className="card-footer d-flex">
         <BsStarFill className='mr-1'/> <BsStarFill className='mr-1'/>
         <BsStarFill className='mr-1'/> <BsStarFill className='mr-1'/>
         <BsStar className='mr-1'/>
              </div>
    </div>
  )
}
