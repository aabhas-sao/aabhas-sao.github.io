import { fetchPosts } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Mail, Github } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import ProjectShowcase from "./ProjectShowcase"

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/aabhas-sao/",
        icon: <Linkedin size={28} strokeWidth={1.5} />,
        ariaLabel: "LinkedIn",
        target: "_blank",
        rel: "noopener noreferrer"
    },
    {
        href: "mailto:aabhas.sao@gmail.com",
        icon: <Mail size={28} strokeWidth={1.5} />,
        ariaLabel: "Email"
    },
    {
        href: "https://github.com/aabhas-sao",
        icon: <Github size={28} strokeWidth={1.5} />,
        ariaLabel: "GitHub",
        target: "_blank",
        rel: "noopener noreferrer"
    }
]

const projects = [
    {
        title: "Sudoku Solver",
        description: "A sudoku solver that uses a backtracking algorithm to solve sudoku puzzles.",
        githubLink: "https://github.com/aabhas-sao/sudoku-solver",
        projectLink: "https://aabhas-sao.github.io/sudoku-solver/",
        showcase: {
            type: "video",
            videoUrl: "/sudoku1.mp4"
        }

    }, {
        title: "Chase",
        description: "A racing game built with Unity3D, C# and Blender.",
        githubLink: "https://github.com/aabhas-sao/Project-3DXRC",
        projectLink: "https://aabhas-sao.github.io/Project-3DXRC/",
        showcase: {
            type: "image",
            images: [
                "/chase_map.png",
                "/chase_home.png",
                "/chase_gameplay.png"
            ],
            autoPlayInterval: 2000
        },
    }
]

const Home = () => {
    const [posts, setPosts] = useState<any[]>([])
    const [isMobile, setIsMobile] = useState(false)
    const { scrollYProgress } = useScroll()
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

    useEffect(() => {
        fetchPosts('aabhassao').then(setPosts)

        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <div className="px-3 md:px-6 max-w-7xl mx-auto pt-24">
            {/* Hero Section - Apple-inspired minimalism */}
            <motion.section
                id="home"
                data-hero-section
                className="min-h-[85vh] flex flex-col items-center justify-center py-20 mb-16"
                style={{ opacity, scale }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                        Hi, I'm Aabhas Sao
                    </h1>

                    <motion.p
                        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        SWE I @ Candescent | Full Stack Developer
                        <br />
                        <span className="text-lg md:text-xl">Learning to build systems that scale</span>
                    </motion.p>

                    <motion.div
                        className="flex items-center justify-center gap-8 pt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        {socialLinks.map(({ href, icon, ariaLabel, target, rel }) => (
                            <motion.a
                                key={ariaLabel}
                                href={href}
                                aria-label={ariaLabel}
                                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                {...(target ? { target } : {})}
                                {...(rel ? { rel } : {})}
                            >
                                {icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.section>
            {/* Latest Posts Section */}
            <section className="mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-5xl text-muted-foreground text-center md:text-5xl font-bold mb-3 tracking-tight">Latest Posts</h2>
                    <p className="text-muted-foreground text-lg text-center mb-12">Thoughts on development, systems and technology</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {posts.slice(0, isMobile ? 5 : 9).map((post: any, index: number) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: Math.min(index * 0.08, 0.3),
                                duration: 0.5,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <motion.div
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="h-full"
                            >
                                <Card className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="text-xl md:text-2xl line-clamp-2">{post.title}</CardTitle>
                                        <CardDescription className="text-sm md:text-base mt-2 line-clamp-3">{post.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="mt-auto">
                                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                                            {post.tag_list.slice(0, 3).map((tag: string) => (
                                                <span
                                                    key={tag}
                                                    className="bg-muted/50 rounded-full px-3 py-1 text-xs font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {post.tag_list.length > 3 && (
                                                <span className="text-xs text-muted-foreground">+{post.tag_list.length - 3}</span>
                                            )}
                                        </div>
                                        <a
                                            href={post.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-foreground font-medium group"
                                        >
                                            Read More
                                            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                                        </a>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-5xl text-muted-foreground text-center md:text-5xl  font-bold mb-3 tracking-tight">Projects</h2>
                </motion.div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="h-100 border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
                                <CardHeader className="w-full flex flex-row justify-between">

                                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center"
                                    >
                                        <Github size={28} strokeWidth={1.5} />
                                    </a>
                                </CardHeader>
                                <CardContent>
                                    <ProjectShowcase
                                        videoUrl={project.showcase.type === 'video' ? project.showcase.videoUrl : undefined}
                                        images={project.showcase.type === 'image' ? project.showcase.images : []}
                                        alt={`${project.title} showcase`}
                                        autoPlayInterval={project.showcase?.autoPlayInterval || 3000}
                                    />
                                    <p className="mt-4 text-sm text-muted-foreground">{project.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-foreground font-medium group"
                                    >
                                        View Project
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                                    </a>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home