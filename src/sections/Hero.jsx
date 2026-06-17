import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100"
    >

      {/* Blur Effects */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 pt-32">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* Left */}
          <div>

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-3 rounded-full font-semibold mb-6">
  ❄ Trusted Cooling Solutions
</div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">

              Professional AC Repair

              <br />

              <span className="text-sky-600">
                & Installation Services
              </span>

            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed">

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
                className="bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sky-700 transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919943411852"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-sky-600 text-sky-600 px-8 py-4 rounded-xl font-semibold hover:bg-sky-600 hover:text-white transition"
              >
                WhatsApp
              </a>

            </div>

            

          </div>

          {/* Right */}

            <div className="relative">

            <img
  src={heroImage}
  alt="AC Service"
  className="rounded-3xl shadow-2xl"
/>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;