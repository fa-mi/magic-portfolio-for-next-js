'use client';

import React, { CSSProperties, useState, useRef, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import Image, { ImageProps } from 'next/image';
import classNames from 'classnames';

import { Flex, Skeleton } from '@/once-ui/components';

const ENLARGE_EVENT = 'smartimage:enlarge';

export type SmartImageProps = ImageProps & {
    className?: string;
    style?: React.CSSProperties;
    aspectRatio?: string;
    height?: number;
    radius?: string;
    alt?: string;
    isLoading?: boolean;
    objectFit?: CSSProperties['objectFit'];
    enlarge?: boolean;
    src: string;
};

const SmartImage: React.FC<SmartImageProps> = ({
    className,
    style,
    aspectRatio,
    height,
    radius,
    alt = '',
    isLoading = false,
    objectFit = 'cover',
    enlarge = false,
    src,
    ...props
}) => {
    const [isEnlarged, setIsEnlarged] = useState(false);
    const [mounted, setMounted] = useState(false);
    const instanceId = useId();
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const openEnlarged = () => {
        // Notify other instances to close so only one preview is open at a time
        window.dispatchEvent(
            new CustomEvent(ENLARGE_EVENT, { detail: instanceId })
        );
        setIsEnlarged(true);
    };

    const closeEnlarged = () => setIsEnlarged(false);

    const handleClick = () => {
        if (!enlarge) return;
        if (isEnlarged) {
            closeEnlarged();
        } else {
            openEnlarged();
        }
    };

    // Close when another image opens, and on Escape
    useEffect(() => {
        const onOtherOpen = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            if (detail !== instanceId) setIsEnlarged(false);
        };
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsEnlarged(false);
        };
        window.addEventListener(ENLARGE_EVENT, onOtherOpen);
        window.addEventListener('keydown', onKey);
        return () => {
            window.removeEventListener(ENLARGE_EVENT, onOtherOpen);
            window.removeEventListener('keydown', onKey);
        };
    }, [instanceId]);

    // Lock body scroll while enlarged
    useEffect(() => {
        if (isEnlarged) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isEnlarged]);

    const isVideo = src.endsWith('.mp4');

    return (
        <>
            <Flex
                ref={imageRef}
                fillWidth
                position="relative"
                background="neutral-medium"
                style={{
                    outline: 'none',
                    overflow: 'hidden',
                    height: aspectRatio
                        ? undefined
                        : height
                        ? `${height}rem`
                        : '100%',
                    aspectRatio,
                    cursor: enlarge ? 'zoom-in' : 'default',
                    borderRadius: radius ? `var(--radius-${radius})` : undefined,
                    ...style,
                }}
                className={classNames(className)}
                onClick={handleClick}>
                {isLoading && (
                    <Skeleton shape="block" />
                )}
                {!isLoading && isVideo && (
                    <video
                        src={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit,
                        }}
                    />
                )}
                {!isLoading && !isVideo && (
                    <Image
                        {...props}
                        src={src}
                        alt={alt}
                        fill
                        style={{ objectFit }}
                    />
                )}
            </Flex>

            {mounted && isEnlarged && enlarge && createPortal(
                <div
                    onClick={closeEnlarged}
                    role="dialog"
                    aria-modal="true"
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '4vmin',
                        background: 'rgba(6, 6, 12, 0.88)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        cursor: 'zoom-out',
                        animation: 'smartimage-fade 0.2s ease-out',
                    }}>
                    <button
                        onClick={closeEnlarged}
                        aria-label="Close preview"
                        style={{
                            position: 'fixed',
                            top: '20px',
                            right: '24px',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.2)',
                            background: 'rgba(255,255,255,0.08)',
                            color: '#fff',
                            fontSize: '20px',
                            lineHeight: 1,
                            cursor: 'pointer',
                        }}>
                        ×
                    </button>
                    {isVideo ? (
                        <video
                            src={src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                maxWidth: '92vw',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                                borderRadius: '12px',
                                boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
                            }}
                        />
                    ) : (
                        <img
                            src={src}
                            alt={alt}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                maxWidth: '92vw',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                                borderRadius: '12px',
                                boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
                            }}
                        />
                    )}
                    <style>{`
                        @keyframes smartimage-fade {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                    `}</style>
                </div>,
                document.body
            )}
        </>
    );
};

SmartImage.displayName = 'SmartImage';

export { SmartImage };
