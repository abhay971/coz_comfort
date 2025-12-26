import { SplitProcess } from "../ui/split-process";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto pt-4 sm:pt-6 md:pt-8 px-4 md:px-8 lg:px-10">
        <div className="text-center">
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
          {/* <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 mt-4">
            Explore our comprehensive 5-step approach with integrated offerings for complete industrial excellence
          </p> */}
        </div>
      </div>
      <SplitProcess />
    </section>
  );
}
