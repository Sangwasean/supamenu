import { Link } from "react-router-dom";

export default function LoginPage() {
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
          <h2 className="text-center text-gray-500 font-bold text-2xl mb-2">Welcome</h2>
          <h1 className="text-center text-2xl font-bold mb-6">
            Login to SupaMenu
          </h1>
          <p className="text-center mb-6">Enter your email and password below</p>

          <form className="space-y-4">
            <div>
              <label className="block font-bold text-lg text-gray-500 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email address"
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
