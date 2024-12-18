import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { SeasonState, SEASON_STATE } from './season_state';

export interface AudioTrack {
  name?: string,
  isDefault?: boolean,
}

export let AUDIO_TRACK: MessageDescriptor<AudioTrack> = {
  name: 'AudioTrack',
  fields: [{
    name: 'name',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'isDefault',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface SubtitleTrack {
  name?: string,
  isDefault?: boolean,
}

export let SUBTITLE_TRACK: MessageDescriptor<SubtitleTrack> = {
  name: 'SubtitleTrack',
  fields: [{
    name: 'name',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'isDefault',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface VideoContainer {
  version?: number,
  r2RootDirname?: string,
  r2MasterPlaylistFilename?: string,
  durationSec?: number,
  resolution?: string,
  audioTracks?: Array<AudioTrack>,
  subtitleTracks?: Array<SubtitleTrack>,
  totalBytes?: number,
}

export let VIDEO_CONTAINER: MessageDescriptor<VideoContainer> = {
  name: 'VideoContainer',
  fields: [{
    name: 'version',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'r2RootDirname',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2MasterPlaylistFilename',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'durationSec',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'resolution',
    index: 5,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'audioTracks',
    index: 6,
    messageType: AUDIO_TRACK,
    isArray: true,
  }, {
    name: 'subtitleTracks',
    index: 7,
    messageType: SUBTITLE_TRACK,
    isArray: true,
  }, {
    name: 'totalBytes',
    index: 8,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface Episode {
  episodeId?: string,
  name?: string,
  videoContainerId?: string,
  videoContainer?: VideoContainer,
  publishTimeMs?: number,
  premierTimeMs?: number,
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
    name: 'videoContainerId',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'videoContainer',
    index: 4,
    messageType: VIDEO_CONTAINER,
  }, {
    name: 'publishTimeMs',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'premierTimeMs',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface NextGrade {
  grade?: number,
  effectiveDate?: number,
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
  createdTimeMs?: number,
  lastChangeTimeMs?: number,
  state?: SeasonState,
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
    name: 'createdTimeMs',
    index: 8,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'lastChangeTimeMs',
    index: 9,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'state',
    index: 10,
    enumType: SEASON_STATE,
  }],
};
