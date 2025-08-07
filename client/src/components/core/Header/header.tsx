import { Icon } from "@iconify/react/dist/iconify.js";

import { useWindowSize } from "@uidotdev/usehooks";

import "./style.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const size = useWindowSize();

  return (
    <header className="main-header">
      <div className="title-section">
        <h1 className="title">RakshVerse</h1>
        {size.width! < 768 && (
          <button className="find-button">
            <Icon icon="mdi:magnify"></Icon>
          </button>
        )}
      </div>
      <div className="page-navigation">
        <ul className="nav-list">
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./popular">Popular</Link>
          </li>
          <li>
            <Link to="./latest">latest</Link>
          </li>
        </ul>
        <div className="blog-actions">
          <div className="search-button">
            <input type="text" placeholder="Search" name="search" autoFocus />
            <label htmlFor="search">
              <Icon icon="mdi:magnify"></Icon>
            </label>
          </div>
          <button className="button button-primary button-xl">
            Create New
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
