'use client';
import React from 'react';
import { motion } from "framer-motion";
import Typewriter from './Typewriter';
import { ArrowRight, Facebook, Github, LinkedinIcon } from "lucide-react";
import Link from 'next/link';

function Banner() {

    const userDetails = {
        name: "Laiba Azam",
        title: "Flutter Developer",
        image: "/images/profile3.png",
        description: "Flutter Developer with 2+ years of experience building scalable, high-performance mobile applications for Android and iOS. Strong expertise in API integration, BLoC, Provider, GetX state management, and Firebase services.",
        linkedIn: "https://www.linkedin.com/in/laiba-azam-5ab503220/",
        github: "https://github.com/Laiba3131",
        facebook: "#",
    };

    return (
        <>
            <div id="home" className='pb-8 lg:pb-0 px-6 md:px-10 lg:px-20 min-h-screen pt-22 w-full banner-wrapper'>
                <div className='pt-20 lg:pt-0 grid lg:grid-cols-2 grid-cols-1 h-full items-center '>

                    {/* Intro Section - Order 2 on mobile, 1 on desktop */}
                    <div className="order-2 lg:order-1 pt-10 lg:pt-0">
                        <motion.h6
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className='mb-3'
                        >
                            <span className="bg-[#B18325]/20 text-[#D7BF75] border border-[#B18325]/30 text-base px-3 py-1 rounded-sm tracking-[4px] uppercase backdrop-blur-sm">
                                {userDetails.name}
                            </span>
                        </motion.h6>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="uppercase text-white lg:text-[70px] md:text-[40px] text-[30px] font-bold leading-tight"
                        >
                            <span className="lg:text-[70px] md:text-[40px] text-[30px]">Hey! I am </span><span className="gold-text-gradient">Laiba</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="text-[#D7BF75] font-bold lg:text-[70px] md:text-[40px] text-[30px] uppercase lg:leading-[76px] leading-9">
                                I am a {' '}
                                <Typewriter
                                    words={[
                                        userDetails.title,
                                        userDetails.title,
                                        userDetails.title,
                                    ]}
                                />
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-4 text-gray-300 text-justify text-[16px] lg:text-[20px] max-w-xl"
                        >
                            {userDetails.description}
                        </motion.p>

                        <div className='flex items-center gap-4 mt-8'>
                            <a
                                href="#contact"
                                className='text-xs lg:text-lg flex items-center gap-3 uppercase px-2 py-3 lg:px-8 lg:py-4 bg-[#B18325] text-black font-bold rounded-full cursor-pointer hover:bg-[#D7BF75] transition-all duration-300 shadow-[0_0_20px_rgba(177,131,37,0.4)]'
                            >
                                Get In Touch
                                <ArrowRight className='inline-block' size={20} />
                            </a>
                            <Link href={userDetails.linkedIn} target="_blank" rel="noopener noreferrer" className='bg-black/50 p-3 border border-[#B18325]/50 text-[#B18325] rounded-full hover:bg-[#B18325] hover:text-black transition-all duration-300'>
                                <LinkedinIcon size={22} />
                            </Link>

                            <Link href={userDetails.github} target="_blank" rel="noopener noreferrer" className='bg-black/50 p-3 border border-[#B18325]/50 text-[#B18325] rounded-full hover:bg-[#B18325] hover:text-black transition-all duration-300'>
                                <Github size={22} />
                            </Link>

                            <Link href={userDetails.facebook} target="_blank" rel="noopener noreferrer" className='bg-black/50 p-3 border border-[#B18325]/50 text-[#B18325] rounded-full hover:bg-[#B18325] hover:text-black transition-all duration-300'>
                                <Facebook size={22} />
                            </Link>
                        </div>
                    </div>

                    {/* Image Section - Order 1 on mobile, 2 on desktop */}
                    <div className="order-1 lg:order-2 relative h-[400px] md:h-[450px] sm:h-[520px] lg:h-[90vh] overflow-hidden">
                        {/* Profile Image */}
                        <div className="absolute bottom-4 lg:bottom-0 right-2 lg:right-24 z-10 h-[88%] lg:h-[92%]">
                            <img
                                src={userDetails.image}
                                alt="Laiba Azam"
                                className="
                                    h-full 
                                    w-auto 
                                    object-contain
                                    drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]
                                "
                                style={{ rotate: '14deg' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;