import React from 'react';
import { Layout, Smartphone, Code, Database, Palette, Globe } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: <Smartphone className="w-10 h-10 text-[#B18325]" />,
            title: "Mobile App Development",
            description: "Building high-performance, cross-platform mobile applications using Flutter and React Native. I ensure smooth performance and native-like feel on both iOS and Android."
        },
        {
            icon: <Layout className="w-10 h-10 text-[#D7BF75]" />,
            title: "Web Application Development",
            description: "Developing scalable and robust web applications with modern frameworks like React, Next.js, and Node.js. Focused on performance, SEO, and user experience."
        },
        {
            icon: <Palette className="w-10 h-10 text-[#B18325]" />,
            title: "UI/UX Design",
            description: "Crafting intuitive and aesthetically pleasing user interfaces. I start from wireframes to high-fidelity prototypes, ensuring the user journey is seamless and engaging."
        },
        {
            icon: <Code className="w-10 h-10 text-[#D7BF75]" />,
            title: "Clean Code & Architecture",
            description: "Writing maintainable, testable, and documented code. I strictly follow SOLID principles and clean architecture patterns to ensure long-term project success."
        },
        {
            icon: <Database className="w-10 h-10 text-[#B18325]" />,
            title: "Backend & API Integration",
            description: "Designing RESTful APIs and integrating backend services (Firebase, Node.js) to power your applications with real-time data and secure authentication."
        },
        {
            icon: <Globe className="w-10 h-10 text-[#D7BF75]" />,
            title: "SEO & Optimization",
            description: "Optimizing websites for faster load times and better search engine ranking to increase your visibility and reach a wider audience."
        }
    ];

    return (
        <section className="w-full py-20 px-6 md:px-10 lg:px-20 bg-black/30 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <span className="text-[#B18325] font-medium tracking-widest text-sm uppercase">What I Offer</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">My <span className="gold-text-gradient">Services</span></h2>
                    <div className="w-20 h-1 bg-[#B18325] mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                        I provide a wide range of services to help you build and grow your digital presence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="p-8 rounded-2xl glass-card hover:border-[#B18325]/50 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="mb-6 p-4 rounded-xl bg-[#B18325]/10 w-fit group-hover:bg-[#B18325]/20 transition duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D7BF75] transition">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
