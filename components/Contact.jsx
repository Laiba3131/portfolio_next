import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
    return (
        <section className="w-full py-20 px-6 md:px-10 lg:px-20 bg-[#031B2E] text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-blue-500 font-medium tracking-widest text-sm uppercase">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">Let's <span className="text-blue-500">Connect</span></h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
                        I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative touch, let's talk.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="flex flex-col items-center p-8 bg-[#0A192F] rounded-2xl border border-gray-800 hover:border-blue-500/50 transition duration-300 text-center">
                        <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Email Me</h3>
                        <p className="text-gray-400 mb-4">I'll get back to you within 24 hours.</p>
                        <a href="mailto:hello@example.com" className="text-blue-400 hover:text-blue-300 font-medium text-lg">
                            hello@example.com
                        </a>
                    </div>

                    <div className="flex flex-col items-center p-8 bg-[#0A192F] rounded-2xl border border-gray-800 hover:border-teal-500/50 transition duration-300 text-center">
                        <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center mb-6 text-teal-400">
                            <Phone className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Call Me</h3>
                        <p className="text-gray-400 mb-4">Available Mon-Fri, 9am - 6pm.</p>
                        <a href="tel:+1234567890" className="text-teal-400 hover:text-teal-300 font-medium text-lg">
                            +1 234 567 890
                        </a>
                    </div>

                    <div className="flex flex-col items-center p-8 bg-[#0A192F] rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition duration-300 text-center">
                        <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Location</h3>
                        <p className="text-gray-400 mb-4">Remote / Hybrid</p>
                        <span className="text-cyan-400 font-medium text-lg">
                            San Francisco, CA
                        </span>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-8 p-10 rounded-3xl bg-gradient-to-r from-blue-900/20 to-teal-900/20 border border-white/5">
                    <h3 className="text-2xl font-bold text-center">Find Me on Social Media</h3>
                    <div className="flex gap-6">
                        <a href="#" className="w-14 h-14 rounded-full bg-[#0A192F] hover:bg-blue-600 border border-gray-700 hover:border-blue-500 flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white group">
                            <Linkedin className="w-6 h-6 group-hover:scale-110 transition" />
                        </a>
                        <a href="#" className="w-14 h-14 rounded-full bg-[#0A192F] hover:bg-gray-800 border border-gray-700 hover:border-white/50 flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white group">
                            <Github className="w-6 h-6 group-hover:scale-110 transition" />
                        </a>
                        <a href="#" className="w-14 h-14 rounded-full bg-[#0A192F] hover:bg-sky-500 border border-gray-700 hover:border-sky-400 flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white group">
                            <Twitter className="w-6 h-6 group-hover:scale-110 transition" />
                        </a>
                        <a href="#" className="w-14 h-14 rounded-full bg-[#0A192F] hover:bg-pink-600 border border-gray-700 hover:border-pink-500 flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white group">
                            <Instagram className="w-6 h-6 group-hover:scale-110 transition" />
                        </a>
                    </div>

                    <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-6 mt-4 shadow-lg shadow-blue-900/20">
                        Download Resume
                    </Button>
                </div>
            </div>
        </section>
    );
}
