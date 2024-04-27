import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2024 Mizard</p>
      <Link className={"linkAbout"} to="/about">
        About
      </Link>
    </footer>
  );
};

export default Footer;
