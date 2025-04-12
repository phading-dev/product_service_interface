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
  publisherId?: string,
  name?: string,
  description?: string,
  coverImageUrl?: string,
  grade?: number,
  nextGrade?: NextGrade,
  totalEpisodes?: number,
  averageRating?: number,
}

export let SEASON_DETAILS: MessageDescriptor<SeasonDetails> = {
  name: 'SeasonDetails',
  fields: [{
    name: 'publisherId',
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
    name: 'coverImageUrl',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'grade',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'nextGrade',
    index: 6,
    messageType: NEXT_GRADE,
  }, {
    name: 'totalEpisodes',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'averageRating',
    index: 8,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
