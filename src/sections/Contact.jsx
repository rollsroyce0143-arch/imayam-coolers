import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const text = `Hello IMAYAM Coolers,

Name: ${name}
Phone: ${phone}

Service Requirement:
${message}`;

    const url = `https://wa.me/919943411852?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold">
            CONTACT US
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Get In Touch
          </h2>

          <p className="text-gray-600 mt-4">
            Need AC installation, repair or maintenance?
            Contact us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* Left Side */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between">

            <div>
              <h3 className="text-2xl font-bold mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">

                <div>
                  <h4 className="font-semibold text-lg">
                    📞 Phone
                  </h4>

                  <p className="text-gray-600 mt-2">
                    +91 99434 11852
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    📍 Location
                  </h4>

                  <p className="text-gray-600 mt-2">
                    Virudhunagar, Tamil Nadu
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    💬 WhatsApp
                  </h4>

                  <p className="text-gray-600 mt-2">
                    Available for quick support
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/919943411852"
                target="_blank"
                rel="noreferrer"
                className="
                  block
                  text-center
                  w-full
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                  transition
                "
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>

          {/* Right Side */}
          <div className="bg-white p-8 rounded-2xl shadow-md">

            <form
              onSubmit={sendWhatsApp}
              className="space-y-5"
            >

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg p-3 outline-none focus:border-blue-600"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-lg p-3 outline-none focus:border-blue-600"
                required
              />

              <textarea
                rows="5"
                placeholder="Describe Your Service Requirement"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border rounded-lg p-3 outline-none focus:border-blue-600"
                required
              ></textarea>

              <button
                type="submit"
                className="
                  w-full
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                  transition
                "
              >
                Send Enquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;