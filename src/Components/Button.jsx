import React from 'react'

export default function Button({classes,text,icon,type,style,onClick}) {
    const alertMissingHandler= () =>
        window.alert("Add event handler to the button!")
    return (    
       <button 
        className={`btn ${classes}`} 
        type={type}
    
        style={style}
        onClick={onClick? onClick: alertMissingHandler}
        >
        <div className='d-flex'>
           {icon}
            {text? text: "click"}
        </div>
        </button>
    
  )
}
