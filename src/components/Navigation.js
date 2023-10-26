import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AddProductFormModal from "./AddProductFormModal";
const Navigation = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);
  let Links = [
    { name: "Tout voir", link: "/" },
    { name: "Femmes", link: "/femmes" },
    { name: "Hommes", link: "/hommes" },
    { name: "Ados", link: "/ados" },
    { name: "Enfants", link: "/enfants" },
    { name: "Bébés", link: "/bébés" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-[Poppins] font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-4 pt-2 ">
            <ion-icon className="" name="logo-ionic"></ion-icon>
            {/* <img className="h-8" src={logo} alt="shop tendance" /> */}
          </span>
          Shop-Tendance
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              {/* <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              > */}
              <NavLink
                to={link.link}
                className={({ isActive }) => {
                  return (
                    "text-gray-800 hover:text-gray-400 duration-500 " +
                    (!isActive ? " " : "underline underline-offset-8 ")
                  );
                }}
                // className="text-gray-800 hover:text-gray-400 duration-500 "
                onClick={() => setOpen(!open)}
              >
                {link.name}
              </NavLink>
              {/* </a> */}
            </li>
          ))}
          <button
            className="bg-indigo-600 text-white font-[Poppins] py-2 px-2 rounded md:ml-8 hover:bg-indigo-400 
    duration-500"
            onClick={() => setShowModal(true)}
          >
            Ajouter
          </button>
          <AddProductFormModal visible={showModal} onClose={handleOnClose} />
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
