import { useUserStore } from "@/store/userStore";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const UserProfile = () => {
  const { user, logout } = useUserStore((state) => state);
  const [displayOptions, setDisplayOptions] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="user-actions">
      {user ? (
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
          <div
            className="user-profile"
            onClick={() => setDisplayOptions(!displayOptions)}
          >
            <span className="user-username">{user.username}</span>
            <img
              className="user-avatar"
              src={`https://ui-avatars.com/api/?name=${user.username}&background=2cacad&color=ffffff&bold=true`}
            />
          </div>
        </>
      ) : (
        <button
          onClick={() => navigate("/user/login")}
          className="button button-primary"
        >
          Login
        </button>
      )}
      {displayOptions && (
        <div className="profile-options">
          <ul>
            <li>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default UserProfile;
