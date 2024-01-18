import { Button, Text, XStack, YStack } from '@my/ui'
import { ChevronLeft, ChevronRight } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { PostType } from '../types'
import PostCard from './PostCard'
import { DashBoardWrapper } from './wrappers'

export default function Posts({ posts }: { posts: PostType[] }) {
  const [page, setPage] = useState(1)

  return (
    <YStack py={'$4'}>
      <DashBoardWrapper>
        {posts.slice(page * 10 - 10, page * 10).map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </DashBoardWrapper>
      <XStack justifyContent="center" space alignItems="center">
        <Button disabled={page === 1} onPress={() => setPage((p) => (p === 1 ? 1 : p - 1))}>
          <ChevronLeft />
        </Button>
        <Text>{page}</Text>
        <Button disabled={page * 10 === posts.length} onPress={() => setPage((p) => p + 1)}>
          <ChevronRight />
        </Button>
      </XStack>
    </YStack>
  )
}
