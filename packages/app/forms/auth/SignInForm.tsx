import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, Form, H3, Input } from '@my/ui'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { signInSchema } from '../../validations'

type SignInFormProps = {
  onSubmit: (data: z.infer<typeof signInSchema>) => void
}

export default function SignInForm(props: SignInFormProps) {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  })

  return (
    <Card px={'$4'} py={'$2'} pb={'$4'} style={{ width: '24vw' }}>
      <Card.Header>
        <H3>Sign In</H3>
      </Card.Header>
      <Form
        gap={'$4'}
        onSubmit={form.handleSubmit(props.onSubmit)}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Input
          onChangeText={text => form.setValue("email", text)}
          placeholder="Email"
          inputMode='text'
        />
        <Input onChangeText={text => form.setValue("password", text)} secureTextEntry placeholder="Password" />
        <Form.Trigger>
          <Button>Sign In</Button>
        </Form.Trigger>
      </Form>
    </Card>
  )
}
