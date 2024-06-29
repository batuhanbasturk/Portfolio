import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const socials = [
  {
    path: "https://github.com/batuhanbasturk",
    icon: <FaGithub />,
  },
  {
    path: "https://www.linkedin.com/in/batuhanbasturk/",
    icon: <FaLinkedin />,
  },
  {
    path: "mailto:batuhanbasturk636@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    path: "tel:+905061412680",
    icon: <FaPhone />,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-4">
      {socials.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            passHref
            className="flex justify-center items-center text-2xl border w-10 h-10 border-accent-default text-accent-default rounded-lg hover:bg-accent-default  hover:text-primary dark:hover:text-secondary transition-colors duration-300 ease-in-out"
          >
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
