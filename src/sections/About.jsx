import aboutImage from "../assets/images/about.jpg";
function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side Image */}
        <div className="relative">

          <div className="h-[500px] rounded-3xl overflow-hidden">

  <img
    src={aboutImage}
    alt="IMAYAM Coolers"
    className="
      w-full
      h-full
      object-cover
    "
  />

</div>

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 bg-white px-5 py-3 rounded-2xl shadow-lg">
            <p className="font-semibold text-slate-800">
              Trusted Local Service
            </p>
            <p className="text-sm text-slate-500">
              Reliable & Professional
            </p>
          </div>

        </div>

        {/* Right Side Content */}
        <div>

          <span className="text-blue-600 font-semibold tracking-wide">
            ABOUT IMAYAM COOLERS
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight text-slate-900">
            Professional Cooling &
            Refrigeration Experts
          </h2>

          <p className="text-slate-600 mt-6 leading-8 text-lg">
            IMAYAM Coolers provides professional AC installation,
            repair, maintenance and cooling system services.
            We focus on delivering reliable, affordable and
            customer-friendly solutions for homes, offices and
            commercial spaces.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-5">

            

            <div className="flex items-center gap-4">

              <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center font-bold">
                ✓
              </div>

              <span className="text-lg">
                Fast Response Service
              </span>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center font-bold">
                ✓
              </div>

              <span className="text-lg">
                Affordable Pricing
              </span>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center font-bold">
                ✓
              </div>

              <span className="text-lg">
                Customer Satisfaction
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;