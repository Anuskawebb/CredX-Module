import React from 'react';
import { useChainId, useAccount } from 'wagmi';
import { motion } from 'framer-motion';
import { Wifi, WifiOff, AlertTriangle } from 'lucide-react';
import { chains } from '../config/wagmi';

const NetworkStatus: React.FC = () => {
  const chainId = useChainId();
  const { isConnected } = useAccount();

  if (!isConnected) return null;

  const currentChain = chains.find(chain => chain.id === chainId);
  const isSupported = !!currentChain;

  const getNetworkStatus = () => {
    if (!isSupported) {
      return {
        icon: AlertTriangle,
        color: 'text-red-400',
        bgColor: 'bg-red-500/20',
        borderColor: 'border-red-500/30',
        message: 'Unsupported Network',
        description: 'Please switch to a supported network'
      };
    }

    return {
      icon: Wifi,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
      message: currentChain.name,
      description: 'Connected'
    };
  };

  const status = getNetworkStatus();
  const Icon = status.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg backdrop-blur-md border ${status.bgColor} ${status.borderColor}`}
    >
      <Icon className={`w-4 h-4 ${status.color}`} />
      <div className="flex flex-col">
        <span className={`text-sm font-medium ${status.color}`}>
          {status.message}
        </span>
        <span className="text-xs text-gray-400">
          {status.description}
        </span>
      </div>
    </motion.div>
  );
};

export default NetworkStatus;