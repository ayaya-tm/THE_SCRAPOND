import { useState } from "react";
import HollywoodIntro from "../components/HollywoodIntro";

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return (
      <div className="relative w-full h-screen bg-black overflow-hidden">
        {/* 🌟 ハリウッド風イントロ */}
        <HollywoodIntro onFinish={handleIntroFinish} /> 
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-red-900 via-red-700 to-red-800 flex items-center justify-center p-6 overflow-hidden">

      {/* 🎆 背景アニメーション */}
      <div className="absolute w-[700px] h-[700px] bg-yellow-400 blur-2xl rounded-full animate-pulse-slower left-[-150px] top-[-100px]"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-yellow-500 opacity-10 blur-3xl rounded-full animate-pulse-slow left-[-200px] top-[-200px]"></div>
        <div className="absolute w-[600px] h-[600px] bg-red-400 opacity-10 blur-2xl rounded-full animate-pulse-slow right-[-150px] bottom-[-150px]"></div>
      </div>

      {/* 🏆 メインカード */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md border border-yellow-500 text-yellow-300 p-10 md:p-12 rounded-2xl shadow-2xl max-w-3xl w-full space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wider uppercase">
          THE SCRAPOND
        </h1>

        <div className="space-y-4 text-stone-100 text-lg leading-relaxed">
          <p>
            格式高い漫才の祭典「THE SECOND」に関するツイートを収集・分析。
          </p>
          <p>
            Gathered and analyzed tweets surrounding “THE SECOND,” an elite celebration of refined manzai comedy.
          </p>
          <p>
            收集并分析了关于“THE SECOND”这一高雅漫才喜剧盛典的推文。
          </p>
          <p>
            "THE SECOND" जैसे परिष्कृत मंचीय कॉमेडी महोत्सव से जुड़ी ट्वीट्स को एकत्रित और विश्लेषण किया।
          </p>
        </div>

        <div className="pt-4">
          <a
            href="#/ranking"
            className="inline-block bg-yellow-400 text-red-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-yellow-300 transition-transform duration-200"
          >
            Show the Ranking →
          </a>
          <a
            href="#/orverview"
            className="inline-block bg-yellow-400 text-red-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-yellow-300 transition-transform duration-200"
          >
            what is THE SECOND →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
