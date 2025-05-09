import {
  faUtensils,
  faClipboardList,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <nav className="bg-black py-4 px-8 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-white">Supa</span>
            <span className="text-orange-400">Menu</span>
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <a href="#how-it-works" className="text-white hover:text-orange-400">
            How it works
          </a>
          <button className="border border-orange-400 text-orange-400 px-4 py-2 rounded hover:bg-orange-400 hover:text-white transition-colors">
            <a href="/login">Sign In</a>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Register your restaurant on{" "}
            <span className="text-orange-400">SupaMenu</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            For free and get more revenue!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
            <button className="bg-orange-400 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-orange-500 transition-colors">
              <a href="/signup">Register your Restaurant</a>
            </button>
            <button className="border-2 border-gray-300 text-white px-8 py-3 rounded-lg text-lg font-medium hover:border-orange-400 hover:text-orange-400 transition-colors">
              <a href="/login">Already registered? Sign In</a>
            </button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-6 bg-orange-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">
                <FontAwesomeIcon
                  icon={faUtensils}
                  className="text-4xl text-orange-400 mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Register</h3>
              <p className="text-gray-600">Create your restaurant account</p>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-orange-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="text-4xl text-orange-400 mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Setup Profile</h3>
              <p className="text-gray-600">Add menu and business details</p>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-orange-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">
                <FontAwesomeIcon
                  icon={faBasketShopping}
                  className="text-4xl text-orange-400 mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Start Selling</h3>
              <p className="text-gray-600">
                Receive orders and grow your business
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
