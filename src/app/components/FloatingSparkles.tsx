import { motion } from 'motion/react';
import { Sparkles, Star } from 'lucide-react';

export function FloatingSparkles() {
  const sparkles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3,
    isStarType: Math.random() > 0.5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: sparkle.left,
            top: sparkle.top,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {sparkle.isStarType ? (
            <div className="w-8 h-8 bg-yellow-300 rounded-full border-[3px] border-black flex items-center justify-center shadow-[0_2px_0_rgba(0,0,0,0.5)]">
              <Star className="fill-yellow-400 stroke-black stroke-[2]" size={14} />
            </div>
          ) : (
            <div className="w-7 h-7 bg-pink-300 rounded-full border-[3px] border-black flex items-center justify-center shadow-[0_2px_0_rgba(0,0,0,0.5)]">
              <Sparkles className="fill-pink-400 stroke-black stroke-[2]" size={12} />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
