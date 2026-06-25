import {
  FaAward,
  FaUsers,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaAward />,
      number: "25+",
      title: "Years Experience",
    },
    {
      icon: <FaUsers />,
      number: "2500+",
      title: "Happy Customers",
    },
    {
      icon: <FaCheckCircle />,
      number: "5000+",
      title: "Projects Completed",
    },
    {
      icon: <FaHeadset />,
      number: "24/7",
      title: "Support Service",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="text-blue-600 font-semibold tracking-wider">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-slate-900">
            Trusted By Thousands Of Customers
          </h2>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-6
                text-center
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >

              {/* Icon */}
              <div
                className="
                  w-14
                  h-14
                  mx-auto
                  rounded-2xl
                  bg-blue-100
                  text-blue-600
                  flex
                  items-center
                  justify-center
                  text-2xl
                  mb-5
                "
              >
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                {item.number}
              </h3>

              {/* Title */}
              <p className="mt-3 text-slate-600 text-sm md:text-base">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;