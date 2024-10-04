import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const [priceOptions, setPriceOptions] = useState([]);
  useEffect(() => {
    fetch("priceOptions.json")
      .then((res) => res.json())
      .then((data) => setPriceOptions(data));
  }, []);
  return (
    <div className="m-12">
      <h1 className="text-4xl font-bold">Best Prices</h1>
      <div className="grid md:grid-cols-3 gap-20">
        {" "}
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
