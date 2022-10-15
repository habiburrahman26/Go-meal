import React from 'react';
import { Link } from 'react-router-dom';

const Promo = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h3 className="font-semibold text-gray-600 text-lg">Promo</h3>
        <Link
          to=""
          className="text-yellow-400 text-sm hover:border-b border-yellow-300"
        >
          View all &gt;
        </Link>
      </div>

      {/* grid start */}
      <div className="grid lg:grid-cols-4 gap-3">
        <div className="flex gap-2 bg-white px-3 py-6 relative">
          <div className="flex flex-col gap-1 self-end">
            <h3 className="text-gray-600">Fish Burger</h3>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-lg">
                <span className="text-yellow-400">$</span>3.59
              </p>
              <span className="text-sm line-through text-gray-400">$5.59</span>
            </div>
            <div className="flex items-center gap-1">
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
                  dataName="Star 1"
                />
              </svg>
              <p className="text-xs text-gray-400">5.0 . 1k+ User Reviews</p>
            </div>
          </div>
          <div className="w-28 h-28 bg-[#c4c4c4] rounded-lg"></div>
          <p className="px-4 py-1 bg-red-500 text-white absolute top-4 left-0 text-sm rounded-tr-lg rounded-br-lg">
            15% off
          </p>
        </div>
        <div className="flex gap-2 bg-white px-3 py-6 relative">
          <div className="flex flex-col gap-1 self-end">
            <h3 className="text-gray-600">Fish Burger</h3>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-lg">
                <span className="text-yellow-400">$</span>3.59
              </p>
              <span className="text-sm line-through text-gray-400">$5.59</span>
            </div>
            <div className="flex items-center gap-1">
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
                  dataName="Star 1"
                />
              </svg>
              <p className="text-xs text-gray-400">5.0 . 1k+ User Reviews</p>
            </div>
          </div>
          <div className="w-28 h-28 bg-[#c4c4c4] rounded-lg"></div>
          <p className="px-4 py-1 bg-red-500 text-white absolute top-4 left-0 text-sm rounded-tr-lg rounded-br-lg">
            15% off
          </p>
        </div>
        <div className="flex gap-2 bg-white px-3 py-6 relative">
          <div className="flex flex-col gap-1 self-end">
            <h3 className="text-gray-600">Fish Burger</h3>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-lg">
                <span className="text-yellow-400">$</span>3.59
              </p>
              <span className="text-sm line-through text-gray-400">$5.59</span>
            </div>
            <div className="flex items-center gap-1">
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
                  dataName="Star 1"
                />
              </svg>
              <p className="text-xs text-gray-400">5.0 . 1k+ User Reviews</p>
            </div>
          </div>
          <div className="w-28 h-28 bg-[#c4c4c4] rounded-lg"></div>
          <p className="px-4 py-1 bg-red-500 text-white absolute top-4 left-0 text-sm rounded-tr-lg rounded-br-lg">
            15% off
          </p>
        </div>
        <div className="flex gap-2 bg-white px-3 py-6 relative">
          <div className="flex flex-col gap-1 self-end">
            <h3 className="text-gray-600">Fish Burger</h3>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-lg">
                <span className="text-yellow-400">$</span>3.59
              </p>
              <span className="text-sm line-through text-gray-400">$5.59</span>
            </div>
            <div className="flex items-center gap-1">
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
                  dataName="Star 1"
                />
              </svg>
              <p className="text-xs text-gray-400">5.0 . 1k+ User Reviews</p>
            </div>
          </div>
          <div className="w-28 h-28 bg-[#c4c4c4] rounded-lg"></div>
          <p className="px-4 py-1 bg-red-500 text-white absolute top-4 left-0 text-sm rounded-tr-lg rounded-br-lg">
            15% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default Promo;
