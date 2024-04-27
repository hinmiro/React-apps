import PropTypes from "prop-types";

const Button = (prop) => {
  const { text, onClick } = prop;

  return (
    <button className={"btn"} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func,
};

export default Button;
