import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Projects() {
    const projects = [
        {
            title: "Cinewoo",
            description: "A dynamic streaming platform built with Next.js. Features seamless navigation and a rich user interface using PrimeReact and Tailwind CSS.",
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
            tech: ["Next.js", "Tailwind", "PrimeReact"],
            liveLink: "https://cinewoo.com/",
            sourceLink: "#"
        },
        {
            title: "Reminder",
            description: "A task management and reminder application designed for efficiency. Built with React JS and Core UI for a clean, responsive experience.",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
            tech: ["React.js", "Core UI"],
            liveLink: "https://reminder-link.com/",
            sourceLink: "#"
        },
        {
            title: "CoinoSwap",
            description: "A cryptocurrency exchange interface facilitating seamless token swaps. Optimized for performance and real-time updates using React.js.",
            image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop",
            tech: ["React.js", "Redux", "Web3"],
            liveLink: "https://test.coinoswap.com/",
            sourceLink: "#"
        },
        {
            title: "Address Offices",
            description: "A directory and location service platform. Developed with standard web technologies ensuring high compatibility and speed.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
            tech: ["HTML", "CSS", "Bootstrap", "JS"],
            liveLink: "https://addressoffices.com/",
            sourceLink: "#"
        },
        {
            title: "VIP Autolink",
            description: "An automotive inventory and listing platform. Leverages Next.js and Shadcn for a modern, accessible, and performant user interface.",
            image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop",
            tech: ["Next.js", "Shadcn", "CSS"],
            liveLink: "http://vipstage.site/",
            sourceLink: "#"
        },
        {
            title: "Houbara Fund",
            description: "A conservation organization website focusing on wildlife preservation. Features a clean layout and responsive design.",
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop",
            tech: ["HTML", "CSS", "Bootstrap"],
            liveLink: "https://conservationbreedingcentre.com.pk/",
            sourceLink: "#"
        }
    ];

    return (
        <section className="w-full py-20 px-6 md:px-10 lg:px-20 bg-black/50 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center md:text-left">
                    <span className="text-[#B18325] font-medium tracking-widest text-sm uppercase">My Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">Recent <span className="gold-text-gradient">Projects</span></h2>
                    <div className="w-20 h-1 bg-[#B18325] mt-4 rounded-full md:mx-0 mx-auto"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl text-base md:text-lg">
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
                                <p className="text-gray-400 text-justify text-sm leading-relaxed mb-6 flex-1">
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
