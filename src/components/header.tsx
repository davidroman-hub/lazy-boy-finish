import { FC, useState } from "react";
import lazyrunning from "../assets/videos/punos.mp4";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Header: FC<any> = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="header-sections">
        <div className="option-nav">
          <MenuIcon className="menu-icon" onClick={showSidebar} />
        </div>
        <div className="option-nav-1">
          <div className="two-options">{"{LOGO}"}</div>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul onClick={showSidebar} className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <CloseIcon />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container-header">
        <video autoPlay loop muted playsInline className="background-clip">
          <source src={lazyrunning} type="video/mp4" />
        </video>

        <div className="header-content">
          <h1>Lazy boy</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
