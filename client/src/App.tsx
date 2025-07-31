import { Navigate, Route, Routes } from "react-router-dom";

import { useState } from "react";

import { RefreshHandler } from "@/components/controller";

import { Login, Signup, Root } from "@/pages";

function App() {
  const [isAutheticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }: any) => {
    return isAutheticated ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=HHuiV841g_w&t=1617s
// https://www.youtube.com/watch?v=nI8PYZNFtac&t=1365s
