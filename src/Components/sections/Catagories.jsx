import React from 'react'
//compponent
import Title from '../Title'
//page component
import CategoriesCard from '../page-components/CategoriesCard'
//icons
import { AiFillHtml5, AiFillPlayCircle, AiFillUnlock } from 'react-icons/ai'
import { DiCss3Full } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
const Catagories = ({
    handleStartLearingEvent,
    login
}) => {
  return (
     <section className='categories my-4'>
                  <Title text="Top categories" classes={"subtitle text-center"}/>
                  <div className='categories-container d-flex'>
                    <div>
                    <CategoriesCard 
                    title={"Web Development"} 
                    icon_1={<AiFillHtml5 size={"4em"} className="icon icon-html5"/>}
                    icon_2={<DiCss3Full size={"4em"} className='icon icon-css3'/>}
                    icon_3={<SiJavascript size={"4em"} className="icon icon-js"/>}
                        btnIcon={<AiFillPlayCircle size={"2em"}/>}
                        startLearningEvent={!login && handleStartLearingEvent}  >           
                  <span className='fs-lg' >Learn how to build a web app with
                    :</span>
                    <ul className="mt-1">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JAVASCRIPT</li>
                    
                    </ul>
                    </CategoriesCard>
                    <CategoriesCard></CategoriesCard>
                    <CategoriesCard></CategoriesCard>
                    <CategoriesCard></CategoriesCard>
                    </div>         
                      </div>
                  </section>
  )
}

export default Catagories
