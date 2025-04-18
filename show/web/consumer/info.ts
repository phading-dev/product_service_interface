import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface Episode {
  episodeId?: string,
  index?: number,
  name?: string,
  videoDurationSec?: number,
  resolution?: string,
  premiereTimeMs?: number,
}

export let EPISODE: MessageDescriptor<Episode> = {
  name: 'Episode',
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
    name: 'resolution',
    index: 5,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'premiereTimeMs',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface NextGrade {
  grade?: number,
  effectiveDate?: string,
}

export let NEXT_GRADE: MessageDescriptor<NextGrade> = {
  name: 'NextGrade',
  fields: [{
    name: 'grade',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'effectiveDate',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface SeasonDetails {
  seasonId?: string,
  publisherId?: string,
  name?: string,
  description?: string,
  coverImageUrl?: string,
  grade?: number,
  nextGrade?: NextGrade,
  totalEpisodes?: number,
  averageRating?: number,
  ratingsCount?: number,
}

export let SEASON_DETAILS: MessageDescriptor<SeasonDetails> = {
  name: 'SeasonDetails',
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
    name: 'description',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'coverImageUrl',
    index: 5,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'grade',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'nextGrade',
    index: 7,
    messageType: NEXT_GRADE,
  }, {
    name: 'totalEpisodes',
    index: 8,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'averageRating',
    index: 9,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'ratingsCount',
    index: 10,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SeasonSummary {
  seasonId?: string,
  publisherId?: string,
  name?: string,
  coverImageUrl?: string,
  grade?: number,
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
    name: 'averageRating',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'ratingsCount',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SeasonSummaryAndEpisode {
  season?: SeasonSummary,
  episode?: Episode,
}

export let SEASON_SUMMARY_AND_EPISODE: MessageDescriptor<SeasonSummaryAndEpisode> = {
  name: 'SeasonSummaryAndEpisode',
  fields: [{
    name: 'season',
    index: 1,
    messageType: SEASON_SUMMARY,
  }, {
    name: 'episode',
    index: 2,
    messageType: EPISODE,
  }],
};

export interface ContinueSeason {
  season?: SeasonSummary,
  episode?: Episode,
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
    messageType: EPISODE,
  }, {
    name: 'continueTimeMs',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ContinueEpisode {
  episode?: Episode,
  continueTimeMs?: number,
}

export let CONTINUE_EPISODE: MessageDescriptor<ContinueEpisode> = {
  name: 'ContinueEpisode',
  fields: [{
    name: 'episode',
    index: 1,
    messageType: EPISODE,
  }, {
    name: 'continueTimeMs',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
