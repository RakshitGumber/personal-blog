import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container">
      <h1>Sign up</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            placeholder="Eg. JohnDoe"
          />
        </div>
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
          Already a user? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};
export default Signup;
