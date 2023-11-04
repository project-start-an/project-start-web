import React from 'react'
import pricingBanner from '../assets/pricing_banner.png'
import InnerWrapperStyle from './styled-components/InnerPageWrapper';
import PageWrapperStyle from './styled-components/PageTitleWrapper';

//vis assets
import PricingSvg from '../assets/PricingCompAssstes/Pricing.svg'
function PricingPage() {

  const backgroundImageStyle = {
    backgroundImage: `url(${pricingBanner})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom', 
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:  '100%',
    width: '100%',
  };


  return (
      <div style={backgroundImageStyle}>
          <div style={InnerWrapperStyle}>
            {/* page title */}
            <div style={PageWrapperStyle}>
              <img src={PricingSvg}  alt='Pricing'/>
            </div>

          </div>
      </div>
  )
}

export default PricingPage