import React from 'react';

function PageNotFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">Error 404</h1>
        <p className="text-2xl text-gray-600 mb-8">Oops! Page not found.</p>
        <p className="text-lg text-gray-700">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
       </div>
    </div>
  );
}

export default PageNotFound;
