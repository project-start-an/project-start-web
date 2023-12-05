import BuildModernWebsite from '../../assets/ServicesCompAssets/build-moder-website.gif'
import CustomSolutions from '../../assets/ServicesCompAssets/custom-software.gif'
import MaintananceSupport from '../../assets/ServicesCompAssets/maintanance-support.gif'

type ServiceObj = {
  id: number;
  name: string;
  image: string ;
  listings: string[];
};




const ServicesData: ServiceObj[] = [
  {
    id: 1,
    name: "Building Modern Website",
    image: BuildModernWebsite,
    listings: [
      "Strategic Web Presence",
      "Responsive Web Design",
      "SEO Website Optimization",
      "Tailored Functionality",
    ],
  },
  {
    id: 2,
    name: "Custom Software Solutions",
    image: CustomSolutions,
    listings: [
      "Tailored Business Solutions",
      "Scalability and Flexibility",
      "User-Friendly Interfaces",
      "Integration Capabilities",
    ],
  },
  {
    id: 3,
    name: "Maintenence & Support",
    image: MaintananceSupport,
    listings: [
      "Proactive System Monitoring",
      "Timely Updates and Patches",
      "Dedicated Support Team",
      "Performance Optimizations",
    ],
  },
];

export default ServicesData;
