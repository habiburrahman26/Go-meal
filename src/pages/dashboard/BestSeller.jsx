import React from 'react';
import { Link } from 'react-router-dom';

const BestSeller = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h3 className="font-semibold text-gray-600 md:text-base lg:text-lg">Best seller</h3>
        <Link
          to=""
          className="text-yellow-400 text-sm hover:border-b border-yellow-300"
        >
          View all &gt;
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-3">
      <div className="bg-white p-4 flex flex-col items-center">
          <div className=" md:w-28 md:h-28 bg-[#c4c4c4] rounded-lg"></div>
          <div className="flex flex-col gap-2 text-center">
            <h3 className="pt-4 text-gray-600">Pepperoni Pizza</h3>
            <p className="font-bold  text-lg">
              <span className="text-yellow-400">$</span>5.59
            </p>
            <div className="flex gap-2 text-gray-400 text-sm">
              <p>Sold 1k</p>
              <p>|</p>
              <div className="flex gap-2">
                <span className="text-green-400"> + 15%</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0.75 0.75 22.5 22.5"
                  className="rotate-90"
                >
                  <path
                    d="M12 .75A11.235 11.235 0 0 0 .75 12c0 6.225 5.025 11.25 11.25 11.25S23.25 18.225 23.25 12 18.225.75 12 .75Zm4.575 12h-6.9L11.4 14.7c.375.45.3 1.05-.075 1.425a1.21 1.21 0 0 1-.675.225c-.3 0-.6-.15-.75-.375l-3.15-3.6c-.075-.075-.075-.15-.15-.225 0-.075 0-.075-.075-.15v-.45c0-.075 0-.075.075-.15 0 0 0-.075.075-.075l.075-.075.075-.075 3.225-3.15c.375-.375 1.05-.375 1.425 0s.375 1.05 0 1.425l-1.5 1.425h6.675c.525 0 1.05.45 1.05 1.05-.15.375-.6.825-1.125.825Z"
                    fill="#a6c44a"
                    fillRule="evenodd"
                    dataname="Vector"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col items-center">
          <div className=" md:w-28 md:h-28 bg-[#c4c4c4] rounded-lg"></div>
          <div className="flex flex-col gap-2 text-center">
            <h3 className="pt-4 text-gray-600">Japanese Ramen</h3>
            <p className="font-bold  text-lg">
              <span className="text-yellow-400">$</span>5.59
            </p>
            <div className="flex gap-2 text-gray-400 text-sm">
              <p>Sold 1k</p>
              <p>|</p>
              <div className="flex gap-2">
                <span className="text-green-400"> + 15%</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0.75 0.75 22.5 22.5"
                  className="rotate-90"
                >
                  <path
                    d="M12 .75A11.235 11.235 0 0 0 .75 12c0 6.225 5.025 11.25 11.25 11.25S23.25 18.225 23.25 12 18.225.75 12 .75Zm4.575 12h-6.9L11.4 14.7c.375.45.3 1.05-.075 1.425a1.21 1.21 0 0 1-.675.225c-.3 0-.6-.15-.75-.375l-3.15-3.6c-.075-.075-.075-.15-.15-.225 0-.075 0-.075-.075-.15v-.45c0-.075 0-.075.075-.15 0 0 0-.075.075-.075l.075-.075.075-.075 3.225-3.15c.375-.375 1.05-.375 1.425 0s.375 1.05 0 1.425l-1.5 1.425h6.675c.525 0 1.05.45 1.05 1.05-.15.375-.6.825-1.125.825Z"
                    fill="#a6c44a"
                    fillRule="evenodd"
                    dataname="Vector"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col items-center">
          <div className=" md:w-28 md:h-28 bg-[#c4c4c4] rounded-lg"></div>
          <div className="flex flex-col gap-2 text-center">
            <h3 className="pt-4 text-gray-600">Fried Rice</h3>
            <p className="font-bold  text-lg">
              <span className="text-yellow-400">$</span>5.59
            </p>
            <div className="flex gap-2 text-gray-400 text-sm">
              <p>Sold 1k</p>
              <p>|</p>
              <div className="flex gap-2">
                <span className="text-green-400"> + 15%</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0.75 0.75 22.5 22.5"
                  className="rotate-90"
                >
                  <path
                    d="M12 .75A11.235 11.235 0 0 0 .75 12c0 6.225 5.025 11.25 11.25 11.25S23.25 18.225 23.25 12 18.225.75 12 .75Zm4.575 12h-6.9L11.4 14.7c.375.45.3 1.05-.075 1.425a1.21 1.21 0 0 1-.675.225c-.3 0-.6-.15-.75-.375l-3.15-3.6c-.075-.075-.075-.15-.15-.225 0-.075 0-.075-.075-.15v-.45c0-.075 0-.075.075-.15 0 0 0-.075.075-.075l.075-.075.075-.075 3.225-3.15c.375-.375 1.05-.375 1.425 0s.375 1.05 0 1.425l-1.5 1.425h6.675c.525 0 1.05.45 1.05 1.05-.15.375-.6.825-1.125.825Z"
                    fill="#a6c44a"
                    fillRule="evenodd"
                    dataname="Vector"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col items-center">
          <div className=" md:w-28 md:h-28 bg-[#c4c4c4] rounded-lg"></div>
          <div className="flex flex-col gap-2 text-center">
            <h3 className="pt-4 text-gray-600">Vegan Pizza</h3>
            <p className="font-bold  text-lg">
              <span className="text-yellow-400">$</span>5.59
            </p>
            <div className="flex gap-2 text-gray-400 text-sm">
              <p>Sold 1k</p>
              <p>|</p>
              <div className="flex gap-2">
                <span className="text-green-400"> + 15%</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0.75 0.75 22.5 22.5"
                  className="rotate-90"
                >
                  <path
                    d="M12 .75A11.235 11.235 0 0 0 .75 12c0 6.225 5.025 11.25 11.25 11.25S23.25 18.225 23.25 12 18.225.75 12 .75Zm4.575 12h-6.9L11.4 14.7c.375.45.3 1.05-.075 1.425a1.21 1.21 0 0 1-.675.225c-.3 0-.6-.15-.75-.375l-3.15-3.6c-.075-.075-.075-.15-.15-.225 0-.075 0-.075-.075-.15v-.45c0-.075 0-.075.075-.15 0 0 0-.075.075-.075l.075-.075.075-.075 3.225-3.15c.375-.375 1.05-.375 1.425 0s.375 1.05 0 1.425l-1.5 1.425h6.675c.525 0 1.05.45 1.05 1.05-.15.375-.6.825-1.125.825Z"
                    fill="#a6c44a"
                    fillRule="evenodd"
                    dataname="Vector"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col items-center">
          <div className=" md:w-28 md:h-28 bg-[#c4c4c4] rounded-lg"></div>
          <div className="flex flex-col gap-2 text-center">
            <h3 className="pt-4 text-gray-600">Beef Burger</h3>
            <p className="font-bold  text-lg">
              <span className="text-yellow-400">$</span>5.59
            </p>
            <div className="flex gap-2 text-gray-400 text-sm">
              <p>Sold 1k</p>
              <p>|</p>
              <div className="flex gap-2">
                <span className="text-green-400"> + 15%</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0.75 0.75 22.5 22.5"
                  className="rotate-90"
                >
                  <path
                    d="M12 .75A11.235 11.235 0 0 0 .75 12c0 6.225 5.025 11.25 11.25 11.25S23.25 18.225 23.25 12 18.225.75 12 .75Zm4.575 12h-6.9L11.4 14.7c.375.45.3 1.05-.075 1.425a1.21 1.21 0 0 1-.675.225c-.3 0-.6-.15-.75-.375l-3.15-3.6c-.075-.075-.075-.15-.15-.225 0-.075 0-.075-.075-.15v-.45c0-.075 0-.075.075-.15 0 0 0-.075.075-.075l.075-.075.075-.075 3.225-3.15c.375-.375 1.05-.375 1.425 0s.375 1.05 0 1.425l-1.5 1.425h6.675c.525 0 1.05.45 1.05 1.05-.15.375-.6.825-1.125.825Z"
                    fill="#a6c44a"
                    fillRule="evenodd"
                    dataname="Vector"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col items-center">
          <div className=" md:w-28 md:h-28 bg-[#c4c4c4] rounded-lg"></div>
          <div className="flex flex-col gap-2 text-center">
            <h3 className="pt-4 text-gray-600">Pepperoni Pizza</h3>
            <p className="font-bold  text-lg">
              <span className="text-yellow-400">$</span>5.59
            </p>
            <div className="flex gap-2 text-gray-400 text-sm">
              <p>Sold 1k</p>
              <p>|</p>
              <div className="flex gap-2">
                <span className="text-green-400"> + 15%</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0.75 0.75 22.5 22.5"
                  className="rotate-90"
                >
                  <path
                    d="M12 .75A11.235 11.235 0 0 0 .75 12c0 6.225 5.025 11.25 11.25 11.25S23.25 18.225 23.25 12 18.225.75 12 .75Zm4.575 12h-6.9L11.4 14.7c.375.45.3 1.05-.075 1.425a1.21 1.21 0 0 1-.675.225c-.3 0-.6-.15-.75-.375l-3.15-3.6c-.075-.075-.075-.15-.15-.225 0-.075 0-.075-.075-.15v-.45c0-.075 0-.075.075-.15 0 0 0-.075.075-.075l.075-.075.075-.075 3.225-3.15c.375-.375 1.05-.375 1.425 0s.375 1.05 0 1.425l-1.5 1.425h6.675c.525 0 1.05.45 1.05 1.05-.15.375-.6.825-1.125.825Z"
                    fill="#a6c44a"
                    fillRule="evenodd"
                    dataname="Vector"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
