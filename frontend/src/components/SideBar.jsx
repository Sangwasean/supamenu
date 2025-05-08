// components/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faUsers,
  faUserGear,
  faGear,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full w-1/5 bg-black border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          <span className="text-orange-400">Supa</span>
          <span className="text-white">Menu</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <div className="space-y-2">
          {[
            {
              icon: faChartColumn,
              label: "Overview",
              path: "/overview"
            },
            {
              icon: faUsers,
              label: "Clients",
              path: "/clients"
            },
            {
              icon: faUserGear,
              label: "Users",
              path: "/users"
            },
            {
              icon: faGear,
              label: "Settings",
              path: "/settings"
            },
            {
              icon: faCircleInfo,
              label: "My Account",
              path: "/account"
            },
          ].map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center px-4 py-3 rounded-lg transition-colors
                 ${isActive 
                   ? "bg-orange-100 text-orange-600" 
                   : "text-gray-300 hover:bg-gray-800 hover:text-white"}`
              }
            >
              <FontAwesomeIcon icon={item.icon} className="w-5 h-5 mr-3" />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}