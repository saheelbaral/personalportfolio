import React, { useRef, useEffect, useCallback } from 'react';
import { useTheme } from '../../context/ThemeContext';

const PARTICLE_COUNT = 40;

const Fireflies = () => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const animationRef = useRef(null);
    const { isDarkMode } = useTheme();
    const isDarkModeRef = useRef(isDarkMode);

    // Keep ref in sync with prop
    useEffect(() => {
        isDarkModeRef.current = isDarkMode;
    }, [isDarkMode]);

    const createParticle = useCallback((width, height) => {
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            size: 0.5 + Math.random() * 1.5, // Reduced: 0.5px to 2px
            speedX: (Math.random() - 0.5) * 0.15, // Reduced: slower drift
            speedY: (Math.random() - 0.5) * 0.15,
            opacity: 0.15 + Math.random() * 0.45, // Reduced: more subtle
            pulseSpeed: 0.003 + Math.random() * 0.01, // Reduced: slower twinkle
            pulseOffset: Math.random() * Math.PI * 2,
            glowSize: 2 + Math.random() * 4, // Reduced: smaller glow
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let dpr = window.devicePixelRatio || 1;

        const resize = () => {
            const parent = canvas.parentElement;
            width = parent.offsetWidth;
            height = parent.offsetHeight;
            dpr = window.devicePixelRatio || 1;

            // Set display size
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';

            // Set actual size in memory (scaled for DPI)
            canvas.width = width * dpr;
            canvas.height = height * dpr;

            // Scale all drawing operations by dpr
            ctx.scale(dpr, dpr);

            // Reinitialize particles if needed
            if (particlesRef.current.length === 0) {
                particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
                    createParticle(width, height)
                );
            }
        };

        resize();
        window.addEventListener('resize', resize);

        const animate = (time) => {
            ctx.clearRect(0, 0, width, height);

            const dark = isDarkModeRef.current;

            particlesRef.current.forEach((p) => {
                // Update position
                p.x += p.speedX;
                p.y += p.speedY;

                // Wrap around edges
                if (p.x < -10) p.x = width + 10;
                if (p.x > width + 10) p.x = -10;
                if (p.y < -10) p.y = height + 10;
                if (p.y > height + 10) p.y = -10;

                // Pulse / twinkle - dampened amplitude
                const pulse = Math.sin(time * p.pulseSpeed + p.pulseOffset);
                const currentOpacity = p.opacity * (0.7 + 0.3 * pulse);

                // Color based on theme
                if (dark) {
                    // Soft indigo/lavender fireflies — matches site accent #a5b4fc
                    const r = 165;
                    const g = 180;
                    const b = 252;

                    // Glow
                    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.glowSize);
                    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${currentOpacity})`);
                    gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${currentOpacity * 0.3})`);
                    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.glowSize, 0, Math.PI * 2);
                    ctx.fillStyle = gradient;
                    ctx.fill();

                    // Core dot
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentOpacity})`;
                    ctx.fill();
                } else {
                    // Light mode — muted indigo-gray particles
                    const r = 99;
                    const g = 102;
                    const b = 241;

                    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.glowSize * 0.6);
                    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${currentOpacity * 0.25})`);
                    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.glowSize * 0.6, 0, Math.PI * 2);
                    ctx.fillStyle = gradient;
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size * 0.7, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentOpacity * 0.25})`;
                    ctx.fill();
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [createParticle]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
            }}
        />
    );
};

export default Fireflies;
