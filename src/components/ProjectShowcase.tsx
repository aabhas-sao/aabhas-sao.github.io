import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

interface ProjectShowcaseProps {
    /** Video URL for video display mode */
    videoUrl?: string
    /** Array of image URLs for carousel mode */
    images?: string[]
    /** Auto-play interval in milliseconds (default: 3000) */
    autoPlayInterval?: number
    /** Show navigation controls for carousel */
    showControls?: boolean
    /** Alt text for images or video */
    alt?: string
    /** Aspect ratio (default: "16/9") */
    aspectRatio?: string
    /** Optional class name for container */
    className?: string
}

const ProjectShowcase = ({
    videoUrl,
    images = [],
    autoPlayInterval = 3000,
    showControls = true,
    alt = "Project showcase",
    aspectRatio = "16/9",
    className = ""
}: ProjectShowcaseProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [direction, setDirection] = useState(0)
    const videoRef = useRef<HTMLVideoElement>(null)
    const timerRef = useRef<NodeJS.Timeout>()

    const isVideoMode = !!videoUrl
    const isCarouselMode = images.length > 0 && !videoUrl

    // Auto-play carousel logic
    useEffect(() => {
        if (!isCarouselMode || !isPlaying) return

        timerRef.current = setInterval(() => {
            setDirection(1)
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, autoPlayInterval)

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current)
            }
        }
    }, [isCarouselMode, isPlaying, images.length, autoPlayInterval])

    const handlePrevious = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        setIsPlaying(false)
    }

    const handleNext = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % images.length)
        setIsPlaying(false)
    }

    const handleDotClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
        setIsPlaying(false)
    }

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    // Animation variants for carousel
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction > 0 ? "-100%" : "100%",
            opacity: 0
        })
    }

    if (!isVideoMode && !isCarouselMode) {
        return (
            <div className={`flex items-center justify-center bg-muted rounded-xl ${className}`} style={{ aspectRatio }}>
                <p className="text-muted-foreground text-sm">No media provided</p>
            </div>
        )
    }

    return (
        <div className={`relative group rounded-xl overflow-hidden bg-black ${className}`}>
            {/* Video Mode */}
            {isVideoMode && (
                <video
                    ref={videoRef}
                    src={videoUrl}
                    loop
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ aspectRatio }}
                    aria-label={alt}
                >
                    Your browser does not support the video tag.
                </video>
            )}

            {/* Carousel Mode */}
            {isCarouselMode && (
                <div className="relative" style={{ aspectRatio }}>
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`${alt} ${currentIndex + 1}`}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full h-full object-cover"
                            loading="lazy"
                        />
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    {showControls && images.length > 1 && (
                        <>
                            {/* Previous/Next Buttons */}
                            <motion.button
                                onClick={handlePrevious}
                                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-all duration-200 opacity-0 group-hover:opacity-100"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={20} />
                            </motion.button>

                            <motion.button
                                onClick={handleNext}
                                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-all duration-200 opacity-0 group-hover:opacity-100"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Next image"
                            >
                                <ChevronRight size={20} />
                            </motion.button>

                            {/* Play/Pause Button */}
                            <motion.button
                                onClick={togglePlayPause}
                                className="absolute bottom-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-all duration-200 opacity-0 group-hover:opacity-100"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                            >
                                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                            </motion.button>

                            {/* Dot Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-2 rounded-full bg-background/80 backdrop-blur-sm">
                                {images.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => handleDotClick(index)}
                                        className={`rounded-full transition-all duration-300 ${index === currentIndex
                                                ? "bg-foreground w-6 h-2"
                                                : "bg-foreground/40 hover:bg-foreground/60 w-2 h-2"
                                            }`}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label={`Go to image ${index + 1}`}
                                        aria-current={index === currentIndex ? "true" : "false"}
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    {/* Image Counter */}
                    {images.length > 1 && (
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-foreground text-sm font-medium">
                            {currentIndex + 1} / {images.length}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default ProjectShowcase