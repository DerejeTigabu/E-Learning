  import React from 'react'
  // images
  import headerImg from '../img/header-img.png'
  //components
  import Title from './Title'
  import Button from './Button'
  export default function Header({
    children,
    login,
    handleStartLearingEvent,
    handleScrollToOffers,
  
  }) {
    return (
      <header  class="header d-flex">
        
  <div className='header-content mb-2'>   
                  <Title text='Learn to code by wathching others' classes={"header-title fs-xxl mb-3"}/>
                      
                      <p class="header-text mb-3">
                        See how experienced developers solve problems in real-time. Watching
                        scripted tutorials is great, but understanding how developers think
                        is invaluable.
                      </p>
                      <div className="header-btn">
                      <Button
                        classes={'btn-primary text-light'}
                        //type={'button'}
                        text={'Try it free 30 days'}
                        onClick={
                          !login ? handleStartLearingEvent : ()=> window.alert("You are logging in ...")}
                                
                      />
                      <Button
                        classes={'btn-secondary'}
                        type={'button'}
                        text={'Learn More...'}
                        onClick={handleScrollToOffers}
                                
                      />
              
                      </div>
                      
                      <img src={headerImg} alt='Header Image' className='header-img' style={{marginBottom:"200px"}}/> 
                      </div>
        
        {children}
        
        </header>
    )
  }
