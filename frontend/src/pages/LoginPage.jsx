import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      navigate("/signup");
    } catch (err) {
      toast.error("Authentication failed", {
        position: "top-center",
        autoClose: 3000, // Auto close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Branding */}
      <div className="w-1/2 bg-orange-400 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">
          <span className="text-black">Supa</span>Menu
        </h1>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-full h-2/3 max-w-md p-16 rounded-lg ">
          <h2 className="text-center text-gray-500 font-bold text-2xl mb-2">
            Welcome
          </h2>
          <h1 className="text-center text-2xl font-bold mb-6">
            Login to SupaMenu
          </h1>
          <p className="text-center mb-6">
            Enter your email and password below
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block font-bold text-lg text-gray-500 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-bold text-lg text-gray-500">
                  Password
                </label>
                <Link
                  to="/reset"
                  className="text-sm text-gray-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition"
            >
              Log In
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:underline font-bold text-md"
            >
              Sign up
            </Link>
          </div>

          <div className="mt-2 text-center text-sm text-gray-500">
            Forgot your password/login{" "}
            <Link
              to="/"
              className="text-blue-600 hover:underline font-bold text-md"
            >
              RESET
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
