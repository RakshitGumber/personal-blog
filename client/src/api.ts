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
    return result;
  } catch (err: any) {
    alert(err.message);
  }
};

export const getBlogs = async () => {
  try {
    const response = await fetch(`${url}/blogs/`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token")!,
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
