import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Mobile App",
            description: "A full-featured mobile shopping application built with Flutter. Features include user authentication, product search, cart management, and payment gateway integration.product search, cart management, and payment gateway integration.product search, cart management, and payment gateway integration.product search, cart management, and payment gateway integration.",
            image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop",
            tech: ["Flutter", "Firebase", "Stripe", "Provider"],
            liveLink: "#",
            sourceLink: "#"
        },
        {
            title: "Task Management Dashboard",
            description: "A productivity tool for teams to manage tasks and projects. Includes real-time updates, drag-and-drop boards, and team collaboration features.",
            image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop",
            tech: ["React", "Next.js", "TailwindCSS", "Node.js"],
            liveLink: "#",
            sourceLink: "#"
        },
        {
            title: "Health & Fitness Tracker",
            description: "A comprehensive health tracking app that monitors workouts, nutrition, and sleep patterns. Visualizes data with interactive charts and graphs.",
            image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop",
            tech: ["Flutter", "SQFlite", "Charts", "Health API"],
            liveLink: "#",
            sourceLink: "#"
        },
        {
            title: "E-Commerce Mobile App",
            description: "A full-featured mobile shopping application built with Flutter. Features include user authentication, product search, cart management, and payment gateway integration.product search, cart management, and payment gateway integration.product search, cart management, and payment gateway integration.product search, cart management, and payment gateway integration.",
            image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop",
            tech: ["Flutter", "Firebase", "Stripe", "Provider"],
            liveLink: "#",
            sourceLink: "#"
        },
        {
            title: "Task Management Dashboard",
            description: "A productivity tool for teams to manage tasks and projects. Includes real-time updates, drag-and-drop boards, and team collaboration features.",
            image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop",
            tech: ["React", "Next.js", "TailwindCSS", "Node.js"],
            liveLink: "#",
            sourceLink: "#"
        },
        // {
        //     title: "Health & Fitness Tracker",
        //     description: "A comprehensive health tracking app that monitors workouts, nutrition, and sleep patterns. Visualizes data with interactive charts and graphs.",
        //     image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop",
        //     tech: ["Flutter", "SQFlite", "Charts", "Health API"],
        //     liveLink: "#",
        //     sourceLink: "#"
        // }
    ];

    return (
        <section className="w-full py-20 px-6 md:px-10 lg:px-20 bg-black/50 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center md:text-left">
                    <span className="text-[#B18325] font-medium tracking-widest text-sm uppercase">My Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">Recent <span className="gold-text-gradient">Projects</span></h2>
                    <div className="w-20 h-1 bg-[#B18325] mt-4 rounded-full"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl text-lg">
                        Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-[#B18325]/10 hover:border-[#B18325]/50 flex flex-col h-full shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-[#B18325]/10 group-hover:bg-transparent transition duration-500 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D7BF75] transition">{project.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-semibold px-3 py-1 bg-[#B18325]/10 text-[#D7BF75] rounded-full border border-[#B18325]/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons using Button component if available or standard button */}
                                <div className="flex gap-4 mt-auto">
                                    <a href={project.liveLink} className="flex-1">
                                        <Button className="w-full bg-[#B18325] hover:bg-[#D7BF75] text-black font-bold rounded-lg group-hover:shadow-[0_0_15px_rgba(177,131,37,0.3)] transition-all">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live
                                        </Button>
                                    </a>
                                    <a href={project.sourceLink} className="flex-1">
                                        <Button variant="outline" className="w-full border-[#B18325]/30 text-[#D7BF75] hover:text-black hover:bg-[#B18325] hover:border-[#B18325] bg-transparent rounded-lg transition-all duration-300">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="link" className="text-[#B18325] hover:text-[#D7BF75] text-lg">
                        View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
