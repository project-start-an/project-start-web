import AngelSvg from "../../assets/OurTeamAssets/angel.svg";
import AntonioSvg from "../../assets/OurTeamAssets/antonio.svg";
import YoanaSvg from "../../assets/OurTeamAssets/yoana.svg";
//names assets
import ToniTakevName from "../../assets/OurTeamAssets/Antonio Takev name.svg";
import AngelChernaevName from "../../assets/OurTeamAssets/Angel Chernaev name.svg";
import YoanaChurkinaName from "../../assets/OurTeamAssets/Yoana Churkina name.svg";
//position assets
import CFO from "../../assets/OurTeamAssets/CFO & Lead Software Dev.svg";
import CTO from "../../assets/OurTeamAssets/CTO & Lead Software Dev.svg";
import CMO from "../../assets/OurTeamAssets/UI.svg";
//email assets
import AngelEmail from "../../assets/OurTeamAssets/chernaevangel@gmail.com.svg";
import ToniEmail from "../../assets/OurTeamAssets/tonitakev@gmail.com.svg";
import YoanaEmail from "../../assets/OurTeamAssets/yonichurkina@gmail.com.svg";
//linkedIn asstes
import AngelLIn from "../../assets/OurTeamAssets/Angel Chernaеv linkedIn.svg";
import ToniLIn from "../../assets/OurTeamAssets/Antonio Takev linkedIn.svg";
import YoanaLIn from "../../assets/OurTeamAssets/Yoana Churkina linkedIn.svg";
//phone assets
import AngelPhone from "../../assets/OurTeamAssets/Angel Phone.svg";
import ToniPhone from "../../assets/OurTeamAssets/Tono phone.svg";
import YoanaPhone from "../../assets/OurTeamAssets/Yoana phone.svg";

type TeamMember = {
  id: string;
  name: string;
  position: string;
  email: string;
  emailLink: string;
  linkedInName: string;
  linkedInLink: string;
  svg: string;
  mobileNumber: string;
};

const TeamData: TeamMember[] = [
  {
    id: "1",
    name: AngelChernaevName,
    position: CFO,
    email: AngelEmail,
    emailLink: "chernaevangel@gmail.com ",
    linkedInName: AngelLIn,
    linkedInLink: "https://www.linkedin.com/in/angel-chernaev-598811ab/",
    mobileNumber: AngelPhone,
    svg: AngelSvg,
  },
  {
    id: "2",
    name: ToniTakevName,
    position: CTO,
    email: ToniEmail,
    emailLink: "tonitakev@gmail.com",
    linkedInName: ToniLIn,
    linkedInLink: "https://www.linkedin.com/in/antonio-takev-459229167/",
    mobileNumber: ToniPhone,
    svg: AntonioSvg,
  },
  {
    id: "3",
    name: YoanaChurkinaName,
    position: CMO,
    email: YoanaEmail,
    emailLink: "yonichurkina@gmail.com",
    linkedInName: YoanaLIn,
    linkedInLink: "https://www.linkedin.com/in/yoana-churkina-9408a1234/",
    mobileNumber: YoanaPhone,
    svg: YoanaSvg,
  },
];

export default TeamData;
