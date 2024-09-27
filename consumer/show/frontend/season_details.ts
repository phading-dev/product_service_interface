import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface PublisherSummary {
  accountId?: string,
  name?: string,
  avatarSmallUrl?: string,
}

export let PUBLISHER_SUMMARY: MessageDescriptor<PublisherSummary> = {
  name: 'PublisherSummary',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarSmallUrl',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface EpisodeSummary {
  episodeId?: string,
  name?: string,
  index?: number,
  videoLength?: number,
  upcomingPremierTimestamp?: number,
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
    name: 'index',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'videoLength',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'upcomingPremierTimestamp',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SeasonDetails {
  seasonId?: string,
  publisher?: PublisherSummary,
  name?: string,
  description?: string,
  coverImageUrl?: string,
  grade?: number,
  totalEpisodes?: number,
  continueEpisode?: EpisodeSummary,
  continueTimestampstamp?: number,
}

export let SEASON_DETAILS: MessageDescriptor<SeasonDetails> = {
  name: 'SeasonDetails',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'publisher',
    index: 2,
    messageType: PUBLISHER_SUMMARY,
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
    name: 'totalEpisodes',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'continueEpisode',
    index: 8,
    messageType: EPISODE_SUMMARY,
  }, {
    name: 'continueTimestampstamp',
    index: 9,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
