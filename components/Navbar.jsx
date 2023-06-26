import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  const handleOpen = () => {
    setToggle(false);
  };

  return (
    <div>
      <div className="h-20 bg-black text-gray-400 flex items-center">
        <div className="wrapper flex justify-between items-center">
          <div className="logo" data-aos="fade-right" data-aos-duration="1000">
            <Link href="/" className="text-white font-semibold">
              Kajal Rekha
            </Link>
          </div>

          <div className="hidden md:block">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="flex gap-5 justify-between"
            >
              <Link href="/" className="hover:text-white transition-color">
                Home
              </Link>
              <Link
                href="/projects"
                className="hover:text-white transition-color"
              >
                Projects
              </Link>

              <Link
                href="/skills"
                className="hover:text-white transition-color"
              >
                Skills
              </Link>

              <Link href="/about" className="hover:text-white transition-color">
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-white transition-color"
              >
                Contact
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="hidden md:block "
          >
            <button
              data-aos="fade-up"
              className="bg-black text-white py-3 rounded-lg w-full hover:bg-gray-700 duration-300"
            >
              View Resume
            </button>
          </div>

          {/*toggle button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={handleToggle}
              className="inline-flex items-center justify-center focus:outline-none text-xl text-white z-[99]"
            >
              {toggle === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div>
        {toggle ? (
          <div className="md:hidden">
            <div
              onClick={handleOpen}
              className={`w-screen h-screen fixed z-[98] bg-black/50 top-0 left-0 right-0 bottom-0 flex text-white justify-center items-center ${
                setToggle ? `` : "hidden"
              }`}
            >
              <div>
                <div className="flex flex-col gap-5 items-center mb-10">
                  <Link href="/" className="hover:text-white transition-color">
                    Home
                  </Link>
                  <Link
                    href="/projects"
                    className="hover:text-white transition-color"
                  >
                    Projects
                  </Link>

                  <Link
                    href="/skills"
                    className="hover:text-white transition-color"
                  >
                    Skills
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-white transition-color"
                  >
                    About
                  </Link>

                  <Link
                    href="/contact"
                    className="hover:text-white transition-color"
                  >
                    Contact
                  </Link>
                </div>

                <button
                  data-aos="fade-up"
                  className="bg-black text-white py-3 rounded-lg w-full hover:bg-gray-700 duration-300"
                >
                  View Resume
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
