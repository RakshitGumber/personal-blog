import { useUserStore } from "@/store/userStore";
const url: string = import.meta.env.VITE_BACKEND_URL;

export const signupUser = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch(`${url}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status !== 201) {
      const { message } = await response.json();
      throw new Error(message);
    }
    const result = await response.json();
    return result;
  } catch (err: any) {
    alert(err.message);
  }
};

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await fetch(`${url}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status !== 200) {
      const { message } = await response.json();
      throw new Error(message);
    }
    const result = await response.json();
    console.log(result);
    if (result.data.token) {
      useUserStore.getState().setUser({
        _id: result.data.user._id,
        username: result.data.user.username,
        email: result.data.user.email,
        token: result.data.token,
        tokenExpiry: Date.now() + 24 * 60 * 60 * 1000,
      });
    }
    return result;
  } catch (err: any) {
    alert(err.message);
  }
};

export const getBlogs = async () => {
  try {
    const user = useUserStore.getState().user;
    if (!user || user.tokenExpiry <= Date.now()) {
      useUserStore.getState().logout();
      throw new Error("Session expired. Please login again.");
    }
    const response = await fetch(`${url}/blogs/`, {
      method: "GET",
      headers: {
        Authorization: user.token,
      },
    });
    if (response.status !== 200) {
      const { message } = await response.json();
      throw new Error(message ?? "unable to fetch");
    }
    const result = await response.json();
    return result;
  } catch (error) {}
};
