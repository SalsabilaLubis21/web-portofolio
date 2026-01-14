import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import CertificationsSection from "./components/homepage/certification/index.jsx";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import ScrollAnimationWrapper from "./components/helper/scroll-animation-wrapper";

export default async function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <ScrollAnimationWrapper>
        <AboutSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Skills />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Projects />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Education />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <CertificationsSection />
      </ScrollAnimationWrapper>
      <ContactSection />
    </div>
  );
}
