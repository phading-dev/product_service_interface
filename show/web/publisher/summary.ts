import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { VideoContainer, VIDEO_CONTAINER } from '../../video_container';
import { EpisodeState, EPISODE_STATE } from '../../episode_state';

export interface EpisodeSummary {
  episodeId?: string,
  index?: number,
  name?: string,
  videoContainer?: VideoContainer,
  state?: EpisodeState,
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
    name: 'videoContainer',
    index: 4,
    messageType: VIDEO_CONTAINER,
  }, {
    name: 'state',
    index: 5,
    enumType: EPISODE_STATE,
  }, {
    name: 'premiereTimeMs',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SeasonSummary {
  seasonId?: string,
  name?: string,
  coverImageUrl?: string,
  totalPublishedEpisodes?: number,
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
    name: 'lastChangeTimeMs',
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
