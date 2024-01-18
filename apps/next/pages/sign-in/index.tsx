import { useMutation, useQueryClient } from '@tanstack/react-query'
import SignInForm from 'app/forms/auth/SignInForm'
import { signInSchema } from 'app/validations'
import withHydration from 'components/hoc/with-hydration'
import { useRouter } from 'next/router'
import { XStack } from 'tamagui'
import { z } from 'zod'

function SignInPage() {
  const router = useRouter()
  const queryClient = useQueryClient()

  const signInMutation = useMutation({
    mutationKey: ['signIn'],
    mutationFn: async (data: z.infer<typeof signInSchema>) => {
      if (!data.email || data.email !== "test@gmail.com") {
        throw new Error('Email is required or incorrect')
      }
      if (data.password !== "12345678") {
        throw new Error('Password is incorrect')
      }
      return data
    },
    onSettled(data) {
      sessionStorage.setItem('user', JSON.stringify(data))
      router.push('/')
      queryClient.invalidateQueries({ queryKey: ["userSession"] })
    },
  })

  return (
    <XStack
      display="flex"
      fullscreen
      justifyContent="center"
      alignItems="center"
      backgroundColor={'$background'}
      style={{ height: '100vh' }}
    >
      <SignInForm onSubmit={signInMutation.mutate} />
    </XStack>
  )
}

export default withHydration(SignInPage)
