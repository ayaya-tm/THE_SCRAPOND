import { useEffect } from "react";
import { motion } from "framer-motion";
import FireworksCanvas from "./FireworksCanvas";

export default function HollywoodIntro({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 6000);
    return () => clearTimeout(timer); // クリーンアップ
  }, [onFinish]);

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      <FireworksCanvas />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent z-10" />

      <motion.h1
        className="z-20 relative text-6xl font-bold text-center mt-48 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        #THESECOND RANKING
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-300 mt-6 z-20 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        ショータイムの始まりだ！
      </motion.p>
    </div>
  );
}
