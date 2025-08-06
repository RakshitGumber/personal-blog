import { Navigate, Route, Routes } from "react-router-dom";
import { useUserStore } from "@/store/userStore";
import { Login, Signup, Root } from "@/pages";
import type { JSX } from "react";

function PrivateRoute({ element }: { element: JSX.Element }) {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated());
  return isAuthenticated ? element : <Navigate to="/user/login" />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/home" element={<PrivateRoute element={<Root />} />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/user/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
