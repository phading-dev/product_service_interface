import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { VideoState, VIDEO_STATE } from '../video_state';
import { ResumableVideoUpload, RESUMABLE_VIDEO_UPLOAD } from '../resumable_video_upload';
import { SeasonState, SEASON_STATE } from '../season_state';

export interface EpisodeDraft {
  episodeId?: string,
  name?: string,
  videoState?: VideoState,
  resumableVideoUpload?: ResumableVideoUpload,
  videoUploadedTimestamp?: number,
  videoLength?: number,
  videoSize?: number,
}

export let EPISODE_DRAFT: MessageDescriptor<EpisodeDraft> = {
  name: 'EpisodeDraft',
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'videoState',
    index: 3,
    enumType: VIDEO_STATE,
  }, {
    name: 'resumableVideoUpload',
    index: 4,
    messageType: RESUMABLE_VIDEO_UPLOAD,
  }, {
    name: 'videoUploadedTimestamp',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'videoLength',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'videoSize',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface Episode {
  episodeId?: string,
  name?: string,
  index?: number,
  videoLength?: number,
  videoSize?: number,
  publishedTimestamps?: number,
  premierTimestamp?: number,
}

export let EPISODE: MessageDescriptor<Episode> = {
  name: 'Episode',
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
    name: 'videoSize',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'publishedTimestamps',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'premierTimestamp',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface NextGrade {
  grade?: number,
  effectiveTimestamp?: number,
}

export let NEXT_GRADE: MessageDescriptor<NextGrade> = {
  name: 'NextGrade',
  fields: [{
    name: 'grade',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'effectiveTimestamp',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SeasonDetails {
  seasonId?: string,
  name?: string,
  description?: string,
  coverImageUrl?: string,
  totalEpisodes?: number,
  grade?: number,
  nextGrade?: NextGrade,
  createdTimestamp?: number,
  lastChangeTimestamp?: number,
  state?: SeasonState,
  publishedTimestamp?: number,
  archivedTimestamp?: number,
}

export let SEASON_DETAILS: MessageDescriptor<SeasonDetails> = {
  name: 'SeasonDetails',
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
    name: 'totalEpisodes',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'grade',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'nextGrade',
    index: 7,
    messageType: NEXT_GRADE,
  }, {
    name: 'createdTimestamp',
    index: 8,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'lastChangeTimestamp',
    index: 9,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'state',
    index: 10,
    enumType: SEASON_STATE,
  }, {
    name: 'publishedTimestamp',
    index: 11,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'archivedTimestamp',
    index: 12,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
