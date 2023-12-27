import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface Show {
  showId?: string,
  name?: string,
  description?: string,
  videoPath?: string,
  coverImagePath?: string,
  publishedTime?: number,
}

export let SHOW: MessageDescriptor<Show> = {
  name: 'Show',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'description',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'videoPath',
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

export interface ShowSnapshot {
  showId?: string,
  name?: string,
  coverImagePath?: string,
  publishedTime?: number,
}

export let SHOW_SNAPSHOT: MessageDescriptor<ShowSnapshot> = {
  name: 'ShowSnapshot',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
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
