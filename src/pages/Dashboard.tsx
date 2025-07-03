import React from 'react';
import { motion } from 'framer-motion';
import { useAccount } from 'wagmi';
import { TrendingUp, DollarSign, CreditCard, Clock } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import VaultCard from '../components/VaultCard';
import { mockVaultData } from '../hooks/useContract';

const gradientStyle = {
  background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block'
};

const Dashboard: React.FC = () => {
  const { address, isConnected } = useAccount();

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-black text-white pt-20">
        <AnimatedBackground />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Connect Your Wallet</h2>
            <p className="text-gray-400">Please connect your wallet to access your dashboard</p>
          </div>
        </div>
      </div>
    );
  }

  const statsCards = [
    {
      title: 'Available to Borrow',
      value: '$3,850',
      icon: DollarSign,
      color: gradientStyle,
      change: '+12.5%'
    },
    {
      title: 'Card Balance',
      value: `$${mockVaultData.cardBalance}`,
      icon: CreditCard,
      color: gradientStyle,
      change: '-$89.50'
    },
    {
      title: 'ZK Credit Score',
      value: mockVaultData.zkScore.toString(),
      icon: TrendingUp,
      color: gradientStyle,
      change: '+25 pts'
    },
    {
      title: 'Next Payment',
      value: '12 days',
      icon: Clock,
      color: gradientStyle,
      change: 'Due Jan 15'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2" style={gradientStyle}>Dashboard</h1>
            <p className="text-gray-400">
              Welcome back, {address?.slice(0, 6)}...{address?.slice(-4)}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6 hover:border-neon-blue/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <card.icon className="w-8 h-8" style={gradientStyle} />
                  <span className="text-sm text-gray-400">{card.change}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{card.title}</h3>
                <p className="text-2xl font-bold" style={gradientStyle}>{card.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vault Card */}
            <div className="lg:col-span-2">
              <VaultCard
                collateral={mockVaultData.collateral}
                borrowed={mockVaultData.borrowed}
                ltv={mockVaultData.ltv}
                zkScore={mockVaultData.zkScore}
              />
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
                    color: 'white',
                    boxShadow: '0 2px 16px rgba(162,89,255,0.15)'
                  }}
                >
                  Borrow More USDC
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
                    color: 'white',
                    boxShadow: '0 2px 16px rgba(162,89,255,0.15)'
                  }}
                >
                  Repay Loan
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
                    color: 'white',
                    boxShadow: '0 2px 16px rgba(162,89,255,0.15)'
                  }}
                >
                  Add Collateral
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {mockVaultData && (
                <>
                  <div className="flex items-center justify-between p-4 bg-glass-dark/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                      <span className="text-white">USDC Borrowed</span>
                    </div>
                    <span className="text-neon-cyan font-semibold">$2,500</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-glass-dark/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                      <span className="text-white">ETH Deposited</span>
                    </div>
                    <span className="text-neon-purple font-semibold">2.0 ETH</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;