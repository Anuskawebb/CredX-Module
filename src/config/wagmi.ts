import { createConfig, http } from 'wagmi';
import { mainnet, sepolia, polygon, arbitrum } from 'wagmi/chains';
import { metaMask } from 'wagmi/connectors';

// Configure chains with Sepolia as default
const chains = [sepolia, mainnet, polygon, arbitrum] as const;

// Create wagmi config with Sepolia as the first (default) chain
export const config = createConfig({
  chains,
  connectors: [
    metaMask({
      dappMetadata: {
        name: 'CredX',
        url: '', // Replace with your actual URL
        iconUrl: '', // Replace with your icon URL
      },
    }),
  ],
  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
  },
});

// Export chains for use in components
export { chains };