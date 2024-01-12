import { SignIn } from '@clerk/nextjs'

export default function LoginPage() {
  return (
    <SignIn
      appearance={{
        elements: {
          internal: {
            display: 'none',
          },
        },
      }}
    />
  )
}
