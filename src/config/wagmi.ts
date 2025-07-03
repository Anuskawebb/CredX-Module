import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, arbitrum, optimism } from 'wagmi/chains';

export const wagmiConfig = getDefaultConfig({
  appName: 'CredX',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Replace with your WalletConnect project ID
  chains: [mainnet, polygon, arbitrum, optimism],
  ssr: false,
});