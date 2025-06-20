import React, { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  alphaDir: number; // alphaの増減方向
};

export default function FireworksCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Particle[] = [];

  const PARTICLE_COUNT = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // キャンバスサイズ調整
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // パーティクル初期化
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        alpha: Math.random(),
        alphaDir: Math.random() > 0.5 ? 0.01 : -0.01,
      });
    }

    let frameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 背景を薄く黒で塗って残像を残す感じに
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // パーティクル描画
      particles.forEach(p => {
        // alphaの増減
        p.alpha += p.alphaDir;
        if (p.alpha <= 0) {
          p.alpha = 0;
          p.alphaDir = 0.01;
        } else if (p.alpha >= 1) {
          p.alpha = 1;
          p.alphaDir = -0.01;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.shadowColor = "white";
        ctx.shadowBlur = 10;
        ctx.fill();
      });

      // たまに大きな花火スポットを追加（1%の確率で出現）
      if (Math.random() < 0.01) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = 20 + Math.random() * 30;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, "rgba(255, 200, 150, 0.8)");
        gradient.addColorStop(1, "rgba(255, 200, 150, 0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      frameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
