import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, ShoppingBag, Coffee, Plane, Tv } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { mockVaultData } from '../hooks/useContract';

const gradientStyle = {
  background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block'
};

const Card: React.FC = () => {
  const recentTransactions = [
    { id: '1', merchant: 'Starbucks Coffee', amount: '$12.50', category: 'Food & Drink', icon: Coffee, date: '2 hours ago' },
    { id: '2', merchant: 'Amazon Prime', amount: '$89.99', category: 'Shopping', icon: ShoppingBag, date: '1 day ago' },
    { id: '3', merchant: 'Netflix', amount: '$15.99', category: 'Entertainment', icon: Tv, date: '3 days ago' },
    { id: '4', merchant: 'Delta Airlines', amount: '$234.50', category: 'Travel', icon: Plane, date: '1 week ago' },
  ];

  const spendingCategories = [
    { name: 'Food & Drink', amount: 285.50, percentage: 35, color: 'neon-blue' },
    { name: 'Shopping', amount: 412.30, percentage: 28, color: 'neon-purple' },
    { name: 'Travel', amount: 234.50, percentage: 22, color: 'neon-cyan' },
    { name: 'Entertainment', amount: 127.80, percentage: 15, color: 'neon-pink' },
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
            <h1
              className="text-3xl font-bold mb-2"
              style={gradientStyle}
            >
              MetaMask Card
            </h1>
            <p className="text-gray-400">
              Spend your borrowed USDC anywhere with the MetaMask Card
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Virtual Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                  <CreditCard className="w-5 h-5" style={gradientStyle} />
                  <span>Virtual Card</span>
                </h2>

                {/* Card Preview */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-gradient-to-br from-neon-blue/80 to-neon-purple/80 rounded-2xl p-6 mb-6 h-48 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="text-white font-bold text-lg">CredX</div>
                      <Smartphone className="w-8 h-8 text-white/80" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-white/90 text-lg font-mono tracking-wider">
                        •••• •••• •••• 1234
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <div className="text-white/60 text-xs">VALID THRU</div>
                          <div className="text-white/90 text-sm font-mono">12/27</div>
                        </div>
                        <div>
                          <div className="text-white/60 text-xs">CVV</div>
                          <div className="text-white/90 text-sm font-mono">•••</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Card Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-glass-dark/30 rounded-lg p-4">
                    <div className="text-gray-400 text-sm mb-1">Available Balance</div>
                    <div className="text-2xl font-bold text-neon-cyan">${mockVaultData.cardBalance}</div>
                  </div>
                  <div className="bg-glass-dark/30 rounded-lg p-4">
                    <div className="text-gray-400 text-sm mb-1">Monthly Spending</div>
                    <div className="text-2xl font-bold text-neon-purple">$1,060.10</div>
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <motion.div
                      key={transaction.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-glass-dark/30 rounded-lg hover:bg-glass-dark/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg"
                          style={{
                            background: 'linear-gradient(90deg, #ff7e5f, #a259ff, #ff7e5f)',
                          }}
                        >
                          <transaction.icon className="w-5 h-5" style={gradientStyle} />
                        </div>
                        <div>
                          <div className="text-white font-medium">{transaction.merchant}</div>
                          <div className="text-gray-400 text-sm">{transaction.category} • {transaction.date}</div>
                        </div>
                      </div>
                      <div className="text-white font-semibold">{transaction.amount}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Spending Analytics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Spending by Category</h3>
                
                <div className="space-y-4">
                  {spendingCategories.map((category, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">{category.name}</span>
                        <span className="text-white font-semibold">${category.amount}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full`}
                          style={{
                            background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${category.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Card Settings</h3>
                
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.5rem',
                      fontWeight: 600,
                      background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
                      color: 'white',
                      boxShadow: '0 2px 16px rgba(162,89,255,0.15)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Add Funds
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full border border-neon-cyan text-neon-cyan p-3 rounded-lg font-semibold hover:bg-neon-cyan/10 transition-all"
                  >
                    Freeze Card
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full border border-glass-white text-white p-3 rounded-lg font-semibold hover:bg-glass-white transition-all"
                  >
                    Card Details
                  </motion.button>
                </div>
              </div>

              <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-xl p-4">
                <div className="text-center">
                  <CreditCard className="w-8 h-8 mx-auto mb-2" style={gradientStyle} />
                  <p className="text-white font-medium mb-1">Physical Card</p>
                  <p className="text-gray-300 text-sm">
                    Order your physical MetaMask Card for worldwide spending
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    style={{
                      marginTop: '0.75rem',
                      background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 600,
                      border: 'none',
                      fontSize: '1rem',
                      cursor: 'pointer'
                    }}
                  >
                    Request Physical Card →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;