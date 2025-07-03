import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, AlertTriangle } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { mockVaultData } from '../hooks/useContract';

const Repay: React.FC = () => {
  const [repayAmount, setRepayAmount] = useState('');
  const outstandingBalance = parseFloat(mockVaultData.borrowed.replace(',', ''));
  const newBalance = repayAmount ? Math.max(0, outstandingBalance - parseFloat(repayAmount)) : outstandingBalance;

  const handleRepay = () => {
    // Mock repay function
    console.log('Repaying', repayAmount, 'USDC');
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
            <h1 className="text-3xl font-bold mb-2">Repay Loan</h1>
            <p className="text-gray-400">
              Repay your USDC loan to reduce debt and improve credit score
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Repay Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-neon-cyan" />
                <span>Loan Repayment</span>
              </h2>

              <div className="space-y-6">
                <div className="bg-glass-dark/30 rounded-lg p-4 border border-neon-purple/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Outstanding Balance</span>
                    <span className="text-2xl font-bold text-neon-purple">
                      ${mockVaultData.borrowed}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Interest accrued: $124.50
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Repayment Amount (USDC)
                    </label>
                    <button
                      onClick={() => setRepayAmount(mockVaultData.borrowed)}
                      className="text-sm text-neon-cyan hover:text-neon-blue transition-colors"
                    >
                      Max
                    </button>
                  </div>
                  <input
                    type="number"
                    value={repayAmount}
                    onChange={(e) => setRepayAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-glass-dark border border-glass-white rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                  />
                </div>

                {repayAmount && (
                  <div className="bg-glass-dark/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">New Balance</span>
                      <span className="text-xl font-bold text-white">
                        ${newBalance.toLocaleString()}
                      </span>
                    </div>
                    {newBalance === 0 && (
                      <div className="text-sm text-neon-cyan">
                        ✓ Loan will be fully repaid
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="cross-chain" className="rounded" />
                    <label htmlFor="cross-chain" className="text-sm text-gray-300">
                      Enable cross-chain repayment via LI.FI
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="auto-repay" className="rounded" />
                    <label htmlFor="auto-repay" className="text-sm text-gray-300">
                      Set up automatic repayments
                    </label>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleRepay}
                  disabled={!repayAmount || parseFloat(repayAmount) <= 0}
                  className="w-full bg-gradient-to-r from-neon-cyan to-neon-blue p-4 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-cyan/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Repay Now
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
                  <Clock className="w-5 h-5 text-neon-purple" />
                  <span>Payment Schedule</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Next Payment Due</span>
                    <span className="text-white font-semibold">{mockVaultData.repaymentDue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Minimum Payment</span>
                    <span className="text-white font-semibold">$250.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Interest Rate</span>
                    <span className="text-white font-semibold">8.5% APY</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Late Fee</span>
                    <span className="text-white font-semibold">2% of balance</span>
                  </div>
                </div>
              </div>

              <div className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Credit Impact</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current ZK Score</span>
                    <span className="text-white font-semibold">{mockVaultData.zkScore}</span>
                  </div>
                  
                  {repayAmount && parseFloat(repayAmount) > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Projected Score</span>
                      <span className="text-neon-cyan font-semibold">
                        +{Math.floor(parseFloat(repayAmount) / 100)} pts
                      </span>
                    </div>
                  )}
                  
                  <div className="text-sm text-gray-400">
                    Regular payments improve your credit score and unlock better rates.
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-white font-medium mb-1">Payment Reminder</p>
                    <p className="text-gray-300">
                      Your next payment of $250 is due in 12 days. Late payments may affect your credit score.
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

export default Repay;