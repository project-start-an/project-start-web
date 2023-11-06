export type PricingObj = {
  id: number;
  name: string;
  price: number;
  height: string;
  width: string;
  background: string;
  features: FeaturesObj[]
};

type FeaturesObj = {
  feature: string;
  price: number;
}


const PricingData: PricingObj[] = [
  {
    id: 1,
    name: "Cloud & Infrastructure",
    price: 150,
    height: "74%",
    width: "25%",
    background: "#D7E6F0",
    features: [
      {
        feature: "Cloud Hosting & Managment",
        price: 100
      },
      {
        feature: "Database Management",
        price: 100
      },
      {
        feature: "Monitoring & Logging",
        price: 50
      },
      {
        feature: "Data Feed Integrations",
        price: 150
      },
    ]
  },
  {
    id: 2,
    name: "Web-Based Features",
    price: 200,
    height: "74%",
    width: "25%",
    background: "#D7E6F0",
    features: [
      {
        feature: "Website Page",
        price: 150
      },
      {
        feature: "Contact Forms",
        price: 50
      },
      {
        feature: "Wiki Component",
        price: 50
      },
      {
        feature: "Calendar",
        price: 50
      },
      {
        feature: "Appointments Feature",
        price: 50
      },
    ]
  },
  {
    id: 3,
    name: "Additional Features",
    price: 350,
    height: "74%",
    width: "25%",
    background: "#D7E6F0",
    features: [
      {
        feature: "Ad-free",
        price: 50
      },
      {
        feature: "SEO Optimization",
        price: 50
      },
      {
        feature: "Google Accounts Management",
        price: 50
      },
      {
        feature: "Users Statistics",
        price: 50
      },
      {
        feature: "Business Listing",
        price: 50
      }
    ]
  },
];

export default PricingData;
