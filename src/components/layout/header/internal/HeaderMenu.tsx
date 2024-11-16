import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function HeaderMenu() {
  return (
    <Tabs defaultValue="Overview">
      <TabsList>
        <TabsTrigger value="Overview">Overview</TabsTrigger>
        <TabsTrigger value="Characters">Characters</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
