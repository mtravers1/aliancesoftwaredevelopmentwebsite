import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import{  BrowserRouter as Switch,
  Link,
  Router,
  Route,
  Routes,
} from "react-router-dom";

const Togglebutton = () => {
  const [togglenav, setTogglenav] = useState(false);

  const toggle = () => {
    setTogglenav(!togglenav);
  };

  return (
    <div id="tnavbar">
      <span id="ttitle">
        <button type="image" id="logo">
          <Link to="/home"></Link>
        </button>
        Alliance Software <br />
        Development
        <button onClick={toggle} class="togglebutton">
          <FaBars />
        </button>
      </span>

      <ul>
        <div id="tog">
          {togglenav && (
            <span class="navlist">
              {/* <button type="image" id="logo">
                <Link to="/home"></Link>
              </button> */}

              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/teams">Teams</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              {/* <button>
                    <FaTimes/>
                </button> */}
            </span>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Togglebutton;
