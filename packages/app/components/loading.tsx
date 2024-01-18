import { Spinner, SpinnerProps, XStack } from '@my/ui'

export const LoadingSpinner = (props: SpinnerProps) => {
  return (
    <XStack alignItems="center" height={'$20'} style={{ width: '95vw' }} justifyContent="center">
      <Spinner size="large" {...props} />
    </XStack>
  )
}
