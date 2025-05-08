// pages/MenuBuilder.jsx
import { useState } from 'react';

export default function MenuBuilder() {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    category: 'Main',
    price: '',
    description: '',
    image: null,
  });

  const categories = ['Drink', 'Starter', 'Appetizer', 'Dessert', 'Main'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setMenuItems([...menuItems, newItem]);
    setNewItem({ name: '', category: 'Main', price: '', description: '', image: null });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Menu Builder</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Add Menu Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Item Name</label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border rounded-lg"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                className="w-full px-3 py-2 border rounded-lg"
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Price (RWF)</label>
              <input
                type="number"
                required
                className="w-full px-3 py-2 border rounded-lg"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg"
                rows="3"
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Image</label>
              <input
                type="file"
                className="w-full"
                onChange={(e) => setNewItem({ ...newItem, image: e.target.files[0] })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Add Menu Item
            </button>
          </div>
        </form>

        {/* Menu Preview */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Menu Preview</h3>
          {menuItems.map((item, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.category}</p>
                  <p className="text-gray-700 mt-1">{item.description}</p>
                </div>
                <span className="font-medium">{item.price} RWF</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}