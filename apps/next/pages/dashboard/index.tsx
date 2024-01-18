import { useQuery } from '@tanstack/react-query'
import { LoadingSpinner } from 'app/components'
import Posts from 'app/components/Posts'
import { PostType } from 'app/types'
import { useUserSession } from 'components/hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'



export default function DashboardPage() {
    const session = useUserSession()
    const router = useRouter()
    const getPostsQuery = useQuery({
        queryKey: ['getPosts'],
        queryFn: async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            return (await res.json()) as PostType[]
        },
    })
    
    useEffect(() => {
        if(!session.authenticated){
            router.push('/sign-in')
        }

    }, [session.authenticated])

    return <>
        {getPostsQuery.isLoading ? <LoadingSpinner /> : (getPostsQuery.data && <Posts posts={getPostsQuery.data} />)}
    </>
}

