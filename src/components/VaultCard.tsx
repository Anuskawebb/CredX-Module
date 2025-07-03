import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, DollarSign } from 'lucide-react';

interface VaultCardProps {
  collateral: string;
  borrowed: string;
  ltv: number;
  zkScore: number;
}

const VaultCard: React.FC<VaultCardProps> = ({ collateral, borrowed, ltv, zkScore }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6 hover:border-neon-blue/50 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Your Vault</h3>
        <div className="flex items-center space-x-2 text-neon-cyan">
          <Shield className="w-5 h-5" />
          <span className="text-sm">Active</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <p className="text-gray-400 text-sm">Collateral Deposited</p>
          <p className="text-2xl font-bold text-white">{collateral} ETH</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-400 text-sm">USDC Borrowed</p>
          <p className="text-2xl font-bold text-neon-purple">${borrowed}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-sm">Loan-to-Value Ratio</span>
            <span className="text-white font-semibold">{ltv}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-neon-blue to-neon-purple h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${ltv}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-sm">ZK Credit Score</span>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-neon-cyan" />
              <span className="text-white font-semibold">{zkScore}</span>
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-neon-cyan to-neon-blue h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(zkScore / 850) * 100}%` }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VaultCard;