      import { useState } from 'react'
      import './index.css';
      import './App.css'
      import Title from './Components/Title'
      import Header from './Components/Header'
      import headerImg from './img/header-img.png'
      import Button from './Components/Button'
      import Modal from './Components/Modal'
    // import Card from './Components/Card'
      import { AiFillHtml5, AiFillPlayCircle, AiFillUnlock } from 'react-icons/ai'
      import CategoriesCard from './Components/page-components/CategoriesCard'
      import { DiCss3Full } from 'react-icons/di'
      import { SiJavascript } from 'react-icons/si'
      import OffersCard from './Components/page-components/OffersCard'
      import { FaMapMarkedAlt,FaFileDownload } from 'react-icons/fa'
      import TestimonialCard from './Components/TestimonialCard';



      function App() {
        // STATES
        // modal state
        const [showCourseModal, setshowCourseModal] = useState(false)
        
        //offer state
      const [showOffers, setshowOffers] = useState(false)
        
      //HANDLERS
        // modal handlers
        function handleStartLearingEvent() {
              setshowCourseModal(true);
      }
        function handModalCancleEvent() {
                setshowCourseModal(false);
        }

        //Offers handler
        function handleShowOffers(){
          showOffers===false? setshowOffers(true):setshowOffers(false);
        }

        //offers list

        const offerList=[
          {
        icon_1: <AiFillUnlock className='i' size={"2em"}/>,
        title: "Tons of content",
        text: "We have library of over 100,000 videos that will help you learn to code"
        },
        {
          icon_1: <FaMapMarkedAlt className='i' size={"2em"}/>,
          title: "Tons of content",
          text: "We have library of over 100,000 videos that will help you learn to code" 
        },
        {
          icon_1: <FaFileDownload className='i' size={"2em"}/>,
          title: "Tons of content",
          text: "We have library of over 100,000 videos that will help you learn to code" 
        }
        ];

        const moreOfferList=[
          {
            icon_1: <AiFillUnlock className='i' size={"2em"}/>,
            title: "Tons of content",
            text: "We have library of over 100,000 videos that will help you learn to code"
          },
          {
            icon_1: <FaMapMarkedAlt className='i' size={"2em"}/>,
            title: "Tons of content",
            text: "We have library of over 100,000 videos that will help you learn to code" 
            },
            {
            icon_1: <FaFileDownload className='i' size={"2em"}/>,
            title: "Tons of content",
            text: "We have library of over 100,000 videos that will help you learn to code" 
            }
      ]
        return (
          <>  
          <div className='container container-lg'> 
          {/* modal */}
          {showCourseModal && (
          <Modal
          title={"Access Denied"}
          text={"Please login first in order to access the content"} 
          cancelEvent={handModalCancleEvent}
          />
          )}

          {/* header */}
          
          <Header>
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
                  onClick={handleStartLearingEvent}
                          
                />
                <Button
                  classes={'btn-secondary'}
                  type={'button'}
                  text={'Learn More...'}
                  
                          
                />
        
                </div>
                
                <img src={headerImg} alt='Header Image' className='header-img'/> 
                </div>
          </Header>

          {/* main content */}
          <main>
          {/*CATEGORIES*/}
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
            startLearningEvent={handleStartLearingEvent}
            >
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
          {/*offers*/}
          <section className="offers container container-md p-2">
                  <Title 
                  classes={"subtitle text-center mb-4"} 
              text="Here's what you get"
    />
    
    {/* Fixed className from offeres-container to offers-container */}
    <div className="offers-container">
      {offerList.map((offer,index) => (
        <OffersCard 
          key={index} 
          title={offer.title} 
          text={offer.text}
          icon_1={offer.icon_1}
        />
      ))}
    </div>

    {showOffers && (
      <div className="offers-container fadeIn">
        {moreOfferList.map((offer,index) => (
          <OffersCard 
            key={index} 
            title={offer.title} 
            text={offer.text}
            icon_1={offer.icon_1}
          />
        ))}
      </div>
    )}
    
    <a 
      onClick={handleShowOffers}
      style={{cursor: "pointer", textDecoration: "underline"}}
    >
      <h4 className='text-center text-primary mt-2'>
        {showOffers ? "Show less" : "Show more..."}
      </h4>
    </a>
  </section>
            {/*TESTIMONIALS*/}
            <section className='testimonials my-4'>
             <Title classes={"subtitle text-center mb-4"} text={"what we have..."}/>
                <div className="testimonials-container" >
                <TestimonialCard/>


                </div>

            </section>




          </main>

          </div>
            </>
          
          
        )
      }  


      export default App
