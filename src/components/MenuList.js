import React from "react";
import PropTypes from "prop-types";

const Picker = ({ value, onChange, options }) => (
  <div>
    {options.map(option => (
      <h3
        key={option}
        onClick={() => onChange(option)}
        style={{
          fontWeight: option === value ? 800 : 300,
          fontSize: option === value ? "18px" : "16px"
        }}
      >
        {option}
      </h3>
    ))}
  </div>
);

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Picker;
