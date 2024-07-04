"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phoneNumber" && !/^\d*$/.test(value)) {
      return;
    }
    setFormData({ ...formData, [name]: value });

    // Remove error message when user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "* This field is required",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "* This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setAlert({ message: result.message, type: "success" });
        // Reset form and errors
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
        setErrors({});
        setTouched({});
      } else {
        setAlert({ message: result.message, type: "error" });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setAlert({ message: "Failed to send email.", type: "error" });
    } finally {
      setLoading(false);
    }

    // Set a timeout to clear the alert after 3 seconds
    setTimeout(() => {
      setAlert({ message: "", type: "" });
    }, 3000);
  };

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
        {alert.message && (
          <div className="fixed bottom-0 left-0 flex justify-center mt-4 z-50 max-w-[320px]">
            <Alert variant={alert.type === "success" ? "success" : "error"}>
              {alert.type === "success" ? (
                <FaCheckCircle className="h-4 w-4" />
              ) : (
                <FaExclamationCircle className="h-4 w-4" />
              )}
              <AlertTitle>
                {alert.type === "success" ? "Success" : "Error"}
              </AlertTitle>
              <AlertDescription>{alert.message}</AlertDescription>
            </Alert>
          </div>
        )}
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Contact Form */}
          <div className="xl:h-[60%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-tertiary dark:bg-tab rounded-xl"
              onSubmit={handleSubmit}
            >
              <h2>Let&apos;s Work Together</h2>
              <p>
                I am always open to discussing work or partnership
                opportunities. Feel free to contact me.
              </p>
              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="min-h-[20px]">
                    {touched.firstName && errors.firstName && (
                      <p className="text-red-600 text-xs mb-2">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <Input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <div className="min-h-[20px]">
                    {touched.lastName && errors.lastName && (
                      <p className="text-red-600 text-xs mb-2">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                  <Input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <div className="min-h-[20px]">
                    {touched.email && errors.email && (
                      <p className="text-red-600 text-xs mb-2">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <div className="min-h-[20px]">
                    {touched.phoneNumber && errors.phoneNumber && (
                      <p className="text-red-600 text-xs mb-2">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                  <Input
                    name="phoneNumber"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              {/* Message */}
              <div>
                <div className="min-h-[20px]">
                  {touched.message && errors.message && (
                    <p className="text-red-600 text-xs mb-2">
                      {errors.message}
                    </p>
                  )}
                </div>
                <Textarea
                  name="message"
                  className="h-64"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {/* Submit Button */}
              <Button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="flex flex-1 order-1 items-center mb-8 xl:mb-0 xl:justify-end xl:order-none">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6 mb-4">
                  <div className="flex items-center justify-center text-accent-default rounded-lg w-16 h-16 bg-tertiary dark:bg-tab">
                    <div className="text-4xl">{item.icon}</div>
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
