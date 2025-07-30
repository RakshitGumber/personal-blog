import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

const initialData = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const data = { ...formData };
    // @ts-ignore
    data[name] = value;
    setFormData(data);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const { email, password } = formData;
    if (email === "" || password === "") {
      alert("All fields are required");
      setFormData(initialData);
    }
    try {
      const { data } = await loginUser(formData);
      if (data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.username);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            autoFocus
            placeholder="Eg. jdoe@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            autoFocus
            placeholder="Enter a Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button>Login</button>
        <span>
          Create an account? <Link to="/signup">Sign Up</Link>
        </span>
      </form>
    </div>
  );
};
export default Login;
