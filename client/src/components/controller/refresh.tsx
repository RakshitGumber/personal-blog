import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RefreshHandler = ({ setIsAuthenticated }: any) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
      if (
        location.pathname === "/" ||
        location.pathname === "/signup" ||
        location.pathname === "/login"
      ) {
        navigate("/", { replace: false });
      }
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
};
export default RefreshHandler;
