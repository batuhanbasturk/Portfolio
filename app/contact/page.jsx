"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    value: "(+90) 506 141 26 80",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "batuhanbasturk636@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    value: "Umraniye Istanbul, Turkey",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.5, ease: "easeInOut" },
      }}
      className="py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 ">
          {/* Contact Form */}
          <div className="xl:h-[60%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-tertiary dark:bg-tab rounded-xl">
              <h2>Lets Work Together</h2>
              <p>
                I am always open to discussing work or partnership
                opportunities. Feel free to contact me.
              </p>
              <p className="text-red-600">
                Currently not working due to Backend feel free to contact me
                from given infos!
              </p>
              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstName" placeholder="First Name" />
                <Input type="lastName" placeholder="Last Name" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/* Message */}
              <Textarea className="h-64" placeholder="Message" />
              {/* Submit Button */}
              <Button>Send Message</Button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="flex flex-1 order-1 items-center mb-8 xl:mb-0 xl:justify-end xl:order-none">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6 mb-4">
                  <div className="flex items-center justify-center text-accent-default rounded-lg w-16 h-16 bg-tertiary dark:bg-tab ">
                    <div className=" text-4xl">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-tab dark:text-pgray">{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
