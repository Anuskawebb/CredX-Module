import React, { useState } from 'react';
import { useAccount, useSwitchChain, useChainId } from 'wagmi';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Wifi, WifiOff } from 'lucide-react';
import { chains } from '../config/wagmi';

const NetworkSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain, isPending } = useSwitchChain();

  const currentChain = chains.find(chain => chain.id === chainId);

  const getChainIcon = (chainName: string) => {
    switch (chainName.toLowerCase()) {
      case 'ethereum':
        return '⟠';
      case 'sepolia':
        return '⟠';
      case 'polygon':
        return '⬟';
      case 'arbitrum one':
        return '🔷';
      default:
        return '🔗';
    }
  };

  const getChainColor = (chainName: string) => {
    switch (chainName.toLowerCase()) {
      case 'ethereum':
        return 'text-blue-400 border-blue-500/30 bg-blue-500/20';
      case 'sepolia':
        return 'text-yellow-400 border-yellow-500/30 bg-yellow-500/20';
      case 'polygon':
        return 'text-purple-400 border-purple-500/30 bg-purple-500/20';
      case 'arbitrum one':
        return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/20';
      default:
        return 'text-gray-400 border-gray-500/30 bg-gray-500/20';
    }
  };

  if (!isConnected) return null;

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg backdrop-blur-md border transition-all duration-300 ${
          currentChain ? getChainColor(currentChain.name) : 'text-gray-400 border-gray-500/30 bg-gray-500/20'
        }`}
        disabled={isPending}
      >
        {isPending ? (
          <WifiOff className="w-4 h-4 animate-spin" />
        ) : (
          <Wifi className="w-4 h-4" />
        )}
        <span className="text-sm font-medium">
          {currentChain ? (
            <>
              <span className="mr-1">{getChainIcon(currentChain.name)}</span>
              {currentChain.name}
            </>
          ) : (
            'Unknown'
          )}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 w-48 backdrop-blur-xl bg-black/80 border border-white/10 rounded-lg shadow-xl overflow-hidden z-50"
          >
            {chains.map((chain) => (
              <motion.button
                key={chain.id}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                onClick={() => {
                  switchChain({ chainId: chain.id });
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all ${
                  chain.id === chainId ? 'bg-white/10' : 'hover:bg-white/5'
                }`}
                disabled={isPending}
              >
                <span className="text-lg">{getChainIcon(chain.name)}</span>
                <div className="flex-1">
                  <div className="text-white font-medium">{chain.name}</div>
                  <div className="text-xs text-gray-400">
                    {chain.id === chainId ? 'Connected' : 'Switch to this network'}
                  </div>
                </div>
                {chain.id === chainId && (
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default NetworkSwitcher;