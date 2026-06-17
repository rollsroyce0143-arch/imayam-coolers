function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              IMAYAM Coolers
            </h2>

            <p className="mt-4 text-slate-300">
              Professional AC installation,
              repair and maintenance services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
  <h3 className="text-xl font-semibold mb-4">
    Quick Links
  </h3>

  <ul className="space-y-3">

    <li>
      <a
        href="#home"
        className="hover:text-sky-400 transition"
      >
        Home
      </a>
    </li>

    <li>
      <a
        href="#services"
        className="hover:text-sky-400 transition"
      >
        Services
      </a>
    </li>

    <li>
      <a
        href="#about"
        className="hover:text-sky-400 transition"
      >
        About
      </a>
    </li>

    <li>
      <a
        href="#projects"
        className="hover:text-sky-400 transition"
      >
        Projects
      </a>
    </li>

    <li>
      <a
        href="#contact"
        className="hover:text-sky-400 transition"
      >
        Contact
      </a>
    </li>

  </ul>
</div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Services
            </h3>

            <ul className="space-y-2 text-slate-300">
              <li>AC Installation</li>
              <li>AC Repair</li>
              <li>Refrigerator Service</li>
              <li>Water Cooler Service</li>
              <li>Washing Machine Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>

            <ul className="space-y-2 text-slate-300">
              <li>📞 +91 99434 11852</li>
              <li>📍 Virudhunagar</li>
              <li>💬 WhatsApp Support</li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-700 mt-12 pt-6 text-center text-slate-400">
          © 2026 IMAYAM Coolers. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;