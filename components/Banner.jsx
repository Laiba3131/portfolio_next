'use client';
import React from 'react';
import { motion } from "framer-motion";
import Typewriter from './Typewriter';
import { ArrowRight, Facebook, Github, LinkedinIcon } from "lucide-react";
import Link from 'next/link';

function Banner() {

    const userDetails = {
        name: "Hina Shahzadi",
        title: "Frontend Developer",
        image: "/images/profile.png",
        description: "Im a passionate Frontend Developer who loves building clean, responsive,and interactive user interfaces. With strong expertise in React, Next.js, and modern CSS frameworks, I focus on creating seamless user experiences that are both visually appealing and performance-driven.",
        linkedIn: "https://www.linkedin.com/in/hina-shahzadi-701528294/",
        github: "#",
        facebook: "#",
    };

    return (
        <>
            <div className='h-screen pt-10 w-full'>
                <div className='pt-20 lg:pt-0 grid lg:grid-cols-2 grid-cols-1 h-full items-center'>
                    <div>
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
                            <span className="lg:text-[70px] md:text-[40px] text-[30px]">Hey! I am </span><span className="gold-text-gradient">Hina</span>
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
                            <button
                                className='text-xs lg:text-lg flex items-center gap-3 uppercase px-2 py-3 lg:px-8 lg:py-4 bg-[#B18325] text-black font-bold rounded-full cursor-pointer hover:bg-[#D7BF75] transition-all duration-300 shadow-[0_0_20px_rgba(177,131,37,0.4)]'
                            >
                                Get In Touch
                                <ArrowRight className='inline-block' size={20} />
                            </button>
                            <Link href={userDetails.linkedIn} className='bg-black/50 p-3 border border-[#B18325]/50 text-[#B18325] rounded-full hover:bg-[#B18325] hover:text-black transition-all duration-300'>
                                <LinkedinIcon size={22} />
                            </Link>

                            <Link href={userDetails.github} className='bg-black/50 p-3 border border-[#B18325]/50 text-[#B18325] rounded-full hover:bg-[#B18325] hover:text-black transition-all duration-300'>
                                <Github size={22} />
                            </Link>

                            <Link href={userDetails.facebook} className='bg-black/50 p-3 border border-[#B18325]/50 text-[#B18325] rounded-full hover:bg-[#B18325] hover:text-black transition-all duration-300'>
                                <Facebook size={22} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        {/* <img src={userDetails.image} alt="Profile Picture" className='' /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;