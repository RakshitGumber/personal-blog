import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getBlogs } from "../api";

const Home = () => {
  const [loggedinUser, setLoggedinUser] = useState<string | null>(null);
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<any>();

  useEffect(() => {
    setLoggedinUser(localStorage.getItem("user"));
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    if (loggedinUser) {
      getData();
    }
  }, [loggedinUser]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("user logged out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div>
      {loggedinUser ? (
        <>
          <h1>{loggedinUser}</h1>
          <button onClick={handleLogout}>logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
      {blogs &&
        blogs.map((blog: any, index: number) => (
          <h2 key={index}>{blog.name}</h2>
        ))}
    </div>
  );
};
export default Home;
