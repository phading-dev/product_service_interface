import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface ShowSnapshot {
  id?: string,
  title?: string,
  coverImagePath?: string,
  publishedTime?: number,
}

export let SHOW_SNAPSHOT: MessageDescriptor<ShowSnapshot> = {
  name: 'ShowSnapshot',
  fields: [
    {
      name: 'id',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'title',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'coverImagePath',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'publishedTime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
