import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface SeasonSummary {
  seasonId?: string,
  publisherId?: string,
  name?: string,
  coverImageUrl?: string,
  totalEpisodes?: number,
  averageRating?: number,
}

export let SEASON_SUMMARY: MessageDescriptor<SeasonSummary> = {
  name: 'SeasonSummary',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'publisherId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'coverImageUrl',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'totalEpisodes',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'averageRating',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
