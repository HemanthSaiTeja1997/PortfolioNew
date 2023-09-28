import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";


export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
    <HeroSection/>
    <AboutSection/>
    </main>
  )
}
