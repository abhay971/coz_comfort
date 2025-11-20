"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

function FrameComponent({
  video,
  image,
  title,
  description,
  icon,
  features,
  width,
  height,
  className = "",
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize,
  borderThickness,
  borderSize,
  showFrame,
  isHovered,
}) {
  const videoRef = useRef(null)
  const isVideo = video && (video.endsWith('.mp4') || video.endsWith('.webm') || video.includes('video'))

  useEffect(() => {
    if (isVideo && isHovered && videoRef.current) {
      videoRef.current.play()
    } else if (isVideo && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isHovered, isVideo])

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
            padding: showFrame ? `${borderThickness}px` : "0",
            width: showFrame ? `${borderSize}%` : "100%",
            height: showFrame ? `${borderSize}%` : "100%",
            left: showFrame ? `${(100 - borderSize) / 2}%` : "0",
            top: showFrame ? `${(100 - borderSize) / 2}%` : "0",
          }}
        >
          <div
            className="w-full h-full overflow-hidden relative"
            style={{
              transform: `scale(${isHovered ? mediaSize : 1})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {/* Background Image/Video */}
            {isHovered && video ? (
              <video
                className="w-full h-full object-cover absolute inset-0"
                src={video}
                loop
                muted
                playsInline
                ref={videoRef}
              />
            ) : (
              <img
                className="w-full h-full object-cover absolute inset-0"
                src={image || video}
                alt={title || "Process frame"}
              />
            )}

            {/* Overlay with content - hide on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 flex flex-col justify-end p-3 sm:p-4 md:p-6 lg:p-8 transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0 : 1,
              }}
            >
              {icon && (
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm mb-2 sm:mb-3 md:mb-4">
                  {icon}
                </div>
              )}
              <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mb-1 sm:mb-2 md:mb-3">
                {title}
              </h3>
              <p className="font-normal text-xs sm:text-xs md:text-sm text-neutral-200 mb-2 sm:mb-3 md:mb-4 line-clamp-2 sm:line-clamp-none">
                {description}
              </p>
              {features && features.length > 0 && (
                <div className="space-y-1 sm:space-y-1.5 hidden sm:block">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-2 items-start text-white/90 text-xs md:text-sm">
                      <span className="text-[#F37E3A] mt-1 flex-shrink-0">✓</span>
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {showFrame && (
          <div className="absolute inset-0" style={{ zIndex: 2 }}>
            <div
              className="absolute top-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})` }}
            />
            <div
              className="absolute top-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleX(-1)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleY(-1)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scale(-1, -1)" }}
            />

            <div
              className="absolute top-0 left-16 right-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
              }}
            />
            <div
              className="absolute bottom-0 left-16 right-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
                transform: "rotate(180deg)",
              }}
            />
            <div
              className="absolute left-0 top-16 bottom-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
              }}
            />
            <div
              className="absolute right-0 top-16 bottom-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
                transform: "scaleX(-1)",
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export function DynamicFrameLayout({
  frames: initialFrames,
  className,
  showFrames = false,
  hoverSize = 6,
  gapSize = 4
}) {
  const [frames] = useState(initialFrames)
  const [hovered, setHovered] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const getRowSizes = () => {
    if (isMobile || hovered === null) return "1fr 1fr"
    const hoveredRow = hovered < 3 ? 0 : 1
    const nonHoveredSize = (12 - hoverSize) / 1
    return hoveredRow === 0 ? `${hoverSize}fr ${nonHoveredSize}fr` : `${nonHoveredSize}fr ${hoverSize}fr`
  }

  const getColSizesRow1 = () => {
    if (isMobile || hovered === null || hovered >= 3) return "1fr 1fr 1fr"
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((c) => (c === hovered ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getColSizesRow2 = () => {
    if (isMobile || hovered === null || hovered < 3) return "1fr 1fr"
    const col = hovered - 3
    const nonHoveredSize = (12 - hoverSize) / 1
    return col === 0 ? `${hoverSize}fr ${nonHoveredSize}fr` : `${nonHoveredSize}fr ${hoverSize}fr`
  }

  return (
    <div
      className={`w-full h-full ${className}`}
      style={{
        display: "grid",
        gridTemplateRows: getRowSizes(),
        gap: `${gapSize}px`,
        transition: "grid-template-rows 0.4s ease",
      }}
    >
      {/* First Row - 3 items on desktop, responsive on mobile */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3"
        style={{
          gridTemplateColumns: isMobile ? "1fr" : getColSizesRow1(),
          gap: `${gapSize}px`,
          transition: "grid-template-columns 0.4s ease",
        }}
      >
        {frames.slice(0, 3).map((frame, index) => (
          <motion.div
            key={frame.id}
            className="relative min-h-[200px] sm:min-h-0"
            onMouseEnter={() => !isMobile && setHovered(index)}
            onMouseLeave={() => !isMobile && setHovered(null)}
          >
            <FrameComponent
              video={frame.video}
              image={frame.image}
              title={frame.title}
              description={frame.description}
              icon={frame.icon}
              features={frame.features}
              width="100%"
              height="100%"
              className="absolute inset-0"
              corner={frame.corner}
              edgeHorizontal={frame.edgeHorizontal}
              edgeVertical={frame.edgeVertical}
              mediaSize={frame.mediaSize || 1}
              borderThickness={frame.borderThickness}
              borderSize={frame.borderSize}
              showFrame={showFrames}
              isHovered={!isMobile && hovered === index}
            />
          </motion.div>
        ))}
      </div>

      {/* Second Row - 2 items with spacing on desktop, full width on mobile */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2"
        style={{
          gridTemplateColumns: isMobile ? "1fr" : `0.5fr ${getColSizesRow2()} 0.5fr`,
          gap: `${gapSize}px`,
          transition: "grid-template-columns 0.4s ease",
        }}
      >
        {!isMobile && <div></div>}
        {frames.slice(3, 5).map((frame, index) => (
          <motion.div
            key={frame.id}
            className="relative min-h-[200px] sm:min-h-0"
            onMouseEnter={() => !isMobile && setHovered(index + 3)}
            onMouseLeave={() => !isMobile && setHovered(null)}
          >
            <FrameComponent
              video={frame.video}
              image={frame.image}
              title={frame.title}
              description={frame.description}
              icon={frame.icon}
              features={frame.features}
              width="100%"
              height="100%"
              className="absolute inset-0"
              corner={frame.corner}
              edgeHorizontal={frame.edgeHorizontal}
              edgeVertical={frame.edgeVertical}
              mediaSize={frame.mediaSize || 1}
              borderThickness={frame.borderThickness}
              borderSize={frame.borderSize}
              showFrame={showFrames}
              isHovered={!isMobile && hovered === index + 3}
            />
          </motion.div>
        ))}
        {!isMobile && <div></div>}
      </div>
    </div>
  )
}
