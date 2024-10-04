import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-800 rounded-md p-6 text-white flex flex-col shadow-2xl">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl font-bold text-center my-8">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="mt-12 bg-green-400 text-2xl w-full py-2 font-bold rounded-lg hover:bg-blue-950">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};
export default PriceOption;
