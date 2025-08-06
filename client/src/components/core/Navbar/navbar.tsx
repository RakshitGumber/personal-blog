import { format } from "date-fns";

import { useState } from "react";

import "./style.scss";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [time] = useState(format(new Date(), "MMMM dd, yyyy HH:mm"));
  const [newsHeadline] = useState(
    "For more exciting updates subscribe to the RakshVerse Newsletter."
  );

  const user = { username: "Gumber Rakshit", profilePic: undefined };

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
        <div className="user-actions">
          {user && (
            <>
              <div className="actions">
                <button className="button button-ghost button-icon" id="inbox">
                  <Icon icon="mdi:inbox" />
                </button>
                <button
                  className="button button-ghost button-icon"
                  id="mode-toggle"
                >
                  <Icon icon="mdi:white-balance-sunny" />
                </button>
              </div>
              <Link to="" className="user-profile">
                <span className="user-username">{user.username}</span>
                <img
                  className="user-avatar"
                  src={
                    user.profilePic == undefined
                      ? `https://ui-avatars.com/api/?name=${user.username}&background=2cacad&color=ffffff&bold=true`
                      : user.profilePic
                  }
                />
              </Link>
            </>
          )}
        </div>
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

  // return (
  //   <nav className="main-navbar">
  //     <div className="primary-bar">
  //       <div className="news-headline">Trending Now: {newsHeadline}</div>
  //       <div className="user-actions">
  //         {user ? (
  //           <div className="user-profile">
  //             {/* @ts-ignore */}
  //             <span className="user-username">{user.username}</span>
  //             <img
  //               className="user-avatar"
  //               src={
  //                 /* @ts-ignore */
  //                 user.profilePic == undefined
  //                   ? `https://ui-avatars.com/api/?name=${user.username}&font-size=0.6&background=2cacad&color=ffffff&bold=true`
  //                   : /* @ts-ignore */
  //                     user.profilePic
  //               }
  //             />
  //           </div>
  //         ) : (
  //           <Link to="/user/login">Login</Link>
  //         )}
  //       </div>
  //     </div>
  //     <div className="secondary-bar"></div>
  //   </nav>
  // );
};
export default Navbar;
