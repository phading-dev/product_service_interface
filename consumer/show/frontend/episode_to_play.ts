import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface Episode {
  episodeId?: string,
  videoUrl?: string,
  continueTimestamp?: number,
}

export let EPISODE: MessageDescriptor<Episode> = {
  name: 'Episode',
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'videoUrl',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'continueTimestamp',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SeasonDetail {
  seasonId?: string,
  name?: string,
  description?: string,
  coverImageUrl?: string,
  grade?: string,
}

export let SEASON_DETAIL: MessageDescriptor<SeasonDetail> = {
  name: 'SeasonDetail',
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
    name: 'coverImageUrl',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'grade',
    index: 5,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface EpisodeSummary {
  episodeId?: string,
  name?: string,
  videoLength?: number,
  upcomingAirTime?: number,
}

export let EPISODE_SUMMARY: MessageDescriptor<EpisodeSummary> = {
  name: 'EpisodeSummary',
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'videoLength',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'upcomingAirTime',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface PublisherSummary {
  accountId?: string,
  naturalName?: string,
  avatarSmallUrl?: string,
}

export let PUBLISHER_SUMMARY: MessageDescriptor<PublisherSummary> = {
  name: 'PublisherSummary',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'naturalName',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarSmallUrl',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface EpisodeToPlay {
  season?: SeasonDetail,
  episode?: Episode,
  episodes?: Array<EpisodeSummary>,
  prevIndexCursor?: number,
  nextIndexCursor?: number,
  publisher?: PublisherSummary,
}

export let EPISODE_TO_PLAY: MessageDescriptor<EpisodeToPlay> = {
  name: 'EpisodeToPlay',
  fields: [{
    name: 'season',
    index: 1,
    messageType: SEASON_DETAIL,
  }, {
    name: 'episode',
    index: 2,
    messageType: EPISODE,
  }, {
    name: 'episodes',
    index: 3,
    messageType: EPISODE_SUMMARY,
    isArray: true,
  }, {
    name: 'prevIndexCursor',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'nextIndexCursor',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'publisher',
    index: 6,
    messageType: PUBLISHER_SUMMARY,
  }],
};
