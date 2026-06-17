function WhyChooseUs() {
  const points = [
    "Experienced Technicians",
    "Fast Response Service",
    "Affordable Pricing",
    "Trusted Local Business",
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <span className="text-blue-600 font-semibold">
              WHY CHOOSE US
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Reliable Cooling Solutions
              You Can Trust
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              IMAYAM Coolers delivers professional installation,
              repair and maintenance services with a strong focus
              on customer satisfaction and quality workmanship.
            </p>

            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
              Contact Us
            </button>
          </div>

          {/* Right Side */}
          <div className="space-y-5">

            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  ✓
                </div>

                <h3 className="font-semibold">
                  {point}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;