// import React from 'react'
import { Link } from "react-router-dom";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { useState } from "react";

const navigation = [
  {
    name: "Панель",
    href: "/dashboard",
  },
  {
    name: "Заказы",
    href: "/orders",
  },
  {
    name: "Корзина",
    href: "/cart",
  },
  {
    name: "Check out",
    href: "/checkout",
  },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const currentUser = false;

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/*left side*/}
        <div className="flex items-center md:gap-4">
          <Link to="/">
            <HiOutlineBars3CenterLeft className="size-6" />
          </Link>

          {/*seacrh input*/}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Поиск книги"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/*right side*/}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt="аватар"
                    className={`size-7 rounded-full $
                    {currentUser ? 'ring-2 ring-blue-500' : ''}`}
                  />
                </button>
                {/*show dropdowns*/}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <FaRegUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <FaRegHeart className="size-6" />
          </button>

          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <MdOutlineShoppingCart className="" />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span>
            ): (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
