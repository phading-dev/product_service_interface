import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface Show {
  id?: string,
  title?: string,
  description?: string,
  videoPath?: string,
  coverImagePath?: string,
/* Timestamp in sec. Empty means in draft or unpublished. */
  scheduledPublishTime?: number,
/* Timestamp in sec. Empty means not published yet but may be pending published. */
  publishedTime?: number,
/* Any problem during publishing process. E.g. failed to encode the video, or failed to make a payment. */
  errorMessage?: string,
}

export let SHOW: MessageDescriptor<Show> = {
  name: 'Show',
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
      name: 'scheduledPublishTime',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'publishedTime',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'errorMessage',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
