import { GithubLogin } from '@/features/github-login';

export function OnboardingPage() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-950 overflow-hidden">
      <div className="absolute top-[8%] left-[15%] w-[400px] h-[250px] bg-blue-800 rounded-[60%] blur-[190px] opacity-14" />
      <div className="absolute top-[40%] right-[5%] w-[450px] h-[300px] bg-purple-800 rounded-[50%] blur-[210px] opacity-18" />
      <div className="absolute bottom-[30%] left-[5%] w-[420px] h-[320px] bg-indigo-800 rounded-[45%] blur-[200px] opacity-15" />
      <div className="absolute bottom-[15%] right-[25%] w-[380px] h-[230px] bg-teal-800 rounded-[55%] blur-[220px] opacity-12" />
      <div className="absolute top-[55%] left-[40%] w-[500px] h-[300px] bg-gray-800 rounded-[50%] blur-[240px] opacity-10" />

      <div className="flex flex-col items-center justify-center gap-12 z-10">
        {/** TODO: 로고 이미지 추가 */}
        <h1 className="text-6xl font-bold text-white animate-bounce">it-diots</h1>

        <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 font-bold text-7xl">
          Let's jump back in!
        </p>

        <p className="text-white text-center text-2xl leading-[40px] mb-8">
          it-diots의 신비로운 세계로 초대합니다!
          <br />
          개발자들의 멋진 컨텐츠가 당신을 기다리고 있어요.
          <br />
          지금 바로 로그인하고 it-diots에 참여하세요! 🎉✨
        </p>

        <GithubLogin />
      </div>
    </div>
  );
}
