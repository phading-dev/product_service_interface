import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { EpisodeSummary, EPISODE_SUMMARY } from './episode_summary';

export interface SeasonSummary {
  seasonId?: string,
  publisherId?: string,
  name?: string,
  coverImageUrl?: string,
  grade?: number,
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
    name: 'grade',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'totalEpisodes',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'averageRating',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ContinueSeason {
  season?: SeasonSummary,
  episode?: EpisodeSummary,
}

export let CONTINUE_SEASON: MessageDescriptor<ContinueSeason> = {
  name: 'ContinueSeason',
  fields: [{
    name: 'season',
    index: 1,
    messageType: SEASON_SUMMARY,
  }, {
    name: 'episode',
    index: 2,
    messageType: EPISODE_SUMMARY,
  }],
};
