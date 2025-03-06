import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "./share/Button";
const Header = ({ scrolled }) => {
  return (
    <header
      className={`w-full ${
        scrolled ? "bg-white text-black" : "text-white"
      } fixed top-0`}
    >
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
          <div className="md:hidden">
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
              } bg-[white] text-black text-xl font-normal rounded`}
              link="/login"
            >
              Masuk
            </Button>
            <Button
              style={` ${
                scrolled ? "bg-gray-700 shadow" : "bg-[#3B82F6] "
              } text-white text-xl font-normal rounded`}
              link="/register"
            >
              Daftar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
