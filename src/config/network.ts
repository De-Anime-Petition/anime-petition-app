import type { Chain } from 'viem'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { linea, lineaSepolia, lineaTestnet } from 'wagmi/chains'

import { ENV_NAME, PROJECT_ID, RPC_URL } from './env'

export const anvilChain: Chain = {
  id: 31337, // Anvil 默认 chainId
  name: 'Anvil',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: [RPC_URL] },
    public: { http: [RPC_URL] },
  },
}

export const config = getDefaultConfig({
  appName: 'anime petition',
  projectId: PROJECT_ID,
  chains:
    ENV_NAME === 'development'
      ? [anvilChain, lineaSepolia, linea, lineaTestnet]
      : [lineaSepolia, linea, lineaTestnet],
})
