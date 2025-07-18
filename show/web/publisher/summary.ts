import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { VideoContainerCached, VIDEO_CONTAINER_CACHED } from '../../video_container_cached';
import { EpisodeState, EPISODE_STATE } from '../../episode_state';
import { SeasonState, SEASON_STATE } from '../../season_state';

export interface EpisodeSummary {
  episodeId?: string,
  index?: number,
  name?: string,
  videoContainer?: VideoContainerCached,
  state?: EpisodeState,
  premiereTimeMs?: number,
  canPlay?: boolean,
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
    name: 'videoContainer',
    index: 4,
    messageType: VIDEO_CONTAINER_CACHED,
  }, {
    name: 'state',
    index: 5,
    enumType: EPISODE_STATE,
  }, {
    name: 'premiereTimeMs',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'canPlay',
    index: 7,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface SeasonSummary {
  seasonId?: string,
  name?: string,
  coverImageUrl?: string,
  totalPublishedEpisodes?: number,
  grade?: number,
  state?: SeasonState,
  lastChangeTimeMs?: number,
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
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'coverImageUrl',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'totalPublishedEpisodes',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'grade',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'state',
    index: 6,
    enumType: SEASON_STATE,
  }, {
    name: 'lastChangeTimeMs',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'averageRating',
    index: 8,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'ratingsCount',
    index: 9,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
