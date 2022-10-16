import React from 'react';

const Orders = () => {
  return (
    <div className="basis-full py-6 pl-6 px-2">
      <div className="flex justify-between items-center">
        <h2 className="md:text-xl lg:text-2xl font-semibold">Food Order</h2>
        <div className="md:w-72 lg:w-80 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="4 4 24 24"
            className="absolute top-2 left-2"
          >
            <path
              d="m27.414 24.586-5.077-5.077A9.932 9.932 0 0 0 24 14c0-5.514-4.486-10-10-10S4 8.486 4 14s4.486 10 10 10a9.932 9.932 0 0 0 5.509-1.663l5.077 5.077a2 2 0 1 0 2.828-2.828ZM7 14c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7Z"
              fill="#f8b602"
              fillRule="evenodd"
              dataname="XMLID 223"
            />
          </svg>

          <input
            type="text"
            className="pl-10 w-full focus:outline-none py-2 rounded-md"
            placeholder="Search"
          />
        </div>
      </div>

      {/* orders start */}

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6'>
        <div className="bg-white p-6 rounded-lg border border-transparent hover:border-[#a6c44a] transition-all">
          <div className="text-center pb-4 border-b">
            <h3 className="font-bold text-base text-gray-600 mb-2">
              Order #1
            </h3>
            <p className="text-sm text-gray-400">Nov 11, 2021 , 18:38 PM</p>
          </div>
          <div className="py-4 border-b">
            <h3 className="mb-2 text-gray-600 font-medium">Fast Food Resto</h3>
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
                  dataname="Star 1"
                />
              </svg>
              <p className="text-xs text-gray-400">5.0 . 1k+ User Reviews</p>
            </div>
          </div>
          <div className="py-4 border-b">
            <div className="flex justify-between text-sm mb-2">
              <p className="text-gray-400">Delivery time</p>
              <p className="text-gray-600">10 Min</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-400">Distance</p>
              <p className="text-gray-600">2.5km</p>
            </div>
          </div>
          <div className="py-4 border-b">
            <h3 className="text-gray-600 font-medium mb-2">Order Menu</h3>
            <div className="flex gap-2 items-center mb-2">
              <div className="w-14 h-14 bg-[#c4c4c4] rounded-lg"></div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Pepperoni Pizza</p>
                <p className="text-gray-400 text-xs">x1</p>
              </div>
              <p className="ml-auto text-sm text-gray-500">
                + <span className="text-yellow-400 font-bold">$</span>5.59
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-14 h-14 bg-[#c4c4c4] rounded-lg"></div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Cheese Burger</p>
                <p className="text-gray-400 text-xs">x1</p>
              </div>
              <p className="ml-auto text-sm text-gray-500">
                + <span className="text-yellow-400 font-bold">$</span>5.59
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-1">
              <p className="text-gray-600">Total</p>
              <p className="text-gray-500">
                <span className="text-yellow-400 font-bold ">$</span>202.00
              </p>
            </div>
          </div>
          <div className="text-center pt-8">
            <button className="border-2 border-[#a6c44a]  py-1 bg-[#F6F9ED] rounded-xl text-[#a6c44a] w-full">
              completed
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-transparent hover:border-[#f8b602] transition-all">
          <div className="text-center pb-4 border-b">
            <h3 className="font-bold text-base lg:text-lg text-gray-600 mb-2">
              Order #2
            </h3>
            <p className="text-sm text-gray-400">Nov 11, 2021 , 18:38 PM</p>
          </div>
          <div className="py-4 border-b">
            <h3 className="mb-2 text-gray-600 font-medium">Fast Food Resto</h3>
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
                  dataname="Star 1"
                />
              </svg>
              <p className="text-xs text-gray-400">5.0 . 1k+ User Reviews</p>
            </div>
          </div>
          <div className="py-4 border-b">
            <div className="flex justify-between text-sm mb-2">
              <p className="text-gray-400">Delivery time</p>
              <p className="text-gray-600">10 Min</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-400">Distance</p>
              <p className="text-gray-600">2.5km</p>
            </div>
          </div>
          <div className="py-4 border-b">
            <h3 className="text-gray-600 font-medium mb-2">Order Menu</h3>
            <div className="flex gap-2 items-center mb-2">
              <div className="w-14 h-14 bg-[#c4c4c4] rounded-lg"></div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Pepperoni Pizza</p>
                <p className="text-gray-400 text-xs">x1</p>
              </div>
              <p className="ml-auto text-sm text-gray-500">
                + <span className="text-yellow-400 font-bold">$</span>5.59
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-14 h-14 bg-[#c4c4c4] rounded-lg"></div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Cheese Burger</p>
                <p className="text-gray-400 text-xs">x1</p>
              </div>
              <p className="ml-auto text-sm text-gray-500">
                + <span className="text-yellow-400 font-bold">$</span>5.59
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-1">
              <p className="text-gray-600">Total</p>
              <p className="text-gray-500">
                <span className="text-yellow-400 font-bold ">$</span>202.00
              </p>
            </div>
          </div>
          <div className="text-center pt-6">
            <button className="border-2 border-[#f8b602]  py-1 bg-[#FEF8E5] rounded-xl text-[#f8b602] w-full">
            Delivering to you
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-transparent hover:border-[#2d9cdb] transition-all">
          <div className="text-center pb-4 border-b">
            <h3 className="font-bold text-base text-gray-600 mb-2">
              Order #3
            </h3>
            <p className="text-sm text-gray-400">Nov 11, 2021 , 18:38 PM</p>
          </div>
          <div className="py-4 border-b">
            <h3 className="mb-2 text-gray-600 font-medium">Fast Food Resto</h3>
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
                  dataname="Star 1"
                />
              </svg>
              <p className="text-xs text-gray-400">5.0 . 1k+ User Reviews</p>
            </div>
          </div>
          <div className="py-4 border-b">
            <div className="flex justify-between text-sm mb-2">
              <p className="text-gray-400">Delivery time</p>
              <p className="text-gray-600">10 Min</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-400">Distance</p>
              <p className="text-gray-600">2.5km</p>
            </div>
          </div>
          <div className="py-4 border-b">
            <h3 className="text-gray-600 font-medium mb-2">Order Menu</h3>
            <div className="flex gap-2 items-center mb-2">
              <div className="w-14 h-14 bg-[#c4c4c4] rounded-lg"></div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Pepperoni Pizza</p>
                <p className="text-gray-400 text-xs">x1</p>
              </div>
              <p className="ml-auto text-sm text-gray-500">
                + <span className="text-yellow-400 font-bold">$</span>5.59
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-14 h-14 bg-[#c4c4c4] rounded-lg"></div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Cheese Burger</p>
                <p className="text-gray-400 text-xs">x1</p>
              </div>
              <p className="ml-auto text-sm text-gray-500">
                + <span className="text-yellow-400 font-bold">$</span>5.59
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-1">
              <p className="text-gray-600">Total</p>
              <p className="text-gray-500">
                <span className="text-yellow-400 font-bold ">$</span>202.00
              </p>
            </div>
          </div>
          <div className="text-center pt-8">
            <button className="border-2 border-[#2d9cdb]  py-1 bg-[#EAF5FB] rounded-xl text-[#2d9cdb] w-full">
              completed
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-transparent hover:border-[#a6c44a] transition-all">
          <div className="text-center pb-4 border-b">
            <h3 className="font-bold text-base text-gray-600 mb-2">
              Order #4
            </h3>
            <p className="text-sm text-gray-400">Nov 11, 2021 , 18:38 PM</p>
          </div>
          <div className="py-4 border-b">
            <h3 className="mb-2 text-gray-600 font-medium">Fast Food Resto</h3>
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
                  dataname="Star 1"
                />
              </svg>
              <p className="text-xs text-gray-400">5.0 . 1k+ User Reviews</p>
            </div>
          </div>
          <div className="py-4 border-b">
            <div className="flex justify-between text-sm mb-2">
              <p className="text-gray-400">Delivery time</p>
              <p className="text-gray-600">10 Min</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-400">Distance</p>
              <p className="text-gray-600">2.5km</p>
            </div>
          </div>
          <div className="py-4 border-b">
            <h3 className="text-gray-600 font-medium mb-2">Order Menu</h3>
            <div className="flex gap-2 items-center mb-2">
              <div className="w-14 h-14 bg-[#c4c4c4] rounded-lg"></div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Pepperoni Pizza</p>
                <p className="text-gray-400 text-xs">x1</p>
              </div>
              <p className="ml-auto text-sm text-gray-500">
                + <span className="text-yellow-400 font-bold">$</span>5.59
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-14 h-14 bg-[#c4c4c4] rounded-lg"></div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Cheese Burger</p>
                <p className="text-gray-400 text-xs">x1</p>
              </div>
              <p className="ml-auto text-sm text-gray-500">
                + <span className="text-yellow-400 font-bold">$</span>5.59
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-1">
              <p className="text-gray-600">Total</p>
              <p className="text-gray-500">
                <span className="text-yellow-400 font-bold ">$</span>202.00
              </p>
            </div>
          </div>
          <div className="text-center pt-8">
            <button className="border-2 border-[#a6c44a]  py-1 bg-[#F6F9ED] rounded-xl text-[#a6c44a] w-full">
              completed
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-transparent hover:border-[#a6c44a] transition-all">
          <div className="text-center pb-4 border-b">
            <h3 className="font-bold text-base text-gray-600 mb-2">
              Order #5
            </h3>
            <p className="text-sm text-gray-400">Nov 11, 2021 , 18:38 PM</p>
          </div>
          <div className="py-4 border-b">
            <h3 className="mb-2 text-gray-600 font-medium">Fast Food Resto</h3>
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
                  dataname="Star 1"
                />
              </svg>
              <p className="text-xs text-gray-400">5.0 . 1k+ User Reviews</p>
            </div>
          </div>
          <div className="py-4 border-b">
            <div className="flex justify-between text-sm mb-2">
              <p className="text-gray-400">Delivery time</p>
              <p className="text-gray-600">10 Min</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-400">Distance</p>
              <p className="text-gray-600">2.5km</p>
            </div>
          </div>
          <div className="py-4 border-b">
            <h3 className="text-gray-600 font-medium mb-2">Order Menu</h3>
            <div className="flex gap-2 items-center mb-2">
              <div className="w-14 h-14 bg-[#c4c4c4] rounded-lg"></div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Pepperoni Pizza</p>
                <p className="text-gray-400 text-xs">x1</p>
              </div>
              <p className="ml-auto text-sm text-gray-500">
                + <span className="text-yellow-400 font-bold">$</span>5.59
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-14 h-14 bg-[#c4c4c4] rounded-lg"></div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Cheese Burger</p>
                <p className="text-gray-400 text-xs">x1</p>
              </div>
              <p className="ml-auto text-sm text-gray-500">
                + <span className="text-yellow-400 font-bold">$</span>5.59
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-1">
              <p className="text-gray-600">Total</p>
              <p className="text-gray-500">
                <span className="text-yellow-400 font-bold ">$</span>202.00
              </p>
            </div>
          </div>
          <div className="text-center pt-8">
            <button className="border-2 border-[#a6c44a]  py-1 bg-[#F6F9ED] rounded-xl text-[#a6c44a] w-full">
              completed
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-transparent hover:border-[#a6c44a] transition-all">
          <div className="text-center pb-4 border-b">
            <h3 className="font-bold text-base text-gray-600 mb-2">
              Order #6
            </h3>
            <p className="text-sm text-gray-400">Nov 11, 2021 , 18:38 PM</p>
          </div>
          <div className="py-4 border-b">
            <h3 className="mb-2 text-gray-600 font-medium">Fast Food Resto</h3>
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
                  dataname="Star 1"
                />
              </svg>
              <p className="text-xs text-gray-400">5.0 . 1k+ User Reviews</p>
            </div>
          </div>
          <div className="py-4 border-b">
            <div className="flex justify-between text-sm mb-2">
              <p className="text-gray-400">Delivery time</p>
              <p className="text-gray-600">10 Min</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-400">Distance</p>
              <p className="text-gray-600">2.5km</p>
            </div>
          </div>
          <div className="py-4 border-b">
            <h3 className="text-gray-600 font-medium mb-2">Order Menu</h3>
            <div className="flex gap-2 items-center mb-2">
              <div className="w-14 h-14 bg-[#c4c4c4] rounded-lg"></div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Pepperoni Pizza</p>
                <p className="text-gray-400 text-xs">x1</p>
              </div>
              <p className="ml-auto text-sm text-gray-500">
                + <span className="text-yellow-400 font-bold">$</span>5.59
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-14 h-14 bg-[#c4c4c4] rounded-lg"></div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Cheese Burger</p>
                <p className="text-gray-400 text-xs">x1</p>
              </div>
              <p className="ml-auto text-sm text-gray-500">
                + <span className="text-yellow-400 font-bold">$</span>5.59
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-1">
              <p className="text-gray-600">Total</p>
              <p className="text-gray-500">
                <span className="text-yellow-400 font-bold ">$</span>202.00
              </p>
            </div>
          </div>
          <div className="text-center pt-8">
            <button className="border-2 border-[#a6c44a]  py-1 bg-[#F6F9ED] rounded-xl text-[#a6c44a] w-full">
              completed
            </button>
          </div>
        </div>
      </div>

      {/* order end */}
    </div>
  );
};

export default Orders;
