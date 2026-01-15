'use client';
import Banner from "@/components/Banner";
import Copyright from "@/components/Copyright";
import Navbar from "@/components/Navbar";
import TechSlider from "@/components/TechSlider";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <main className="relative px-6 md:px-10 lg:px-20 w-full">
        <Navbar />
      </main>
      <Banner />
      <TechSlider />
      <AboutMe />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <Copyright />
    </>
  );
}
