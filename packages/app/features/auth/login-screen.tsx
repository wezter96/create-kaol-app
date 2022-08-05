import { useAuth } from 'app/provider/AuthProvider'
import { TextLink } from 'solito/link'
import { Button } from 'app/components/Button'
import { useEffect } from 'react'
import { useRouter } from 'solito/router'
import { Text, View } from 'universal'
import { styled } from 'universal/tailwind/tailwind'

const Card = styled(
  View,
  'bg-white shadow-sm mb-4 rounded-lg p-6 border max-w-lg w-full'
)

export function LoginScreen() {
  const router = useRouter()
  const {
    isAuthenticated,
    signIn,
    signInLoading,
    signUp,
    signUpLoading,
    errorMessage,
  } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [router, isAuthenticated])

  return (
    <View tw="flex-1 justify-center items-center p-4">
      <Card>
        <Button
          disabled={signInLoading}
          onPress={() => {
            signIn({ email: 'example@gmail.com', password: 'password' })
          }}
        >
          Login
        </Button>
        <Button
          disabled={signUpLoading}
          onPress={() => {
            signUp({ email: 'example@gmail.com', password: 'password' })
          }}
        >
          Signup
        </Button>

        <Text tw="text-red-600">{errorMessage}</Text>

        <TextLink href="/">👈 Go Home</TextLink>
      </Card>
    </View>
  )
}