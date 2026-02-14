import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import bearImage from 'figma:asset/1c6b153d312fca6a076a2af446e3bfa1c3935b6c.png';

interface ProposalBoxProps {
  onYes: () => void;
}

const noMessages = [
  "Are you sure? 🥺",
  "Think again 😢",
  "Don't break my bear's heart 💔🐻",
  "Please reconsider 🥹",
  "Last chance 😳💞",
  "My heart is breaking 💔",
  "But... but... 🥺👉👈",
  "The bears are crying 😭🐻",
];

export function ProposalBox({ onYes }: ProposalBoxProps) {
  const [noClickCount, setNoClickCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState('');

  const handleNoClick = () => {
    const newCount = noClickCount + 1;
    setNoClickCount(newCount);
    
    // Show message
    if (newCount <= noMessages.length) {
      setMessage(noMessages[newCount - 1] || noMessages[noMessages.length - 1]);
    }
    
    // Move the No button randomly - smaller range on mobile
    const isMobile = window.innerWidth < 768;
    const randomX = (Math.random() - 0.5) * (isMobile ? 120 : 250);
    const randomY = (Math.random() - 0.5) * (isMobile ? 100 : 200);
    setNoPosition({ x: randomX, y: randomY });
  };

  const yesButtonScale = 1 + (noClickCount * 0.2);

  return (
    <motion.div
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      exit={{ scale: 0, rotate: 10, opacity: 0 }}
      transition={{ type: 'spring', damping: 15, stiffness: 200 }}
      className="relative w-full max-w-2xl px-4"
    >
      {/* Cute dialog box with thick cartoon outline */}
      <div className="bg-gradient-to-b from-pink-50 to-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 lg:p-14 shadow-[0_6px_0_rgba(0,0,0,0.1)] md:shadow-[0_10px_0_rgba(0,0,0,0.1)] border-[4px] md:border-[6px] border-black relative overflow-visible">
        
        {/* Decorative elements */}
        <div className="absolute top-3 md:top-4 right-3 md:right-4">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="text-yellow-400 stroke-black stroke-[2]" size={24} />
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-4 md:space-y-8">
          {/* Cute bears illustration */}
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [-1, 1, -1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 mx-auto"
          >
            <img
              src={bearImage}
              alt="Cute bears with hearts"
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </motion.div>
          
          {/* Question with cartoon typography */}
          <div className="space-y-3 md:space-y-4">
            <h1 
              className="text-3xl md:text-5xl lg:text-6xl font-black text-pink-500 drop-shadow-[3px_3px_0_rgba(0,0,0,0.2)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)] leading-tight" 
              style={{ 
                fontFamily: 'Comic Sans MS, "Marker Felt", fantasy, cursive',
                WebkitTextStroke: '1px rgba(0,0,0,0.1)'
              }}
            >
              Will you be my
              <br />
              Valentine? 💖
            </h1>
            
            {/* Message from No clicks with cartoon bubble */}
            {message && (
              <motion.div
                key={message}
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative inline-block px-2"
              >
                <div className="bg-white border-[3px] md:border-[4px] border-black rounded-2xl md:rounded-3xl px-4 py-2 md:px-6 md:py-3 shadow-[0_3px_0_rgba(0,0,0,1)] md:shadow-[0_4px_0_rgba(0,0,0,1)]">
                  <p 
                    className="text-lg md:text-2xl lg:text-3xl font-bold text-purple-600"
                    style={{ fontFamily: 'Comic Sans MS, "Marker Felt", fantasy, cursive' }}
                  >
                    {message}
                  </p>
                </div>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-2 md:-bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] md:border-l-[15px] border-l-transparent border-r-[12px] md:border-r-[15px] border-r-transparent border-t-[12px] md:border-t-[15px] border-t-black"></div>
                <div className="absolute -bottom-1 md:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] md:border-l-[12px] border-l-transparent border-r-[10px] md:border-r-[12px] border-r-transparent border-t-[10px] md:border-t-[12px] border-t-white"></div>
              </motion.div>
            )}
          </div>
          
          {/* Buttons container */}
          <div className="relative min-h-[100px] md:min-h-[140px] flex items-center justify-center gap-3 md:gap-6 pt-2 md:pt-4">
            {/* Yes Button - grows bigger */}
            <motion.button
              whileHover={{ scale: yesButtonScale + 0.05, y: -3 }}
              whileTap={{ scale: yesButtonScale - 0.05, y: 0 }}
              animate={{ scale: yesButtonScale }}
              onClick={onYes}
              className="relative group z-20"
            >
              <div 
                className="relative bg-gradient-to-b from-green-400 to-green-500 text-white px-6 py-3 md:px-10 md:py-5 rounded-full border-[4px] md:border-[5px] border-black shadow-[0_5px_0_rgba(0,0,0,1)] md:shadow-[0_7px_0_rgba(0,0,0,1)] active:shadow-[0_2px_0_rgba(0,0,0,1)] active:translate-y-1 transition-all flex items-center gap-2 md:gap-3 font-black text-lg md:text-2xl" 
                style={{ fontFamily: 'Comic Sans MS, "Marker Felt", fantasy, cursive' }}
              >
                <Heart className="fill-white stroke-[2] md:stroke-[3]" size={20} />
                <span>Yes</span>
              </div>
            </motion.button>
            
            {/* No Button - moves around and shrinks */}
            <motion.button
              whileHover={{ scale: Math.max(0.4, 1 - noClickCount * 0.12) + 0.05 }}
              whileTap={{ scale: Math.max(0.3, 1 - noClickCount * 0.12) - 0.05 }}
              animate={{ 
                x: noPosition.x,
                y: noPosition.y,
                scale: Math.max(0.4, 1 - noClickCount * 0.12),
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={handleNoClick}
              className="relative group"
            >
              <div 
                className="relative bg-gradient-to-b from-gray-300 to-gray-400 text-gray-800 px-5 py-2 md:px-8 md:py-4 rounded-full border-[4px] md:border-[5px] border-black shadow-[0_4px_0_rgba(0,0,0,1)] md:shadow-[0_6px_0_rgba(0,0,0,1)] active:shadow-[0_2px_0_rgba(0,0,0,1)] active:translate-y-1 transition-all font-black text-base md:text-xl whitespace-nowrap" 
                style={{ fontFamily: 'Comic Sans MS, "Marker Felt", fantasy, cursive' }}
              >
                No 🙈
              </div>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Cartoon stickers with outlines - smaller on mobile, hidden on very small screens */}
      <motion.div
        className="hidden sm:block absolute -top-10 md:-top-16 -left-10 md:-left-16"
        animate={{ 
          rotate: [0, 15, 0, -15, 0],
          y: [0, -8, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full border-[4px] md:border-[5px] border-black flex items-center justify-center text-3xl md:text-5xl shadow-[0_4px_0_rgba(0,0,0,1)] md:shadow-[0_6px_0_rgba(0,0,0,1)]">
          🎀
        </div>
      </motion.div>
      
      <motion.div
        className="hidden sm:block absolute -top-10 md:-top-16 -right-10 md:-right-16"
        animate={{ 
          rotate: [0, -15, 0, 15, 0],
          y: [0, -8, 0]
        }}
        transition={{ duration: 3, delay: 1, repeat: Infinity }}
      >
        <div className="w-18 h-18 md:w-28 md:h-28 bg-white rounded-full border-[4px] md:border-[5px] border-black flex items-center justify-center text-4xl md:text-6xl shadow-[0_4px_0_rgba(0,0,0,1)] md:shadow-[0_6px_0_rgba(0,0,0,1)]">
          🌸
        </div>
      </motion.div>
      
      <motion.div
        className="hidden sm:block absolute -bottom-10 md:-bottom-16 -left-10 md:-left-16"
        animate={{ 
          rotate: [0, 20, 0, -20, 0]
        }}
        transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
      >
        <div className="w-16 h-16 md:w-26 md:h-26 bg-white rounded-full border-[4px] md:border-[5px] border-black flex items-center justify-center text-3xl md:text-5xl shadow-[0_4px_0_rgba(0,0,0,1)] md:shadow-[0_6px_0_rgba(0,0,0,1)]">
          💝
        </div>
      </motion.div>
      
      <motion.div
        className="hidden sm:block absolute -bottom-10 md:-bottom-16 -right-10 md:-right-16"
        animate={{ 
          rotate: [0, -20, 0, 20, 0]
        }}
        transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
      >
        <div className="w-18 h-18 md:w-28 md:h-28 bg-white rounded-full border-[4px] md:border-[5px] border-black flex items-center justify-center text-4xl md:text-6xl shadow-[0_4px_0_rgba(0,0,0,1)] md:shadow-[0_6px_0_rgba(0,0,0,1)]">
          🌷
        </div>
      </motion.div>
    </motion.div>
  );
}