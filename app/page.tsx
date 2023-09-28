import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import ProjectSection from "./component/ProjectSection";


export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
    <HeroSection/>
    <AboutSection/>
    <ProjectSection/>
    </main>
  )
}
