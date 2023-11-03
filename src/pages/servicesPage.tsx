import React from 'react';
import servicesBanner from '../assets/service_banner.png';

function ServicesPage() {
  const backgroundImageStyle = {
    backgroundImage: `url(${servicesBanner})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    height: '100%', // Set the component height to 100% of the viewport height
    width: '100%',
  };

  return (
    <div style={backgroundImageStyle}>
        Our Services
    </div>
  );
}

export default ServicesPage;
