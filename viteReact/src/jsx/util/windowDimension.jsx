import { useState, useEffect } from 'react';

export function useWindowDimension() {

    const hasWindow = typeof window !== 'undefined';

    function getWindowDimension() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    const [windowDimension, setWindowDimension] = useState(getWindowDimension());

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimension(getWindowDimension());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    return windowDimension;
}