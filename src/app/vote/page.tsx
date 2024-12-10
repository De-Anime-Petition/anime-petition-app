'use client'

import type { NFTId } from '@/types/nft'
import { NFTCard } from '@/components/common/NFTCard'
import { useToast } from '@/hooks/use-toast'
import useContract from '@/hooks/useContract'
import { useQuery } from '@tanstack/react-query'

export default function Vote() {
  const { isConnected, getAllNFTs, mintNft } = useContract()
  const { toast } = useToast()

  const { data: nfts = [], isLoading, refetch } = useQuery({
    queryKey: ['nfts'],
    queryFn: getAllNFTs,
    enabled: isConnected,
    staleTime: 1000 * 60 * 1,
  })

  const handleVote = (nftId: NFTId, count: number) => {
    mintNft({
      nftId,
      count,
      onSuccess: (data) => {
        console.log(data)
        toast({
          title: 'Success',
          description: 'NFT minted successfully',
        })
        refetch()
      },
      onError: (data) => {
        toast({
          title: 'Error',
          description: data.message,
          variant: 'destructive',
        })
      },
    })
  }

  if (!isConnected) {
    return (
      <div className="container m-auto py-8 text-center">
        <h1 className="mb-6 text-3xl font-bold">Please connect your wallet</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="container m-auto py-8 text-center">
        <h1 className="mb-6 text-3xl font-bold">Loading...</h1>
      </div>
    )
  }

  return (
    <div className="container m-auto py-8">
      <h1 className="mb-6 text-3xl font-bold">NFT Collection</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {nfts.length
          ? (
              nfts.map(nft => (
                <NFTCard
                  key={nft.id}
                  {...nft}
                  onVote={count => handleVote(nft.id, count)}
                />
              ))
            )
          : (
              <div className="text-center">No NFTs found</div>
            )}
      </div>
    </div>
  )
}
