import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface EpisodeDetails {
  index?: number,
  name?: string,
  videoDurationSec?: number,
  resolution?: string,
  premierTimeMs?: number,
  videoUrl?: string,
}

export let EPISODE_DETAILS: MessageDescriptor<EpisodeDetails> = {
  name: 'EpisodeDetails',
  fields: [{
    name: 'index',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'videoDurationSec',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'resolution',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'premierTimeMs',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'videoUrl',
    index: 6,
    primitiveType: PrimitiveType.STRING,
  }],
};
