import type { Address } from 'viem'

// Environment name
export const ENV_NAME = process.env.NEXT_PUBLIC_ENV_NAME as string

// API endpoint
export const SERVER_ENDPOINT_URL = process.env
  .NEXT_PUBLIC_SERVER_ENDPOINT_URL as string

// Contract address
export const CONTRACT_ADDRESS = process.env
  .NEXT_PUBLIC_CONTRACT_ADDRESS as Address

// RPC URL
export const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL as string

// Project Id
export const PROJECT_ID = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string
