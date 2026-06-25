import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-28 lg:pt-32">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-3 rounded-full font-semibold mb-6">
              ❄ Trusted Cooling Solutions
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">

              Professional AC Repair

              <br />

              <span className="text-sky-600">
                & Installation Services
              </span>

            </h1>

            {/* Description */}
            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-2xl">

              Trusted cooling solutions for homes,
              offices and commercial buildings.

              We provide AC installation,
              AC repair, refrigerator service,
              water cooler service,
              washing machine service
              and AMC & PMC support.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="tel:+919943411852"
                className="
                  bg-sky-600
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  shadow-lg
                  hover:bg-sky-700
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919943411852"
                target="_blank"
                rel="noreferrer"
                className="
                  border-2
                  border-sky-600
                  text-sky-600
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  hover:bg-sky-600
                  hover:text-white
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                WhatsApp
              </a>

            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap gap-6 mt-10 text-sm text-slate-700 font-medium">

              <div className="flex items-center gap-2">
                ✓ Fast Service
              </div>

              <div className="flex items-center gap-2">
                ✓ Affordable Pricing
              </div>

              <div className="flex items-center gap-2">
                ✓ Trusted Technicians
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative">

            <img
              src={heroImage}
              alt="AC Service"
              className="
                w-full
                rounded-3xl
                shadow-2xl
                hover:scale-[1.02]
                transition-all
                duration-700
              "
            />

            

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;