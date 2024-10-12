"use client"; // Mark this component as a Client Component
import { useEffect, useState } from 'react';
import { Flex, SmartImage } from  '@/once-ui/components';

interface Image 
    {
        src: string;
        alt: string;
        width: number;
        height: number;
    }

const Media = ({ image }: { image: Image }) => {
    const [isLoading, setIsLoading] = useState(true); // Initialize loading state

    useEffect(() => {
        const loadingDelay = 300; // Set your desired delay in milliseconds

        const timer = setTimeout(() => {
            setIsLoading(false); // Set isLoading to false after the delay
        }, loadingDelay);

        return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []); // Run once on mount

    return (
        <>
            <SmartImage 
            enlarge
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                isLoading={isLoading} // Set loading state
                                src={image.src}
                            />
        </>
    );
};

export default Media;
