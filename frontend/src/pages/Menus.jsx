import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUserCog,
  faCog,
  faSignal,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/SideBar";
import MenuCard from "../components/MenuCard";

export default function Menus() {
  return (
    <div className="bg-gray-50 grid grid-cols-5 min-h-screen">
      <div className="col-span-1">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="col-span-4 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Menu Management</h2>
          <div className="text-sm text-gray-500">
            Last updated: 25 May 2022, 09:41 PM
          </div>
        </div>

        {/* Menu Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Drinks Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Menu Items</h3>
            {/* Categories Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-4">
              {["Drink", "Starter", "Appetizer", "Dessert", "Main"].map(
                (category) => (
                  <button
                    key={category}
                    className="p-2 border rounded-lg hover:bg-orange-400 text-sm hover:text-white hover:border-none font-medium"
                  >
                    {category}
                  </button>
                )
              )}
            </div>
            <div className="space-y-4">
              <MenuCard
                name="Tom Yummy"
                description="Kaffir Lime Vodka, Lemongrass, Ginger, Citrus"
                price="Frw 5,000"
                image="food.png"
              />
              <MenuCard
                name="Tom Yummy"
                description="Kaffir Lime Vodka, Lemongrass, Ginger, Citrus"
                price="Frw 5,000"
                image="food.png"
              />
              <MenuCard
                name="Tom Yummy"
                description="Kaffir Lime Vodka, Lemongrass, Ginger, Citrus"
                price="Frw 5,000"
                image="food.png"
              />
            </div>
          </div>

          {/* Queue Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">On Queue Orders</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <MenuCard
                  name="Tom Yummy"
                  description="JOHN DOE"
                  price="Frw 5,000"
                  image="food.png"
                />
              ))}
            </div>
          </div>
        </div>
        {/* Add New Item */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm border-2 border-dashed">
          <button className="w-full flex flex-col items-center justify-center gap-2 py-8 hover:bg-gray-50">
            <FontAwesomeIcon
              icon={faPlus}
              className="text-orange-500 text-2xl"
            />
            <p className="font-medium">Create new menu item</p>
          </button>
        </div>
      </div>
    </div>
  );
}
