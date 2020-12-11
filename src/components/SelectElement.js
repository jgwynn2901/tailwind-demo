import React from "react";
import PropTypes from "prop-types";

function Selectelement(props) {
  return (
    <>
      <div>
        <span>{props.element.label}</span>
      </div>
      <div>
        <select className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
          <option className="text-gray-100" value="" selected>Select</option>
          {props.element.options.map((option) => (
            <option value={option.code}>{option.value}</option>
          ))}
        </select>
      </div>
    </>
  );
}

Selectelement.propTypes = {
  element: PropTypes.object,
  label: PropTypes.string,
  style: PropTypes.string,
  options: PropTypes.array,
};

export default Selectelement;
