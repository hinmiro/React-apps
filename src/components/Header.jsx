import PropTypes from "prop-types";
import Button from "./Button.jsx";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1 className={"text-cyan-400 font-semibold"}>{title}</h1>
      {location.pathname === "/" && (
        <Button text={showAdd ? "Close" : "Add"} onClick={onAdd} />
      )}{" "}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Manager",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
};

export default Header;
