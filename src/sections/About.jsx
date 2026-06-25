import aboutImage from "../assets/images/about.jpg";

function About() {
  const features = [
    "Fast Response Service",
    "Affordable Pricing",
    "Customer Satisfaction",
  ];

  return (
    <section
      id="about"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left Image */}
          <div className="relative">

            <div className="h-[350px] sm:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-xl">

              <img
                src={aboutImage}
                alt="IMAYAM Coolers"
                className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-105
                  transition-all
                  duration-700
                "
              />

            </div>

            {/* Floating Badge */}
            <div
              className="
                absolute
                bottom-5
                left-5
                bg-white/95
                backdrop-blur-md
                px-5
                py-4
                rounded-2xl
                shadow-xl
              "
            >
              <p className="font-bold text-slate-900">
                Trusted Local Service
              </p>

              <p className="text-sm text-slate-500 mt-1">
                Reliable & Professional
              </p>
            </div>

          </div>

          {/* Right Content */}
          <div>

            <span className="text-blue-600 font-semibold tracking-wider">
              ABOUT IMAYAM COOLERS
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight text-slate-900">
              Professional Cooling &
              Refrigeration Experts
            </h2>

            <p className="text-slate-600 mt-6 leading-8 text-base md:text-lg">
              

              We focus on delivering reliable, affordable and
              customer-friendly solutions for homes, offices and
              commercial spaces while maintaining the highest
              standards of workmanship.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-4">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-4
                    bg-white
                    p-4
                    rounded-2xl
                    shadow-sm
                    hover:shadow-lg
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-slate-200
                      flex
                      items-center
                      justify-center
                      font-bold
                    "
                  >
                    ✓
                  </div>

                  <span className="font-medium text-slate-800">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;