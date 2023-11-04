import servicesBanner from '../assets/service_banner.png';
import InnerWrapperStyle from './styled-components/InnerPageWrapper';
import PageWrapperStyle from './styled-components/PageTitleWrapper';

//vis assets
import OurServices from '../assets/ServicesCompAssets/Our Services.svg'

function ServicesPage() {
  const backgroundImageStyle = {
    backgroundImage: `url(${servicesBanner})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%', // Set the component height to 100% of the viewport height
    width: '100%',
  };

  return (
    <div style={backgroundImageStyle}>
        <div style={InnerWrapperStyle}>
          {/* page title */}
          <div style={PageWrapperStyle}>
              <img src={OurServices}  alt='Our services'/>
          </div>


        </div>
    </div>
  );
}

export default ServicesPage;
