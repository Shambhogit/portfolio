import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LeetCodeStats from '@/components/LeetcodeStates';

const Index = () => {
  return (
    <div className="min-h-screen bg-background select-none">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <LeetCodeStats/> */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;