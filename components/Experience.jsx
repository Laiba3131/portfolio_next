import React from 'react';

export default function Experience() {
    const experiences = [
        {
            year: "2023 - Present",
            title: "Senior Frontend Developer",
            company: "Tech Solutions Inc.",
            description: "Leading the frontend team in building scalable web applications using React and Next.js. Improved site performance by 40% and mentored junior developers."
        },
        {
            year: "2021 - 2023",
            title: "Full Stack Developer",
            company: "Creative Digital Agency",
            description: "Developed and maintained multiple client websites and internal tools using the MERN stack. Collaborated with designers to implement pixel-perfect user interfaces."
        },
        {
            year: "2019 - 2021",
            title: "Junior Web Developer",
            company: "StartUp Hub",
            description: "Assisted in the development of a SaaS platform. Wrote clean, maintainable code and participated in code reviews and agile rituals."
        }
    ];

    return (
        <section className="w-full py-20 px-6 md:px-10 lg:px-20 text-white bg-[#021625]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="text-blue-500 font-medium tracking-widest text-sm uppercase">Career Path</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">Professional Experience</h2>
                </div>

                <div className="relative border-l border-gray-800 ml-4 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 group">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] md:-left-[7px] top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500 group-hover:scale-125 transition duration-300 ring-4 ring-[#021625]"></div>

                            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition duration-300 border border-transparent hover:border-white/10">
                                <div className="md:w-1/4">
                                    <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/20">
                                        {exp.year}
                                    </span>
                                </div>
                                <div className="md:w-3/4 space-y-3">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">{exp.title}</h3>
                                        <h4 className="text-gray-400 text-lg mt-1">{exp.company}</h4>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed max-w-2xl">{exp.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
