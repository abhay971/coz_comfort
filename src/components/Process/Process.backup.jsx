import { DynamicFrameLayout } from "../ui/dynamic-frame-layout";
import { Building, Pencil, ClipboardList, Settings, Wrench } from "lucide-react";

export default function Process() {
  const processFrames = [
    {
      id: 1,
      image: "/Real-Estate .png",
      video: "", // Add video URL here when available
      title: "Real Estate Acquisition",
      description: "Securing optimal industrial land parcels aligned with your growth strategy",
      icon: <Building className="w-5 h-5 md:w-6 md:h-6 text-white" />,
      features: [
        "Site identification & due diligence",
        "Zoning & compliance verification",
        "Negotiation & acquisition support",
      ],
      corner: "",
      edgeHorizontal: "",
      edgeVertical: "",
      mediaSize: 1,
      borderThickness: 0,
      borderSize: 100,
    },
    {
      id: 2,
      image: "/Design-Development.png",
      video: "", // Add video URL here when available
      title: "Design & Development",
      description: "Intelligent industrial layouts optimized for maximum efficiency",
      icon: <Pencil className="w-5 h-5 md:w-6 md:h-6 text-white" />,
      features: [
        "Custom architectural planning",
        "Structural & MEP engineering",
        "3D visualization & modeling",
      ],
      corner: "",
      edgeHorizontal: "",
      edgeVertical: "",
      mediaSize: 1,
      borderThickness: 0,
      borderSize: 100,
    },
    {
      id: 3,
      image: "/Planning-Procurement.png",
      video: "", // Add video URL here when available
      title: "Planning & Procurement",
      description: "Strategic coordination ensuring seamless project execution",
      icon: <ClipboardList className="w-5 h-5 md:w-6 md:h-6 text-white" />,
      features: [
        "Project timeline development",
        "Vendor selection & management",
        "Quality assurance protocols",
      ],
      corner: "",
      edgeHorizontal: "",
      edgeVertical: "",
      mediaSize: 1,
      borderThickness: 0,
      borderSize: 100,
    },
    {
      id: 4,
      image: "/Operations-Management.png",
      video: "", // Add video URL here when available
      title: "Operations Management",
      description: "Expert oversight from groundbreaking to commissioning",
      icon: <Settings className="w-5 h-5 md:w-6 md:h-6 text-white" />,
      features: [
        "Construction supervision",
        "Progress monitoring & reporting",
        "Budget & timeline management",
      ],
      corner: "",
      edgeHorizontal: "",
      edgeVertical: "",
      mediaSize: 1,
      borderThickness: 0,
      borderSize: 100,
    },
    {
      id: 5,
      image: "/Facility-Management.png",
      video: "", // Add video URL here when available
      title: "Facility Management",
      description: "Ongoing support ensuring long-term operational excellence",
      icon: <Wrench className="w-5 h-5 md:w-6 md:h-6 text-white" />,
      features: [
        "Preventive maintenance programs",
        "Facility optimization services",
        "24/7 technical support",
      ],
      corner: "",
      edgeHorizontal: "",
      edgeVertical: "",
      mediaSize: 1,
      borderThickness: 0,
      borderSize: 100,
    },
  ];

  return (
    <section id="process" className="relative overflow-hidden bg-white">
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
          {/* <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            <span className="hidden sm:inline">Hover over each frame to explore our comprehensive approach to industrial infrastructure</span>
            <span className="sm:hidden">Explore our comprehensive approach to industrial infrastructure</span>
          </p> */}
        </div>
      </div>
      <div className="w-full px-4 md:px-8 lg:px-10 pb-10 sm:pb-16 md:pb-20">
        <div className="h-auto sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
          <DynamicFrameLayout
            frames={processFrames}
            className="w-full h-full"
            showFrames={false}
            hoverSize={6}
            gapSize={8}
          />
        </div>
      </div>
    </section>
  );
}
