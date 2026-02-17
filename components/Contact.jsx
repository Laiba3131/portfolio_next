import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
    return (
        <section id="contact" className="w-full py-20 px-6 md:px-10 lg:px-20 bg-black/50 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#B18325] font-medium tracking-widest text-sm uppercase">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">Let's <span className="gold-text-gradient">Connect</span></h2>
                    <div className="w-20 h-1 bg-[#B18325] mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base md:text-lg">
                        I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative touch, let's talk.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="flex flex-col items-center p-8 glass-card rounded-2xl border border-[#B18325]/10 hover:border-[#B18325]/50 transition-all duration-300 text-center">
                        <div className="w-16 h-16 rounded-full bg-[#B18325]/10 flex items-center justify-center mb-6 text-[#B18325]">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Email Me</h3>
                        <p className="text-gray-400 mb-4 text-sm">I'll get back to you within 24 hours.</p>
                        <a href="mailto:laibaazam.31@gmail.com" className="text-[#D7BF75] hover:text-[#B18325] font-medium text-lg transition-colors break-all">
                            laibaazam.31@gmail.com
                        </a>
                    </div>

                    <div className="flex flex-col items-center p-8 glass-card rounded-2xl border border-[#B18325]/10 hover:border-[#B18325]/50 transition-all duration-300 text-center">
                        <div className="w-16 h-16 rounded-full bg-[#B18325]/10 flex items-center justify-center mb-6 text-[#D7BF75]">
                            <Phone className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Call Me</h3>
                        <p className="text-gray-400 mb-4 text-sm">Available Mon-Fri, 9am - 6pm.</p>
                        <a href="tel:+923244533919" className="text-[#D7BF75] hover:text-[#B18325] font-medium text-lg transition-colors">
                            +92 324 4533919
                        </a>
                    </div>

                    <div className="flex flex-col items-center p-8 glass-card rounded-2xl border border-[#B18325]/10 hover:border-[#B18325]/50 transition-all duration-300 text-center">
                        <div className="w-16 h-16 rounded-full bg-[#B18325]/10 flex items-center justify-center mb-6 text-[#B18325]">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Location</h3>
                        <p className="text-gray-400 mb-4 text-sm">Remote / Hybrid</p>
                        <span className="text-[#D7BF75] font-medium text-lg">
                            Lahore, Pakistan
                        </span>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-8 p-10 rounded-3xl bg-[#B18325]/5 border border-[#B18325]/20">
                    <h3 className="text-2xl font-bold text-center">Follow My Journey</h3>
                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/laiba-azam-5ab503220/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-black hover:bg-[#B18325] border border-[#B18325]/20 hover:border-[#B18325] flex items-center justify-center transition-all duration-300 text-[#B18325] hover:text-black group">
                            <Linkedin className="w-6 h-6 group-hover:scale-110 transition" />
                        </a>
                        <a href="https://github.com/Laiba3131" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-black hover:bg-[#B18325] border border-[#B18325]/20 hover:border-[#B18325] flex items-center justify-center transition-all duration-300 text-[#B18325] hover:text-black group">
                            <Github className="w-6 h-6 group-hover:scale-110 transition" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-black hover:bg-[#B18325] border border-[#B18325]/20 hover:border-[#B18325] flex items-center justify-center transition-all duration-300 text-[#B18325] hover:text-black group">
                            <Twitter className="w-6 h-6 group-hover:scale-110 transition" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-black hover:bg-[#B18325] border border-[#B18325]/20 hover:border-[#B18325] flex items-center justify-center transition-all duration-300 text-[#B18325] hover:text-black group">
                            <Instagram className="w-6 h-6 group-hover:scale-110 transition" />
                        </a>
                    </div>

                    <a href="/LaibaAzam-2.pdf" download="LaibaAzam-2.pdf">
                        <Button className="rounded-full bg-[#B18325] hover:bg-[#D7BF75] text-black font-bold text-lg px-10 py-6 mt-4 shadow-[0_0_20px_rgba(177,131,37,0.3)] transition-all">
                            Download CV
                        </Button>
                    </a>
                </div>
            </div>
        </section>

    );
}
