import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { Episode, EPISODE } from '../public/info';
import { ContinueSeason, CONTINUE_SEASON } from './info';
import { PRODUCT_WEB_SERVICE } from '../../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetContinueEpisodeRequestBody {
  seasonId?: string,
}

export let GET_CONTINUE_EPISODE_REQUEST_BODY: MessageDescriptor<GetContinueEpisodeRequestBody> = {
  name: 'GetContinueEpisodeRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetContinueEpisodeResponse {
  episode?: Episode,
  rewatching?: boolean,
}

export let GET_CONTINUE_EPISODE_RESPONSE: MessageDescriptor<GetContinueEpisodeResponse> = {
  name: 'GetContinueEpisodeResponse',
  fields: [{
    name: 'episode',
    index: 1,
    messageType: EPISODE,
  }, {
    name: 'rewatching',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface ListContinueWatchingSeasonsRequestBody {
  limit?: number,
}

export let LIST_CONTINUE_WATCHING_SEASONS_REQUEST_BODY: MessageDescriptor<ListContinueWatchingSeasonsRequestBody> = {
  name: 'ListContinueWatchingSeasonsRequestBody',
  fields: [{
    name: 'limit',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListContinueWatchingSeasonsResponse {
  continues?: Array<ContinueSeason>,
}

export let LIST_CONTINUE_WATCHING_SEASONS_RESPONSE: MessageDescriptor<ListContinueWatchingSeasonsResponse> = {
  name: 'ListContinueWatchingSeasonsResponse',
  fields: [{
    name: 'continues',
    index: 1,
    messageType: CONTINUE_SEASON,
    isArray: true,
  }],
};

export interface AuthorizeEpisodePlaybackRequestBody {
  episodeId?: string,
  seasonId?: string,
}

export let AUTHORIZE_EPISODE_PLAYBACK_REQUEST_BODY: MessageDescriptor<AuthorizeEpisodePlaybackRequestBody> = {
  name: 'AuthorizeEpisodePlaybackRequestBody',
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'seasonId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface AuthorizeEpisodePlaybackResponse {
  videoUrl?: string,
}

export let AUTHORIZE_EPISODE_PLAYBACK_RESPONSE: MessageDescriptor<AuthorizeEpisodePlaybackResponse> = {
  name: 'AuthorizeEpisodePlaybackResponse',
  fields: [{
    name: 'videoUrl',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface RateSeasonRequestBody {
  seasonId?: string,
  rating?: number,
}

export let RATE_SEASON_REQUEST_BODY: MessageDescriptor<RateSeasonRequestBody> = {
  name: 'RateSeasonRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'rating',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface RateSeasonResponse {
}

export let RATE_SEASON_RESPONSE: MessageDescriptor<RateSeasonResponse> = {
  name: 'RateSeasonResponse',
  fields: [],
};

export interface UnrateSeasonRequestBody {
  seasonId?: string,
}

export let UNRATE_SEASON_REQUEST_BODY: MessageDescriptor<UnrateSeasonRequestBody> = {
  name: 'UnrateSeasonRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface UnrateSeasonResponse {
}

export let UNRATE_SEASON_RESPONSE: MessageDescriptor<UnrateSeasonResponse> = {
  name: 'UnrateSeasonResponse',
  fields: [],
};

export interface GetIndividualSeasonRatingRequestBody {
  seasonId?: string,
}

export let GET_INDIVIDUAL_SEASON_RATING_REQUEST_BODY: MessageDescriptor<GetIndividualSeasonRatingRequestBody> = {
  name: 'GetIndividualSeasonRatingRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetIndividualSeasonRatingResponse {
  rating?: number,
}

export let GET_INDIVIDUAL_SEASON_RATING_RESPONSE: MessageDescriptor<GetIndividualSeasonRatingResponse> = {
  name: 'GetIndividualSeasonRatingResponse',
  fields: [{
    name: 'rating',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export let GET_CONTINUE_EPISODE: RemoteCallDescriptor = {
  name: "GetContinueEpisode",
  service: PRODUCT_WEB_SERVICE,
  path: "/sc/GetContinueEpisode",
  body: {
    messageType: GET_CONTINUE_EPISODE_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_CONTINUE_EPISODE_RESPONSE,
  },
}

export let LIST_CONTINUE_WATCHING_SEASONS: RemoteCallDescriptor = {
  name: "ListContinueWatchingSeasons",
  service: PRODUCT_WEB_SERVICE,
  path: "/sc/ListContinueWatchingSeasons",
  body: {
    messageType: LIST_CONTINUE_WATCHING_SEASONS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_CONTINUE_WATCHING_SEASONS_RESPONSE,
  },
}

export let AUTHORIZE_EPISODE_PLAYBACK: RemoteCallDescriptor = {
  name: "AuthorizeEpisodePlayback",
  service: PRODUCT_WEB_SERVICE,
  path: "/sc/AuthorizeEpisodePlayback",
  body: {
    messageType: AUTHORIZE_EPISODE_PLAYBACK_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: AUTHORIZE_EPISODE_PLAYBACK_RESPONSE,
  },
}

export let RATE_SEASON: RemoteCallDescriptor = {
  name: "RateSeason",
  service: PRODUCT_WEB_SERVICE,
  path: "/sc/RateSeason",
  body: {
    messageType: RATE_SEASON_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: RATE_SEASON_RESPONSE,
  },
}

export let UNRATE_SEASON: RemoteCallDescriptor = {
  name: "UnrateSeason",
  service: PRODUCT_WEB_SERVICE,
  path: "/sc/UnrateSeason",
  body: {
    messageType: UNRATE_SEASON_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: UNRATE_SEASON_RESPONSE,
  },
}

export let GET_INDIVIDUAL_SEASON_RATING: RemoteCallDescriptor = {
  name: "GetIndividualSeasonRating",
  service: PRODUCT_WEB_SERVICE,
  path: "/sc/GetIndividualSeasonRating",
  body: {
    messageType: GET_INDIVIDUAL_SEASON_RATING_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_INDIVIDUAL_SEASON_RATING_RESPONSE,
  },
}
