import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Cothm-Students Facilitation",
      description:
        "Flutter app allowing students to view their attendance, exam results, and assignments. Students can receive daily diary notifications and important announcements.",
      image: "/images/cothm.png",
      tech: ["Flutter", "Firebase", "APIs Integration", "Push Notifications", "Bloc"],
      liveLink:
        "https://play.google.com/store/apps/details?id=com.cothm&pcampaignid=web_share",
      sourceLink: "#",
    }, {
      title: "BKMC Student App",
      description:
        "Flutter app allowing students to view their attendance, exam results, and assignments. Students can receive daily diary notifications and important announcements.",
      image: "/images/bkmc_student.png",
      tech: ["Flutter", "Firebase"],
      liveLink:
        "https://play.google.com/store/apps/details?id=com.bkmc_student&pcampaignid=web_share",
      sourceLink: "#",
    },
    {
      title: "BKMC Teacher App",
      description:
        "Flutter app for teachers to manage student records, mark attendance, upload exam results, and notify daily diary.",
      image: "/images/bkmcTeacher.png",
      tech: ["Flutter", "Firebase", "APIs Integration", "Push Notifications"],
      liveLink:
        "https://play.google.com/store/apps/details?id=com.bkmc_teacher&pcampaignid=web_share",
      sourceLink: "#",
    },
    {
      title: "Nubes: Unlimited eSIM Data",
      description:
        "Flutter-based travel eSIM app providing high-speed global internet access in 200+ countries with API integration and Firebase services.",
      image: "/images/nubes.png",
      tech: [
        "Flutter",
        "Firebase",
        "APIs Integration",
        "Push Notifications",
        "Stripe SDK",
      ],
      liveLink:
        "https://play.google.com/store/apps/details?id=com.arham.nubes&pcampaignid=web_share",
      sourceLink: "#",
    },
    {
      title: "Kultureapp",
      description:
        "Next-generation social platform for creators and communities. Developed dashboard and core features using Flutter with API integration.",
      image: "/images/kulture.png",
      tech: ["Flutter", "Firebase", "APIs Integration", "Push Notifications"],
      liveLink:
        "https://play.google.com/store/apps/details?id=com.kulture.kultureapp&pcampaignid=web_share",
      sourceLink: "#",
    },
    {
      title: "AutoReady Customer App",
      description:
        "Find fuel and lubricant discounts, deals with stores, and earn points. Built with Flutter for orders and user management.",
      image: "/images/autoready.png",
      tech: ["Flutter", "GetX", "Provider"],
      liveLink:
        "https://play.google.com/store/apps/details?id=pk.autoready.customer&pcampaignid=web_share",
      sourceLink: "#",
    },

    {
      title: "Bawarche Online",
      description:
        "Connect with home chefs and tiffin services. Order homemade, hygienic lunch options delivered to your doorstep.",
      image: "/images/bawarchee_online.png",
      tech: ["Flutter", "Firebase", "APIs Integration", "Push Notifications"],
      liveLink:
        "https://play.google.com/store/apps/details?id=com.bawarche_online&pcampaignid=web_share",
      sourceLink: "#",
    },
    {
      title: "KGES",
      description:
        "For teachers and parents: upload files, check students, payment history, attendance, and fee balance. Flutter app with APIs integration.",
      image: "/images/kges.png",
      tech: ["Flutter", "Firebase", "APIs Integration", "Push Notifications"],
      liveLink:
        "https://play.google.com/store/apps/details?id=com.newkges.esm&pcampaignid=web_share",
      sourceLink: "#",
    },
    {
      title: "Unique Employee Portal",
      description:
        "Portal for Unique Group of Institutes employees: salary details, attendance, leave balance, and more.",
      image: "/images/unique.png",
      tech: [
        "Flutter",
        "Firebase",
        "APIs Integration",
        "Push Notifications",
        "Subscribe Notifications",
      ],
      liveLink:
        "https://play.google.com/store/apps/details?id=com.cas.uniqueemployee&pcampaignid=web_share",
      sourceLink: "#",
    },
    {
      title: "Kulture App Dashboard",
      description:
        "Admin dashboard for Kulture App—manage users, monitor activity, control access, and handle overall platform operations efficiently.",
      image: "/images/reevoh_dashboard.png",
      tech: ["Flutter", "Firebase", "APIs Integration"],
      liveLink: "https://incredible-mandazi-f799e9.netlify.app/",
      sourceLink: "#",
    },
    {
      title: "Reevoh Web",
      description:
        "E-commerce web application for Reevoh—browse products, manage cart, place orders, and track purchases with a smooth user experience.",
      image: "/images/reevoh_web.png",
      tech: ["Flutter", "Firebase", "APIs Integration"],
      liveLink: "https://willowy-starburst-f58ce0.netlify.app/",
      sourceLink: "#",
    },
    {
      title: "Reevoh Dashboard",
      description:
        "Admin dashboard for Reevoh e-commerce platform—manage products, orders, customers, analytics, and overall store operations efficiently.",
      image: "/images/dashboard.png",
      tech: ["Flutter", "Firebase", "APIs Integration"],
      liveLink: "https://musical-tarsier-674d43.netlify.app/",
      sourceLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 px-6 md:px-10 lg:px-20 bg-black/50 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[#B18325] font-medium tracking-widest text-sm uppercase">
            My Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Recent <span className="gold-text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#B18325] mt-4 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base md:text-lg">
            Here are some of the projects I've worked on. Each project
            represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-[#B18325]/10 hover:border-[#B18325]/50 flex flex-col h-full shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-[#B18325]/10 group-hover:bg-transparent transition duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D7BF75] transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-justify text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-3 py-1 bg-[#B18325]/10 text-[#D7BF75] rounded-full border border-[#B18325]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons using Button component if available or standard button */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-[#B18325] hover:bg-[#D7BF75] text-black font-bold rounded-lg group-hover:shadow-[0_0_15px_rgba(177,131,37,0.3)] transition-all">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Button>
                  </a>
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-[#B18325]/30 text-[#D7BF75] hover:text-black hover:bg-[#B18325] hover:border-[#B18325] bg-transparent rounded-lg transition-all duration-300"
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <Button
            variant="link"
            className="text-[#B18325] hover:text-[#D7BF75] text-lg"
          >
            View All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}
