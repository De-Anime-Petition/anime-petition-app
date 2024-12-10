'use client'

import type { NFTData } from '@/types/nft'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import { useState } from 'react'
import { formatEther } from 'viem'

interface NFTCardProps extends NFTData {
  onVote: (quantity: number) => void
}

export function NFTCard({
  id,
  mintPrice,
  totalMinted,
  maxSupply,
  onVote,
  userMinted,
  metadata: {
    name,
    description,
    image,
  },
}: NFTCardProps) {
  const [voteQuantity, setVoteQuantity] = useState(1)
  const progress = Number(totalMinted) / Number(maxSupply) * 100

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg">
          {name}
          {' '}
          #
          {id}
        </CardTitle>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
        <div className="mt-4">
          <div className="mb-1 flex justify-between text-sm">
            <span>Voting Progress</span>
            <span>
              {Number(totalMinted)}
              /
              {Number(maxSupply)}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch gap-2 p-4 pt-0">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">
            {formatEther(mintPrice)}
            {' '}
            ETH
          </span>
          <span className="text-sm">
            Your votes:
            {Number(userMinted)}
          </span>
        </div>
        <div className="flex gap-2">
          <Input
            type="number"
            min="1"
            max="100"
            value={voteQuantity}
            onChange={e =>
              setVoteQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
            className="w-20"
          />
          <Button
            variant="outline"
            className="grow"
            onClick={() => onVote(voteQuantity)}
          >
            Vote
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
