import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { isValidEmail, sanitizeInput } from "@/utils/security";

export default function Contact() {
  const contactRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    propertyType: 'Manufacturing Facility',
    message: ''
  });

  // Form validation errors
  const [errors, setErrors] = useState({});

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length > 50) {
      newErrors.firstName = 'First name must be less than 50 characters';
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.length > 50) {
      newErrors.lastName = 'Last name must be less than 50 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Sanitize inputs
    const sanitizedData = {
      firstName: sanitizeInput(formData.firstName, 50),
      lastName: sanitizeInput(formData.lastName, 50),
      email: sanitizeInput(formData.email, 100),
      propertyType: formData.propertyType,
      message: sanitizeInput(formData.message, 1000)
    };

    setIsSubmitting(true);

    // TODO: Replace with actual API call
    // Simulated submission for now
    console.log('Form submitted with sanitized data:', sanitizedData);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        propertyType: 'Manufacturing Facility',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden" ref={contactRef}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F37E3A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#288EC2]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#F37E3A] to-transparent" />
            <span className="text-sm tracking-widest uppercase text-gray-500 font-medium">
              Contact Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Get in Touch with Our{" "}
            <span className="text-[#F37E3A]">Industrial Experts</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed"
          >
            Let our experts help you discover the ideal industrial property
            that aligns with your business vision and operational
            requirements. We're here to answer your questions and guide you
            through every step.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            {[
              {
                icon: Phone,
                label: "Phone",
                value: "+1 (555) 123-4567",
                delay: 0.4,
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@cozcomfort.com",
                delay: 0.5,
              },
              {
                icon: MapPin,
                label: "Address",
                value: "123 Industrial Blvd, Business District",
                delay: 0.6,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="flex items-start gap-4 p-4 md:p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#F37E3A]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-[#F37E3A]/10 rounded-xl flex items-center justify-center group-hover:bg-[#F37E3A] transition-all duration-300">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#F37E3A] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 mb-1 font-medium uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-base sm:text-lg md:text-xl text-gray-900 font-semibold break-words">
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }} />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Business Hours
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>

              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F37E3A] opacity-10 rounded-bl-full" />
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-200">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                Send us a Message
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      maxLength={50}
                      required
                      autoComplete="given-name"
                      aria-required="true"
                      aria-invalid={errors.firstName ? 'true' : 'false'}
                      aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                      className={`w-full px-4 py-3 md:py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm md:text-base ${
                        errors.firstName
                          ? 'border-red-300 focus:ring-red-500'
                          : 'border-gray-200 focus:ring-[#F37E3A]'
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      maxLength={50}
                      required
                      autoComplete="family-name"
                      aria-required="true"
                      aria-invalid={errors.lastName ? 'true' : 'false'}
                      aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                      className={`w-full px-4 py-3 md:py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm md:text-base ${
                        errors.lastName
                          ? 'border-red-300 focus:ring-red-500'
                          : 'border-gray-200 focus:ring-[#F37E3A]'
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p id="lastName-error" className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    maxLength={100}
                    required
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3 md:py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm md:text-base ${
                      errors.email
                        ? 'border-red-300 focus:ring-red-500'
                        : 'border-gray-200 focus:ring-[#F37E3A]'
                    }`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    aria-label="Select property type"
                    className="w-full px-4 py-3 md:py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F37E3A] focus:border-transparent transition-all text-sm md:text-base appearance-none cursor-pointer"
                  >
                    <option value="Manufacturing Facility">Manufacturing Facility</option>
                    <option value="Warehouse Space">Warehouse Space</option>
                    <option value="Distribution Center">Distribution Center</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                    <span className="text-gray-500 font-normal ml-2">
                      ({formData.message.length}/1000)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    maxLength={1000}
                    required
                    aria-required="true"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-3 md:py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none text-sm md:text-base ${
                      errors.message
                        ? 'border-red-300 focus:ring-red-500'
                        : 'border-gray-200 focus:ring-[#F37E3A]'
                    }`}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-950 hover:to-gray-900 shadow-xl hover:shadow-2xl shadow-gray-900/50 flex w-full justify-center items-center gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-white px-6 py-3.5 md:py-4 rounded-xl font-semibold text-sm md:text-base group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
