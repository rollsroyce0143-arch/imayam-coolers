function Projects() {
  const projects = [
    {
      title: "AC Installation",
      location: "Virudhunagar",
    },
    {
      title: "AC Repair Service",
      location: "Virudhunagar",
    },
    {
      title: "Refrigerator Repair",
      location: "Virudhunagar",
    },
    {
      title: "Water Cooler Service",
      location: "Virudhunagar",
    },
    {
      title: "Washing Machine Service",
      location: "Virudhunagar",
    },
    {
      title: "AMC & PMC Maintenance",
      location: "Commercial Site",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold">
            OUR RECENT WORKS
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Quality Work You Can Trust
          </h2>

          <p className="text-gray-600 mt-4">
            Take a look at some of our recent installation,
            repair and maintenance projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              {/* Image Placeholder */}
              <div className="h-60 bg-blue-100 flex items-center justify-center">
                📷 Project Photo
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {project.location}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;