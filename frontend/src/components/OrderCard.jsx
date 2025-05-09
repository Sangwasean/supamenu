import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faClock,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function OrderCard({
  orderNumber,
  time,
  image,
  customer,
  price,
  quantity,
  status,
}) {
  const statusMap = {
    completed: {
      color: "bg-green-100 text-green-700",
      icon: faCheckCircle,
    },
    waiting: {
      color: "bg-yellow-100 text-yellow-700",
      icon: faClock,
    },
    rejected: {
      color: "bg-red-100 text-red-700",
      icon: faTimesCircle,
    },
  };

  const { color, icon } = statusMap[status.toLowerCase()] || {
    color: "bg-gray-100 text-gray-700",
    icon: faClock,
  };

  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-sm space-x-4 hover:bg-orange-200">
      <img
        src={image}
        alt="Order item"
        className="w-16 h-16 object-cover rounded-lg"
      />

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold">Order #{orderNumber}</h4>
          <span className="text-xs text-gray-400">{time}</span>
        </div>

        <p className="text-sm text-gray-600 mt-1">
          Ordered by: <span className="font-medium">{customer}</span>
        </p>

        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-gray-500">Qty: {quantity}</p>
          <p className="font-bold text-orange-500">{price}</p>
          <span
            className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${color}`}
          >
            <FontAwesomeIcon icon={icon} className="text-sm" />
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}
