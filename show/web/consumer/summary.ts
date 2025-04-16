import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface EpisodeSummary {
  episodeId?: string,
  index?: number,
  name?: string,
  videoDurationSec?: number,
  premiereTimeMs?: number,
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
    name: 'premiereTimeMs',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ContinueEpisode {
  episode?: EpisodeSummary,
  continueTimeMs?: number,
}

export let CONTINUE_EPISODE: MessageDescriptor<ContinueEpisode> = {
  name: 'ContinueEpisode',
  fields: [{
    name: 'episode',
    index: 1,
    messageType: EPISODE_SUMMARY,
  }, {
    name: 'continueTimeMs',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SeasonSummary {
  seasonId?: string,
  publisherId?: string,
  name?: string,
  coverImageUrl?: string,
  grade?: number,
  totalEpisodes?: number,
  averageRating?: number,
  ratingsCount?: number,
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
  }, {
    name: 'ratingsCount',
    index: 8,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ContinueSeason {
  season?: SeasonSummary,
  episode?: EpisodeSummary,
  continueTimeMs?: number,
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
  }, {
    name: 'continueTimeMs',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SeasonAndEpisodeSummary {
  season?: SeasonSummary,
  episode?: EpisodeSummary,
}

export let SEASON_AND_EPISODE_SUMMARY: MessageDescriptor<SeasonAndEpisodeSummary> = {
  name: 'SeasonAndEpisodeSummary',
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
