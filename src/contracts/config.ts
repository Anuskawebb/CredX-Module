export const CONTRACTS = {
  CREDX_VAULT: {
    address: '0x1234567890123456789012345678901234567890' as `0x${string}`,
    abi: [
      {
        "inputs": [
          {"internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "depositCollateral",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {"internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "borrowUSDC",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {"internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "repayLoan",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {"internalType": "address", "name": "user", "type": "address"}
        ],
        "name": "getUserVault",
        "outputs": [
          {"internalType": "uint256", "name": "collateral", "type": "uint256"},
          {"internalType": "uint256", "name": "borrowed", "type": "uint256"},
          {"internalType": "uint256", "name": "ltv", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ] as const
  }
};

export const CHAIN_CONFIG = {
  mainnet: {
    id: 1,
    name: 'Ethereum',
    rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/your-api-key'
  },
  polygon: {
    id: 137,
    name: 'Polygon',
    rpcUrl: 'https://polygon-mainnet.g.alchemy.com/v2/your-api-key'
  }
};