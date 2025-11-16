import { motion, useScroll, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Home, FileText, Briefcase, Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"

const Navbar = () => {
  const { scrollY } = useScroll()
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Use Intersection Observer to detect when hero section is out of view
  useEffect(() => {
    const heroSection = document.querySelector('[data-hero-section]')

    if (!heroSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // On mobile, always minimize after scrolling past hero
        // On desktop, minimize when hero is out of view
        setIsMinimized(!entry.isIntersecting)
        if (!entry.isIntersecting) {
          setIsExpanded(false)
        }
      },
      {
        threshold: 0,
        rootMargin: isMobile ? '-50px 0px 0px 0px' : '-100px 0px 0px 0px' // Different trigger for mobile
      }
    )

    observer.observe(heroSection)

    return () => observer.disconnect()
  }, [isMobile])

  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "Posts", href: "#posts", icon: FileText },
    { label: "Projects", href: "#projects", icon: Briefcase },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    e.stopPropagation()

    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)

    if (element) {
      // Close expanded menu first
      setIsExpanded(false)

      // Use a small timeout to let menu close, then scroll
      setTimeout(() => {
        const navbarHeight = 100
        const elementTop = element.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
          top: elementTop - navbarHeight,
          behavior: 'smooth'
        })
      }, 100)
    }
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="mx-auto px-4 md:px-6"
        animate={{
          maxWidth: isMinimized ? "280px" : "1280px", // Dynamic Island width
        }}
        transition={{
          duration: 0.7,
          ease: [0.32, 0.72, 0, 1], // Custom easing for smooth morphing
        }}
      >
        <motion.div
          className={`mt-4 overflow-hidden flex items-center ${isMinimized
            ? "bg-background/40 backdrop-blur-lg border border-border/30 shadow-xl shadow-black/10"
            : isScrolled
              ? "bg-background/30 backdrop-blur-md border border-border/20 shadow-lg shadow-black/5"
              : "bg-background/10 backdrop-blur-sm border border-transparent"
            }`}
          animate={{
            borderRadius: isMinimized ? "999px" : "16px", // Pill shape when minimized
            height: "56px", // Fixed height to prevent jitter
            paddingLeft: isMinimized ? "1.5rem" : "1.5rem",
            paddingRight: isMinimized ? "1.5rem" : "1.5rem",
          }}
          transition={{
            duration: 0.7,
            ease: [0.32, 0.72, 0, 1],
          }}
        >
          <AnimatePresence mode="wait">
            {!isMinimized ? (
              <motion.div
                key="full-nav"
                className="flex items-center justify-between px-6 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }} // Fast fade
              >
                {/* Logo/Name */}
                <motion.a
                  href="/"
                  className="text-lg md:text-xl font-bold tracking-tight"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Aabhas Sao
                </motion.a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-1 md:gap-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="relative px-4 py-2 text-sm md:text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg cursor-pointer"
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                      whileTap={{ scale: 0.96 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}

                  {/* Theme Toggle Button */}
                  <motion.button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    whileHover={{ scale: 1.05, rotate: 180 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    aria-label="Toggle theme"
                  >
                    <AnimatePresence mode="wait">
                      {theme === 'dark' ? (
                        <motion.div
                          key="sun"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Sun size={20} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="moon"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Moon size={20} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>

                {/* Mobile Menu Button & Theme Toggle */}
                <div className="md:hidden flex items-center gap-2">
                  {/* Theme Toggle for Mobile */}
                  <motion.button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Toggle theme"
                  >
                    <AnimatePresence mode="wait">
                      {theme === 'dark' ? (
                        <motion.div
                          key="sun"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Sun size={20} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="moon"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Moon size={20} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  {/* Mobile Menu Button */}
                  <motion.button
                    className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    onClick={() => setIsExpanded(!isExpanded)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AnimatePresence mode="wait">
                      {isExpanded ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <X size={24} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Menu size={24} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.button
                key="minimized-nav"
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-3 justify-between w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-bold tracking-tight whitespace-nowrap">Aabhas Sao</span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-foreground">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Menu (when not minimized) */}
        <AnimatePresence>
          {!isMinimized && isExpanded && isMobile && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 bg-background/40 backdrop-blur-xl border border-border/30 shadow-2xl shadow-black/20 rounded-3xl overflow-hidden"
            >
              <div className="p-3 grid grid-cols-2 gap-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-muted/50 transition-all duration-200 group cursor-pointer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                      onClick={(e) => {
                        handleNavClick(e, item.href)
                        setIsExpanded(false)
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon size={24} className="text-foreground" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Island Expanded Menu (when minimized) */}
        <AnimatePresence>
          {isMinimized && isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              transition={{
                duration: 0.4,
                ease: [0.32, 0.72, 0, 1],
                height: { duration: 0.3 }
              }}
              className="mt-3 bg-background/40 backdrop-blur-xl border border-border/30 shadow-2xl shadow-black/20 rounded-3xl overflow-hidden"
            >
              <div className="p-3 grid grid-cols-2 gap-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-muted/50 transition-all duration-200 group cursor-pointer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                      onClick={(e) => {
                        handleNavClick(e, item.href)
                        setIsExpanded(false)
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon size={24} className="text-foreground" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar