import React from 'react'
import Button from '../Button'
export default function CategoriesCard({


    title,
    text,
    children,
    icon_1,
    icon_2,
    icon_3,
    btnIcon,
    startLearningEvent,
    cardHeader= true,
    cardBody=true,
    cardFooter=true,
}

) {
  return (
    <div className='card' style={{ maxWidth: 400 }}>
               {cardHeader && (
                   <div className='card-header'>
                       {icon_1}
                       {icon_2}
                       {icon_3}
                   </div>
               )}
               <div className='card-body'>
                   <h4 className='card-title'>{title?title:"card title"}</h4>
                   <p className='card-text'>
                       {text}
                       {children}
                   </p>
                   </div>
               
                   {cardFooter && (
                    <div className='card-footer'>
                    <Button
                    classes={"btn-secondary"}
                    text={"start learning"}
                    icon={btnIcon}
                    onClick={startLearningEvent}
                    />
                       </div>
                   )}
               </div>
  )
}
