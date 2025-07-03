import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import mCard from '../assets/Mcard-removebg-preview.png'; // Import your new card image

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

  const Card3D = () => (
    <div
      style={{
        width: '360px',
        height: '220px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'visible',
        background: 'transparent',
        padding: 0,
        margin: 0,
        boxShadow: 'none',
      }}
    >
      {/* Glowing border */}
      {/* <div
        style={{
          position: 'absolute',
          top: '-16px',
          left: '-16px',
          width: 'calc(100% + 32px)',
          height: 'calc(100% + 32px)',
          borderRadius: '28px',
          boxShadow: '0 0 32px 8px #ff9800, 0 0 64px 16px #a259ff',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      /> */}
      {/* Card image */}
      <img
        src={mCard}
        alt="MetaMask Card"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'fill',
          borderRadius: '18px',
          background: 'transparent',
          zIndex: 1,
          boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
          padding: 0,
          margin: 0,
          display: 'block',
        }}
        draggable={false}
      />
    </div>
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
            <Card3D />
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
            <Card3D />
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