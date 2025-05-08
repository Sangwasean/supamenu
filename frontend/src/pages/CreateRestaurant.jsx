import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faClock,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function CreateRestaurant() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    restaurantName: "",
    completeName: "",
    address: "",
    contact: "+250 ",
    ownerContact: "+250 ",
    ownerName: "",
    ownerEmail: "",
    restaurantType: "",
    openingTime: "",
    closingTime: "",
  });

  const steps = [
    { id: 1, title: "Create Restaurant Profile", icon: faUtensils },
    { id: 2, title: "Restaurant Type & Timings", icon: faClock },
    { id: 3, title: "Create Your Menu", icon: faBookOpen },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className=" bg-gray-50">
      {/* Header */}
      <div className="flex items-center p-8">
        <h1 className="text-2xl font-bold">
          <span className="text-black">Supa</span>
          <span className="text-orange-400">Menu</span>
        </h1>
      </div>
      <div className=" bg-white rounded-lg shadow-md flex flex-row p-8 space-x-12 justify-center">
        {/* Progress Steps */}
        <div className="p-6 border space-y-2">
          <h1 className="text-2xl font-semibold">
            1. Create your restaurant profile
          </h1>
          {steps.map((step) => (
            <div
              key={step.id}
              className={`p-4 rounded-lg ${
                currentStep === step.id
                  ? "bg-orange-100 border-2 border-orange-400"
                  : "bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={step.icon}
                  className={`text-lg ${
                    currentStep === step.id
                      ? "text-orange-500"
                      : "text-gray-400"
                  }`}
                />
                <div>
                  <p className="text-xs text-gray-500">Step {step.id}</p>
                  <p className="font-medium">{step.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-2 border">
          {currentStep === 1 && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Restaurant Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border rounded-lg"
                    value={formData.restaurantName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        restaurantName: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Complete Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border rounded-lg"
                    value={formData.completeName}
                    onChange={(e) =>
                      setFormData({ ...formData, completeName: e.target.value })
                    }
                  />
                </div>
                <h2 className="text-xl font-semibold">Contact Information</h2>
                <br />
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Contact Number
                  </label>
                  <div className="flex items-center border rounded-lg">
                    <span className="px-3 bg-gray-100 py-2">+250</span>
                    <input
                      type="tel"
                      required
                      className="flex-1 p-2"
                      value={formData.contact.replace("+250 ", "")}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contact: "+250 " + e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Owner Contact
                  </label>
                  <div className="flex items-center border rounded-lg">
                    <span className="px-3 bg-gray-100 py-2">+250</span>
                    <input
                      type="tel"
                      required
                      className="flex-1 p-2"
                      value={formData.ownerContact.replace("+250 ", "")}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          ownerContact: "+250 " + e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <h2 className="text-xl font-semibold">Owner Details</h2>
                <br />
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Owner Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border rounded-lg"
                    value={formData.ownerName}
                    onChange={(e) =>
                      setFormData({ ...formData, ownerName: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Owner Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-2 border rounded-lg"
                    value={formData.ownerEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, ownerEmail: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6 ">
              <h2 className="text-xl font-semibold">Type & Timings</h2>

              <div className="flex flex-col gap-6">
              <label className="block text-sm font-medium">
                    Restaurant Type
                  </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  
                  <select
                    required
                    className="w-full p-2 border rounded-lg"
                    value={formData.restaurantType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        restaurantType: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Type</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="cafe">Cafe</option>
                    <option value="bar">Bar</option>
                    <option value="hotel">Hotel</option>
                  </select>
                  <select
                    required
                    className="w-full p-2 border rounded-lg"
                    value={formData.restaurantType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        restaurantType: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Type</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="cafe">Cafe</option>
                    <option value="bar">Bar</option>
                    <option value="hotel">Hotel</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Opening Time
                    </label>
                    <input
                      type="time"
                      required
                      className="w-full p-2 border rounded-lg"
                      value={formData.openingTime}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          openingTime: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Closing Time
                    </label>
                    <input
                      type="time"
                      required
                      className="w-full p-2 border rounded-lg"
                      value={formData.closingTime}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          closingTime: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <label className="block text-md font-medium m-2">
                    Picture or Logo
                  </label>
                  <div className=" w-full border-2 border-dashed rounded-lg p-4 text-center">
                    <p className="text-gray-500">Drag or drop image here</p>
                    <p className="text-sm text-gray-400 mt-2">or</p>
                    <button
                      type="button"
                      className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                    >
                      Browse Files
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Menu Setup</h2>

              {/* Categories Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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

              {/* Menu Item Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Menu Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg"
                      placeholder="Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Price
                    </label>
                    <div className="flex items-center border rounded-lg">
                      <input
                        type="number"
                        className="flex-1 p-2 rounded-lg"
                        placeholder="0.00"
                      />
                      <span className="px-3 bg-gray-100">RWF</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Menu Description
                  </label>
                  <textarea
                    className="w-full p-2 border rounded-lg"
                    rows="3"
                    placeholder="Description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ingredients
                  </label>
                  <textarea
                    className="w-full p-2 border rounded-lg"
                    rows="2"
                    placeholder="List ingredients separated by commas"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Image
                  </label>
                  <div className="border-2 border-dashed rounded-lg p-4">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <button
                        type="button"
                        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                      >
                        Upload Image
                      </button>
                      <p className="text-sm text-gray-500">
                        JPEG, PNG up to 2MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="px-4 py-2 text-orange-500 hover:bg-orange-50 rounded-lg"
                >
                  Add more +
                </button>
              </div>
            </div>
          )}

          {/* Navigation */}

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              className={`px-6 py-2 rounded-lg ${
                currentStep > 1 ? "bg-gray-100 hover:bg-gray-200" : "invisible"
              }`}
            >
              Previous
            </button>

            <button
              type={currentStep === 3 ? "submit" : "button"}
              onClick={(e) => {
                if (currentStep < 3) {
                  // Validate form before proceeding
                  const form = e.currentTarget.form;
                  if (form.checkValidity()) {
                    setCurrentStep(currentStep + 1);
                  } else {
                    form.reportValidity();
                  }
                }
              }}
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              {currentStep === 3 ? "Complete Setup" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
