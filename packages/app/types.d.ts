import { config } from '@my/config'

export type Conf = typeof config

declare module '@my/ui' {
  interface TamaguiCustomConfig extends Conf { }
}


export type PostType = {
  userId: number
  id: number
  title: string
  body: string
}
