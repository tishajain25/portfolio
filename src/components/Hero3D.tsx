import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { ArrowDown, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

/**
 * Floating Particles Background
 */
const Particles = () => {
    const particlesRef = useRef<THREE.Points>(null);

    const { positions, colors } = useMemo(() => {
        const count = 300;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 30;
            positions[i3 + 1] = (Math.random() - 0.5) * 20;
            positions[i3 + 2] = (Math.random() - 0.5) * 15;

            colors[i3] = 0.2 + Math.random() * 0.3;
            colors[i3 + 1] = 0.7 + Math.random() * 0.3;
            colors[i3 + 2] = 0.7 + Math.random() * 0.3;
        }

        return { positions, colors };
    }, []);

    useFrame((state) => {
        if (!particlesRef.current) return;
        particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
        particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
                <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.08} vertexColors transparent opacity={0.8} sizeAttenuation />
        </points>
    );
};

/**
 * Rotating 3D Geometric Shapes
 */
const FloatingShapes = () => {
    const group1Ref = useRef<THREE.Group>(null);
    const group2Ref = useRef<THREE.Group>(null);

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        if (group1Ref.current) {
            group1Ref.current.rotation.x = time * 0.1;
            group1Ref.current.rotation.y = time * 0.15;
        }
        if (group2Ref.current) {
            group2Ref.current.rotation.x = -time * 0.08;
            group2Ref.current.rotation.z = time * 0.1;
        }
    });

    return (
        <>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <group ref={group1Ref} position={[-6, 2, -3]}>
                    <mesh>
                        <icosahedronGeometry args={[1, 0]} />
                        <meshStandardMaterial color="#2dd4bf" wireframe transparent opacity={0.6} />
                    </mesh>
                </group>
            </Float>

            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
                <group ref={group2Ref} position={[6, -1, -2]}>
                    <mesh>
                        <octahedronGeometry args={[0.8, 0]} />
                        <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.5} />
                    </mesh>
                </group>
            </Float>

            <Float speed={1} rotationIntensity={0.2} floatIntensity={0.6}>
                <mesh position={[5, 3, -4]}>
                    <torusGeometry args={[0.6, 0.2, 16, 32]} />
                    <meshStandardMaterial color="#f472b6" wireframe transparent opacity={0.4} />
                </mesh>
            </Float>
        </>
    );
};

/**
 * 3D Hero Scene
 */
const HeroScene = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#2dd4bf" />

            <Particles />
            <FloatingShapes />
        </>
    );
};

/**
 * Hero3D - Polished with enhanced lighting and animations
 */
const Hero3D = () => {
    const scrollTo = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const titles = [
        'Full Stack AI Developer',
        'AWS Certified Architect',
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
            {/* 3D Canvas Background */}
            <div className="absolute inset-0 z-0">
                <Canvas
                    camera={{ position: [0, 0, 10], fov: 60 }}
                    dpr={[1, 1.5]}
                    gl={{ antialias: true, alpha: true }}
                >
                    <Suspense fallback={null}>
                        <HeroScene />
                    </Suspense>
                </Canvas>
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-transparent to-gray-950 z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-transparent to-gray-950/80 z-[1]" />

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Text Content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className="text-6xl sm:text-8xl font-black text-white mb-6 tracking-tighter">
                                Tisha <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400">Jain</span>
                            </h1>

                            {/* Titles */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                                {titles.map((title, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-semibold tracking-wide">
                                        {title}
                                    </span>
                                ))}
                            </div>

                            {/* Tagline */}
                            <p className="text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-medium">
                                Computer Science Engineer specializing in full-stack development, AI integration,
                                and cloud architecture. Building intelligent systems that matter.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-gray-950 font-black rounded-2xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] uppercase tracking-wider text-sm"
                                >
                                    <FileText className="w-5 h-5" />
                                    View Resume
                                </a>
                                <button
                                    onClick={() => scrollTo('#projects')}
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-2xl transition-all hover:bg-white/10 hover:border-white/20 uppercase tracking-wider text-sm"
                                >
                                    See My Work
                                </button>
                            </div>

                            {/* Social Links */}
                            <div className="flex justify-center lg:justify-start gap-4">
                                {[
                                    { icon: Github, href: 'https://github.com/tishajain25', label: 'GitHub' },
                                    { icon: Linkedin, href: 'https://linkedin.com/in/tisha-jain25', label: 'LinkedIn' },
                                    { icon: Mail, href: 'mailto:jaintisha2530@gmail.com', label: 'Email' },
                                ].map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/5 border border-white/10 rounded-2xl text-gray-400 hover:text-teal-400 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300"
                                        aria-label={label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right - Profile Image */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="relative group">
                            {/* Softer, "Shadowed" Large Blurred Glow - Matches Contact Style */}
                            <div className="absolute -inset-20 bg-teal-500/10 blur-[100px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
                            <div className="absolute -inset-10 bg-emerald-500/10 blur-[60px] rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-1000" />

                            {/* Profile Image container */}
                            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl backdrop-blur-sm">
                                <img
                                    src="https://i.postimg.cc/g0gT8kmJ/latest-profile.jpg"
                                    alt="Tisha Jain"
                                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                                />
                                {/* Clean Soft overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Accent decorative element */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/5 rounded-full blur-[80px]" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                onClick={() => scrollTo('#about')}
                className="absolute bottom-12 inset-x-0 mx-auto w-fit z-10 flex flex-col items-center gap-3 group"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold group-hover:text-teal-400 transition-colors">Scroll Down</span>
                <ArrowDown className="w-5 h-5 text-teal-500 group-hover:scale-125 transition-transform" />
            </motion.button>
        </section>
    );
};

export default Hero3D;
