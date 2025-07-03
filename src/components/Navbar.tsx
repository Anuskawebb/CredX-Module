import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { metaMask } from 'wagmi/connectors';
import { motion } from 'framer-motion';
import { BarChart3, Vault, DollarSign, CreditCard, History, Wallet } from 'lucide-react';
import NetworkSwitcher from './NetworkSwitcher';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  
  const isLanding = location.pathname === '/';

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/borrow', label: 'Borrow', icon: Vault },
    { path: '/repay', label: 'Repay', icon: DollarSign },
    { path: '/card', label: 'Card', icon: CreditCard },
    { path: '/history', label: 'History', icon: History },
  ];

  const handleConnect = () => {
    connect({ connector: metaMask() });
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white"
            >
              CredX
            </motion.div>
          </Link>

          {!isLanding && (
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link key={path} to={path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      location.pathname === path
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}

          <div className="flex items-center space-x-3">
            {isConnected && <NetworkSwitcher />}
            
            {isConnected ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-4 py-2 rounded-lg backdrop-blur-md border border-blue-500/30 bg-blue-500/20 text-white">
                  <Wallet className="w-4 h-4 text-blue-400" />
                  <span className="font-medium">
                    {formatAddress(address!)}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => disconnect()}
                  className="px-4 py-2 rounded-lg backdrop-blur-md border border-red-500/30 bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
                >
                  Disconnect
                </motion.button>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleConnect}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg backdrop-blur-md border border-blue-500/30 bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-white font-medium"
              >
                <Wallet className="w-4 h-4" />
                <span>Connect Wallet</span>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;