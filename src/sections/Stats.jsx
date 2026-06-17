function Stats() {
  const stats = [
    {
      number: "25+",
      title: "Years Experience",
    },
    {
      number: "2500+",
      title: "Happy Customers",
    },
    {
      number: "5000+",
      title: "Projects Completed",
    },
    {
      number: "24/7",
      title: "Support Service",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl shadow-md"
            >
              <h2 className="text-4xl font-bold text-blue-600">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-600">
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