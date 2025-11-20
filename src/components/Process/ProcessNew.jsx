import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building, Pencil, ClipboardList, Settings, Wrench } from "lucide-react";

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ProcessContent = ({ icon: Icon, title, description, features }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <div className="col-span-1 md:col-span-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-[#F37E3A]/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#F37E3A]" />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-6 text-xl text-neutral-600 md:text-2xl">
        {description}
      </p>
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3 items-start text-neutral-700">
            <span className="text-[#F37E3A] mt-1.5 flex-shrink-0">✓</span>
            <span className="text-lg">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function ProcessNew() {
  const processData = [
    {
      imgUrl: "/Real-Estate .png",
      subheading: "Step 01",
      heading: "Real Estate Acquisition",
      icon: Building,
      title: "Real Estate Acquisition",
      description: "Securing optimal industrial land parcels aligned with your growth strategy. Our expert team identifies prime locations and handles all aspects of the acquisition process.",
      features: [
        "Site identification & due diligence",
        "Zoning & compliance verification",
        "Negotiation & acquisition support",
      ],
    },
    {
      imgUrl: "/Design-Development.png",
      subheading: "Step 02",
      heading: "Design & Development",
      icon: Pencil,
      title: "Design & Development",
      description: "Intelligent industrial layouts optimized for maximum efficiency. We create functional spaces that enhance productivity and operational flow.",
      features: [
        "Custom architectural planning",
        "Structural & MEP engineering",
        "3D visualization & modeling",
      ],
    },
    {
      imgUrl: "/Planning-Procurement.png",
      subheading: "Step 03",
      heading: "Planning & Procurement",
      icon: ClipboardList,
      title: "Planning & Procurement",
      description: "Strategic coordination ensuring seamless project execution. We manage timelines, vendors, and quality to deliver exceptional results.",
      features: [
        "Project timeline development",
        "Vendor selection & management",
        "Quality assurance protocols",
      ],
    },
    {
      imgUrl: "/Operations-Management.png",
      subheading: "Step 04",
      heading: "Operations Management",
      icon: Settings,
      title: "Operations Management",
      description: "Expert oversight from groundbreaking to commissioning. Our dedicated team ensures every phase meets the highest standards.",
      features: [
        "Construction supervision",
        "Progress monitoring & reporting",
        "Budget & timeline management",
      ],
    },
    {
      imgUrl: "/Facility-Management.png",
      subheading: "Step 05",
      heading: "Facility Management",
      icon: Wrench,
      title: "Facility Management",
      description: "Ongoing support ensuring long-term operational excellence. We provide comprehensive facility services to maximize your investment.",
      features: [
        "Preventive maintenance programs",
        "Facility optimization services",
        "24/7 technical support",
      ],
    },
  ];

  return (
    <section id="process" className="bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto py-10 sm:py-16 md:py-20 px-4 md:px-8 lg:px-10">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-[#F37E3A] to-transparent" />
            <span className="text-xs sm:text-sm tracking-widest uppercase text-gray-500 font-medium">
              Our Process
            </span>
            <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-l from-[#F37E3A] to-transparent" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight px-4">
            Your Vision,{" "}
            <span className="text-[#F37E3A]">Our Mission</span>
          </h2>
        </div>
      </div>

      {/* Parallax Sections */}
      {processData.map((process, index) => (
        <TextParallaxContent
          key={index}
          imgUrl={process.imgUrl}
          subheading={process.subheading}
          heading={process.heading}
        >
          <ProcessContent
            icon={process.icon}
            title={process.title}
            description={process.description}
            features={process.features}
          />
        </TextParallaxContent>
      ))}
    </section>
  );
}
