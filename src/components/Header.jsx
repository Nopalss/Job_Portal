import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "./share/Button";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { PiBuildingOfficeBold } from "react-icons/pi";
const Header = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handlerNavMobile = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header
        className={`w-full ${
          scrolled ? "bg-white text-black" : "text-white"
        } fixed top-0 z-900`}
      >
        <NavBar scrolled={scrolled} handlerNavMobile={handlerNavMobile} />
      </header>
      {/* nav mobile */}

      {isOpen ? (
        <nav
          className={`fixed w-full h-full bg-white top-20 p-7 transition-all ease duration-200 `}
        ></nav>
      ) : (
        ""
      )}
      <ModalLogin />
      <ModalRegister />
    </>
  );
};

const NavBar = ({ scrolled, handlerNavMobile }) => {
  return (
    <div className="navbar mx-auto lg:container px-6 py-5">
      <div className={`navbar-start  gap-4 items-center `}>
        <Link to="/">
          <img
            src={
              scrolled
                ? "https://jobs.dicoding.com/img/dcd-jobs-logo.svg"
                : "https://jobs.dicoding.com/img/dcd-jobs-logo-white.svg"
            }
            alt=""
            className="w-[100px]"
          />
        </Link>
        <p className="md:flex hidden">|</p>
        <ul className="flex justify-center items-top gap-6 md:flex hidden">
          <li>
            <Link to="" className=" text-[15px] lg:text-[21px]">
              Pencari Kerja
            </Link>
            <div
              className={`my-2 w-full h-[3px] ${
                scrolled ? "bg-[#3B82F6]" : "bg-white"
              } `}
            ></div>
          </li>
          <li className="lg:text-[21px] text-[15px] dropdown cursor-pointer">
            <p className="flex items-center lg:items-end gap-1">
              Perusahaan <RiArrowDropDownLine className="text-3xl " />
            </p>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <div className="md:hidden" onClick={handlerNavMobile}>
          <label className="btn btn-circle swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        <div className="gap-5 md:flex hidden">
          <Button
            style={`${
              scrolled ? "bg-base-200 shadow" : "bg-[white]"
            } bg-[white] text-black text-xl font-normal rounded border-none`}
            onclick={() => document.getElementById("my_modal_1").showModal()}
          >
            Masuk
          </Button>
          <Button
            style={` ${
              scrolled ? "bg-gray-700 shadow" : "bg-[#3B82F6] "
            } text-white text-xl font-normal rounded border-none`}
            onclick={() => document.getElementById("my_modal_2").showModal()}
          >
            Daftar
          </Button>
        </div>
      </div>
    </div>
  );
};

const ModalLogin = () => {
  return (
    <dialog id="my_modal_1" className="modal sm:modal-middle">
      <div className="modal-box">
        <div className="flex items-center pb-4 border-b">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-semibold text-2xl">Masuk Ke Dicoding Jobs</h3>
        </div>
        <div className="flex flex-col justify-center items-center p-0  gap-4">
          <h1 className="py-3 text-lg sm:text-2xl font-semibold">
            Masuk Dengan Dicoding
          </h1>
          <Button
            link="/login"
            style="w-full  sm:text-lg px-7 py-7 bg-white border-3 border-black flex gap-4"
          >
            <FaRegUser /> Masuk sebagai pencari kerja/kandidat
          </Button>
          <p className="font-medium">atau</p>
          <Button
            link="/register"
            style="w-full  sm:text-lg px-7 py-7 bg-white border-3 border-black flex gap-6"
          >
            <PiBuildingOfficeBold /> Masuk sebagai Perusahaan/rekruter
          </Button>
        </div>
      </div>
    </dialog>
  );
};

const ModalRegister = () => {
  return (
    <dialog id="my_modal_2" className="modal sm:modal-middle">
      <div className="modal-box">
        <div className="flex items-center pb-4 border-b">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-semibold text-2xl">Daftar</h3>
        </div>
        <div className="flex flex-col justify-center items-center p-0  gap-4">
          <h1 className="py-3 text-lg sm:text-2xl  font-semibold">
            Daftar Akun Dengan Dicoding Jobs
          </h1>
          <Button
            link="/login"
            style="w-full  sm:text-lg px-7 py-7 bg-white border-3 border-black flex gap-4"
          >
            <FaRegUser /> Daftar sebagai pencari kerja/kandidat
          </Button>
          <p className="font-medium">atau</p>
          <Button
            link="/register"
            style="w-full   sm:text-lg px-7 py-7 bg-white border-3 border-black flex gap-6"
          >
            <PiBuildingOfficeBold /> Daftar sebagai Perusahaan/rekruter
          </Button>
        </div>
      </div>
    </dialog>
  );
};

export default Header;
