import React from 'react'
//compponents
import Title from '../Title'
//page components
import OffersCard from '../page-components/OffersCard'
import { offerList,moreOfferList } from '../../db/offersList'
const Offers = ({
    offerRef,
    showOffers,
    handleShowOffers
}) => {
  return (
     <section ref={offerRef} className="offers container container-md p-2">
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
  )
}

export default Offers
