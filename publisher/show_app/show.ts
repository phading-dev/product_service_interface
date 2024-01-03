import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface Show {
  showId?: string,
  name?: string,
  description?: string,
  videoPath?: string,
  coverImagePath?: string,
/* Video length in seconds. */
  length?: number,
/* Timestamp in sec. Empty means in draft or unpublished. */
  scheduledPublishTime?: number,
/* Timestamp in sec. Empty means not published yet but may be pending published. */
  publishedTime?: number,
/* Any problem during publishing process. E.g. failed to encode the video, or failed to make a payment. */
  errorMessages?: Array<string>,
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
      name: 'length',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'scheduledPublishTime',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'publishedTime',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'errorMessages',
      primitiveType: PrimitiveType.STRING,
      isArray: true,
    },
  ]
};

export interface ShowSnapshot {
  showId?: string,
  name?: string,
  coverImagePath?: string,
/* Video length in seconds. */
  length?: number,
/* Timestamp in sec. Empty means not published yet but may be pending published. */
  publishedTime?: number,
/* Show a message that there are errors the user should check. */
  showHasError?: boolean,
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
      name: 'showHasError',
      primitiveType: PrimitiveType.BOOLEAN,
    },
  ]
};
