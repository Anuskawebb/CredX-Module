import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from 'framer-motion';
import { Vault, CreditCard, History, DollarSign, BarChart3 } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/borrow', label: 'Borrow', icon: Vault },
    { path: '/repay', label: 'Repay', icon: DollarSign },
    { path: '/card', label: 'Card', icon: CreditCard },
    { path: '/history', label: 'History', icon: History },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-glass-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-neon-orange to-neon-purple bg-clip-text text-transparent"
            >
              CredX
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link key={path} to={path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                    isActive(path)
                      ? 'bg-neon-orange/20 text-neon-orange border border-neon-orange/30'
                      : 'text-gray-300 hover:text-white hover:bg-glass-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <ConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;