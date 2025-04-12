import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { VideoContainer, VIDEO_CONTAINER } from '@phading/video_service_interface/node/video_container';
import { EpisodeState, EPISODE_STATE } from '../../episode_state';
import { SeasonState, SEASON_STATE } from '../../season_state';

export interface EpisodeDetails {
  seasonName?: string,
  episodeName?: string,
  episodeIndex?: number,
  videoContainer?: VideoContainer,
  state?: EpisodeState,
  premierTimeMs?: number,
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
    name: 'episodeIndex',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'videoContainer',
    index: 4,
    messageType: VIDEO_CONTAINER,
  }, {
    name: 'state',
    index: 5,
    enumType: EPISODE_STATE,
  }, {
    name: 'premierTimeMs',
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
  name?: string,
  description?: string,
  coverImageUrl?: string,
  totalEpisodes?: number,
  grade?: number,
  nextGrade?: NextGrade,
  createdTimeMs?: number,
  lastChangeTimeMs?: number,
  state?: SeasonState,
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
    name: 'totalEpisodes',
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
    name: 'averageRating',
    index: 10,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
