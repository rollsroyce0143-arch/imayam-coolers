function Services() {
  const services = [
  {
    title: "AC Installation",
    description:
      "Professional split AC and window AC installation for homes, offices and commercial spaces.",
  },
  {
    title: "AC Repair & Maintenance",
    description:
      "Complete AC repair, gas filling, cleaning and preventive maintenance services.",
  },
  {
    title: "Refrigerator Repair & Service",
    description:
      "Expert refrigerator diagnosis, repair and maintenance for all major brands.",
  },
  {
    title: "Water Cooler Service",
    description:
      "Installation, repair and maintenance of water coolers for homes and businesses.",
  },
  {
    title: "Washing Machine Repair & Service",
    description:
      "Quick repair and servicing of semi-automatic and fully automatic washing machines.",
  },
  {
    title: "AMC & PMC Services",
    description:
      "Annual Maintenance Contracts (AMC) and Preventive Maintenance Contracts (PMC) for cooling plants, commercial AC systems and industrial equipment.",
  },
];

  return (
    <section
      id="services"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold">
            OUR SERVICES
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Professional Cooling Services
          </h2>

          <p className="text-gray-600 mt-4">
            Complete cooling solutions for residential,
            commercial and industrial customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                ❄️
              </div>

              <h3 className="text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {service.description}
              </p>

              <button className="mt-6 text-blue-600 font-semibold">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;