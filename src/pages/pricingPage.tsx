import React from 'react'
import pricingBanner from '../assets/pricing_banner.png'

function PricingPage() {

  const backgroundImageStyle = {
    backgroundImage: `url(${pricingBanner})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom', // Align the background image to the bottom
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    height:  '100%', // Set the component height to 100% of the viewport height
    width: '100%',
  };


  return (
      <div style={backgroundImageStyle}>
        PricingPage
      </div>
  )
}

export default PricingPage