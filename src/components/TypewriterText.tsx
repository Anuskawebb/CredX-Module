import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number; // ms per character
  pause?: number; // ms pause at end
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 20,   // Even faster and smoother
  pause = 500,   // Shorter pause (was probably 1500+)
  className = ""
}) => {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
    // No else: do nothing when finished (no loop)
  }, [index, text, speed]);

  useEffect(() => {
    if (isComplete) {
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorTimer);
    }
  }, [isComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <span style={{ borderRight: index < text.length ? '2px solid #fff' : 'none', paddingRight: 2, transition: 'border-color 0.2s' }}>
        {displayed}
      </span>
      <span 
        className={`inline-block w-0.5 h-6 bg-neon-glow ml-1 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-100`}
      />
    </motion.div>
  );
};

export default TypewriterText;