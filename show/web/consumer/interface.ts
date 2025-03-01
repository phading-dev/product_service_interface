import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { SeasonDetails, SEASON_DETAILS } from './season_details';
import { EpisodeDetails, EPISODE_DETAILS } from './episode_details';
import { EpisodeSummary, EPISODE_SUMMARY } from './episode_summary';
import { PRODUCT_WEB_SERVICE } from '../../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

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

export interface GetEpisodeDetailsRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let GET_EPISODE_DETAILS_REQUEST_BODY: MessageDescriptor<GetEpisodeDetailsRequestBody> = {
  name: 'GetEpisodeDetailsRequestBody',
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

export interface GetEpisodeDetailsResponse {
  episodeDetails?: EpisodeDetails,
}

export let GET_EPISODE_DETAILS_RESPONSE: MessageDescriptor<GetEpisodeDetailsResponse> = {
  name: 'GetEpisodeDetailsResponse',
  fields: [{
    name: 'episodeDetails',
    index: 1,
    messageType: EPISODE_DETAILS,
  }],
};

export interface ListEpisodesRequestBody {
  seasonId?: string,
  indexCursor?: number,
  next?: boolean,
  limit?: number,
}

export let LIST_EPISODES_REQUEST_BODY: MessageDescriptor<ListEpisodesRequestBody> = {
  name: 'ListEpisodesRequestBody',
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
  }, {
    name: 'limit',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListEpisodesResponse {
  episodes?: Array<EpisodeSummary>,
  indexCursor?: number,
}

export let LIST_EPISODES_RESPONSE: MessageDescriptor<ListEpisodesResponse> = {
  name: 'ListEpisodesResponse',
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

export let GET_SEASON_DETAILS: RemoteCallDescriptor = {
  name: "GetSeasonDetails",
  service: PRODUCT_WEB_SERVICE,
  path: "/GetSeasonDetails",
  body: {
    messageType: GET_SEASON_DETAILS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_SEASON_DETAILS_RESPONSE,
  },
}

export let GET_EPISODE_DETAILS: RemoteCallDescriptor = {
  name: "GetEpisodeDetails",
  service: PRODUCT_WEB_SERVICE,
  path: "/GetEpisodeDetails",
  body: {
    messageType: GET_EPISODE_DETAILS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_EPISODE_DETAILS_RESPONSE,
  },
}

export let LIST_EPISODES: RemoteCallDescriptor = {
  name: "ListEpisodes",
  service: PRODUCT_WEB_SERVICE,
  path: "/ListEpisodes",
  body: {
    messageType: LIST_EPISODES_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_EPISODES_RESPONSE,
  },
}
