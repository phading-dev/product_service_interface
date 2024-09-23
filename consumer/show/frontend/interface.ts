import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { EpisodeToPlay, EPISODE_TO_PLAY, EpisodeSummary, EPISODE_SUMMARY } from './episode_to_play';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetEpisodeToPlayRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let GET_EPISODE_TO_PLAY_REQUEST_BODY: MessageDescriptor<GetEpisodeToPlayRequestBody> = {
  name: 'GetEpisodeToPlayRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetEpisodeToPlayResponse {
  episode?: EpisodeToPlay,
}

export let GET_EPISODE_TO_PLAY_RESPONSE: MessageDescriptor<GetEpisodeToPlayResponse> = {
  name: 'GetEpisodeToPlayResponse',
  fields: [{
    name: 'episode',
    index: 1,
    messageType: EPISODE_TO_PLAY,
  }],
};

export interface GetVideoUrlRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let GET_VIDEO_URL_REQUEST_BODY: MessageDescriptor<GetVideoUrlRequestBody> = {
  name: 'GetVideoUrlRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetVideoUrlResponse {
  videoUrl?: string,
}

export let GET_VIDEO_URL_RESPONSE: MessageDescriptor<GetVideoUrlResponse> = {
  name: 'GetVideoUrlResponse',
  fields: [{
    name: 'videoUrl',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetMoreEpisdoesRequestBody {
  seasonId?: string,
  indexCursor?: number,
  next?: boolean,
}

export let GET_MORE_EPISDOES_REQUEST_BODY: MessageDescriptor<GetMoreEpisdoesRequestBody> = {
  name: 'GetMoreEpisdoesRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'indexCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'next',
    index: 3,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface GetMoreEpisdoesResponse {
  episodes?: EpisodeSummary,
  indexCursor?: number,
}

export let GET_MORE_EPISDOES_RESPONSE: MessageDescriptor<GetMoreEpisdoesResponse> = {
  name: 'GetMoreEpisdoesResponse',
  fields: [{
    name: 'episodes',
    index: 1,
    messageType: EPISODE_SUMMARY,
  }, {
    name: 'indexCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export let GET_EPISODE_TO_PLAY: WebRemoteCallDescriptor = {
  name: "GetEpisodeToPlay",
  path: "/GetEpisodeToPlay",
  body: {
    messageType: GET_EPISODE_TO_PLAY_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: GET_EPISODE_TO_PLAY_RESPONSE,
  },
}

export let GET_VIDEO_URL: WebRemoteCallDescriptor = {
  name: "GetVideoUrl",
  path: "/GetVideoUrl",
  body: {
    messageType: GET_VIDEO_URL_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: GET_VIDEO_URL_RESPONSE,
  },
}

export let GET_MORE_EPISDOES: WebRemoteCallDescriptor = {
  name: "GetMoreEpisdoes",
  path: "/GetMoreEpisdoes",
  body: {
    messageType: GET_MORE_EPISDOES_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: GET_MORE_EPISDOES_RESPONSE,
  },
}
