import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { History as HistoryIcon, Filter, Download, Search } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { mockTransactions } from '../hooks/useContract';

const gradientStyle = {
  background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block'
};

const History: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = ['All', 'Borrow', 'Repay', 'Spend', 'Deposit'];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'text-neon-cyan';
      case 'pending': return 'text-yellow-400';
      case 'failed': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getActionColor = (action: string) => {
    switch (action.toLowerCase()) {
      case 'borrow': return 'text-neon-blue';
      case 'repay': return 'text-neon-cyan';
      case 'spend': return 'text-neon-purple';
      case 'deposit': return 'text-neon-pink';
      default: return 'text-white';
    }
  };

  const filteredTransactions = mockTransactions.filter(tx => 
    (activeFilter === 'All' || tx.action === activeFilter) &&
    (searchTerm === '' || tx.action.toLowerCase().includes(searchTerm.toLowerCase()) || 
     tx.amount.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
            <h1 className="text-3xl font-bold mb-2 flex items-center space-x-3">
              <HistoryIcon className="w-8 h-8" style={gradientStyle} />
              <span style={gradientStyle}>Transaction History</span>
            </h1>
            <p className="text-gray-400">
              View all your borrowing, spending, and repayment activities
            </p>
          </div>

          {/* Filters and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6 mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <motion.button
                    key={filter}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter(filter)}
                    style={activeFilter === filter ? {
                      ...gradientStyle,
                      background: 'linear-gradient(90deg, #ff7e5f, #a259ff, #ff7e5f)',
                      color: 'white',
                      border: '1px solid #a259ff'
                    } : {}}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeFilter === filter
                        ? ''
                        : 'text-gray-300 hover:text-white hover:bg-glass-white'
                    }`}
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>

              <div className="flex gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-glass-dark border border-glass-white rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors"
                  />
                </div>

                {/* Export Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    padding: '0.5rem 1.25rem'
                  }}
                  className="flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" style={gradientStyle} />
                  <span>Export</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Transaction Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-glass-dark border-b border-glass-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Action</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glass-white">
                  {filteredTransactions.map((transaction, index) => (
                    <motion.tr
                      key={transaction.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="hover:bg-glass-white/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className={`font-semibold ${getActionColor(transaction.action)}`}>
                          {transaction.action}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-medium">{transaction.amount}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-300">{transaction.date}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`font-medium ${getStatusColor(transaction.status)}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          style={{
                            background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 600,
                            border: 'none',
                            fontSize: '1rem',
                            cursor: 'pointer'
                          }}
                          className="transition-colors text-sm font-medium"
                        >
                          View →
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredTransactions.length === 0 && (
              <div className="text-center py-12">
                <HistoryIcon className="w-12 h-12" style={gradientStyle} />
                <p className="text-gray-400">No transactions found</p>
                <p className="text-gray-500 text-sm">Try adjusting your filters or search term</p>
              </div>
            )}
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8"
          >
            <div className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6 text-center">
              <div className="text-2xl font-bold mb-2" style={gradientStyle}>$12,500</div>
              <div className="text-gray-400 text-sm">Total Borrowed</div>
            </div>
            <div className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6 text-center">
              <div className="text-2xl font-bold mb-2" style={gradientStyle}>$8,250</div>
              <div className="text-gray-400 text-sm">Total Repaid</div>
            </div>
            <div className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6 text-center">
              <div className="text-2xl font-bold mb-2" style={gradientStyle}>$3,420</div>
              <div className="text-gray-400 text-sm">Total Spent</div>
            </div>
            <div className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6 text-center">
              <div className="text-2xl font-bold mb-2" style={gradientStyle}>15</div>
              <div className="text-gray-400 text-sm">Transactions</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default History;