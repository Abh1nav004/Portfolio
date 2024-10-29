import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import './styles.scss';

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleLinkClick = () => {
    if (toggleIcon) {
      setToggleIcon(false); // Close the menu when a link is clicked
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                to={item.to}
                className="navbar__container__menu__item__links"
                onClick={handleLinkClick} // Close the menu on link click
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
