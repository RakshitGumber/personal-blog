import { format } from "date-fns";
import { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import UserProfile from "@/components/controller/user/UserProfile";

const Navbar = () => {
  const [time] = useState(format(new Date(), "MMMM dd, yyyy HH:mm"));
  const [newsHeadline] = useState(
    "For more exciting updates subscribe to the RakshVerse Newsletter."
  );

  return (
    <nav className="main-navbar">
      <div className="nav-page">
        <div className="date-string">{time}</div>
        <div className="news-headline">
          <Link to="/">
            <h2>
              <span>
                <Icon icon="mdi:rocket-launch" />
              </span>
              <span>Trending Now: </span>
            </h2>
          </Link>
          <Link to="/" className="headline-text">
            {newsHeadline
              .split(" ")
              .slice(0, newsHeadline.length > 10 ? 9 : newsHeadline.length)
              .join(" ")
              .concat("...")}
          </Link>
        </div>
        <UserProfile />
      </div>
      <div className="nav-external">
        <h2>Follow Me</h2>
        <ul className="ext-links">
          <li>
            <Link to="https://a.com" target="_blank">
              <Icon icon="simple-icons:x" fontSize={16} />
            </Link>
          </li>
          <li>
            <Link to="https://a.com" target="_blank">
              <Icon icon="simple-icons:github" fontSize={16} />
            </Link>
          </li>
          <li>
            <Link to="https://a.com" target="_blank">
              <Icon icon="simple-icons:youtube" fontSize={16} />
            </Link>
          </li>
          <li>
            <Link to="https://a.com" target="_blank">
              <Icon icon="simple-icons:linkedin" fontSize={16} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
