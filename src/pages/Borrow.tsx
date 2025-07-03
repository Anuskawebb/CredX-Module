import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Info, TrendingUp } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Borrow: React.FC = () => {
  const [collateralAmount, setCollateralAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState('ETH');
  
  const ethPrice = 2400; // Mock ETH price
  const ltvRatio = 0.7;
  const borrowableUSDC = collateralAmount ? (parseFloat(collateralAmount) * ethPrice * ltvRatio).toFixed(2) : '0';

  const handleBorrow = () => {
    // Mock borrow function
    console.log('Borrowing USDC with', collateralAmount, selectedToken);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <AnimatedBackground />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
            >Borrow USDC</h1>
            <p className="text-gray-400">
              Deposit collateral and borrow USDC at 70% LTV ratio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Borrow Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                <Calculator className="w-5 h-5"
                  style={{
                    background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                />
                <span>Collateral & Borrowing</span>
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Collateral Asset
                  </label>
                  <select 
                    value={selectedToken}
                    onChange={(e) => setSelectedToken(e.target.value)}
                    className="w-full bg-glass-dark border border-glass-white rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                  >
                    <option value="ETH">Ethereum (ETH)</option>
                    <option value="MATIC">Polygon (MATIC)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Collateral Amount
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={collateralAmount}
                      onChange={(e) => setCollateralAmount(e.target.value)}
                      placeholder="0.0"
                      className="w-full bg-glass-dark border border-glass-white rounded-lg px-4 py-3 pr-16 text-white focus:outline-none focus:border-neon-blue transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      {selectedToken}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    ≈ ${collateralAmount ? (parseFloat(collateralAmount) * ethPrice).toFixed(2) : '0.00'} USD
                  </p>
                </div>

                <div className="bg-glass-dark/30 rounded-lg p-4 border border-neon-blue/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Borrowable USDC (70% LTV)</span>
                    <span className="text-2xl font-bold text-neon-blue">${borrowableUSDC}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Interest Rate: 8.5% APY
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBorrow}
                  disabled={!collateralAmount || parseFloat(collateralAmount) <= 0}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
                    color: 'white',
                    boxShadow: '0 2px 16px rgba(162,89,255,0.15)',
                    opacity: !collateralAmount || parseFloat(collateralAmount) <= 0 ? 0.5 : 1,
                    cursor: !collateralAmount || parseFloat(collateralAmount) <= 0 ? 'not-allowed' : 'pointer',
                    marginTop: '1rem'
                  }}
                >
                  Deposit & Borrow
                </motion.button>
              </div>
            </motion.div>

            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Info className="w-5 h-5"
                    style={{
                      background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  />
                  <span>Borrowing Details</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Maximum LTV</span>
                    <span className="text-white font-semibold">70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Interest Rate</span>
                    <span className="text-white font-semibold">8.5% APY</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Liquidation Threshold</span>
                    <span className="text-white font-semibold">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Liquidation Penalty</span>
                    <span className="text-white font-semibold">5%</span>
                  </div>
                </div>
              </div>

              <div className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5"
                    style={{
                      background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  />
                  <span>Your Credit Profile</span>
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">ZK Credit Score</span>
                      <span className="text-white font-semibold">750</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-neon-cyan to-neon-blue h-2 rounded-full w-3/4" />
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-400">
                    Your credit score affects interest rates and borrowing limits.
                  </div>
                </div>
              </div>

              <div className="bg-neon-blue/10 border border-neon-blue/30 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5"
                    style={{
                      background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  />
                  <div className="text-sm">
                    <p className="text-white font-medium mb-1">Risk Warning</p>
                    <p className="text-gray-300">
                      Your collateral may be liquidated if the LTV ratio exceeds 85%. 
                      Monitor your position carefully.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Borrow;