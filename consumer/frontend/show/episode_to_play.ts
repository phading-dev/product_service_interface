import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface Episode {
  episodeId?: string,
  videoPath?: string,
/* Timestamp in seconds. */
  continueTimestamp?: number,
}

export let EPISODE: MessageDescriptor<Episode> = {
  name: 'Episode',
  fields: [
    {
      name: 'episodeId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'videoPath',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'continueTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface SeasonDetail {
  seasonId?: string,
  name?: string,
  description?: string,
  coverImagePath?: string,
/* Small number means low quality and price. */
  grade?: number,
}

export let SEASON_DETAIL: MessageDescriptor<SeasonDetail> = {
  name: 'SeasonDetail',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'description',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'coverImagePath',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'grade',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface EpisodeSummary {
  episodeId?: string,
  name?: string,
/* Video length in seconds. */
  length?: number,
/* Timestamp in seconds. */
  publishedTime?: number,
}

export let EPISODE_SUMMARY: MessageDescriptor<EpisodeSummary> = {
  name: 'EpisodeSummary',
  fields: [
    {
      name: 'episodeId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'length',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'publishedTime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface PublisherSummary {
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let PUBLISHER_SUMMARY: MessageDescriptor<PublisherSummary> = {
  name: 'PublisherSummary',
  fields: [
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'naturalName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'avatarSmallPath',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface EpisodeToPlay {
  season?: SeasonDetail,
  episode?: Episode,
  episodes?: Array<EpisodeSummary>,
  publisher?: PublisherSummary,
}

export let EPISODE_TO_PLAY: MessageDescriptor<EpisodeToPlay> = {
  name: 'EpisodeToPlay',
  fields: [
    {
      name: 'season',
      messageType: SEASON_DETAIL,
    },
    {
      name: 'episode',
      messageType: EPISODE,
    },
    {
      name: 'episodes',
      messageType: EPISODE_SUMMARY,
      isArray: true,
    },
    {
      name: 'publisher',
      messageType: PUBLISHER_SUMMARY,
    },
  ]
};
