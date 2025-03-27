import React from 'react'
import Button from './Button';

export default function Card ({
    
        title,
        text,
        children,
        icon_1,
        icon_2,
        icon_3,
        btnIcon,
        startEvent,
        cardHeader= true,
        cardBody=true,
        cardFooter=true,

}) {



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
                <h3 className='card-title'>{title?title:"card title"}</h3>
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
                 onClick={startEvent}
                 />
                    </div>
                )}
            </div>
        
    );

}

/*
 <div className='card'>
            <div className='card-header'>
                {cardHeader && <h3>{cardHeader}</h3>}
            </div>
            <div className='card-body'>
                {title && <h4>{title}</h4>}
                {text && <p>{text}</p>}
                {children}
            </div>
            <div className='card-icons'>
                {icon_1 && <span>{icon_1}</span>}
                {icon_2 && <span>{icon_2}</span>}
                {icon_3 && <span>{icon_3}</span>}
            </div>
            <div className='card-footer'>
                {btnIcon && (
                    <button onClick={startEvent}>
                        {btnIcon}
                    </button>
                )}
            </div>
        </div>
        */