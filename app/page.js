'use client';
import Banner from "@/components/Banner";
import Copyright from "@/components/Copyright";
import Navbar from "@/components/Navbar";
import TechSlider from "@/components/TechSlider";

export default function Home() {
  return (
    <>
      <main className="relative px-6 md:px-10 lg:px-20 w-full">
        <Navbar />
        <Banner />
      </main>
      <TechSlider />
      <Copyright />
    </>
  );
}
