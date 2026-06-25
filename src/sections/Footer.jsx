function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-5 lg:px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>

            <h2 className="text-3xl font-bold text-sky-400">
              IMAYAM Coolers
            </h2>

            <p className="mt-5 text-slate-300 leading-7">
              Professional AC installation, repair,
              maintenance, refrigerator service,
              water cooler service and AMC & PMC
              solutions for homes and businesses.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="tel:+919943411852"
                className="
                bg-sky-600
                hover:bg-sky-700
                px-4
                py-2
                rounded-lg
                font-medium
                transition
                "
              >
                Call
              </a>

              <a
                href="https://wa.me/919943411852"
                target="_blank"
                rel="noreferrer"
                className="
                bg-green-600
                hover:bg-green-700
                px-4
                py-2
                rounded-lg
                font-medium
                transition
                "
              >
                WhatsApp
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#home" className="hover:text-sky-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-sky-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-sky-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-sky-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-sky-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>AC Installation</li>

              <li>AC Repair & Maintenance</li>

              <li>Refrigerator Service</li>

              <li>Water Cooler Service</li>

              <li>Washing Machine Service</li>

              <li>AMC & PMC Services</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <ul className="space-y-4 text-slate-300">

              <li>
                📞 +91 99434 11852
              </li>

              <li>
                📍 Virudhunagar, Tamil Nadu
              </li>

              <li>
                💬 WhatsApp Support Available
              </li>

              <li>
                ⏰ Service Available Throughout The Week
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}
        <div
          className="
          border-t
          border-slate-700
          mt-12
          pt-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          text-slate-400
          "
        >

          <p>
            © 2026 IMAYAM Coolers. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by Karthick
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;