import React from 'react';

export default function AboutMe() {
  return (
    <section className="w-full py-20 px-6 md:px-10 lg:px-20 text-white bg-[#031B2E]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <div className="w-full h-[500px] bg-gradient-to-br from-blue-900/30 to-teal-900/20 rounded-3xl overflow-hidden relative group">
            {/* Flutter-themed visual elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 blur-3xl"></div>
            </div>
            
            {/* Code snippet overlay for Flutter developer */}
            <div className="absolute bottom-6 left-6 bg-[#0A192F]/90 backdrop-blur-sm p-4 rounded-xl border border-blue-500/30 w-3/4">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-xs font-mono text-blue-300">
                <code>{`class MyApp extends StatelessWidget {\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Flutter Developer',\n      theme: ThemeData.dark(),\n      home: HomeScreen(),\n    );\n  }\n}`}</code>
              </pre>
            </div>

            {/* Profile image with Flutter color theme */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
              alt="Flutter Developer" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />
            
            {/* Flutter logo overlay */}
            <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.314 0L2.3 12 6 15.7 21.684.032h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-blue-400 font-medium tracking-widest text-sm uppercase">Flutter Developer</span>
              <div className="flex">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-teal-500 ml-1"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-500 ml-1"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Cross-Platform Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Specialist</span> & UI Expert
            </h2>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            As a professional Flutter developer, I specialize in crafting high-performance, visually stunning cross-platform applications. With expertise in Dart, native integration, and custom animations, I build scalable mobile solutions that deliver exceptional user experiences across iOS and Android platforms. My focus is on clean architecture, state management (Provider/Riverpod/Bloc), and pixel-perfect implementations.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-6">
            <div className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 hover:border-blue-500/30 transition duration-300">
              <h4 className="text-white font-bold text-4xl">4+</h4>
              <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">Years Flutter</p>
            </div>
            <div className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-teal-900/20 to-transparent border border-teal-500/10 hover:border-teal-500/30 transition duration-300">
              <h4 className="text-white font-bold text-4xl">30+</h4>
              <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">Mobile Apps</p>
            </div>
            <div className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-cyan-900/20 to-transparent border border-cyan-500/10 hover:border-cyan-500/30 transition duration-300">
              <h4 className="text-white font-bold text-4xl">15+</h4>
              <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">Play Store Apps</p>
            </div>
            <div className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-blue-900/20 to-teal-900/20 border border-blue-500/10 hover:border-blue-500/30 transition duration-300">
              <h4 className="text-white font-bold text-4xl">98%</h4>
              <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">Client Retention</p>
            </div>
          </div>

          {/* Tech stack badges */}
          <div className="pt-4">
            <p className="text-gray-400 text-sm mb-3 uppercase tracking-wider">Technologies</p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20">Flutter</span>
              <span className="px-4 py-2 bg-teal-500/10 text-teal-400 rounded-full text-sm border border-teal-500/20">Dart</span>
              <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20">Firebase</span>
              <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20">GetX</span>
              <span className="px-4 py-2 bg-red-500/10 text-red-400 rounded-full text-sm border border-red-500/20">Riverpod</span>
              <span className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm border border-green-500/20">REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}