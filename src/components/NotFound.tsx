

import React from 'react';
import { FaHammer, FaTools } from 'react-icons/fa'; 
const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
      <div className="text-6xl mb-4">
        <FaHammer className="inline-block text-amber-600" />
        <FaTools className="inline-block text-amber-600 ml-2" />
      </div>
      <h1 className="text-4xl font-bold">Page Under Construction</h1>
      <p className="mt-4 text-lg">
        We are working hard to get this page ready. Please check back later!
      </p>
      <div className="mt-6">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition">
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
