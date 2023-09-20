import { EnumDescriptor } from '@selfage/message/descriptor';

export enum AppType {
  UNKNOWN = 0,
  CHAT = 1,
  SHOW = 2,
  MUSIC = 3,
}

export let APP_TYPE: EnumDescriptor<AppType> = {
  name: 'AppType',
  values: [
    {
      name: 'UNKNOWN',
      value: 0,
    },
    {
      name: 'CHAT',
      value: 1,
    },
    {
      name: 'SHOW',
      value: 2,
    },
    {
      name: 'MUSIC',
      value: 3,
    },
  ]
}
