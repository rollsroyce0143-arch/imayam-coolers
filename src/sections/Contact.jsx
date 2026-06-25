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

    const url = `https://wa.me/919943411852?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-24 bg-slate-50"
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
            CONTACT US
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
            Let's Talk About Your Service Needs
          </h2>

          <p
            className="
            text-slate-600
            text-lg
            mt-5
            leading-8
            "
          >
            Need AC installation, repair or maintenance?
            Contact us today for quick and reliable support.
          </p>

        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left Side */}
          <div
            className="
            bg-white
            rounded-3xl
            p-8
            shadow-lg
            flex
            flex-col
            justify-between
            "
          >

            <div>

              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Contact Information
              </h3>

              <div className="space-y-5">

                <div className="bg-slate-50 p-5 rounded-2xl">
                  <h4 className="font-bold text-slate-900">
                    📞 Phone
                  </h4>

                  <p className="text-slate-600 mt-2">
                    +91 99434 11852
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl">
                  <h4 className="font-bold text-slate-900">
                    📍 Location
                  </h4>

                  <p className="text-slate-600 mt-2">
                    Virudhunagar, Tamil Nadu
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl">
                  <h4 className="font-bold text-slate-900">
                    💬 WhatsApp
                  </h4>

                  <p className="text-slate-600 mt-2">
                    Available for quick support
                  </p>
                </div>

              </div>

            </div>

            <a
              href="https://wa.me/919943411852"
              target="_blank"
              rel="noreferrer"
              className="
              mt-8
              text-center
              bg-green-600
              hover:bg-green-700
              text-white
              py-4
              rounded-2xl
              font-semibold
              transition-all
              duration-300
              shadow-lg
              hover:-translate-y-1
              "
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* Right Side */}
          <div
            className="
            bg-white
            p-8
            rounded-3xl
            shadow-lg
            "
          >

            <h3 className="text-2xl font-bold mb-6">
              Send Enquiry
            </h3>

            <form
              onSubmit={sendWhatsApp}
              className="space-y-5"
            >

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="
                w-full
                border
                border-slate-200
                rounded-xl
                p-4
                outline-none
                focus:border-blue-500
                "
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="
                w-full
                border
                border-slate-200
                rounded-xl
                p-4
                outline-none
                focus:border-blue-500
                "
              />

              <textarea
                rows="6"
                placeholder="Describe Your Service Requirement"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="
                w-full
                border
                border-slate-200
                rounded-xl
                p-4
                outline-none
                focus:border-blue-500
                "
              />

              <button
                type="submit"
                className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                text-white
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-1
                shadow-lg
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