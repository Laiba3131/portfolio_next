import React from 'react';

export default function AboutMe() {
  return (
    <section className="w-full py-20 px-6 md:px-10 lg:px-20 text-white bg-black/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <div className="w-full h-[500px] bg-linear-to-br from-[#B18325]/20 to-black rounded-3xl overflow-hidden relative group border border-[#B18325]/20">
            {/* Gold-themed visual elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-64 h-64 rounded-full bg-linear-to-r from-[#B18325] to-[#D7BF75] blur-3xl"></div>
            </div>

            {/* Code snippet overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#0a0a0a]/90 backdrop-blur-md p-4 rounded-xl border border-[#B18325]/30 w-[93%] lg:w-3/4 z-20">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-[#B18325]"></div>
                <div className="w-3 h-3 rounded-full bg-[#D7BF75]"></div>
                <div className="w-3 h-3 rounded-full bg-[#8D681D]"></div>
              </div>
              <pre className="text-xs font-mono text-[#D7BF75]">
                <code>{`const Portfolio = {\n  name: "Hina Shahzadi",\n  role: "Frontend Developer",\n  skills: ["React", "Next.js", "Tailwind"],\n  mission: "Build beautifull UIs"\n};`}</code>
              </pre>
            </div>

            {/* Profile image with gold color theme */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
              alt="Developer"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 opacity-60 group-hover:opacity-100"
            />

            {/* Logo overlay */}
            <div className="absolute top-6 right-6 w-12 h-12 gold-gradient rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <span className="text-black font-bold text-xl">H</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[#B18325] font-medium tracking-widest text-sm uppercase">Frontend Developer</span>
              <div className="flex">
                <div className="w-2 h-2 rounded-full bg-[#B18325]"></div>
                <div className="w-2 h-2 rounded-full bg-[#D7BF75] ml-1"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Crafting Digital <span className="gold-text-gradient">Experiences</span> With Precision
            </h2>
          </div>

          <p className="text-gray-300 text-justify text-[16px] lg:text-lg leading-relaxed">
            I am a passionate Frontend Developer specialized in building high-performance, visually stunning web and mobile applications. With expertise in React, Next.js, and modern CSS frameworks, I create seamless user interfaces that are both beautiful and functional. My focus is on delivering high-quality code and pixel-perfect designs.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-6">
            <div className="space-y-2 p-6 rounded-xl glass-card border border-[#B18325]/10 hover:border-[#B18325]/30 transition-all duration-300">
              <h4 className="text-white font-bold text-4xl">3+</h4>
              <p className="text-sm text-[#D7BF75] uppercase tracking-wider font-medium">Years Exp.</p>
            </div>
            <div className="space-y-2 p-6 rounded-xl glass-card border border-[#B18325]/10 hover:border-[#B18325]/30 transition-all duration-300">
              <h4 className="text-white font-bold text-4xl">20+</h4>
              <p className="text-sm text-[#D7BF75] uppercase tracking-wider font-medium">Projects Done</p>
            </div>
          </div>

          {/* Tech stack badges */}
          <div className="pt-4">
            <p className="text-[#B18325] text-sm mb-4 uppercase tracking-wider font-bold">Expertise In</p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#B18325]/10 text-[#D7BF75] rounded-full text-sm border border-[#B18325]/20 hover:bg-[#B18325]/20 transition-all cursor-default">React.js</span>
              <span className="px-4 py-2 bg-[#B18325]/10 text-[#D7BF75] rounded-full text-sm border border-[#B18325]/20 hover:bg-[#B18325]/20 transition-all cursor-default">Next.js</span>
              <span className="px-4 py-2 bg-[#B18325]/10 text-[#D7BF75] rounded-full text-sm border border-[#B18325]/20 hover:bg-[#B18325]/20 transition-all cursor-default">Tailwind CSS</span>
              <span className="px-4 py-2 bg-[#B18325]/10 text-[#D7BF75] rounded-full text-sm border border-[#B18325]/20 hover:bg-[#B18325]/20 transition-all cursor-default">JavaScript</span>
              <span className="px-4 py-2 bg-[#B18325]/10 text-[#D7BF75] rounded-full text-sm border border-[#B18325]/20 hover:bg-[#B18325]/20 transition-all cursor-default">Framer Motion</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}