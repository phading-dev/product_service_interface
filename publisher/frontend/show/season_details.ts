import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export enum PublishState {
  DRAFT = 1,
  SCHEDULED = 2,
  PUBLISHED = 3,
}

export let PUBLISH_STATE: EnumDescriptor<PublishState> = {
  name: 'PublishState',
  values: [{
    name: 'DRAFT',
    value: 1,
  }, {
    name: 'SCHEDULED',
    value: 2,
  }, {
    name: 'PUBLISHED',
    value: 3,
  }]
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
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'videoPath',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'publishTime',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'state',
    index: 5,
    enumType: PUBLISH_STATE,
  }, {
    name: 'createdTime',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }],
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
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'description',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'coverImagePath',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'grade',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'episodes',
    index: 6,
    messageType: EPISODE,
    isArray: true,
  }, {
    name: 'createdTime',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
