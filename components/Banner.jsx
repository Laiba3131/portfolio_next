'use client';
import React from 'react';
import { motion } from "framer-motion";
import Typewriter from './Typewriter';
import { ArrowRight, Code, Facebook, Github, LinkedinIcon } from "lucide-react";
import Link from 'next/link';

function Banner() {

    const userDetails = {
        name: "Hina Shahzadi",
        title: "Frontend Developer",
        description: "Im a passionate Frontend Developer who loves building clean, responsive,and interactive user interfaces. With strong expertise in React, Next.js, and modern CSS frameworks, I focus on creating seamless user experiences that are both visually appealing and performance-driven.",
        linkedIn: "https://www.linkedin.com/in/hina-shahzadi-701528294/",
        github: "#",
        facebook: "#",
    };

    return (
        <>
            <div className='h-screen pt-10 w-full'>
                <div className='grid lg:grid-cols-2 grid-cols-1 h-full items-center'>
                    <div>
                        <motion.h6
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="bg-[#05355F] text-base text-white px-2 py-1 rounded-sm tracking-[4px] uppercase">
                                {userDetails.name}
                            </span>
                        </motion.h6>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="uppercase text-white text-[70px] font-bold"
                        >
                            Hey! I am Hina
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="text-[#0788ff] font-bold text-[70px] uppercase leading-[76px]">
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
                            className="mt-4 text-white text-[20px]"
                        >
                            {userDetails.description}
                        </motion.p>

                        <div className='flex items-center gap-4 mt-6'>
                            <button
                                className='flex items-center gap-3 uppercase px-6 py-3 bg-[#0788ff] text-white rounded-full cursor-pointer border-2 border-[#0788ff] hover:border-[white] hover:bg-[#0562c1] transition'
                            >
                                Get In Touch
                                <ArrowRight className='inline-block' size={20} />
                            </button>
                            <Link href={userDetails.linkedIn} className='bg-[#1275b1] p-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition'>
                                <LinkedinIcon size={22} />
                            </Link>

                            <Link href={userDetails.github} className='p-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition'>
                                <Github size={22} />
                            </Link>

                            <Link href={userDetails.facebook} className='bg-[#1877f2] p-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition'>
                                <Facebook size={22} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;