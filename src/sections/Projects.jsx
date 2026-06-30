import acInstallation from "../assets/images/ac-installation.jpg";
import acRepair from "../assets/images/ac-repair.jpg";
import refrigeratorRepair from "../assets/images/refrigerator-repair.jpg";
import waterCooler from "../assets/images/water-cooler.jpg";
import washingMachine from "../assets/images/washing-machine.jpg";
import amcpmc from "../assets/images/amc-pmc.jpg";

function Projects() {
  const projects = [
    {
      title: "AC Installation",
      image: acInstallation,
    },
    {
      title: "AC Repair Service",
      image: acRepair,
    },
    {
      title: "Refrigerator Repair",
      image: refrigeratorRepair,
    },
    {
      title: "Water Cooler Service",
      image: waterCooler,
    },
    {
      title: "Washing Machine Service",
      image: washingMachine,
    },
    {
      title: "AMC & PMC Maintenance",
      image: amcpmc,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-6">

        {/* Heading */}
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
            OUR WORKS
          </span>

          

          <p
            className="
            text-slate-600
            text-lg
            mt-5
            leading-8
            "
          >
            A glimpse of our installation, repair and maintenance
            services completed for residential and commercial clients.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
              relative
              overflow-hidden
              rounded-3xl
              shadow-lg
              group
              h-[320px]
              "
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-full
                object-cover
                group-hover:scale-110
                transition-all
                duration-700
                "
              />

              {/* Overlay */}
              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/30
                to-transparent
                "
              ></div>

              {/* Content */}
              <div
                className="
                absolute
                bottom-0
                left-0
                right-0
                p-6
                "
              >

                <h3
                  className="
                  text-white
                  text-2xl
                  font-bold
                  "
                >
                  {project.title}
                </h3>

                <div
                  className="
                  w-12
                  h-1
                  bg-blue-500
                  rounded-full
                  mt-3
                  group-hover:w-24
                  transition-all
                  duration-500
                  "
                ></div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;