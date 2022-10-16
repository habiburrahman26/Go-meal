import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const OrderDetails = () => {
  return (
    <div className="bg-white basis-96 py-6 mx-2 lg:mx-0 px-3 md:px-6 -order-1 lg:order-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 justify-between items-center">
          <div className="mr-16 cursor-pointer block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="6.667 10 28.333 24.411"
            >
              <g dataname="CompositeLayer">
                <path
                  d="M18.333 14.167A.833.833 0 0 0 17.5 15v1.667a1.645 1.645 0 0 1-.833 1.41V15A.833.833 0 1 0 15 15v3.077a1.645 1.645 0 0 1-.833-1.41V15a.833.833 0 1 0-1.667 0v1.667a3.333 3.333 0 0 0 2.5 3.215v3.451a.833.833 0 1 0 1.667 0v-3.451a3.333 3.333 0 0 0 2.5-3.215V15a.833.833 0 0 0-.834-.833Zm3.707.088a.833.833 0 0 0-1.207.745v8.333a.833.833 0 1 0 1.667 0v-1.015l2.387-.598a1.287 1.287 0 0 0 .946-1.333 6.833 6.833 0 0 0-3.793-6.132Z"
                  fill="#a098ae"
                  fillRule="evenodd"
                  dataname="Vector"
                />
                <path
                  d="M32.5 16.667h-.833V12.5a2.5 2.5 0 0 0-2.5-2.5h-20a2.5 2.5 0 0 0-2.5 2.5v13.333a2.5 2.5 0 0 0 2.5 2.5H10v1.5a1.252 1.252 0 0 0 2.133.885l2.379-2.385h2.155v.834a2.5 2.5 0 0 0 2.5 2.5h7.988l2.378 2.378a1.25 1.25 0 0 0 2.134-.878v-1.5h.833a2.5 2.5 0 0 0 2.5-2.5v-10a2.5 2.5 0 0 0-2.5-2.5ZM30 25.833a.833.833 0 0 1-.833.834h-15a.833.833 0 0 0-.59.243l-1.91 1.912V27.5a.833.833 0 0 0-.834-.833H9.167a.833.833 0 0 1-.834-.834V12.5a.833.833 0 0 1 .834-.833h20A.833.833 0 0 1 30 12.5v13.333Z"
                  fill="#a098ae"
                  fillRule="evenodd"
                  dataname="Vector"
                />
              </g>
            </svg>
            <div className="notification"></div>
          </div>
          <div className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="7.452 5.059 25.096 29.941"
            >
              <path
                d="M30.55 22.963a1.163 1.163 0 0 1-.55-1.038v-4.062a10.475 10.475 0 0 0-6.25-9.625 3.75 3.75 0 0 0-7.413 0 10 10 0 0 0-3.262 2.112A9.9 9.9 0 0 0 10 17.5v4.425a1.162 1.162 0 0 1-.55 1.038 3.75 3.75 0 0 0-1.95 3.912A3.862 3.862 0 0 0 11.387 30H15a5 5 0 1 0 10 0h3.612a3.863 3.863 0 0 0 3.888-3.125 3.75 3.75 0 0 0-1.95-3.912ZM20 32.5a2.5 2.5 0 0 1-2.5-2.5h5a2.5 2.5 0 0 1-2.5 2.5Zm8.612-5H11.387A1.363 1.363 0 0 1 10 26.475a1.25 1.25 0 0 1 .637-1.325 3.663 3.663 0 0 0 1.863-3.225V17.5a7.5 7.5 0 0 1 2.275-5.388 7.012 7.012 0 0 1 2.037-1.387A7.312 7.312 0 0 1 20 10h.237a7.1 7.1 0 0 1 2.938.75 7.962 7.962 0 0 1 4.325 7.113v4.062a3.662 3.662 0 0 0 1.85 3.225 1.25 1.25 0 0 1 .65 1.312 1.362 1.362 0 0 1-1.388 1.038Z"
                fill="#a098ae"
                fillRule="evenodd"
                dataname="Layer 2"
              />
            </svg>
            <div className="notification  hover:cursor-pointer"></div>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#a098ae"
              class="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
        <div className="w-10 h-10 bg-gray-400 rounded-lg ml-7"></div>
      </div>

      {/* Order tracker start */}
      <div className="mb-5 mt-6">
        <h3 className="text-gray-600 font-semibold text-base lg:text-lg mb-2">
          Order Tracker
        </h3>
        <MapContainer
          center={[23.8103, 90.4125]}
          zoom={7}
          scrollWheelZoom={true}
          style={{ height: "180px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[23.8103, 90.4125]}>
            <Popup>Dhaka</Popup>
          </Marker>
        </MapContainer>
      </div>
      {/* Order tracker end */}

      {/* order address start */}
      <div>
        <p className="text-sm text-gray-400">Your Address</p>
        <div className="flex gap-2 items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="3.5 1.943 17.001 20.123"
          >
            <path
              d="M20.46 9.63A8.5 8.5 0 0 0 7.3 3.36a8.56 8.56 0 0 0-3.76 6.27A8.46 8.46 0 0 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83Zm-3.86 5.42-4.6 4.6-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0 6.57 6.57 0 0 1 2.89 4.81 6.49 6.49 0 0 1-1.87 5.24ZM12 6a4.5 4.5 0 1 0 4.5 4.5A4.51 4.51 0 0 0 12 6Zm0 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
              fill="#f8b602"
              fillRule="evenodd"
              dataname="Vector"
            />
          </svg>
          <h4 className="text-sm font-bold text-gray-700">Elm Street, 23</h4>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      {/* order address end */}

      {/* Order Menu start */}
      <div className="mt-10">
        <div className="py-4 border-b">
          <h3 className="text-gray-600 font-semibold lg:text-lg mb-2">
            Order Menu
          </h3>
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
          <div className="flex gap-2 items-center mb-2">
            <div className="w-14 h-14 bg-[#c4c4c4] rounded-lg"></div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Cheese Burger</p>
              <p className="text-gray-400 text-xs">x1</p>
            </div>
            <p className="ml-auto text-sm text-gray-500">
              + <span className="text-yellow-400 font-bold">$</span>5.59
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-14 h-14 bg-[#c4c4c4] rounded-lg"></div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Vegan Pizza</p>
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
          <button className="border-2 border-[#f8b602]  py-2 bg-[#FEF8E5] rounded-xl text-[#f8b602] w-full">
            Delivering to you
          </button>
        </div>
      </div>
      {/* Order Menu end */}
    </div>
  );
};

export default OrderDetails;
