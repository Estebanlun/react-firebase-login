import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Alert from "./Alert";

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const { login, loginWithGoogle } = useAuth();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-fold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            id="youremail@company.com"
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-fold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 w-full text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {" "}
          Login{" "}
        </button>
      </form>
      <p className="text-center text-gray-500 text-xs mb-3">
        {" "}
        Don't have an Acount?{" "}
        <Link to="/register" className="text-blue-400">
          {" "}
          Register
        </Link>
      </p>

      <button
        className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full"
        onClick={handleGoogleSignin}
      >
        {" "}
        Login with Google{" "}
      </button>
    </div>
  );
}
