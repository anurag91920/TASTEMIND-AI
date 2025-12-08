import React from "react";

export default function MenuCard({ item, onAdd }) {
  return (
    <div className="flex flex-col md:flex-row border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 m-2 max-w-md">
      {/* Image */}
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="w-full md:w-48 h-48 object-cover"
        />
      )}

      {/* Details */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{item.category}</p>
          <p className="text-lg font-semibold mt-2">₹{item.price}</p>
          <p className="text-sm text-gray-700 mt-2">{item.description}</p>
        </div>

        {/* Add Button */}
        <button
          onClick={() => onAdd(item)}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors w-full md:w-auto"
        >
          Add
        </button>
      </div>
    </div>
  );
}
