import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function FloatingHearts() {
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 12 + Math.random() * 8,
    size: 24 + Math.random() * 16,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: heart.left,
            bottom: '-80px',
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.random() * 80 - 40],
            rotate: [0, Math.random() * 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Cartoon heart with outline */}
          <div 
            className="bg-pink-400 rounded-full border-[3px] border-black flex items-center justify-center shadow-[0_3px_0_rgba(0,0,0,0.5)]"
            style={{ width: heart.size + 8, height: heart.size + 8 }}
          >
            <Heart
              className="fill-pink-300 stroke-black stroke-[2]"
              style={{ width: heart.size - 8, height: heart.size - 8 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
