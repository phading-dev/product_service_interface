import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface EpisodeSummary {
  episodeId?: string,
  index?: number,
  name?: string,
  videoDurationSec?: number,
  premierTimeMs?: number,
  continueTimeMs?: number,
}

export let EPISODE_SUMMARY: MessageDescriptor<EpisodeSummary> = {
  name: 'EpisodeSummary',
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'index',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'name',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'videoDurationSec',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'premierTimeMs',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'continueTimeMs',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
