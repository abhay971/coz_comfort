import { useRef } from "react";
import { motion } from "framer-motion";
import { Building2, Users, Award, Target } from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);

  return (
    <section id="about-section" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F37E3A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#288EC2]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={sectionRef}>

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
              About Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Club of{" "}
            <span className="text-[#F37E3A]">Industrial Infra</span>
          </motion.h2>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed"
          >
            With over a decade of expertise in industrial infrastructure development,
            we engineer spaces that power business growth and operational excellence.
          </motion.p> */}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 mb-20">

          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/1.jpg"
                alt="Industrial Infrastructure"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F37E3A] rounded-full opacity-20 blur-2xl" />
          </motion.div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Your Partner in Industrial Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At COZ COMFORT, we don't just build structures—we create strategic
                  industrial ecosystems designed to maximize efficiency, scalability, and ROI.
                  Every square foot is engineered with your business growth in mind.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From initial site assessment to final handover, our comprehensive approach
                  ensures seamless project execution. We combine cutting-edge design with
                  proven construction methodologies to deliver world-class industrial facilities.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: Users,
                    title: "Land Acquisitions",
                    desc: "Seasoned professionals",
                  },
                  {
                    icon: Building2,
                    title: "Turnkey Solutions",
                    desc: "End-to-end project delivery",
                  },  
                  {
                    icon: Award,
                    title: "Quality Assurance",
                    desc: "ISO certified processes",
                  },
                  {
                    icon: Target,
                    title: "On-Time Delivery",
                    desc: "98% project success rate",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-[#F37E3A]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-[#F37E3A]/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-[#F37E3A]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Industry 360° Approach
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We provide complete visibility and control over every aspect of your industrial
                project—from land acquisition and permits to construction and commissioning.
                Your success is our blueprint.
              </p>
            </div>

            {/* Accent corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F37E3A] opacity-10 rounded-bl-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
