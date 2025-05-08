import Sidebar from "../components/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Clients() {
  const [showAddClientModal, setShowAddClientModal] = useState(false);
  const [formData, setFormData] = useState({
    clientName: "",
    category: "",
    representative: "",
    dateOfCreation: "",
    province: "",
    district: "",
    sector: "",
    cell: "",
    email: "",
    phone: "",
    iban: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setShowAddClientModal(false);
  };
  const handleAddClientClick = (e) => {
    e.stopPropagation();
    setShowAddClientModal(true);
  };
  const clients = [
    {
      name: "Soy Restaurant",
      sales: "2,345,678 Frw",
      updated: "Updated 1 day ago",
      date: "on 24.05.2019",
      category: "RISTO",
    },
    {
      name: "Choose Kigoli",
      sales: "98,745 Frw",
      updated: "Updated 1 day ago",
      date: "on 24.05.2019",
      category: "RISTO",
    },
    {
      name: "Planet Burget",
      sales: "321,456 Frw",
      updated: "Updated 1 day ago",
      date: "on 24.05.2019",
      category: "Active Windows",
    },
    {
      name: "M Hotel",
      sales: "78,503 Frw",
      updated: "Updated 2 days ago",
      date: "on 24.05.2019",
    },
  ];

  return (
    <div className="grid grid-cols-5 min-h-screen">
      {/* Sidebar - 1/5 width */}
      <div className="col-span-1 bg-white border-r border-gray-200">
        <Sidebar />
      </div>

      {/* Main Content - 4/5 width */}
      <div className="col-span-4 p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">Overview</h2>

        {/* New Client Section */}
        <div
          onClick={() => setShowAddClientModal(true)}
          className="bg-white p-6 rounded-lg shadow-sm mb-8 relative cursor-pointer"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">New Client</h3>
            <p className="text-gray-600">• Add a new client</p>
          </div>

          {/* Plus button with Font Awesome */}
          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-400 hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90">
            <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
          </button>
        </div>

        {showAddClientModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg w-full max-w-2xl">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold">Add New Client</h2>
                <button
                  onClick={() => setShowAddClientModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Client Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                      value={formData.clientName}
                      onChange={(e) =>
                        setFormData({ ...formData, clientName: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Category
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                    >
                      <option value="">Choose Category</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="hotel">Hotel</option>
                      <option value="cafe">Cafe</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Representative Names
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                      value={formData.representative}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          representative: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Date of Creation
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                      value={formData.dateOfCreation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dateOfCreation: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Address
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <input
                        type="text"
                        placeholder="Province"
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                        value={formData.province}
                        onChange={(e) =>
                          setFormData({ ...formData, province: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="District"
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                        value={formData.district}
                        onChange={(e) =>
                          setFormData({ ...formData, district: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Sector"
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                        value={formData.sector}
                        onChange={(e) =>
                          setFormData({ ...formData, sector: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Cell"
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                        value={formData.cell}
                        onChange={(e) =>
                          setFormData({ ...formData, cell: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Bank Account (IBAN)
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                      value={formData.iban}
                      onChange={(e) =>
                        setFormData({ ...formData, iban: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setShowAddClientModal(false)}
                    className="px-6 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500"
                  >
                    Add Client
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* All Clients Table */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">All Clients</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                    Clients details
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                    Sales
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                    Detailed report
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {clients.map((client, index) => (
                  <>
                    <tr key={index}>
                      <td className="px-4 py-3 font-medium">{client.name}</td>
                      <td className="px-4 py-3">{client.sales}</td>
                      <td className="px-4 py-3"></td>
                      <td className="px-4 py-3">{client.category}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {client.updated}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {client.date}
                      </td>
                      <td className="px-4 py-3"></td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {client.note && (
                          <span className="text-red-500">{client.note}</span>
                        )}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
