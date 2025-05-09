import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUsers,
  faUserCog,
  faCog,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/SideBar";

export default function Overview() {
  return (
    <div className="bg-gray-50 grid grid-cols-5 min-h-screen">
      <div className="col-span-1">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="col-span-4 p-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Revenues (FRW)</p>
                <p className="text-2xl font-bold">38,234,000</p>
              </div>
              <FontAwesomeIcon
                icon={faSignal}
                className="text-orange-500 text-xl"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Orders</p>
                <p className="text-2xl font-bold">67,569</p>
              </div>
              <FontAwesomeIcon
                icon={faSignal}
                className="text-orange-500 text-xl"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Items</p>
                <p className="text-2xl font-bold">54,567</p>
              </div>
              <FontAwesomeIcon
                icon={faSignal}
                className="text-orange-500 text-xl"
              />
            </div>
          </div>
        </div>

        {/* Trends Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Today's trends</h2>
            <div className="text-sm text-gray-500">23 May 2022, 09:41 PM</div>
          </div>

          {/* Chart Placeholder */}
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Chart will be displayed here</span>
          </div>

          {/* Time Filters */}
          <div className="flex gap-4 mt-6">
            {["Today", "Week", "Month", "Year"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-lg ${
                  filter === "Today"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Restaurants Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Restaurants</h3>
              <div className="text-sm text-orange-400">view details</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Sole Luna</span>
                <span className="font-medium">46,000</span>
              </div>
              <div className="flex justify-between">
                <span>Soy</span>
                <span className="font-medium">12,000</span>
              </div>
            </div>
          </div>

          {/* Hotels Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Hotels</h3>
              <div className="text-sm text-orange-400">view details</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Park Inn</span>
                <span className="font-medium">4,238</span>
              </div>
              <div className="flex justify-between">
                <span>M Hotel</span>
                <span className="font-medium">1,005</span>
              </div>
            </div>
          </div>

          {/* Pubs Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Pubs</h3>
              <div className="text-sm text-orange-400">view details</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Sundowner</span>
                <span className="font-medium">300</span>
              </div>
              <div className="flex justify-between">
                <span>Gate N10</span>
                <span className="font-medium">150</span>
              </div>
            </div>
          </div>

          {/* Cafes Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Cafes</h3>
              <div className="text-sm text-orange-500">View all +</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Aroma</span>
                <span className="font-medium">2,238</span>
              </div>
              <div className="flex justify-between">
                <span>Patisserie Royale</span>
                <span className="font-medium">500</span>
              </div>
            </div>
          </div>

          {/* Create New Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-dashed">
            <div className="h-full flex flex-col items-center justify-center gap-2">
              <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
                +
              </button>
              <p className="text-sm text-gray-600">Create new</p>
              <p className="text-xs text-gray-400">Today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
