import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, id, extraClass, onClick, disabled, title }) => {
  return (
    <button
      type={type}
      id={id}
      className={`btn btn-default ${extraClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  extraClass: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.string,
};

Button.defaultProps = {
  type: "",
  id: "",
  extraClass: "btn btn-default",
  title: "Button",
  disabled: false,
  onClick: () => {},
};

export default Button;
