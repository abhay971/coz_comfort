import { Features } from "@/components/ui/features";
import { Building2, Warehouse, TruckIcon, Factory, Container, Package } from "lucide-react";

export default function Properties() {
  const industrialProjects = [
    {
      id: 1,
      title: "Premium Manufacturing Hub",
      description: "State-of-the-art manufacturing facility designed for heavy machinery operations with advanced quality control systems and optimized workflow layouts.",
      image: "/manufacturing-hub.png",
      icon: Factory,
    },
    {
      id: 2,
      title: "Strategic Warehouse Complex",
      description: "Climate-controlled storage solutions with automated inventory management, multi-level racking systems, and direct rail access for efficient logistics.",
      image: "/warehouse-complex.png",
      icon: Warehouse,
    },
    {
      id: 3,
      title: "Multi-Modal Distribution Center",
      description: "Comprehensive distribution facility with cross-docking capabilities, cold storage units, and integrated IT infrastructure for seamless operations.",
      image: "/distribution-center.png",
      icon: TruckIcon,
    },
    {
      id: 4,
      title: "Industrial Park Development",
      description: "Mixed-use industrial park featuring flexible spaces for manufacturing, assembly, and logistics operations with shared infrastructure and utilities.",
      image: "/industrial-park.png",
      icon: Building2,
    },
  ];

  return (
    <div id="projects">
      <Features
        features={industrialProjects}
        primaryColor="#F37E3A"
        progressGradientLight="bg-gradient-to-r from-[#F37E3A] to-[#e66a2b]"
        progressGradientDark="bg-gradient-to-r from-[#e66a2b] to-[#d4581f]"
      />
    </div>
  );
}
