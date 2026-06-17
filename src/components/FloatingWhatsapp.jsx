import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/919943411852"
      target="_blank"
      rel="noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      bg-green-500
      text-white
      p-4
      rounded-full
      shadow-xl
      hover:scale-110
      transition
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
}

export default FloatingWhatsapp;