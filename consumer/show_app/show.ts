import { EnumDescriptor, MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AccountSnapshot, ACCOUNT_SNAPSHOT } from '@phading/user_service_interface/third_person/account';

export enum Liking {
  NEUTRAL = 1,
  LIKE = 2,
  DISLIKE = 3,
}

export let LIKING: EnumDescriptor<Liking> = {
  name: 'Liking',
  values: [
    {
      name: 'NEUTRAL',
      value: 1,
    },
    {
      name: 'LIKE',
      value: 2,
    },
    {
      name: 'DISLIKE',
      value: 3,
    },
  ]
}

export interface Show {
  showId?: string,
  name?: string,
  description?: string,
  videoPath?: string,
  coverImagePath?: string,
/* Timestamp in seconds. */
  publishedTime?: number,
  publisher?: AccountSnapshot,
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
    {
      name: 'publisher',
      messageType: ACCOUNT_SNAPSHOT,
    },
  ]
};

export interface ShowSnapshot {
  showId?: string,
  name?: string,
  coverImagePath?: string,
/* Video length in seconds. */
  length?: number,
/* Timestamp in seconds. */
  publishedTime?: number,
  publisher?: AccountSnapshot,
  liking?: Liking,
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
      name: 'length',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'publishedTime',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'publisher',
      messageType: ACCOUNT_SNAPSHOT,
    },
    {
      name: 'liking',
      enumType: LIKING,
    },
  ]
};
