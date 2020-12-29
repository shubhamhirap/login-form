import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type,
  id,
  extraClass,
  value,
  checked,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type={type}
      id={id}
      className={`${extraClass}`}
      value={value}
      checked={checked}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  extraClass: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  id: "text",
  extraClass: "",
  value: "",
  checked: false,
  placeholder: "",
  onChange: () => {},
};

export default Input;
