import React from "react";
import PropTypes from "prop-types";

const Label = ({ htmlFor, title, extraClass }) => {
  return (
    <label htmlFor={htmlFor} className={`${extraClass}`}>
      {title}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  title: PropTypes.string,
  extraClass: PropTypes.string,
};

Label.defaultProps = {
  htmlFor: "",
  title: "",
  extraClass: "",
};

export default Label;
