import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { SeasonDetails, SEASON_DETAILS, EpisodeSummary, EPISODE_SUMMARY } from './season_details';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetSeasonDetailsRequestBody {
  seasonId?: string,
}

export let GET_SEASON_DETAILS_REQUEST_BODY: MessageDescriptor<GetSeasonDetailsRequestBody> = {
  name: 'GetSeasonDetailsRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetSeasonDetailsResponse {
  seasonDetails?: SeasonDetails,
}

export let GET_SEASON_DETAILS_RESPONSE: MessageDescriptor<GetSeasonDetailsResponse> = {
  name: 'GetSeasonDetailsResponse',
  fields: [{
    name: 'seasonDetails',
    index: 1,
    messageType: SEASON_DETAILS,
  }],
};

export interface GetVideoToPlayRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let GET_VIDEO_TO_PLAY_REQUEST_BODY: MessageDescriptor<GetVideoToPlayRequestBody> = {
  name: 'GetVideoToPlayRequestBody',
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

export interface GetVideoToPlayResponse {
  videoUrl?: string,
  continueTimeMs?: number,
}

export let GET_VIDEO_TO_PLAY_RESPONSE: MessageDescriptor<GetVideoToPlayResponse> = {
  name: 'GetVideoToPlayResponse',
  fields: [{
    name: 'videoUrl',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'continueTimeMs',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GetMoreEpisodesRequestBody {
  seasonId?: string,
  indexCursor?: number,
  next?: boolean,
}

export let GET_MORE_EPISODES_REQUEST_BODY: MessageDescriptor<GetMoreEpisodesRequestBody> = {
  name: 'GetMoreEpisodesRequestBody',
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

export interface GetMoreEpisodesResponse {
  episodes?: Array<EpisodeSummary>,
  indexCursor?: number,
}

export let GET_MORE_EPISODES_RESPONSE: MessageDescriptor<GetMoreEpisodesResponse> = {
  name: 'GetMoreEpisodesResponse',
  fields: [{
    name: 'episodes',
    index: 1,
    messageType: EPISODE_SUMMARY,
    isArray: true,
  }, {
    name: 'indexCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export let GET_SEASON_DETAILS: WebRemoteCallDescriptor = {
  name: "GetSeasonDetails",
  path: "/GetSeasonDetails",
  body: {
    messageType: GET_SEASON_DETAILS_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: GET_SEASON_DETAILS_RESPONSE,
  },
}

export let GET_VIDEO_TO_PLAY: WebRemoteCallDescriptor = {
  name: "GetVideoToPlay",
  path: "/GetVideoToPlay",
  body: {
    messageType: GET_VIDEO_TO_PLAY_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: GET_VIDEO_TO_PLAY_RESPONSE,
  },
}

export let GET_MORE_EPISODES: WebRemoteCallDescriptor = {
  name: "GetMoreEpisodes",
  path: "/GetMoreEpisodes",
  body: {
    messageType: GET_MORE_EPISODES_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: GET_MORE_EPISODES_RESPONSE,
  },
}
