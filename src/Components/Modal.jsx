import React from 'react'
import Button from './Button'
export default function Modal({title,type, text,loginEvent, cancelEvent}) {
  return (
    <div className='modal'>
    <div className='modal-content fadeIn-2ms'>
        <h1 className='mb-1'>{title}</h1>
        <p className='mb-1'>{text? text: "Modal content goes here!"}</p>
      <div className='d-flex space-between'></div>
        <Button classes={'btn-primary'} text={'Login'} onClick={loginEvent} type={type}/>
        <Button  text={'close'} onClick={cancelEvent} type={type}/>
    </div>
  </div>
    )       
}