import React from "react";

const BackgroundCanvas = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Floating Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-[100px] animate-float animation-delay-2000"></div>
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-indigo-100/40 rounded-full blur-[80px] animate-float animation-delay-4000"></div>

      {/* Grid Pattern with Movement */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] animate-pan"></div>

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>

      <style>{`
        .animate-float { animation: float 15s infinite alternate ease-in-out; }
        .animate-pan { animation: pan 60s linear infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes float {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes pan {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-40px, -40px); }
        }
      `}</style>
    </div>
  );
};

export default BackgroundCanvas;
