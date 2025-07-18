import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { EpisodeState, EPISODE_STATE } from '../../episode_state';
import { VideoContainerCached, VIDEO_CONTAINER_CACHED } from '../../video_container_cached';
import { VideoContainer, VIDEO_CONTAINER } from '@phading/video_service_interface/node/video_container';
import { SeasonState, SEASON_STATE } from '../../season_state';

export interface EpisodeDetails {
  seasonName?: string,
  episodeName?: string,
  state?: EpisodeState,
  episodeIndex?: number,
  totalPublishedEpisodes?: number,
  premiereTimeMs?: number,
  canPlay?: boolean,
  videoContainerCached?: VideoContainerCached,
  videoUrl?: string,
  videoContainer?: VideoContainer,
}

export let EPISODE_DETAILS: MessageDescriptor<EpisodeDetails> = {
  name: 'EpisodeDetails',
  fields: [{
    name: 'seasonName',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeName',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'state',
    index: 3,
    enumType: EPISODE_STATE,
  }, {
    name: 'episodeIndex',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'totalPublishedEpisodes',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'premiereTimeMs',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'canPlay',
    index: 7,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'videoContainerCached',
    index: 8,
    messageType: VIDEO_CONTAINER_CACHED,
  }, {
    name: 'videoUrl',
    index: 9,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'videoContainer',
    index: 10,
    messageType: VIDEO_CONTAINER,
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
  name?: string,
  description?: string,
  coverImageUrl?: string,
  totalPublishedEpisodes?: number,
  grade?: number,
  nextGrade?: NextGrade,
  createdTimeMs?: number,
  lastChangeTimeMs?: number,
  state?: SeasonState,
  takeDownReason?: string,
  averageRating?: number,
}

export let SEASON_DETAILS: MessageDescriptor<SeasonDetails> = {
  name: 'SeasonDetails',
  fields: [{
    name: 'name',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'description',
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
    name: 'nextGrade',
    index: 6,
    messageType: NEXT_GRADE,
  }, {
    name: 'createdTimeMs',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'lastChangeTimeMs',
    index: 8,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'state',
    index: 9,
    enumType: SEASON_STATE,
  }, {
    name: 'takeDownReason',
    index: 10,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'averageRating',
    index: 11,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
