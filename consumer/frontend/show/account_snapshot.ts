import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface AccountSnapshot {
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let ACCOUNT_SNAPSHOT: MessageDescriptor<AccountSnapshot> = {
  name: 'AccountSnapshot',
  fields: [
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'naturalName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'avatarSmallPath',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
