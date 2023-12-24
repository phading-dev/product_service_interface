import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface ShowSnapshot {
  id?: string,
  title?: string,
  coverImagePath?: string,
/* Timestamp in sec. Empty means not published yet but may be pending published. */
  publishedTime?: number,
  hasError?: boolean,
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
    {
      name: 'hasError',
      primitiveType: PrimitiveType.BOOLEAN,
    },
  ]
};
