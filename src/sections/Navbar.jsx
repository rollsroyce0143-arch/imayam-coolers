import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "About", link: "#about" },
    { name: "Works", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="IMAYAM Coolers"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />

            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-sky-600">
                IMAYAM Coolers
              </h1>

              <p className="hidden sm:block text-xs text-slate-500">
                Cooling & Refrigeration Services
              </p>
            </div>

          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-slate-700 font-medium">

            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="
                    relative
                    hover:text-sky-600
                    transition
                    duration-300
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:w-0
                    after:h-[2px]
                    after:bg-sky-600
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}

          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <a
              href="tel:+919943411852"
              className="
                hidden sm:block
                bg-sky-600
                text-white
                px-5
                py-3
                rounded-xl
                font-semibold
                hover:bg-sky-700
                hover:-translate-y-1
                transition
                duration-300
                shadow-lg
              "
            >
              Call Now
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">

          <ul className="flex flex-col p-6 gap-5">

            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-700 font-medium hover:text-sky-600 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <a
              href="tel:+919943411852"
              className="
                mt-2
                text-center
                bg-sky-600
                text-white
                py-3
                rounded-xl
                font-semibold
              "
            >
              Call Now
            </a>

          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar;