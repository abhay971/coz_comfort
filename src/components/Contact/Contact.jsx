import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useRef } from "react";

export default function Contact() {
  const contactRef = useRef(null);

  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hidden: {
      filter: "blur(4px)",
      y: -10,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i) => ({
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hidden: {
      filter: "blur(4px)",
      opacity: 0,
      scale: 0.98,
    },
  };

  return (
    <section id="contact" className="py-8 px-4 bg-[#f9f9f9]" ref={contactRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2 text-xl">
            <span className="text-[#6EBD49] animate-spin">✱</span>
            <TimelineContent
              as="span"
              animationNum={0}
              timelineRef={contactRef}
              customVariants={revealVariants}
              className="text-2xl font-bold text-gray-900"
            >
              Contact us
            </TimelineContent>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Contact Info */}
          <div>
            <h1 className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] font-semibold text-gray-900 mb-8">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.05}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 0.3,
                }}
              >
                Get in Touch with Our Industrial Experts.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="p"
              animationNum={9}
              timelineRef={contactRef}
              customVariants={revealVariants}
              className="text-gray-600 sm:text-base text-sm leading-relaxed mb-8 text-justify"
            >
              Let our experts help you discover the ideal industrial property
              that aligns with your business vision and operational
              requirements. We're here to answer your questions and guide you
              through every step.
            </TimelineContent>

            <div className="space-y-6">
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={contactRef}
                customVariants={revealVariants}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#F37E3A]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F37E3A]/20 transition-all duration-300">
                  <Phone className="w-5 h-5 text-[#F37E3A]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Phone</div>
                  <div className="text-gray-900 font-medium">
                    +1 (555) 123-4567
                  </div>
                </div>
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={contactRef}
                customVariants={revealVariants}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#F37E3A]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F37E3A]/20 transition-all duration-300">
                  <Mail className="w-5 h-5 text-[#F37E3A]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <div className="text-gray-900 font-medium">
                    info@cozcomfort.com
                  </div>
                </div>
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={contactRef}
                customVariants={revealVariants}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#F37E3A]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F37E3A]/20 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-[#F37E3A]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Address</div>
                  <div className="text-gray-900 font-medium">
                    123 Industrial Blvd, Business District
                  </div>
                </div>
              </TimelineContent>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <TimelineContent
              as="div"
              animationNum={13}
              timelineRef={contactRef}
              customVariants={scaleVariants}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a Message
              </h3>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37E3A] focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37E3A] focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37E3A] focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37E3A] focus:border-transparent transition-all">
                    <option>Manufacturing Facility</option>
                    <option>Warehouse Space</option>
                    <option>Distribution Center</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37E3A] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-neutral-900 hover:bg-neutral-950 shadow-lg shadow-neutral-900 border border-neutral-700 flex w-full justify-center items-center gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </TimelineContent>
          </div>
        </div>
      </div>
    </section>
  );
}
