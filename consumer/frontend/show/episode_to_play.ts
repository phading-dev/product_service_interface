import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface EpisodeToPlay {
  episodeId?: string,
  name?: string,
  videoPath?: string,
/* Timestamp in seconds. */
  continueTimestamp?: number,
/* Timestamp in seconds. */
  publishedTime?: number,
}

export let EPISODE_TO_PLAY: MessageDescriptor<EpisodeToPlay> = {
  name: 'EpisodeToPlay',
  fields: [
    {
      name: 'episodeId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'videoPath',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'continueTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'publishedTime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
