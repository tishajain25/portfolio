import Header from '@/components/Header';
import Hero3D from '@/components/Hero3D';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Index - Main Portfolio Page
 */
const Index = () => {
    return (
        <div className="min-h-screen bg-gray-950 selection:bg-teal-500/30 font-inter">
            <Header />
            <div className="relative">
                <Hero3D />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default Index;
