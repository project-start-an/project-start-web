type ServiceObj = {
  id: number;
  name: string;
  listings: string[];
};

const ServicesData: ServiceObj[] = [
  {
    id: 1,
    name: "Building Modern Website",
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
    listings: [
      "Proactive System Monitoring",
      "Timely Updates and Patches",
      "Dedicated Support Team",
      "Performance Optimizations",
    ],
  },
];

export default ServicesData;
