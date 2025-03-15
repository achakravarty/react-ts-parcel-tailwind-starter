import React from 'react';
import type { FunctionComponent } from 'react';

const Welcome: FunctionComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our App</h1>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-600 mb-8">
            This is a starter template built with React, TypeScript, Parcel, and Tailwind CSS.
            It's designed to help you get started with your project quickly and efficiently.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="text-indigo-600 font-bold mb-2">React</div>
              <p className="text-sm text-gray-600">A JavaScript library for building user interfaces</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-purple-600 font-bold mb-2">TypeScript</div>
              <p className="text-sm text-gray-600">Typed JavaScript at any scale</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-blue-600 font-bold mb-2">Tailwind CSS</div>
              <p className="text-sm text-gray-600">A utility-first CSS framework</p>
            </div>
          </div>
          
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome; 