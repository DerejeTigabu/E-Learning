          import { useRef, useState,useEffect } from 'react'
          import '../index.css'
          import '../App.css'

          import Title from './Title';
          
          import Button from './Button'
          import Modal from './Modal'
          //icons
          import { BsArrowUpCircleFill } from 'react-icons/bs';
         //Testimonials
         import TestimonialLists from './Lists/TestimonialLists';
          // Forms
          import LoginForm from './page-components/LoginForm';
          import RegistrationForm from './page-components/RegistrationForm';
          
          import Catagories from './sections/Catagories';
          import Header from './Header';
          import Offers from './sections/offers';
          function App() {
            // STATES
            // modal state
            const [showCourseModal, setshowCourseModal] = useState(false)
            
            //offer state
          const [showOffers, setshowOffers] = useState(false)

          //form state
          const[forms,setForms]=useState({
            LoginForm:false,
            registrationForm: false,
          })

          const [login,setLogin] = useState(false)

          //scroll
          const [goToTopArrow,setGoToTopArrow]=useState(false);
            //referance
            const offerRef=useRef();
            const topRef=useRef();
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


            // offer referance handler
            const handleScrollToOffers= ()=>{
                  offerRef.current.scrollIntoView({behavior:"smooth"})
            }
              //scroll handler
              const handleScrollUp=(()=>{
                  topRef.current.scrollIntoView({behavior:"smooth"})

              })
              //  FORM HANDLER
              //LOGIN FORM
              const handleShowLoginForm=()=>{
                setForms({registrationForm:false,LoginForm:true})
                setshowCourseModal(true);
              }
          
              const handleCancleLoginForm=()=>{
                setForms({...forms,LoginForm:false})
              }

              const handleLoginFormValidation= () => {
                setForms({...forms, LoginForm: false});
                setshowCourseModal(false);
                setLogin(true);
              }
              //registration form
              function handleShowRegistrationForm(){
                setForms({LoginForm:false,registrationForm:true})

              }
              const handleCancleRegistrationForm=()=>{
                setForms({...forms,registrationForm:false})
              }
          //Lists

          // scroll
          function scrollFunction(){
            if (
            document.body.scrollTop>40 || document.documentElement.scrollTop>40)
            {
            setGoToTopArrow(true);
          }else{
          setGoToTopArrow(false);
          
          }}
          //SCROLL EFFECT
          
          useEffect(()=>
          { 
            window.onscroll=()=>scrollFunction();
          },[]
            );
   return (
     <>  
              <div className='container container-lg' ref={topRef}> 
                {/* header */}
              <Header
              login={login}
              handleStartLearingEvent={handleStartLearingEvent}
              handleScrollToOffers={handleScrollToOffers}
              />
              {/* main content */}
              <main>
              {/*CATEGORIES*/}
              <Catagories 
              login={login}
              handleStartLearingEvent={handleStartLearingEvent}
              />
              {/*offers*/}
                 <Offers
                   offerRef={offerRef}
                   showOffers={showOffers}
                   handleShowOffers={handleShowOffers}
                  />
                {/*TESTIMONIALS*/}
                <section className='testimonials my-4'>
                <Title classes={"subtitle text-center mb-4"} text={"what we have..."}/>
                    <div className="testimonials-container" >
                    <TestimonialLists/>
                  {/*} <TestimonialCard/>*/}
                    </div>
               </section>
              </main>
              </div>
                {/* Utilities  */}
                  {/* modal */}
              {showCourseModal && (
              <Modal
              title={"Access Denied"}
              text={"Please login first in order to access the content"} 
              cancelEvent={handModalCancleEvent}
              loginEvent={!login && handleShowLoginForm}
              />
              )}
              
              {/* scrolltoup */}
              {goToTopArrow && 
                (<BsArrowUpCircleFill 
                  className='goToTopArrow' 
                  onClick={handleScrollUp}
                  //size={40}
                  />)}
              {/*FORMS */}
              {/*Log in Forms */}
              {forms.LoginForm && (
              <div className='modal'>
              <LoginForm 
            // handleCancle={handleCancleLoginForm}
              handleCancle={handleCancleLoginForm}
              showRegister={handleShowRegistrationForm}
              onLoginSuccess={handleShowLoginForm}
              loggedin={handleLoginFormValidation}
              />
              </div>)}
                
                 {/*registration Forms */}
              {forms.registrationForm && (
              <div className='modal'>
              <RegistrationForm 
              handleCancel={handleCancleRegistrationForm}
              showLogin={handleShowLoginForm}
              />           
              </div>
            )}                
            </>
              )}  

          export default App

  
