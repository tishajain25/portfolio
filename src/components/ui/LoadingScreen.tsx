/**
 * LoadingScreen - Initial Loading Animation
 */
const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
            {/* Animated loader */}
            <div className="relative w-24 h-24 mb-8">
                <div className="absolute inset-0 border-4 border-teal-500/20 rounded-full" />
                <div className="absolute inset-0 border-4 border-transparent border-t-teal-500 rounded-full animate-spin" />
                <div className="absolute inset-2 border-4 border-transparent border-t-teal-300 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
            </div>

            {/* Loading text */}
            <p className="text-white text-xs font-bold uppercase tracking-[0.5em] animate-pulse">
                Loading Universe
            </p>
        </div>
    );
};

export default LoadingScreen;
