export type PricingObj = {
  id: number;
  name: string;
  price: number;
  height: string;
  width: string;
  background: string;
};

const PricingData: PricingObj[] = [
  {
    id: 1,
    name: "Package one",
    price: 150,
    height: "74%",
    width: "22%",
    background: "#D7E6F0",
  },
  {
    id: 2,
    name: "Package two",
    price: 200,
    height: "84%",
    width: "26%",
    background: "#9EB3C2",
  },
  {
    id: 3,
    name: "Package three",
    price: 350,
    height: "74%",
    width: "22%",
    background: "#D7E6F0",
  },
];

export default PricingData;
