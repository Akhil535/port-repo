import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return <div >
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        {/* <StarBackground /> */}

        {/* Navbar */}
        <Navbar />

        {/* Main Content */} 
        <main>
            <HeroSection />
            <AboutSection />
            <SkillSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        {/* Footer */}
    </div>
}