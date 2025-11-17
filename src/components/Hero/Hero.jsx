import { useEffect } from "react";
import ScrollExpandMedia from "../ui/scroll-expansion-hero";
import React from "react";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div id="home" className="min-h-screen">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/video.mp4"
        posterSrc="/wilhelm-gunkel-_rD1pJwWpbU-unsplash.jpg"
        bgImageSrc="/1.jpg"
        title="Industry 360°"
        date="Build Where You Grow"
        scrollToExpand="Scroll to Explore"
        textBlend={false}
      />
    </div>
  );
};

export default Hero;
