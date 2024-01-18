import { Flex, LogoutButton } from 'app/components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Heading, Nav, Text, XStack } from 'tamagui'
import { useUserSession } from './hooks'

export default function Navbar() {
  const router = useRouter()
  const session = useUserSession()

  return (
    <Nav px={'$10'} py={'$3'}>
      <Flex justifyContent="space-between">
        <Heading onPress={() => router.push('/')}>Logo</Heading>
        <Flex>
          <Link style={{ textDecorationLine: 'none' }} href={'/dashboard'}>
            {session.authenticated && <Text hoverStyle={{ textDecorationLine: 'underline' }}>Dashboard</Text>}
          </Link>
        </Flex>
        {session.authenticated ? (
          <XStack space alignItems='center'>
            <Text>{session.user?.email}</Text>
            <LogoutButton onPress={session.logout}/>
          </XStack>
        ) : (
          <Button onPress={() => router.push('/sign-in')}>Sign In</Button>
        )}
      </Flex>
    </Nav>
  )
}
