import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Flower2, Sparkles, Star } from 'lucide-react';
import bearImage from 'figma:asset/1c6b153d312fca6a076a2af446e3bfa1c3935b6c.png';

export function SuccessScreen() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Stop confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', damping: 15, stiffness: 200 }}
      className="relative w-full max-w-3xl px-4"
    >
      {/* Cartoon confetti hearts */}
      {showConfetti && <CartoonConfetti />}
      
      {/* Love letter card with thick outline */}
      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="bg-gradient-to-b from-pink-50 to-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 shadow-[0_8px_0_rgba(0,0,0,0.1)] md:shadow-[0_12px_0_rgba(0,0,0,0.1)] border-[4px] md:border-[6px] border-black relative overflow-hidden"
      >
        {/* Decorative stars in corners */}
        <motion.div
          className="absolute top-3 md:top-6 left-3 md:left-6"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-300 rounded-full border-[3px] md:border-[4px] border-black flex items-center justify-center shadow-[0_2px_0_rgba(0,0,0,1)] md:shadow-[0_3px_0_rgba(0,0,0,1)]">
            <Star className="fill-yellow-400 stroke-black stroke-[2]" size={16} />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute top-3 md:top-6 right-3 md:right-6"
          animate={{ rotate: [0, -360], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, delay: 1, repeat: Infinity }}
        >
          <div className="w-8 h-8 md:w-12 md:h-12 bg-pink-300 rounded-full border-[3px] md:border-[4px] border-black flex items-center justify-center shadow-[0_2px_0_rgba(0,0,0,1)] md:shadow-[0_3px_0_rgba(0,0,0,1)]">
            <Heart className="fill-pink-400 stroke-black stroke-[2]" size={16} />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-3 md:bottom-6 left-3 md:left-6"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
        >
          <div className="w-8 h-8 md:w-12 md:h-12 bg-purple-300 rounded-full border-[3px] md:border-[4px] border-black flex items-center justify-center shadow-[0_2px_0_rgba(0,0,0,1)] md:shadow-[0_3px_0_rgba(0,0,0,1)]">
            <Sparkles className="fill-purple-400 stroke-black stroke-[2]" size={16} />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-3 md:bottom-6 right-3 md:right-6"
          animate={{ rotate: [0, -360], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
        >
          <div className="w-8 h-8 md:w-12 md:h-12 bg-green-300 rounded-full border-[3px] md:border-[4px] border-black flex items-center justify-center shadow-[0_2px_0_rgba(0,0,0,1)] md:shadow-[0_3px_0_rgba(0,0,0,1)]">
            <Flower2 className="fill-green-400 stroke-black stroke-[2]" size={16} />
          </div>
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-4 md:space-y-8">
          {/* Celebration header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-black text-pink-500 drop-shadow-[3px_3px_0_rgba(0,0,0,0.2)] md:drop-shadow-[5px_5px_0_rgba(0,0,0,0.2)] mb-3 md:mb-4"
              style={{ 
                fontFamily: 'Comic Sans MS, "Marker Felt", fantasy, cursive',
                WebkitTextStroke: '1px rgba(0,0,0,0.1)'
              }}
            >
              Yayyy! 🎉💖✨
            </h1>
          </motion.div>
          
          {/* Happy bears */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
            className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto"
          >
            <motion.div
              animate={{ 
                rotate: [-3, 3, -3],
                y: [0, -10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img
                src={bearImage}
                alt="Happy bears celebrating"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
          
          {/* Letter content in speech bubbles */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="bg-white border-[4px] md:border-[5px] border-black rounded-2xl md:rounded-3xl px-4 py-3 md:px-8 md:py-6 shadow-[0_4px_0_rgba(0,0,0,1)] md:shadow-[0_6px_0_rgba(0,0,0,1)] inline-block">
              <p 
                className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-600 leading-relaxed"
                style={{ fontFamily: 'Comic Sans MS, "Marker Felt", fantasy, cursive' }}
              >
                You just made my heart<br />the happiest ever! 🐻💖
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="space-y-3 md:space-y-4 px-2"
          >
            <div className="bg-pink-100 border-[4px] md:border-[5px] border-black rounded-2xl md:rounded-3xl px-4 py-3 md:px-8 md:py-6 shadow-[0_4px_0_rgba(0,0,0,1)] md:shadow-[0_6px_0_rgba(0,0,0,1)] inline-block max-w-2xl">
              <p 
                className="text-base md:text-xl lg:text-2xl font-bold text-pink-700 leading-relaxed"
                style={{ fontFamily: 'Comic Sans MS, "Marker Felt", fantasy, cursive' }}
              >
                I promise to make you smile, laugh,<br />
                and feel loved every single day.
                <br /><br />
                Happy Valentine's Day,<br />
                my favorite person! 🌷✨
              </p>
            </div>
          </motion.div>
          
          {/* Love signature */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, type: 'spring', stiffness: 200 }}
            className="pt-2 md:pt-4"
          >
            <div className="inline-block bg-gradient-to-b from-red-400 to-red-500 border-[4px] md:border-[5px] border-black rounded-full px-6 py-3 md:px-8 md:py-4 shadow-[0_4px_0_rgba(0,0,0,1)] md:shadow-[0_6px_0_rgba(0,0,0,1)]">
              <p 
                className="text-2xl md:text-3xl lg:text-4xl text-white font-black"
                style={{ 
                  fontFamily: 'Comic Sans MS, "Marker Felt", fantasy, cursive',
                  WebkitTextStroke: '1px rgba(0,0,0,0.2)'
                }}
              >
                Love you always 💌
              </p>
            </div>
          </motion.div>
          
          {/* Final message */}
          <motion.div
            initial={{ scale: 0, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.6, type: 'spring', stiffness: 200 }}
            className="pt-3 md:pt-6 px-2"
          >
            <div className="bg-yellow-200 border-[4px] md:border-[5px] border-black rounded-xl md:rounded-2xl px-5 py-3 md:px-8 md:py-5 inline-block shadow-[0_4px_0_rgba(0,0,0,1)] md:shadow-[0_6px_0_rgba(0,0,0,1)] transform rotate-1">
              <p 
                className="text-lg md:text-2xl lg:text-3xl text-purple-700 font-black leading-tight"
                style={{ fontFamily: 'Comic Sans MS, "Marker Felt", fantasy, cursive' }}
              >
                You are officially my<br />
                Valentine forever! 💞🐻
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Cartoon stickers with outlines - hidden on small screens */}
      <motion.div
        className="hidden md:block absolute -top-12 md:-top-20 -left-12 md:-left-20"
        animate={{ 
          rotate: [0, 20, 0, -20, 0],
          y: [0, -12, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full border-[5px] md:border-[6px] border-black flex items-center justify-center text-5xl md:text-7xl shadow-[0_6px_0_rgba(0,0,0,1)] md:shadow-[0_8px_0_rgba(0,0,0,1)]">
          🎀
        </div>
      </motion.div>
      
      <motion.div
        className="hidden md:block absolute -top-12 md:-top-20 -right-12 md:-right-20"
        animate={{ 
          rotate: [0, -20, 0, 20, 0],
          y: [0, -12, 0]
        }}
        transition={{ duration: 3, delay: 1, repeat: Infinity }}
      >
        <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full border-[5px] md:border-[6px] border-black flex items-center justify-center text-6xl md:text-8xl shadow-[0_6px_0_rgba(0,0,0,1)] md:shadow-[0_8px_0_rgba(0,0,0,1)]">
          🌸
        </div>
      </motion.div>
      
      <motion.div
        className="hidden md:block absolute -bottom-12 md:-bottom-20 -left-12 md:-left-20"
        animate={{ 
          rotate: [0, 25, 0, -25, 0]
        }}
        transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full border-[5px] md:border-[6px] border-black flex items-center justify-center text-5xl md:text-7xl shadow-[0_6px_0_rgba(0,0,0,1)] md:shadow-[0_8px_0_rgba(0,0,0,1)]">
          💐
        </div>
      </motion.div>
      
      <motion.div
        className="hidden md:block absolute -bottom-12 md:-bottom-20 -right-12 md:-right-20"
        animate={{ 
          rotate: [0, -25, 0, 25, 0]
        }}
        transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
      >
        <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full border-[5px] md:border-[6px] border-black flex items-center justify-center text-6xl md:text-8xl shadow-[0_6px_0_rgba(0,0,0,1)] md:shadow-[0_8px_0_rgba(0,0,0,1)]">
          🌹
        </div>
      </motion.div>
    </motion.div>
  );
}

function CartoonConfetti() {
  const hearts = Array.from({ length: 40 }, (_, i) => ({
    id: `heart-${i}`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 2,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {hearts.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={{
            left: item.left,
            top: '-100px',
          }}
          initial={{ y: -100, opacity: 1, rotate: 0 }}
          animate={{
            y: window.innerHeight + 100,
            opacity: [1, 1, 0],
            rotate: item.rotation,
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            ease: 'linear',
          }}
        >
          <div className="w-12 h-12 bg-pink-400 rounded-full border-[4px] border-black flex items-center justify-center shadow-[0_4px_0_rgba(0,0,0,1)]">
            <Heart className="fill-pink-500 stroke-black stroke-[2]" size={20} />
          </div>
        </motion.div>
      ))}
      
      {/* Star confetti */}
      {Array.from({ length: 30 }, (_, i) => {
        const star = {
          id: `star-${i}`,
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 0.5,
          duration: 2.5 + Math.random() * 2,
          rotation: Math.random() * 720,
        };
        
        return (
          <motion.div
            key={star.id}
            className="absolute"
            style={{
              left: star.left,
              top: '-100px',
            }}
            initial={{ y: -100, opacity: 1, rotate: 0 }}
            animate={{
              y: window.innerHeight + 100,
              opacity: [1, 1, 0],
              rotate: star.rotation,
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              ease: 'linear',
            }}
          >
            <div className="w-10 h-10 bg-yellow-300 rounded-full border-[4px] border-black flex items-center justify-center shadow-[0_4px_0_rgba(0,0,0,1)]">
              <Star className="fill-yellow-400 stroke-black stroke-[2]" size={16} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}