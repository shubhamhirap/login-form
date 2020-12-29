import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ id, extraClass, options, onChange, value }) => {
  return (
    <select
      id={id}
      className={`${extraClass}`}
      value={value}
      onChange={onChange}
    >
      {options &&
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
    </select>
  );
};

Dropdown.propTypes = {
  id: PropTypes.string,
  extraClass: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.string || PropTypes.number || PropTypes.bool,
};

Dropdown.defaultProps = {
  id: "",
  extraClass: "",
  options: [],
  value: "" || 0 || false,
  onChange: () => {},
};

export default Dropdown;
