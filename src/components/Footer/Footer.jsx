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
      title: "Process",
      links: [
        { name: "Real Estate Acquisition", href: "#process" },
        { name: "Design & Development", href: "#process" },
        { name: "Planning & Procurement", href: "#process" },
        { name: "Operations Management", href: "#process" },
        { name: "Sales & Lease Management", href: "#process" },
      ],
    },
    {
      title: "Projects",
      links: [
        { name: "Industrial Parks", href: "#projects" },
        { name: "Production Houses", href: "#projects" },
        { name: "Distribution Centers", href: "#projects" },
        // { name: "Industrial Park", href: "#projects" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "#about-section" },
        { name: "Pivacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        // { name: "Contact", href: "#contact" },
      ],
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
      href: "#",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "#",
    },
  ];

  return (
    <footer
      id="footer-section"
      ref={(el) => (sectionsRef.current[0] = el)}
      className="bg-gray-900 text-gray-300 py-16 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-wrap justify-between gap-y-8 transition-all duration-1000 ${
            visibleSections.has("footer-section")
              ? "opacity-100 translate-y-0 animate-staggered-fade"
              : "opacity-0 translate-y-20"
          }`}
        >
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="mb-6">
              <a href="#home" className="inline-flex flex-col cursor-pointer">
                <img
                  src="/logo/COZ_COMFORT_WHITE.png"
                  alt="COZ COMFORT Logo"
                  className="h-12 w-auto"
                />
                <span className="text-gray-300 tracking-wide font-bold mb-6 text-sm sm:text-base">
                  CLUB of Industrial Infra
                </span>
              </a>
            </div>
            {/* <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-md">
              Your trusted partner for comprehensive industrial infrastructure solutions.
              From land acquisition to global expansion, we power your business growth.
            </p> */}

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {/* <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@cozcomfort.com</span>
              </div> */}
              {/* <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div> */}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 bg-gray-800 border border-gray-700 text-gray-400 hover:bg-[#F37E3A] hover:text-white hover:border-[#F37E3A] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div
              key={index}
              className="space-y-4 flex-shrink-0 self-start"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {section.title === "Process" ? (
                <>
                  <h3 className="font-semibold text-white text-lg tracking-wide mb-6 relative inline-block w-full text-center">
                    {section.title}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#F37E3A] -mb-2"></div>
                  </h3>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className={`text-gray-400 hover:text-[#F37E3A] transition-all duration-300 text-sm group flex items-start gap-2 ${
                          linkIndex === 4 ? 'col-span-2 justify-center' : ''
                        }`}
                      >
                        <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#F37E3A] transition-colors flex-shrink-0 mt-1.5"></span>
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h3 className="font-semibold text-white text-lg tracking-wide mb-6 relative inline-block">
                    {section.title}
                    <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#F37E3A] -mb-2"></div>
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-[#F37E3A] transition-all duration-300 text-sm hover:translate-x-2 group flex items-center gap-2"
                        >
                          <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#F37E3A] transition-colors"></span>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Global Offices Section */}
        <div className="mt-6 pt-8 border-t border-gray-800">
          <h3 className="font-semibold text-white text-xl tracking-wide mb-8 text-center relative inline-block left-1/2 -translate-x-1/2">
            Our Offices
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-[#F37E3A] -mb-2"></div>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
            {/* India Office */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#F37E3A]"></div>
                <span className="text-base font-bold text-[#F37E3A] uppercase tracking-wide">India</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                5 Laxmi Soc, OP Road,<br />
                Vadodara - 07, Gujarat, INDIA.
              </p>
            </div>

            {/* USA Office */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#F37E3A]"></div>
                <span className="text-base font-bold text-[#F37E3A] uppercase tracking-wide">USA</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                6313 Plumcreek Road,<br />
                Frisco, Texas - 75036, USA.
              </p>
            </div>

            {/* UAE Office */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#F37E3A]"></div>
                <span className="text-base font-bold text-[#F37E3A] uppercase tracking-wide">UAE</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Meydan FZ, 6th Floor,<br />
                Al Meydan Rd, Dubai, UAE.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-500 text-sm order-1 lg:order-1">
              © 2025 COZ COMFORT. All Rights Reserved.
            </div>

            {/* Privacy Links */}
            {/* <div className="flex flex-wrap justify-center gap-6 order-3 lg:order-2">
              <a
                href="#"
                className="text-gray-500 hover:text-[#F37E3A] transition-all duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#F37E3A] transition-all duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div> */}

            {/* COZ CLUB Company Logo */}
            <a
              href="https://www.cozclub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 order-2 lg:order-3"
            >
              <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">A</span>
              <img
                src="/logo/footer_logo.png"
                alt="COZ CLUB"
                className="h-8 w-auto hover:scale-110 transition-transform duration-300"
              />
              <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">Company</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
