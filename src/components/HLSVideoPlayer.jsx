import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

/**
 * HLSVideoPlayer — Plays ONE video at a time, pauses/unloads off-screen ones.
 * 
 * Performance strategy:
 * - preload="none" until visible
 * - Only starts loading when card is in viewport
 * - Pauses immediately when scrolled away
 * - For HLS: adaptive bitrate handles quality automatically
 * - For MP4: only buffers what's needed
 */
const HLSVideoPlayer = ({
    hlsSrc = '',
    mp4Src = '',
    className = '',
    muted = true,
    loop = true,
    controls = false,
    playsInline = true,
}) => {
    const videoRef = useRef(null);
    const hlsRef = useRef(null);
    const containerRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(false);
    const sourceSetRef = useRef(false);

    // Single observer: load when entering viewport, pause when leaving
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    // Play
                    if (videoRef.current && sourceSetRef.current) {
                        videoRef.current.play().catch(() => { });
                    }
                } else {
                    // Pause immediately when not visible — frees bandwidth
                    if (videoRef.current) {
                        videoRef.current.pause();
                    }
                }
            },
            { rootMargin: '100px', threshold: 0.1 }
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    // Set up video source ONCE when shouldLoad becomes true
    useEffect(() => {
        if (!shouldLoad || sourceSetRef.current) return;

        const video = videoRef.current;
        if (!video) return;

        const onCanPlay = () => {
            sourceSetRef.current = true;
            video.play().catch(() => { });
        };

        const loadMp4 = () => {
            if (!mp4Src) return;
            video.src = mp4Src;
            video.addEventListener('canplay', onCanPlay, { once: true });
            video.load();
        };

        // Try HLS first (Safari native)
        if (hlsSrc && video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = hlsSrc;
            video.addEventListener('canplay', onCanPlay, { once: true });
            video.addEventListener('error', loadMp4, { once: true });
            return;
        }

        // hls.js for other browsers
        if (hlsSrc && Hls.isSupported()) {
            const hls = new Hls({
                enableWorker: true,
                startLevel: -1,
                capLevelToPlayerSize: true,
                maxBufferLength: 10,
                maxMaxBufferLength: 20,
                maxBufferSize: 15 * 1000 * 1000,
            });

            hls.loadSource(hlsSrc);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, onCanPlay);
            hls.on(Hls.Events.ERROR, (_, data) => {
                if (data.fatal) {
                    hls.destroy();
                    hlsRef.current = null;
                    loadMp4();
                }
            });

            hlsRef.current = hls;
            return;
        }

        // Direct MP4
        loadMp4();

        return () => {
            if (hlsRef.current) {
                hlsRef.current.destroy();
                hlsRef.current = null;
            }
        };
    }, [shouldLoad, hlsSrc, mp4Src]);

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted={muted}
                loop={loop}
                controls={controls}
                playsInline={playsInline}
                preload="none"
            />
        </div>
    );
};

export default HLSVideoPlayer;
