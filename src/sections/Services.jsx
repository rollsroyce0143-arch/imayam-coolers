function Services() {
  const services = [
    {
      icon: "❄️",
      title: "AC Installation",
      description:
        "Professional split AC and window AC installation for homes, offices and commercial spaces.",
    },
    {
      icon: "🛠️",
      title: "AC Repair & Maintenance",
      description:
        "Complete AC repair, gas filling, cleaning and preventive maintenance services.",
    },
    {
      icon: "🧊",
      title: "Refrigerator Repair & Service",
      description:
        "Expert refrigerator diagnosis, repair and maintenance for all major brands.",
    },
    {
      icon: "💧",
      title: "Water Cooler Service",
      description:
        "Installation, repair and maintenance of water coolers for homes and businesses.",
    },
    {
      icon: "🌀",
      title: "Washing Machine Repair",
      description:
        "Quick repair and servicing of semi-automatic and fully automatic washing machines.",
    },
    {
      icon: "🏢",
      title: "AMC & PMC Services",
      description:
        "Annual Maintenance Contracts and Preventive Maintenance Contracts for commercial and industrial cooling systems.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">

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
            OUR SERVICES
          </span>

          <h2
            className="
            text-4xl
            lg:text-5xl
            font-extrabold
            text-slate-900
            mt-5
            "
          >
            Professional Cooling Services
          </h2>

          <p
            className="
            text-slate-600
            text-lg
            mt-5
            leading-8
            "
          >
            Complete cooling solutions for residential,
            commercial and industrial customers.
          </p>

        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="
              group
              bg-slate-50
              rounded-3xl
              p-8
              border
              border-slate-200
              hover:border-blue-500
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
              "
            >
              {/* Icon */}
              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-blue-100
                flex
                items-center
                justify-center
                text-3xl
                mb-6
                group-hover:scale-110
                transition
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="
                text-2xl
                font-bold
                text-slate-900
                "
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="
                text-slate-600
                mt-4
                leading-7
                "
              >
                {service.description}
              </p>

              {/* Button */}
              <a
                href="#contact"
                className="
                inline-flex
                items-center
                gap-2
                mt-6
                font-semibold
                text-blue-600
                hover:text-blue-700
                "
              >
                Learn More →
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;