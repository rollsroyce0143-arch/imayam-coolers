import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo + Company Name */}
          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="IMAYAM Coolers"
              className="w-12 h-12 object-contain"
            />

            <div>
              <h1 className="text-2xl font-bold text-sky-600">
                IMAYAM Coolers
              </h1>

              <p className="text-xs text-slate-500">
                Cooling & Refrigeration Services
              </p>
            </div>

          </div>

          {/* Navigation Menu */}
          <ul className="hidden md:flex items-center gap-10 text-slate-700 font-medium">

            {[
              { name: "Home", link: "#home" },
              { name: "Services", link: "#services" },
              { name: "About", link: "#about" },
              { name: "Works", link: "#projects" },
              { name: "Contact", link: "#contact" },
            ].map((item) => (
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
          <div className="flex items-center gap-4">

            <div className="hidden lg:block text-right">
             

             
            </div>

            <a
              href="tel:+919943411852"
              className="
              bg-sky-600
              text-white
              px-6
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

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;