import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FloatingHearts } from './components/FloatingHearts';
import { FloatingSparkles } from './components/FloatingSparkles';
import { WelcomeDialog } from './components/WelcomeDialog';
import { ProposalBox } from './components/ProposalBox';
import { SuccessScreen } from './components/SuccessScreen';

export default function App() {
  const [stage, setStage] = useState<'welcome' | 'proposal' | 'success'>('welcome');

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      {/* Cartoon-style animated background with stripes */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255, 255, 255, 0.1) 35px,
              rgba(255, 255, 255, 0.1) 70px
            )`,
            backgroundSize: '200% 200%'
          }}
        />
      </div>
      
      {/* Floating decorations */}
      <FloatingHearts />
      <FloatingSparkles />
      
      {/* Cute clouds in background - hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-10 w-32 h-20 bg-white/40 rounded-full border-[4px] border-white/60 blur-sm" />
      <div className="hidden md:block absolute top-40 right-20 w-40 h-24 bg-white/40 rounded-full border-[4px] border-white/60 blur-sm" />
      <div className="hidden md:block absolute bottom-32 left-1/4 w-36 h-22 bg-white/40 rounded-full border-[4px] border-white/60 blur-sm" />
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 md:p-6">
        <AnimatePresence mode="wait">
          {stage === 'welcome' && (
            <WelcomeDialog key="welcome" onNext={() => setStage('proposal')} />
          )}
          
          {stage === 'proposal' && (
            <ProposalBox key="proposal" onYes={() => setStage('success')} />
          )}
          
          {stage === 'success' && (
            <SuccessScreen key="success" />
          )}
        </AnimatePresence>
      </div>
      
      {/* Cartoon style animations and effects */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes bounce-cartoon {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-10px) scaleY(1.05); }
        }
        
        /* Make everything feel more cartoony */
        * {
          image-rendering: -webkit-optimize-contrast;
        }
        
        /* Prevent horizontal scroll on mobile */
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}