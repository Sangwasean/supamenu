export default function MenuCard({ name, description, price, image }) {
    return (
      <div className="flex items-center bg-white p-4 rounded-lg shadow-sm space-x-4 hover:bg-orange-200 " >
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div className="flex-1">
          <p className="text-sm text-gray-500 ">{description}</p>
          <div className="flex justify-between items-center mt-1">
            <h4 className="font-semibold">{name} <span className="text-gray-400 font-normal">- 12.5</span></h4>
            <p className="text-orange-500 font-bold">{price}</p>
          </div>
        </div>
      </div>
    );
  }
  