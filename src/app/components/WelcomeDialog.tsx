import { motion } from 'motion/react';
import { Heart, Gift, Sparkles } from 'lucide-react';
import bearImage from 'figma:asset/1c6b153d312fca6a076a2af446e3bfa1c3935b6c.png';

interface WelcomeDialogProps {
  onNext: () => void;
}

export function WelcomeDialog({ onNext }: WelcomeDialogProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      exit={{ scale: 0, rotate: 10, opacity: 0 }}
      transition={{ type: 'spring', damping: 15, stiffness: 200 }}
      className="relative w-full max-w-md px-4"
    >
      {/* Cute dialog box with thick outline */}
      <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 lg:p-14 shadow-[0_6px_0_rgba(0,0,0,0.1)] md:shadow-[0_8px_0_rgba(0,0,0,0.1)] border-[4px] md:border-[6px] border-black relative overflow-hidden">
        
        {/* Decorative stars */}
        <motion.div
          className="absolute top-4 md:top-8 right-4 md:right-8"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-6 h-6 md:w-8 md:h-8 relative">
            <div className="absolute inset-0 bg-yellow-300 rounded-full border-[3px] md:border-[4px] border-black"></div>
            <Sparkles className="absolute inset-0 m-auto text-yellow-400" size={12} />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-4 md:bottom-8 left-4 md:left-8"
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, delay: 1, repeat: Infinity }}
        >
          <Heart className="fill-pink-400 text-black stroke-[2] md:stroke-[3]" size={24} />
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-4 md:space-y-6">
          {/* Cute bear illustration */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [-2, 2, -2]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 mx-auto"
          >
            <img
              src={bearImage}
              alt="Cute bears"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>
          
          {/* Text with cartoon style */}
          <div className="space-y-2 md:space-y-3">
            <h1 
              className="text-3xl md:text-5xl lg:text-6xl font-black text-pink-500 drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)] md:drop-shadow-[3px_3px_0_rgba(0,0,0,0.2)]" 
              style={{ 
                fontFamily: 'Comic Sans MS, "Marker Felt", fantasy, cursive',
                WebkitTextStroke: '1px rgba(0,0,0,0.1)'
              }}
            >
              Hii cutie 💕
            </h1>
            <p 
              className="text-lg md:text-2xl lg:text-3xl font-bold text-purple-600"
              style={{ fontFamily: 'Comic Sans MS, "Marker Felt", fantasy, cursive' }}
            >
              I made something special for you…
            </p>
          </div>
          
          {/* Cartoon button with outline */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 0 }}
            onClick={onNext}
            className="relative group mt-6 md:mt-8 w-full md:w-auto"
          >
            <div className="relative bg-gradient-to-b from-pink-400 to-pink-500 text-white px-6 py-3 md:px-10 md:py-5 rounded-full border-[4px] md:border-[5px] border-black shadow-[0_4px_0_rgba(0,0,0,1)] md:shadow-[0_6px_0_rgba(0,0,0,1)] active:shadow-[0_2px_0_rgba(0,0,0,1)] active:translate-y-1 transition-all flex items-center justify-center gap-2 md:gap-3 font-black text-lg md:text-2xl" 
              style={{ fontFamily: 'Comic Sans MS, "Marker Felt", fantasy, cursive' }}
            >
              <span>Click to Reveal</span>
              <Gift className="stroke-[2] md:stroke-[3]" size={24} />
            </div>
          </motion.button>
        </div>
      </div>
      
      {/* Floating stickers with outlines - smaller on mobile */}
      <motion.div
        className="absolute -top-8 md:-top-12 -left-8 md:-left-12"
        animate={{ 
          rotate: [0, 10, 0, -10, 0],
          y: [0, -5, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full border-[3px] md:border-[5px] border-black flex items-center justify-center text-2xl md:text-4xl shadow-[0_3px_0_rgba(0,0,0,1)] md:shadow-[0_4px_0_rgba(0,0,0,1)]">
          🎀
        </div>
      </motion.div>
      
      <motion.div
        className="absolute -bottom-8 md:-bottom-12 -right-8 md:-right-12"
        animate={{ 
          rotate: [0, -10, 0, 10, 0],
          y: [0, -5, 0]
        }}
        transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
      >
        <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full border-[3px] md:border-[5px] border-black flex items-center justify-center text-3xl md:text-5xl shadow-[0_3px_0_rgba(0,0,0,1)] md:shadow-[0_4px_0_rgba(0,0,0,1)]">
          💝
        </div>
      </motion.div>
    </motion.div>
  );
}