import React from "react";

const MenuList = ({ value, onChange, options }) => (
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

export default MenuList;
