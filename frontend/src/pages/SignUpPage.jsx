import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUpPage() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, {
        firstName,
        lastName,
        phone,
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      toast.success("Registration successful! Redirecting to dashboard...", {
        position: "top-center",
        autoClose: 3000,
      });
      setTimeout(() => navigate("/restaurant"), 3000); // Redirect after toast
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed.", {
        position: "top-center",
        autoClose: 3000,
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

      {/* Right Panel - Signup Form */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 rounded-lg">
          <h2 className="text-center text-gray-500 font-bold text-2xl mb-2">
            Welcome
          </h2>
          <h1 className="text-center text-2xl font-bold mb-6">
            Register to SupaMenu
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block font-bold text-lg text-gray-500 mb-1">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="First name"
              />
              <label className="block font-bold text-lg text-gray-500 mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Last name"
              />
              <label className="block font-bold text-lg text-gray-500 mb-1">
                Phone
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Phone"
              />
              <label className="block font-bold text-lg text-gray-500 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Email address"
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition"
            >
              Register
            </button>
            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:underline font-bold text-md"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
