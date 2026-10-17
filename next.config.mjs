import mdx from '@next/mdx';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: { },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    // Next 14's built-in lint step does not support ESLint 9 (it fails with
    // "Invalid Options" and is skipped), so don't run it during builds.
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default withMDX(nextConfig);