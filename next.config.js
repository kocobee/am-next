/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    '@agentmark/cli',
    '@agentmark/ai-sdk-v4-adapter',
    '@agentmark/prompt-core',
    '@agentmark/sdk',
    '@agentmark/shared-utils',
  ],
};

module.exports = nextConfig;
