function WhyChooseUs() {
  const points = [
    {
      title: "Experienced Technicians",
      desc: "Skilled professionals with years of field experience.",
    },
    {
      title: "Fast Response Service",
      desc: "Quick support and timely service whenever needed.",
    },
    {
      title: "Affordable Pricing",
      desc: "Quality service at competitive and transparent prices.",
    },
    {
      title: "Trusted Local Business",
      desc: "Serving homes and businesses across the region.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <span
              className="
              inline-block
              bg-blue-100
              text-blue-600
              px-5
              py-2
              rounded-full
              font-semibold
              text-sm
              "
            >
              WHY CHOOSE US
            </span>

            <h2
  className="
  text-4xl
  lg:text-5xl
  font-extrabold
  text-slate-900
  mt-5
  leading-tight
  "
>
  Trusted Cooling Service Provider
</h2>

            <p
              className="
              text-slate-600
              text-lg
              mt-6
              leading-8
              "
            >
              Reliable cooling services delivered with quality,
speed and customer satisfaction.
            </p>

            {/* Highlight Card */}
            <div
              className="
              mt-8
              bg-gradient-to-r
              from-blue-600
              to-sky-500
              text-white
              p-8
              rounded-3xl
              shadow-xl
              "
            >
              <h3 className="text-2xl font-bold">
                Trusted Cooling Experts
              </h3>

              <p className="mt-3 text-blue-100">
                Complete AC, Refrigerator, Water Cooler and
                Washing Machine services for homes, offices
                and commercial spaces.
              </p>
            </div>

            

          </div>

          {/* Right Side */}
          <div className="grid sm:grid-cols-2 gap-5">

            {points.map((point, index) => (
              <div
                key={index}
                className="
                bg-white
                rounded-2xl
                p-6
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                border
                border-slate-100
                "
              >
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-blue-100
                  text-blue-600
                  flex
                  items-center
                  justify-center
                  text-2xl
                  mb-4
                  "
                >
                  ✓
                </div>

                <h3 className="font-bold text-lg text-slate-900">
                  {point.title}
                </h3>

                <p className="text-slate-600 mt-3 leading-7">
                  {point.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;