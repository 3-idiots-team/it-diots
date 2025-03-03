/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@it-diots/shared'],

  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'], // FIXME: 샘플 이미지 처리를 위한 도메인 추가 (제거 예정)
  },
};

export default nextConfig;
