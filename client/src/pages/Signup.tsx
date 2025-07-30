import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../api";

const initialData = {
  username: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const data = { ...formData };
    // @ts-ignore
    data[name] = value;
    setFormData(data);
  };

  const handleSignup = async (e: any) => {
    e.preventDefault();
    const { username, email, password } = formData;
    if (username === "" || email === "" || password === "") {
      alert("All fields are required");
      setFormData(initialData);
    }

    const data = await signupUser(formData);
    if (data.success) {
      alert(data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <div className="container">
      <h1>Sign up</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            placeholder="Eg. JohnDoe"
            value={formData.username}
            onChange={handleChange}
            autoComplete={"false"}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            autoFocus
            value={formData.email}
            placeholder="Eg. jdoe@example.com"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            autoFocus
            value={formData.password}
            placeholder="Enter a Password"
            onChange={handleChange}
          />
        </div>
        <button>Sign Up</button>
        <span>
          Already a user? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};
export default Signup;
