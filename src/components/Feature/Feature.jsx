import PropTypes from "prop-types";
import { IoCheckbox } from "react-icons/io5";
const Feature = ({ feature }) => {
  return (
    <div className="">
      <p className="flex items-center gap-4 text-xl">
        {" "}
        <IoCheckbox className="bg-gray-50 text-blue-950" /> {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
