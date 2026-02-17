import React from 'react';
import { Layout, Smartphone, Code, Database, Palette, Globe } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: <Smartphone className="w-10 h-10 text-[#B18325]" />,
            title: "Cross-Platform Mobile Apps",
            description: "Building scalable Flutter applications for Android and iOS from a single codebase. Delivering high-performance, native-feel mobile experiences."
        },
        {
            icon: <Layout className="w-10 h-10 text-[#D7BF75]" />,
            title: "State Management",
            description: "Implementing BLoC, Provider, and GetX for scalable and maintainable app architecture. Clean separation of business logic and UI."
        },
        {
            icon: <Palette className="w-10 h-10 text-[#B18325]" />,
            title: "Modern UI & Dashboards",
            description: "Crafting intuitive dashboards, user management screens, and report-based UIs using Flutter and Material Design principles."
        },
        {
            icon: <Code className="w-10 h-10 text-[#D7BF75]" />,
            title: "Clean Architecture",
            description: "Writing maintainable, testable code with clean architecture patterns. Passionate about production-ready, well-structured apps."
        },
        {
            icon: <Database className="w-10 h-10 text-[#B18325]" />,
            title: "Firebase & API Integration",
            description: "Integrating Firebase (Authentication, Firestore, Notifications) and REST APIs for real-time data, auth, and backend connectivity."
        },
        {
            icon: <Globe className="w-10 h-10 text-[#D7BF75]" />,
            title: "Play Store Publishing",
            description: "Publishing and maintaining apps on Google Play Store. Ensuring compliance, updates, and smooth release cycles."
        }
    ];

    return (
        <section id="services" className="w-full py-20 px-6 md:px-10 lg:px-20 bg-black/30 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <span className="text-[#B18325] font-medium tracking-widest text-sm uppercase">What I Offer</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">My <span className="gold-text-gradient">Services</span></h2>
                    <div className="w-20 h-1 bg-[#B18325] mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base md:text-lg">
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
