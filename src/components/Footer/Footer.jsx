import React, { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "-50px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set(prev).add(entry.target.id));
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const footerSections = [
    {
      title: "Properties",
      links: [
        "Manufacturing Facilities",
        "Warehouse Spaces",
        "Distribution Centers",
        "Flex Industrial",
        "Land Development",
      ],
    },
    {
      title: "Services",
      links: [
        "Property Search",
        "Investment Advisory",
        "Property Management",
        "Market Analysis",
        "Consultation",
      ],
    },
    {
      title: "Industries",
      links: [
        "Manufacturing",
        "Logistics",
        "E-commerce",
        "Automotive",
        "Technology",
      ],
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "News & Updates", "Contact"],
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "#288EC2",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      color: "#F37E3A",
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: "#6EBD49",
    },
  ];

  return (
    <>
      {/* Contact Section - Luxury Design */}
      <section
        id="contact-section"
        ref={(el) => (sectionsRef.current[0] = el)}
        className="min-h-screen bg-white text-gray-800 relative overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 25%, #dee2e6 50%, #ced4da 75%, #f8f9fa 100%)",
            backgroundSize: "400% 400%",
            animation: "gradientShift 20s ease infinite",
          }}
        ></div>

        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/2.jpg"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/90"
          ></div>
        </div>

        {/* Sophisticated decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-[#F37E3A]/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 left-32 w-1 h-32 bg-gradient-to-t from-[#288EC2]/30 to-transparent animate-pulse"></div>
        <div
          className="absolute top-1/2 right-8 w-8 h-8 bg-[#6EBD49]/20 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 min-h-screen flex items-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div
                className={`transition-all duration-1000 ${
                  visibleSections.has("contact-section")
                    ? "opacity-100 translate-x-0 animate-elegant-slide"
                    : "opacity-0 -translate-x-20"
                }`}
              >
                <div className="text-sm font-medium tracking-wider text-[#F37E3A] uppercase mb-8">
                  (GET IN TOUCH)
                </div>
                <h2
                  className="text-5xl lg:text-6xl font-light leading-tight mb-8"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  READY TO FIND
                  <br />
                  YOUR PERFECT
                  <br />
                  <em>INDUSTRIAL SPACE</em>?
                </h2>
                <p
                  className="text-gray-600 text-lg leading-relaxed mb-12 max-w-md"
                >
                  Let our experts help you discover the ideal industrial
                  property that aligns with your business vision and operational
                  requirements.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center group">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-[#F37E3A]/30 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-[#F37E3A]/20 transition-all duration-300">
                      <svg
                        className="w-8 h-8"
                        style={{ color: "#F37E3A" }}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div>
                      <div
                        className="font-light text-gray-500 text-sm tracking-wider uppercase mb-1"
                      >
                        Phone
                      </div>
                      <div
                        className="text-gray-800 font-medium text-lg"
                      >
                        +1 (555) 123-4567
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-[#288EC2]/30 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-[#288EC2]/20 transition-all duration-300">
                      <svg
                        className="w-8 h-8"
                        style={{ color: "#288EC2" }}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div>
                      <div
                        className="font-light text-gray-500 text-sm tracking-wider uppercase mb-1"
                      >
                        Email
                      </div>
                      <div
                        className="text-gray-800 font-medium text-lg"
                      >
                        info@cozcomfort.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-[#6EBD49]/30 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-[#6EBD49]/20 transition-all duration-300">
                      <svg
                        className="w-8 h-8"
                        style={{ color: "#6EBD49" }}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <div
                        className="font-light text-gray-500 text-sm tracking-wider uppercase mb-1"
                      >
                        Address
                      </div>
                      <div
                        className="text-gray-800 font-medium text-lg"
                      >
                        123 Industrial Blvd, Business District
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Contact Form */}
              <div
                className={`transition-all duration-1200 delay-300 ${
                  visibleSections.has("contact-section")
                    ? "opacity-100 translate-x-0 animate-sophisticated-zoom"
                    : "opacity-0 translate-x-20"
                }`}
              >
                <div
                  className="bg-white/90 border-gray-200 backdrop-blur-sm border p-8 lg:p-12 rounded-3xl shadow-lg"
                >
                  <div className="text-sm font-medium tracking-wider text-[#288EC2] uppercase mb-6">
                    (CONTACT FORM)
                  </div>
                  <h3
                    className="text-3xl font-light text-gray-800 mb-8"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    GET IN <em>TOUCH</em>
                  </h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="block text-sm font-light text-gray-600 tracking-wider uppercase mb-3"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-6 py-4 bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white border rounded-2xl focus:ring-2 focus:ring-[#F37E3A] focus:border-[#F37E3A] transition-all duration-300"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-light text-gray-600 tracking-wider uppercase mb-3"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-6 py-4 bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white border rounded-2xl focus:ring-2 focus:ring-[#F37E3A] focus:border-[#F37E3A] transition-all duration-300"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-light text-gray-600 tracking-wider uppercase mb-3">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-6 py-4 bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white border rounded-2xl focus:ring-2 focus:ring-[#F37E3A] focus:border-[#F37E3A] transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-light text-gray-600 tracking-wider uppercase mb-3">
                        Property Type
                      </label>
                      <select
                        className="w-full px-6 py-4 bg-gray-50 border-gray-200 text-gray-800 focus:bg-white border rounded-2xl focus:ring-2 focus:ring-[#F37E3A] focus:border-[#F37E3A] transition-all duration-300"
                      >
                        <option className="bg-white">
                          Manufacturing Facility
                        </option>
                        <option className="bg-white">
                          Warehouse Space
                        </option>
                        <option className="bg-white">
                          Distribution Center
                        </option>
                        <option className="bg-white">
                          Other
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-light text-gray-600 tracking-wider uppercase mb-3">
                        Message
                      </label>
                      <textarea
                        rows="4"
                        className="w-full px-6 py-4 bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white border rounded-2xl focus:ring-2 focus:ring-[#F37E3A] focus:border-[#F37E3A] transition-all duration-300"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#F37E3A] to-[#e66a2b] text-white py-4 rounded-2xl font-medium tracking-wider uppercase hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-[#e66a2b] hover:to-[#d4581f]"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer-section"
        ref={(el) => (sectionsRef.current[1] = el)}
        className="bg-gray-100 text-gray-800 py-16 relative"
      >
        <div className="absolute inset-0 opacity-5">
          <img
            src="/1.jpg"
            alt="Footer Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid lg:grid-cols-6 md:grid-cols-4 gap-8 transition-all duration-1000 ${
              visibleSections.has("footer-section")
                ? "opacity-100 translate-y-0 animate-staggered-fade"
                : "opacity-0 translate-y-20"
            }`}
          >
            {/* Logo Section */}
            <div className="lg:col-span-2 md:col-span-4">
              <div className="mb-6">
                <img
                  src="/logo/COZ_COMFORT.png"
                  alt="COZ COMFORT Logo"
                  className="h-12 w-auto"
                />
              </div>
              <p
                className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md"
              >
                Your trusted partner for premium industrial real estate
                solutions. We help businesses find the perfect space to grow and
                thrive.
              </p>

              {/* Social Links */}
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 bg-white border-gray-200 text-gray-600 hover:bg-gray-50 backdrop-blur-sm border rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                    style={{ "--hover-color": social.color }}
                  >
                    <div
                      style={{ color: social.color }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    >
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div
                key={index}
                className="space-y-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3
                  className="font-light text-gray-800 text-xl tracking-wider uppercase mb-6"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-[#F37E3A] transition-all duration-300 text-sm font-light tracking-wide hover:translate-x-2 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div
            className="border-t border-gray-300 mt-16 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div
                className="text-gray-500 mb-4 md:mb-0 text-sm font-light tracking-wider"
              >
                © 2024 COZ COMFORT. ALL RIGHTS RESERVED.
              </div>
              <div className="flex space-x-8">
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#F37E3A] transition-all duration-300 text-sm font-light tracking-wider hover:translate-y-[-2px] inline-block"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#F37E3A] transition-all duration-300 text-sm font-light tracking-wider hover:translate-y-[-2px] inline-block"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#F37E3A] transition-all duration-300 text-sm font-light tracking-wider hover:translate-y-[-2px] inline-block"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
