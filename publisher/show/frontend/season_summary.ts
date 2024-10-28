import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface SeasonSummary {
  seasonId?: string,
  name?: string,
  coverImageUrl?: string,
  totalEpisodes?: number,
  lastChangeTimeMs?: number,
}

export let SEASON_SUMMARY: MessageDescriptor<SeasonSummary> = {
  name: 'SeasonSummary',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'coverImageUrl',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'totalEpisodes',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'lastChangeTimeMs',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
