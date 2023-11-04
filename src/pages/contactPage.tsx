
//visual assets
import ourTeam from '../assets/OurTeamAssets/Our team.svg'

// Import your styles
import PageWrapperStyle from "./styled-components/PageTitleWrapper";
import InnerWrapperStyle from "./styled-components/InnerPageWrapper";
import MnContWrapper from './styled-components/MnContWrapper';
import TeamPersonWrapper from './components/TeamPersonWrapper';

//team data
import TeamData from './components/TeamData/teamData';

const ourTeamTitleAssetStyle = {
  width: '14%', 
  height: '40%'
};

function ContactPage() {
  return (
    <div style={{ ...InnerWrapperStyle, flexDirection: 'column', justifyContent: 'flex-start' }}>
        {/* title */}
        <div style={PageWrapperStyle}>
            <img src={ourTeam} style={ourTeamTitleAssetStyle} alt='Our team'/>
        </div>
        {/* main content */}
        <div style={MnContWrapper}>
            {TeamData.map((item, key)=>{
              return(
                <TeamPersonWrapper 
                key={key}
                id={item.id} 
                name={item.name}
                position={item.position}
                email={item.email}
                emailLink={item.emailLink}
                linkedInName={item.linkedInName}
                linkedInLink={item.linkedInLink}
                svg={item.svg}
                mobileNumber={item.mobileNumber}
                />
              )
            })}
            
        </div>

    </div>
  );
}

export default ContactPage;
