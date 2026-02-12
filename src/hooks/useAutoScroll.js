import { useEffect, useRef } from 'react';

const useAutoScroll = ({ containerRef, interval = 2500, scrollAmount = 300, pauseOnHover = true }) => {
    const intervalRef = useRef(null);
    const isPaused = useRef(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scroll = () => {
            if (isPaused.current) return;

            // Check if we've reached the end
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                // Smooth scroll back to start
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Scroll forward
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        };

        const startAutoScroll = () => {
            stopAutoScroll(); // Clear existing
            intervalRef.current = setInterval(scroll, interval);
        };

        const stopAutoScroll = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };

        const onMouseEnter = () => {
            if (pauseOnHover) isPaused.current = true;
        };

        const onMouseLeave = () => {
            if (pauseOnHover) isPaused.current = false;
        };

        const onTouchStart = () => {
            isPaused.current = true;
        };

        const onTouchEnd = () => {
            // Delay resume to allow fling to finish
            setTimeout(() => {
                isPaused.current = false;
            }, 2000);
        };

        container.addEventListener('mouseenter', onMouseEnter);
        container.addEventListener('mouseleave', onMouseLeave);
        container.addEventListener('touchstart', onTouchStart, { passive: true });
        container.addEventListener('touchend', onTouchEnd, { passive: true });

        startAutoScroll();

        return () => {
            stopAutoScroll();
            if (container) {
                container.removeEventListener('mouseenter', onMouseEnter);
                container.removeEventListener('mouseleave', onMouseLeave);
                container.removeEventListener('touchstart', onTouchStart);
                container.removeEventListener('touchend', onTouchEnd);
            }
        };
    }, [containerRef, interval, scrollAmount, pauseOnHover]);
};

export default useAutoScroll;
