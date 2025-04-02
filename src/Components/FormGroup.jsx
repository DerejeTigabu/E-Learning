import React from 'react'

export default function FormGroup({
  lable,
  type,
  placeholder,
  disabled=false,
  value,
  onChange,
  referance,
  name
 }) {
  return (
    <div className="form-group mb-6 " >
                <label className='text-primary'>{lable}</label>
                <input  className='form-control'
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                    ref={referance}
                    name={name}
                    required
                />
      
    </div>
  )
}
