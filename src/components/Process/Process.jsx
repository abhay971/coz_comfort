import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import {
  ClipboardList,
  Ruler,
  HardHat,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useRef, useState } from "react";

export default function Process() {
  const processRef = useRef(null);
  const [activeStep, setActiveStep] = useState(null);

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

  const processSteps = [
    {
      id: 1,
      title: "Consultation",
      icon: ClipboardList,
      description:
        "We begin by understanding your specific industrial space requirements, operational needs, and business goals.",
      details: [
        "Initial requirements gathering",
        "Site analysis and evaluation",
        "Budget and timeline discussion",
      ],
      color: "#F37E3A",
    },
    {
      id: 2,
      title: "Planning",
      icon: Ruler,
      description:
        "Our team develops comprehensive plans and designs tailored to your industrial operations and workflow.",
      details: [
        "Custom space planning",
        "Infrastructure design",
        "Permit acquisition",
      ],
      color: "#288EC2",
    },
    {
      id: 3,
      title: "Construction",
      icon: HardHat,
      description:
        "Professional execution of your industrial project with quality materials and expert craftsmanship.",
      details: [
        "Site preparation",
        "Building construction",
        "Quality control checks",
      ],
      color: "#6EBD49",
    },
    {
      id: 4,
      title: "Handover",
      icon: CheckCircle,
      description:
        "Final inspection, documentation, and smooth transition of your ready-to-use industrial facility.",
      details: [
        "Final inspection",
        "Documentation delivery",
        "Post-completion support",
      ],
      color: "#F37E3A",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white" ref={processRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xl mb-8">
            <span className="text-[#F37E3A] animate-spin">✱</span>
            <TimelineContent
              as="span"
              animationNum={0}
              timelineRef={processRef}
              customVariants={revealVariants}
              className="text-2xl font-bold text-gray-900"
            >
              Our Process
            </TimelineContent>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
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
              From Vision to Reality in Four Simple Steps
            </VerticalCutReveal>
          </h2>
          <TimelineContent
            as="p"
            animationNum={1}
            timelineRef={processRef}
            customVariants={revealVariants}
            className="text-gray-600 text-lg max-w-3xl"
          >
            Our streamlined process ensures your industrial project is delivered
            on time, within budget, and to the highest quality standards.
          </TimelineContent>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - visible only on desktop */}
          <div className="hidden md:block absolute md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F37E3A] via-[#288EC2] to-[#6EBD49]"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              const isActive = activeStep === step.id;

              return (
                <TimelineContent
                  key={step.id}
                  as="div"
                  animationNum={index + 2}
                  timelineRef={processRef}
                  customVariants={revealVariants}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col gap-8`}
                >
                  {/* Content Card */}
                  <div
                    className={`flex-1 ${
                      isLeft
                        ? "md:text-right md:pr-12"
                        : "md:text-left md:pl-12"
                    }`}
                  >
                    <div
                      className={`bg-[#f9f9f9] rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "border-[#F37E3A] shadow-lg"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setActiveStep(isActive ? null : step.id)}
                    >
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isLeft ? "md:justify-end" : "md:justify-start"
                        } justify-start`}
                      >
                        {/* Icon visible only on mobile */}
                        <div
                          className="md:hidden w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: step.color,
                          }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-4xl font-bold text-gray-600">
                          0{step.id}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 mb-4 text-sm md:text-base">
                        {step.description}
                      </p>

                      {isActive && (
                        <div className="mt-4 pt-4 border-t border-gray-300">
                          <ul className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className={`flex items-center gap-2 text-sm text-gray-700 ${
                                  isLeft ? "md:justify-end" : "md:justify-start"
                                } justify-start`}
                              >
                                <ArrowRight
                                  className="w-4 h-4 text-[#F37E3A]"
                                  style={{
                                    order: isLeft ? 1 : 0,
                                  }}
                                />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Icon - visible only on desktop */}
                  <div className="hidden md:block absolute md:left-1/2 md:-translate-x-1/2 z-10">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: step.color,
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Spacer for mobile */}
                  <div className="flex-1 hidden md:block"></div>
                </TimelineContent>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <TimelineContent
          as="div"
          animationNum={7}
          timelineRef={processRef}
          customVariants={revealVariants}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-neutral-900 hover:bg-neutral-950 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:gap-4"
          >
            Start Your Project Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </TimelineContent>
      </div>
    </section>
  );
}
