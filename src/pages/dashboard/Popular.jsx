import React from 'react';
import { Link } from 'react-router-dom';

const Popular = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="font-semibold text-gray-600 md:text-base lg:text-lg">Popular This Week</h3>
        <Link
          to=""
          className="text-yellow-400 text-sm hover:border-b border-yellow-300"
        >
          View all &gt;
        </Link>
      </div>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-3 mt-5 mb-3'>
        <div className=" p-3 bg-white rounded-lg border border-transparent hover:border-yellow-400 transition-all">
          <div className="flex gap-4 mb-2">
            <div className="w-16 h-16 bg-gray-400 rounded-lg"></div>
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-600">Fish Burger</h4>
              <p>
                <span className="text-yellow-400 font-semibold">$</span>
                <span className="font-semibold text-gray-600">5.59</span>
              </p>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 2.5 16 16"
                >
                  <path
                    d="m8 2.5 2 5.95 6 .161-4.764 3.84 1.708 6.049L8 14.922 3.056 18.5l1.708-6.05L0 8.611l6-.16z"
                    fill="#f8b602"
                    fillRule="evenodd"
                    dataname="Star 1"
                  />
                </svg>
                <p className="text-xs text-gray-400">5.0 . 1k+ User Reviews</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor...
          </p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-transparent hover:border-yellow-400 transition-all">
          <div className="flex gap-4 mb-2">
            <div className="w-16 h-16 bg-gray-400 rounded-lg"></div>
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-600">Double Burger</h4>
              <p>
                <span className="text-yellow-400 font-semibold">$</span>
                <span className="font-semibold text-gray-600">5.59</span>
              </p>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 2.5 16 16"
                >
                  <path
                    d="m8 2.5 2 5.95 6 .161-4.764 3.84 1.708 6.049L8 14.922 3.056 18.5l1.708-6.05L0 8.611l6-.16z"
                    fill="#f8b602"
                    fillRule="evenodd"
                    dataname="Star 1"
                  />
                </svg>
                <p className="text-xs text-gray-400">5.0 . 1k+ User Reviews</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor...
          </p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-transparent hover:border-yellow-400 transition-all">
          <div className="flex gap-4 mb-2">
            <div className="w-16 h-16 bg-gray-400 rounded-lg"></div>
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-600">Beef Burger</h4>
              <p>
                <span className="text-yellow-400 font-semibold">$</span>
                <span className="font-semibold text-gray-600">5.59</span>
              </p>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 2.5 16 16"
                >
                  <path
                    d="m8 2.5 2 5.95 6 .161-4.764 3.84 1.708 6.049L8 14.922 3.056 18.5l1.708-6.05L0 8.611l6-.16z"
                    fill="#f8b602"
                    fillRule="evenodd"
                    dataname="Star 1"
                  />
                </svg>
                <p className="text-xs text-gray-400">5.0 . 1k+ User Reviews</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor...
          </p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-transparent hover:border-yellow-400 transition-all">
          <div className="flex gap-4 mb-2">
            <div className="w-16 h-16 bg-gray-400 rounded-lg"></div>
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-600">Cheese Burger</h4>
              <p>
                <span className="text-yellow-400 font-semibold">$</span>
                <span className="font-semibold text-gray-600">5.59</span>
              </p>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 2.5 16 16"
                >
                  <path
                    d="m8 2.5 2 5.95 6 .161-4.764 3.84 1.708 6.049L8 14.922 3.056 18.5l1.708-6.05L0 8.611l6-.16z"
                    fill="#f8b602"
                    fillRule="evenodd"
                    dataname="Star 1"
                  />
                </svg>
                <p className="text-xs text-gray-400">5.0 . 1k+ User Reviews</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popular;
