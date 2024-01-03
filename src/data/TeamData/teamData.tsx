import AngelSvg from "../../assets/OurTeamAssets/angel.svg";
import AntonioSvg from "../../assets/OurTeamAssets/antonio.svg";
import YoanaSvg from "../../assets/OurTeamAssets/yoana.svg";

type TeamMember = {
  id: string;
  name: string;
  position: string;
  email: string;
  linkedInName: string;
  linkedInLink: string;
  svg: string;
  mobileNumber: string;
};

const TeamData: TeamMember[] = [
  {
    id: "1",
    name: "Angel Chernaev",
    position: "CFO & Lead Software Dev",
    email: "chernaevangel@gmail.com",
    linkedInName: "Angel Chernaev",
    linkedInLink: "https://www.linkedin.com/in/angel-chernaev-598811ab/",
    mobileNumber: "+359 885 433 444",
    svg: AngelSvg,
  },
  {
    id: "2",
    name: "Antonio Takev",
    position: "CTO & Lead Software Dev",
    email: "tonitakev@gmail.com",
    linkedInName: "Antonio Takev",
    linkedInLink: "https://www.linkedin.com/in/antonio-takev-459229167/",
    mobileNumber: "+31 620 684 022",
    svg: AntonioSvg,
  },
  {
    id: "3",
    name: "Yoana Churkina",
    position: "CMO & Lead UX/UI",
    email: "yonichurkina@gmail.com",
    linkedInName: "Yoana Churkina",
    linkedInLink: "https://www.linkedin.com/in/yoana-churkina-9408a1234/",
    mobileNumber: "+359 897 397 297",
    svg: YoanaSvg,
  },
];

export default TeamData;
