import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const LazyVideo = forwardRef(({ src, className, autoPlay = true, loop = true, muted = true, playsInline = true, ...props }, ref) => {
    const [inView, setInView] = useState(false);
    const containerRef = useRef(null);
    const videoRef = useRef(null);

    useImperativeHandle(ref, () => videoRef.current);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '200px',
                threshold: 0.01,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className={`${className} bg-black/5`}>
            {inView ? (
                <video
                    ref={videoRef}
                    src={src}
                    className="w-full h-full object-cover"
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    playsInline={playsInline}
                    {...props}
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-[#C5A059]/20 border-t-[#C5A059] rounded-full animate-spin" />
                </div>
            )}
        </div>
    );
});

export default LazyVideo;
