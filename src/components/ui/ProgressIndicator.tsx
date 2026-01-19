import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { Html } from '@react-three/drei';

/**
 * ProgressIndicator - Shows journey progress
 */
const ProgressIndicatorInner = () => {
    const scroll = useScroll();
    const [progress, setProgress] = useState(0);

    useFrame(() => {
        setProgress(Math.round(scroll.offset * 100));
    });

    const sections = [
        { name: 'Origin', position: 0 },
        { name: 'About', position: 20 },
        { name: 'Skills', position: 40 },
        { name: 'Experience', position: 60 },
        { name: 'Projects', position: 80 },
        { name: 'Contact', position: 100 },
    ];

    return (
        <Html fullscreen style={{ pointerEvents: 'none' }}>
            <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1">
                {/* Progress bar */}
                <div className="w-1 h-48 bg-white/10 rounded-full overflow-hidden relative">
                    <div
                        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-teal-500 to-teal-300 rounded-full transition-all duration-300"
                        style={{ height: `${progress}%` }}
                    />
                </div>

                {/* Percentage */}
                <span className="text-[10px] font-black text-white/40 mt-2">
                    {progress}%
                </span>

                {/* Section markers */}
                <div className="mt-4 space-y-3">
                    {sections.map((section) => (
                        <div
                            key={section.name}
                            className={`text-[8px] font-bold uppercase tracking-widest transition-all ${progress >= section.position ? 'text-teal-400' : 'text-white/20'
                                }`}
                        >
                            {section.name}
                        </div>
                    ))}
                </div>
            </div>
        </Html>
    );
};

// Wrapper that can be used outside of Canvas
const ProgressIndicator = () => {
    return null; // The actual implementation is inside Canvas via Html
};

export default ProgressIndicator;
export { ProgressIndicatorInner };
