import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CreditCardAnimation: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform values for parallax and entrance animations
  const leftCardX = useTransform(scrollYProgress, [0.15, 0.35], [-400, 0]);
  const rightCardX = useTransform(scrollYProgress, [0.15, 0.35], [400, 0]);
  const leftCardRotate = useTransform(scrollYProgress, [0.15, 0.35], [-15, 5]);
  const rightCardRotate = useTransform(scrollYProgress, [0.15, 0.35], [15, -5]);
  
  // Exit animations
  const leftCardExitY = useTransform(scrollYProgress, [0.5, 0.7], [0, -200]);
  const rightCardExitY = useTransform(scrollYProgress, [0.5, 0.7], [0, -200]);
  const cardsOpacity = useTransform(scrollYProgress, [0.6, 0.75], [1, 0]);

  const MetaMaskCard: React.FC<{ 
    style: any; 
    className?: string; 
  }> = ({ style, className = "" }) => (
    <motion.div
      style={style}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 10,
        transition: { duration: 0.3 }
      }}
      className={`relative w-80 sm:w-96 h-48 sm:h-56 rounded-2xl overflow-hidden shadow-2xl group ${className}`}
    >
      {/* Enhanced background glow from edges */}
      <div className="absolute -inset-8 opacity-70 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none">
        {/* Edge glows */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-12 bg-gradient-to-b from-neon-orange/60 to-transparent blur-xl" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-12 bg-gradient-to-t from-neon-purple/60 to-transparent blur-xl" />
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-40 bg-gradient-to-r from-neon-glow/60 to-transparent blur-xl" />
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-40 bg-gradient-to-l from-neon-orange/60 to-transparent blur-xl" />
        
        {/* Corner glows */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-neon-orange/70 via-neon-orange/30 to-transparent rounded-full blur-2xl" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-neon-purple/70 via-neon-purple/30 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-neon-glow/70 via-neon-glow/30 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-neon-purple/70 via-neon-purple/30 to-transparent rounded-full blur-2xl" />
      </div>
      
      {/* Main card container */}
      <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden">
        {/* Card border glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-orange/60 via-neon-purple/60 to-neon-glow/60 rounded-2xl blur-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* MetaMask Card Image - Rotated to horizontal */}
        <div className="relative z-20 w-full h-full rounded-2xl overflow-hidden bg-transparent">
          <img 
            src="/src/assets/MetamasterCard.webp" 
            alt="MetaMask Card"
            className="w-full h-full object-cover rounded-2xl transform rotate-90 scale-125"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(231, 111, 81, 0.6)) drop-shadow(0 0 40px rgba(123, 44, 191, 0.5))',
              imageRendering: 'crisp-edges'
            }}
          />
        </div>
        
        {/* Glass overlay for holographic effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-2xl z-30" />
        
        {/* Hover enhancement glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-glow/0 via-neon-glow/20 to-neon-glow/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />
        
        {/* Corner accent glows on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
          <div className="absolute top-4 left-4 w-4 h-4 bg-neon-orange/90 rounded-full blur-sm animate-pulse" />
          <div className="absolute top-4 right-4 w-4 h-4 bg-neon-purple/90 rounded-full blur-sm animate-pulse" />
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-neon-glow/90 rounded-full blur-sm animate-pulse" />
          <div className="absolute bottom-4 right-4 w-4 h-4 bg-neon-purple/90 rounded-full blur-sm animate-pulse" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="card-animation" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-orange to-neon-purple bg-clip-text text-transparent">
            Spend Your Borrowed USDC in Real Life, Instantly
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Your crypto collateral unlocks real-world spending power through MetaMask Card integration
          </p>
        </motion.div>

        {/* 3D Credit Cards Container */}
        <div className="relative h-80 sm:h-96 flex items-center justify-center">
          {/* Left Card */}
          <motion.div
            style={{
              x: leftCardX,
              y: leftCardExitY,
              rotate: leftCardRotate,
              opacity: cardsOpacity,
            }}
            className="absolute left-1/4 transform -translate-x-1/2"
          >
            <MetaMaskCard style={{}} />
          </motion.div>

          {/* Right Card */}
          <motion.div
            style={{
              x: rightCardX,
              y: rightCardExitY,
              rotate: rightCardRotate,
              opacity: cardsOpacity,
            }}
            className="absolute right-1/4 transform translate-x-1/2"
          >
            <MetaMaskCard style={{}} />
          </motion.div>

          {/* Center floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center space-y-4">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r from-neon-orange to-neon-purple rounded-full flex items-center justify-center shadow-lg shadow-neon-glow/30"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full" />
              </motion.div>
              <div className="text-white/60 text-sm font-medium">
                Seamless Integration
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-orange/40 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * 400,
                opacity: 0,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditCardAnimation;