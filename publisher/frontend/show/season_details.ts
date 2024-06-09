import { EnumDescriptor, MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export enum PublishState {
  DRAFT = 1,
  SCHEDULED = 2,
  PUBLISHED = 3,
}

export let PUBLISH_STATE: EnumDescriptor<PublishState> = {
  name: 'PublishState',
  values: [
    {
      name: 'DRAFT',
      value: 1,
    },
    {
      name: 'SCHEDULED',
      value: 2,
    },
    {
      name: 'PUBLISHED',
      value: 3,
    },
  ]
}

export interface Episode {
  episodeId?: string,
  name?: string,
  videoPath?: string,
/* Timestamp in seconds. */
  publishTime?: number,
  state?: PublishState,
/* Timestamp in seconds. */
  createdTime?: number,
}

export let EPISODE: MessageDescriptor<Episode> = {
  name: 'Episode',
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
      name: 'publishTime',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'state',
      enumType: PUBLISH_STATE,
    },
    {
      name: 'createdTime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface SeasonDetails {
  seasonId?: string,
  name?: string,
  description?: string,
  coverImagePath?: string,
  grade?: number,
  episodes?: Array<Episode>,
/* Timestamp in seconds. */
  createdTime?: number,
}

export let SEASON_DETAILS: MessageDescriptor<SeasonDetails> = {
  name: 'SeasonDetails',
  fields: [
    {
      name: 'seasonId',
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
      name: 'coverImagePath',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'grade',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'episodes',
      messageType: EPISODE,
      isArray: true,
    },
    {
      name: 'createdTime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
