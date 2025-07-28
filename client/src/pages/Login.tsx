import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            autoFocus
            placeholder="Eg. jdoe@example.com"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            autoFocus
            placeholder="Enter a Password"
          />
        </div>
        <button>Sign Up</button>
        <span>
          Already a user? <Link to="/signup">Sign Up</Link>
        </span>
      </form>
    </div>
  );
};
export default Login;
