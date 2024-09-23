import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { ResumableVideoUpload, RESUMABLE_VIDEO_UPLOAD } from '../resumable_video_upload';
import { SeasonState, SEASON_STATE } from '../season_state';

export interface EpisodeDraft {
  episodeId?: string,
  name?: string,
  createdTime?: number,
  lastChangeTime?: number,
  resumableVideoUpload?: ResumableVideoUpload,
  videoUploadCompleted?: boolean,
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
    name: 'createdTime',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'lastChangeTime',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'resumableVideoUpload',
    index: 5,
    messageType: RESUMABLE_VIDEO_UPLOAD,
  }, {
    name: 'videoUploadCompleted',
    index: 6,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'videoLength',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'videoSize',
    index: 8,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface Episode {
  episodeId?: string,
  name?: string,
  index?: number,
  videoLength?: number,
  videoSize?: number,
  publishedTime?: number,
  premierTime?: number,
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
    name: 'publishedTime',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'premierTime',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface NextGrade {
  grade?: number,
  effectiveTime?: number,
}

export let NEXT_GRADE: MessageDescriptor<NextGrade> = {
  name: 'NextGrade',
  fields: [{
    name: 'grade',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'effectiveTime',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SeasonDetails {
  seasonId?: string,
  name?: string,
  description?: string,
  coverImageUrl?: string,
  grade?: number,
  nextGrade?: NextGrade,
  createdTime?: number,
  lastChangeTime?: number,
  state?: SeasonState,
  publishedTime?: number,
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
    name: 'grade',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'nextGrade',
    index: 6,
    messageType: NEXT_GRADE,
  }, {
    name: 'createdTime',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'lastChangeTime',
    index: 8,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'state',
    index: 9,
    enumType: SEASON_STATE,
  }, {
    name: 'publishedTime',
    index: 10,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
