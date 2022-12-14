import { useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ToggleContext from '../store/ToggleSideBar';

const Sidebar = () => {
  const ctx = useContext(ToggleContext);
  const navigate = useNavigate();

  const toggleSideBar = () => {
    ctx.toggle();
  };

  useEffect(() => {
    return navigate('/dashboard');
  },[]);

  return (
    <>
      <header className=" hidden md:flex h-screen lg:w-[300px]  2xl:w-80 flex-col items-center pt-6 px-2">
        <h1 className="md:text-2xl lg:text-3xl font-bold mb-10">
          GoMeal<span className="text-yellow-400">.</span>
        </h1>
        <nav>
          <ul className="flex flex-col gap-3 items-center">
            <li className="group">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? 'nav-link-active' : 'nav-link'
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="8.333 6.673 25 28.327"
                >
                  <path
                    d="M8.333 30.833c0 2.864 6.48 4.167 12.5 4.167s12.5-1.303 12.5-4.167c0-2.273-3.935-3.3-6.77-3.743l1.937-1.923a10.833 10.833 0 1 0-15.32 0l1.93 1.93c-2.842.436-6.777 1.463-6.777 3.736Zm14.167-17.5a.833.833 0 0 1 1.333-.666 9.167 9.167 0 0 1 3.632 6.546 1.655 1.655 0 0 1-1.253 1.76l-2.045.512v1.848a.833.833 0 1 1-1.667 0v-10ZM15 15v-1.667a.833.833 0 1 1 1.667 0V15a1.642 1.642 0 0 0 .833 1.41v-3.077a.833.833 0 1 1 1.667 0v3.077A1.642 1.642 0 0 0 20 15v-1.667a.833.833 0 1 1 1.667 0V15a3.333 3.333 0 0 1-2.5 3.215v5.118a.833.833 0 1 1-1.667 0v-5.118A3.333 3.333 0 0 1 15 15Zm1.59 13.577 2.475 2.476a2.5 2.5 0 0 0 3.537 0l2.475-2.476c4.58.53 6.59 1.736 6.59 2.256 0 .747-3.685 2.5-10.834 2.5-7.148 0-10.833-1.753-10.833-2.5 0-.52 2.01-1.726 6.59-2.256Z"
                    fill="#a098ae"
                    fillRule="evenodd"
                    dataname="Vector"
                    className="group-hover:fill-white transition-all"
                  />
                </svg>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive ? 'nav-link-active' : 'nav-link'
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="6.667 6.667 28.333 28.333"
                >
                  <path
                    d="m33.793 25.088-1.293.647-1.293-.647a.833.833 0 0 0-.747 0l-1.293.647-.834-.417V7.5a.833.833 0 0 0-1.206-.745l-1.294.647-1.293-.647a.833.833 0 0 0-.747 0l-1.293.647-1.293-.647a.833.833 0 0 0-.747 0l-1.293.647-1.294-.647a.833.833 0 0 0-.746 0l-1.294.647-1.293-.647a.833.833 0 0 0-.747 0l-1.293.647-1.293-.647a.833.833 0 0 0-.747 0l-1.293.647-1.294-.647a.833.833 0 0 0-1.206.745v23.333A4.167 4.167 0 0 0 10.833 35h20A4.167 4.167 0 0 0 35 30.833v-5a.833.833 0 0 0-1.207-.745ZM17.5 16.667a3.333 3.333 0 0 1-2.5 3.215V27.5a.833.833 0 1 1-1.667 0v-7.618a3.333 3.333 0 0 1-2.5-3.215v-2.5a.833.833 0 0 1 1.667 0v2.5a1.642 1.642 0 0 0 .833 1.41v-3.91a.833.833 0 1 1 1.667 0v3.91a1.642 1.642 0 0 0 .833-1.41v-2.5a.833.833 0 1 1 1.667 0v2.5Zm5.758 6.711-2.425.607V27.5a.833.833 0 1 1-1.666 0V14.167a.833.833 0 0 1 1.423-.59 12.133 12.133 0 0 1 3.577 8.636 1.198 1.198 0 0 1-.909 1.165Zm10.075 7.455a2.5 2.5 0 0 1-5 0v-3.651l.46.23a.833.833 0 0 0 .747 0l1.293-.647 1.294.647a.833.833 0 0 0 .746 0l.46-.23v3.651Z"
                    fill="#a098ae"
                    fillRule="evenodd"
                    data-name="Vector"
                    className="group-hover:fill-white transition-all"
                  />
                </svg>
                <span>Menu</span>
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                to="/food-order"
                className={({ isActive }) =>
                  isActive ? 'nav-link-active' : 'nav-link'
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="6.667 11.667 28.33 23.337"
                >
                  <path
                    d="M6.667 29.167a2.5 2.5 0 0 0 2.5 2.5h.918a4.167 4.167 0 0 0 8.167 0H23.5a5.812 5.812 0 0 0 3.177-.972c0 .047-.014.092-.014.138a4.167 4.167 0 1 0 2.517-3.823c.14-.623.177-1.265.107-1.9l-.645-5.167c.172.038.348.057.525.057H30a1.667 1.667 0 0 0 1.667-1.667v-1.666A1.667 1.667 0 0 0 30 15h-.833a2.5 2.5 0 0 0-1.989 1l-.268-.268A2.518 2.518 0 0 0 25.143 15h-.976a.833.833 0 1 0 0 1.667h.976c.22 0 .432.087.589.243l.973.973c.025.155.623 4.964.932 7.434A4.167 4.167 0 0 1 23.5 30h-.317l-1.516-7.582v-1.585a2.5 2.5 0 0 0-2.5-2.5h-3.334v-4.166a2.5 2.5 0 0 0-2.5-2.5H9.167a2.5 2.5 0 0 0-2.5 2.5v6.666a2.5 2.5 0 0 0 2.5 2.5h.343a7.46 7.46 0 0 0-2.843 5.834Zm24.166-.834a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-15-8.333h3.334a.833.833 0 0 1 .833.833v.834h-4.167V20Zm.68 11.667a2.485 2.485 0 0 1-4.693 0h4.693Zm-8.18-17.5a.833.833 0 0 1 .834-.834h4.166a.833.833 0 0 1 .834.834V15H8.333v-.833Zm0 2.5h5.834v1.641H8.333v-1.641Zm.834 5a.833.833 0 0 1-.834-.834v-.858h5.834v1.692h-5Z"
                    fill="#a098ae"
                    fillRule="evenodd"
                    data-name="Vector"
                    className="group-hover:fill-white transition-all"
                  />
                </svg>
                <span>Food Order</span>
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  isActive ? 'nav-link-active' : 'nav-link'
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="6.667 10 28.333 24.638"
                >
                  <path
                    d="M30.833 10h-20a4.167 4.167 0 0 0-4.166 4.167V27.5a4.167 4.167 0 0 0 4.166 4.167h2.5v1.721a1.25 1.25 0 0 0 1.944 1.04l4.141-2.761h11.415A4.167 4.167 0 0 0 35 27.5V14.167A4.167 4.167 0 0 0 30.833 10Zm-9 10.547-1.521 1.725.215 2.293a1.252 1.252 0 0 1-1.732 1.27l-2.128-.92-2.114.918a1.252 1.252 0 0 1-1.741-1.26l.216-2.298-1.528-1.728a1.252 1.252 0 0 1 .667-2.047l2.248-.5 1.167-1.983a1.307 1.307 0 0 1 2.15 0l1.166 1.986 2.247.5a1.253 1.253 0 0 1 .688 2.044ZM27.5 25h-3.333a.833.833 0 1 1 0-1.667H27.5a.833.833 0 1 1 0 1.667Zm2.5-3.333h-5.833a.833.833 0 1 1 0-1.667H30a.833.833 0 1 1 0 1.667Zm0-3.334h-5.833a.833.833 0 1 1 0-1.666H30a.833.833 0 1 1 0 1.666Z"
                    fill="#a098ae"
                    fillRule="evenodd"
                    data-name="Vector"
                    className="group-hover:fill-white transition-all"
                  />
                </svg>
                <span>Reviews</span>
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive ? 'nav-link-active' : 'nav-link'
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="5.612 4.344 28.775 31.313"
                >
                  <path
                    d="m24.644 26.356-.075-2.656c.562-.106 1.35-1.056 1.668-1.563l-1.075-2.412c-.593-.094-1.825-.15-2.28.2l-1.926-1.831c.319-.469.206-1.694.069-2.275l-2.469-.944c-.481.344-1.387 1.181-1.462 1.75l-2.657.069c-.106-.563-1.062-1.338-1.562-1.663l-2.413 1.075c-.093.594-.15 1.825.2 2.281l-1.825 1.925c-.475-.318-1.7-.2-2.28-.068l-.945 2.462c.344.494 1.182 1.388 1.744 1.469l.075 2.656c-.556.113-1.337 1.056-1.662 1.563l1.081 2.412c.587.094 1.819.144 2.275-.194l1.925 1.82c-.319.468-.2 1.7-.069 2.28l2.463.944c.487-.35 1.393-1.187 1.468-1.75l2.657-.075c.112.569 1.056 1.344 1.568 1.663l2.407-1.069c.1-.6.143-1.825-.194-2.281l1.819-1.932c.475.325 1.7.207 2.287.075l.938-2.468c-.35-.482-1.182-1.382-1.75-1.463Zm-5.825-.019a3.017 3.017 0 1 1-5.638-2.15 3.017 3.017 0 0 1 5.638 2.15ZM34.375 9.162c-.294-.243-.988-.675-1.331-.562l-1.057-1.8c.263-.244.225-1.063.157-1.431l-1.807-1.025c-.356.131-1.075.518-1.15.868l-2.087.02c-.081-.35-.806-.726-1.163-.857L24.15 5.431c-.063.369-.088 1.188.175 1.431L23.3 8.675c-.35-.106-1.038.337-1.325.581l.019 2.075c.293.244.987.669 1.331.563l1.056 1.8c-.262.243-.225 1.062-.156 1.431l1.806 1.025c.35-.131 1.069-.519 1.15-.869l2.081-.019c.088.35.813.725 1.17.857l1.787-1.057c.062-.375.087-1.187-.182-1.43l1.032-1.813c.343.1 1.031-.338 1.318-.582l-.012-2.075Zm-6.194 2.72a1.634 1.634 0 1 1 .007-3.27 1.634 1.634 0 0 1-.007 3.27Z"
                    fill="#a098ae"
                    fillRule="evenodd"
                    data-name="Process"
                    className="group-hover:fill-white transition-all"
                  />
                </svg>
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="relative overflow-hidden mt-36 bg-gradient-to-r from-yellow-500 to-yellow-300 w-56 rounded-lg p-6 border-2 border-yellow-300">
          <h3 className="text-white font-medium">
            Upgrade your Account to get more benefits
          </h3>
          <button className="mt-4 bg-white px-3 py-2 rounded text-xs text-gray-600 font-medium">
            Upgrade
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="170"
            height="170"
            viewBox="197 916.502 170 170"
            className="absolute top-20 -right-14"
          >
            <path
              d="M0 84.9a85 85 0 1 1 0 .1z"
              fillRule="evenodd"
              fill='url("#a")'
              transform="translate(197 916.552)"
              data-name="Ellipse 5"
            />
            <defs>
              <linearGradient x1=".271" y1="0" x2=".5" y2="1" id="a">
                <stop stopColor="#fff" offset="0" />
                <stop
                  stopColor="rgba(255,255,255,0.8941176470588236 )"
                  offset=".107"
                />
                <stop stopColor="rgba(255,255,255,0 )" offset="1" />
                <stop stopColor="rgba(255,255,255,0 )" offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </header>

      {/* mobile & small-tab */}
      {ctx.isShow && (
        <header className="absolute bg-white w-full sm:w-2/4 flex h-screen lg:w-[300px]  2xl:w-80 flex-col z-50 items-center pt-6">
          <div
            className="-mt-5 w-full flex justify-end pr-4 pt-2"
            onClick={toggleSideBar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 h-7 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <h1 className="text-2xl lg:text-3xl font-bold mb-10">
            GoMeal<span className="text-yellow-400">.</span>
          </h1>
          <nav>
            <ul className="flex flex-col gap-3 items-center">
              <li className="group">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? 'nav-link-active' : 'nav-link'
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="8.333 6.673 25 28.327"
                  >
                    <path
                      d="M8.333 30.833c0 2.864 6.48 4.167 12.5 4.167s12.5-1.303 12.5-4.167c0-2.273-3.935-3.3-6.77-3.743l1.937-1.923a10.833 10.833 0 1 0-15.32 0l1.93 1.93c-2.842.436-6.777 1.463-6.777 3.736Zm14.167-17.5a.833.833 0 0 1 1.333-.666 9.167 9.167 0 0 1 3.632 6.546 1.655 1.655 0 0 1-1.253 1.76l-2.045.512v1.848a.833.833 0 1 1-1.667 0v-10ZM15 15v-1.667a.833.833 0 1 1 1.667 0V15a1.642 1.642 0 0 0 .833 1.41v-3.077a.833.833 0 1 1 1.667 0v3.077A1.642 1.642 0 0 0 20 15v-1.667a.833.833 0 1 1 1.667 0V15a3.333 3.333 0 0 1-2.5 3.215v5.118a.833.833 0 1 1-1.667 0v-5.118A3.333 3.333 0 0 1 15 15Zm1.59 13.577 2.475 2.476a2.5 2.5 0 0 0 3.537 0l2.475-2.476c4.58.53 6.59 1.736 6.59 2.256 0 .747-3.685 2.5-10.834 2.5-7.148 0-10.833-1.753-10.833-2.5 0-.52 2.01-1.726 6.59-2.256Z"
                      fill="#a098ae"
                      fillRule="evenodd"
                      dataname="Vector"
                      className="group-hover:fill-white transition-all"
                    />
                  </svg>
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="group">
                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    isActive ? 'nav-link-active' : 'nav-link'
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="6.667 6.667 28.333 28.333"
                  >
                    <path
                      d="m33.793 25.088-1.293.647-1.293-.647a.833.833 0 0 0-.747 0l-1.293.647-.834-.417V7.5a.833.833 0 0 0-1.206-.745l-1.294.647-1.293-.647a.833.833 0 0 0-.747 0l-1.293.647-1.293-.647a.833.833 0 0 0-.747 0l-1.293.647-1.294-.647a.833.833 0 0 0-.746 0l-1.294.647-1.293-.647a.833.833 0 0 0-.747 0l-1.293.647-1.293-.647a.833.833 0 0 0-.747 0l-1.293.647-1.294-.647a.833.833 0 0 0-1.206.745v23.333A4.167 4.167 0 0 0 10.833 35h20A4.167 4.167 0 0 0 35 30.833v-5a.833.833 0 0 0-1.207-.745ZM17.5 16.667a3.333 3.333 0 0 1-2.5 3.215V27.5a.833.833 0 1 1-1.667 0v-7.618a3.333 3.333 0 0 1-2.5-3.215v-2.5a.833.833 0 0 1 1.667 0v2.5a1.642 1.642 0 0 0 .833 1.41v-3.91a.833.833 0 1 1 1.667 0v3.91a1.642 1.642 0 0 0 .833-1.41v-2.5a.833.833 0 1 1 1.667 0v2.5Zm5.758 6.711-2.425.607V27.5a.833.833 0 1 1-1.666 0V14.167a.833.833 0 0 1 1.423-.59 12.133 12.133 0 0 1 3.577 8.636 1.198 1.198 0 0 1-.909 1.165Zm10.075 7.455a2.5 2.5 0 0 1-5 0v-3.651l.46.23a.833.833 0 0 0 .747 0l1.293-.647 1.294.647a.833.833 0 0 0 .746 0l.46-.23v3.651Z"
                      fill="#a098ae"
                      fillRule="evenodd"
                      data-name="Vector"
                      className="group-hover:fill-white transition-all"
                    />
                  </svg>
                  <span>Menu</span>
                </NavLink>
              </li>
              <li className="group">
                <NavLink
                  to="/food-order"
                  className={({ isActive }) =>
                    isActive ? 'nav-link-active' : 'nav-link'
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="6.667 11.667 28.33 23.337"
                  >
                    <path
                      d="M6.667 29.167a2.5 2.5 0 0 0 2.5 2.5h.918a4.167 4.167 0 0 0 8.167 0H23.5a5.812 5.812 0 0 0 3.177-.972c0 .047-.014.092-.014.138a4.167 4.167 0 1 0 2.517-3.823c.14-.623.177-1.265.107-1.9l-.645-5.167c.172.038.348.057.525.057H30a1.667 1.667 0 0 0 1.667-1.667v-1.666A1.667 1.667 0 0 0 30 15h-.833a2.5 2.5 0 0 0-1.989 1l-.268-.268A2.518 2.518 0 0 0 25.143 15h-.976a.833.833 0 1 0 0 1.667h.976c.22 0 .432.087.589.243l.973.973c.025.155.623 4.964.932 7.434A4.167 4.167 0 0 1 23.5 30h-.317l-1.516-7.582v-1.585a2.5 2.5 0 0 0-2.5-2.5h-3.334v-4.166a2.5 2.5 0 0 0-2.5-2.5H9.167a2.5 2.5 0 0 0-2.5 2.5v6.666a2.5 2.5 0 0 0 2.5 2.5h.343a7.46 7.46 0 0 0-2.843 5.834Zm24.166-.834a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-15-8.333h3.334a.833.833 0 0 1 .833.833v.834h-4.167V20Zm.68 11.667a2.485 2.485 0 0 1-4.693 0h4.693Zm-8.18-17.5a.833.833 0 0 1 .834-.834h4.166a.833.833 0 0 1 .834.834V15H8.333v-.833Zm0 2.5h5.834v1.641H8.333v-1.641Zm.834 5a.833.833 0 0 1-.834-.834v-.858h5.834v1.692h-5Z"
                      fill="#a098ae"
                      fillRule="evenodd"
                      data-name="Vector"
                      className="group-hover:fill-white transition-all"
                    />
                  </svg>
                  <span>Food Order</span>
                </NavLink>
              </li>
              <li className="group">
                <NavLink
                  to="/reviews"
                  className={({ isActive }) =>
                    isActive ? 'nav-link-active' : 'nav-link'
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="6.667 10 28.333 24.638"
                  >
                    <path
                      d="M30.833 10h-20a4.167 4.167 0 0 0-4.166 4.167V27.5a4.167 4.167 0 0 0 4.166 4.167h2.5v1.721a1.25 1.25 0 0 0 1.944 1.04l4.141-2.761h11.415A4.167 4.167 0 0 0 35 27.5V14.167A4.167 4.167 0 0 0 30.833 10Zm-9 10.547-1.521 1.725.215 2.293a1.252 1.252 0 0 1-1.732 1.27l-2.128-.92-2.114.918a1.252 1.252 0 0 1-1.741-1.26l.216-2.298-1.528-1.728a1.252 1.252 0 0 1 .667-2.047l2.248-.5 1.167-1.983a1.307 1.307 0 0 1 2.15 0l1.166 1.986 2.247.5a1.253 1.253 0 0 1 .688 2.044ZM27.5 25h-3.333a.833.833 0 1 1 0-1.667H27.5a.833.833 0 1 1 0 1.667Zm2.5-3.333h-5.833a.833.833 0 1 1 0-1.667H30a.833.833 0 1 1 0 1.667Zm0-3.334h-5.833a.833.833 0 1 1 0-1.666H30a.833.833 0 1 1 0 1.666Z"
                      fill="#a098ae"
                      fillRule="evenodd"
                      data-name="Vector"
                      className="group-hover:fill-white transition-all"
                    />
                  </svg>
                  <span>Reviews</span>
                </NavLink>
              </li>
              <li className="group">
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    isActive ? 'nav-link-active' : 'nav-link'
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="5.612 4.344 28.775 31.313"
                  >
                    <path
                      d="m24.644 26.356-.075-2.656c.562-.106 1.35-1.056 1.668-1.563l-1.075-2.412c-.593-.094-1.825-.15-2.28.2l-1.926-1.831c.319-.469.206-1.694.069-2.275l-2.469-.944c-.481.344-1.387 1.181-1.462 1.75l-2.657.069c-.106-.563-1.062-1.338-1.562-1.663l-2.413 1.075c-.093.594-.15 1.825.2 2.281l-1.825 1.925c-.475-.318-1.7-.2-2.28-.068l-.945 2.462c.344.494 1.182 1.388 1.744 1.469l.075 2.656c-.556.113-1.337 1.056-1.662 1.563l1.081 2.412c.587.094 1.819.144 2.275-.194l1.925 1.82c-.319.468-.2 1.7-.069 2.28l2.463.944c.487-.35 1.393-1.187 1.468-1.75l2.657-.075c.112.569 1.056 1.344 1.568 1.663l2.407-1.069c.1-.6.143-1.825-.194-2.281l1.819-1.932c.475.325 1.7.207 2.287.075l.938-2.468c-.35-.482-1.182-1.382-1.75-1.463Zm-5.825-.019a3.017 3.017 0 1 1-5.638-2.15 3.017 3.017 0 0 1 5.638 2.15ZM34.375 9.162c-.294-.243-.988-.675-1.331-.562l-1.057-1.8c.263-.244.225-1.063.157-1.431l-1.807-1.025c-.356.131-1.075.518-1.15.868l-2.087.02c-.081-.35-.806-.726-1.163-.857L24.15 5.431c-.063.369-.088 1.188.175 1.431L23.3 8.675c-.35-.106-1.038.337-1.325.581l.019 2.075c.293.244.987.669 1.331.563l1.056 1.8c-.262.243-.225 1.062-.156 1.431l1.806 1.025c.35-.131 1.069-.519 1.15-.869l2.081-.019c.088.35.813.725 1.17.857l1.787-1.057c.062-.375.087-1.187-.182-1.43l1.032-1.813c.343.1 1.031-.338 1.318-.582l-.012-2.075Zm-6.194 2.72a1.634 1.634 0 1 1 .007-3.27 1.634 1.634 0 0 1-.007 3.27Z"
                      fill="#a098ae"
                      fillRule="evenodd"
                      data-name="Process"
                      className="group-hover:fill-white transition-all"
                    />
                  </svg>
                  <span>Settings</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="relative overflow-hidden mt-24 bg-gradient-to-r from-yellow-500 to-yellow-300 w-56 rounded-lg p-6 border-2 border-yellow-300">
            <h3 className="text-white text-sm font-medium">
              Upgrade your Account to get more benefits
            </h3>
            <button className="mt-4 bg-white px-3 py-2 rounded text-xs text-gray-600 font-medium">
              Upgrade
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              height="170"
              viewBox="197 916.502 170 170"
              className="absolute top-20 -right-14"
            >
              <path
                d="M0 84.9a85 85 0 1 1 0 .1z"
                fillRule="evenodd"
                fill='url("#a")'
                transform="translate(197 916.552)"
                data-name="Ellipse 5"
              />
              <defs>
                <linearGradient x1=".271" y1="0" x2=".5" y2="1" id="a">
                  <stop stopColor="#fff" offset="0" />
                  <stop
                    stopColor="rgba(255,255,255,0.8941176470588236 )"
                    offset=".107"
                  />
                  <stop stopColor="rgba(255,255,255,0 )" offset="1" />
                  <stop stopColor="rgba(255,255,255,0 )" offset="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </header>
      )}
    </>
  );
};

export default Sidebar;
