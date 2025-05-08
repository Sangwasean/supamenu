// components/DashboardLayout.jsx
import { Outlet, Link } from 'react-router-dom';
import { ChartBarIcon, UsersIcon, BookOpenIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-white border-r">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600">SupaMenu</h1>
        </div>
        <nav className="mt-4">
          {[
            { name: 'Overview', icon: ChartBarIcon, path: '/' },
            { name: 'Clients', icon: UsersIcon, path: '/clients' },
            { name: 'Menu Builder', icon: BookOpenIcon, path: '/menu' },
            { name: 'Settings', icon: Cog6ToothIcon, path: '/settings' },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100"
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1 max-w-xl">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center ml-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <span className="h-6 w-6 bg-gray-300 rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Page Content */}
        <Outlet />
      </div>
    </div>
  );
}