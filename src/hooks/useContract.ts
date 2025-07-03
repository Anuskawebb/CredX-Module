import { useAccount, useWriteContract, useReadContract } from 'wagmi';
import { CONTRACTS } from '../contracts/config';

export function useCredXVault() {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  const { data: vaultData } = useReadContract({
    address: CONTRACTS.CREDX_VAULT.address,
    abi: CONTRACTS.CREDX_VAULT.abi,
    functionName: 'getUserVault',
    args: address ? [address] : undefined,
  });

  const depositCollateral = async (amount: bigint) => {
    return writeContract({
      address: CONTRACTS.CREDX_VAULT.address,
      abi: CONTRACTS.CREDX_VAULT.abi,
      functionName: 'depositCollateral',
      value: amount,
    });
  };

  const borrowUSDC = async (amount: bigint) => {
    return writeContract({
      address: CONTRACTS.CREDX_VAULT.address,
      abi: CONTRACTS.CREDX_VAULT.abi,
      functionName: 'borrowUSDC',
      args: [amount],
    });
  };

  const repayLoan = async (amount: bigint) => {
    return writeContract({
      address: CONTRACTS.CREDX_VAULT.address,
      abi: CONTRACTS.CREDX_VAULT.abi,
      functionName: 'repayLoan',
      args: [amount],
    });
  };

  return {
    vaultData,
    depositCollateral,
    borrowUSDC,
    repayLoan,
  };
}

// Mock data for development
export const mockVaultData = {
  collateral: '5.5', // ETH
  borrowed: '8400', // USDC
  ltv: 65,
  repaymentDue: '2024-03-15',
  zkScore: 750,
  cardBalance: '1,250.00'
};

export const mockTransactions = [
  { id: '1', action: 'Borrow', amount: '2,500 USDC', date: '2024-01-15', status: 'Completed' },
  { id: '2', action: 'Spend', amount: '89.50 USDC', date: '2024-01-14', status: 'Completed' },
  { id: '3', action: 'Deposit', amount: '2.0 ETH', date: '2024-01-10', status: 'Completed' },
  { id: '4', action: 'Repay', amount: '500 USDC', date: '2024-01-08', status: 'Completed' },
];