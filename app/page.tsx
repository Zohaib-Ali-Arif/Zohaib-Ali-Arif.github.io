import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import ScrollToTop from "@/components/scroll-to-top";
import Skills from "@/components/skills";
import PortfolioMotion from "@/components/portfolio-motion";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <PortfolioMotion />
      <main id="main-content">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
