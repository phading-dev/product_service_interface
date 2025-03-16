import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { SeasonDetails, SEASON_DETAILS } from './season_details';
import { EpisodeDetails, EPISODE_DETAILS } from './episode_details';
import { EpisodeSummary, EPISODE_SUMMARY } from './episode_summary';
import { SeasonSummary, SEASON_SUMMARY, ContinueSeason, CONTINUE_SEASON } from './season_summary';
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
  episode?: EpisodeSummary,
}

export let GET_CONTINUE_EPISODE_RESPONSE: MessageDescriptor<GetContinueEpisodeResponse> = {
  name: 'GetContinueEpisodeResponse',
  fields: [{
    name: 'episode',
    index: 1,
    messageType: EPISODE_SUMMARY,
  }],
};

export interface ListSeasonsByRecentPremierTimeRequestBody {
  premierTimeCursor?: number,
  limit?: number,
}

export let LIST_SEASONS_BY_RECENT_PREMIER_TIME_REQUEST_BODY: MessageDescriptor<ListSeasonsByRecentPremierTimeRequestBody> = {
  name: 'ListSeasonsByRecentPremierTimeRequestBody',
  fields: [{
    name: 'premierTimeCursor',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'limit',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListSeasonsByRecentPremierTimeResponse {
  seasons?: Array<SeasonSummary>,
  premierTimeCursor?: number,
}

export let LIST_SEASONS_BY_RECENT_PREMIER_TIME_RESPONSE: MessageDescriptor<ListSeasonsByRecentPremierTimeResponse> = {
  name: 'ListSeasonsByRecentPremierTimeResponse',
  fields: [{
    name: 'seasons',
    index: 1,
    messageType: SEASON_SUMMARY,
    isArray: true,
  }, {
    name: 'premierTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListSeasonsByRatingRequestBody {
  ratingCursor?: number,
  updatedTimeCursor?: number,
  limit?: number,
}

export let LIST_SEASONS_BY_RATING_REQUEST_BODY: MessageDescriptor<ListSeasonsByRatingRequestBody> = {
  name: 'ListSeasonsByRatingRequestBody',
  fields: [{
    name: 'ratingCursor',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'updatedTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'limit',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListSeasonsByRatingResponse {
  seasons?: Array<SeasonSummary>,
  ratingCursor?: number,
  updatedTimeCursor?: number,
}

export let LIST_SEASONS_BY_RATING_RESPONSE: MessageDescriptor<ListSeasonsByRatingResponse> = {
  name: 'ListSeasonsByRatingResponse',
  fields: [{
    name: 'seasons',
    index: 1,
    messageType: SEASON_SUMMARY,
    isArray: true,
  }, {
    name: 'ratingCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'updatedTimeCursor',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
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

export interface SearchSeasonsRequestBody {
  query?: string,
  limit?: number,
  scoreCursor?: number,
}

export let SEARCH_SEASONS_REQUEST_BODY: MessageDescriptor<SearchSeasonsRequestBody> = {
  name: 'SearchSeasonsRequestBody',
  fields: [{
    name: 'query',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'limit',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'scoreCursor',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SearchSeasonsResponse {
  seasons?: Array<SeasonSummary>,
  scoreCursor?: number,
}

export let SEARCH_SEASONS_RESPONSE: MessageDescriptor<SearchSeasonsResponse> = {
  name: 'SearchSeasonsResponse',
  fields: [{
    name: 'seasons',
    index: 1,
    messageType: SEASON_SUMMARY,
    isArray: true,
  }, {
    name: 'scoreCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
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

export let GET_CONTINUE_EPISODE: RemoteCallDescriptor = {
  name: "GetContinueEpisode",
  service: PRODUCT_WEB_SERVICE,
  path: "/GetContinueEpisode",
  body: {
    messageType: GET_CONTINUE_EPISODE_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_CONTINUE_EPISODE_RESPONSE,
  },
}

export let LIST_SEASONS_BY_RECENT_PREMIER_TIME: RemoteCallDescriptor = {
  name: "ListSeasonsByRecentPremierTime",
  service: PRODUCT_WEB_SERVICE,
  path: "/ListSeasonsByRecentPremierTime",
  body: {
    messageType: LIST_SEASONS_BY_RECENT_PREMIER_TIME_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_SEASONS_BY_RECENT_PREMIER_TIME_RESPONSE,
  },
}

export let LIST_SEASONS_BY_RATING: RemoteCallDescriptor = {
  name: "ListSeasonsByRating",
  service: PRODUCT_WEB_SERVICE,
  path: "/ListSeasonsByRating",
  body: {
    messageType: LIST_SEASONS_BY_RATING_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_SEASONS_BY_RATING_RESPONSE,
  },
}

export let LIST_CONTINUE_WATCHING_SEASONS: RemoteCallDescriptor = {
  name: "ListContinueWatchingSeasons",
  service: PRODUCT_WEB_SERVICE,
  path: "/ListContinueWatchingSeasons",
  body: {
    messageType: LIST_CONTINUE_WATCHING_SEASONS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_CONTINUE_WATCHING_SEASONS_RESPONSE,
  },
}

export let SEARCH_SEASONS: RemoteCallDescriptor = {
  name: "SearchSeasons",
  service: PRODUCT_WEB_SERVICE,
  path: "/SearchSeasons",
  body: {
    messageType: SEARCH_SEASONS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: SEARCH_SEASONS_RESPONSE,
  },
}

export let RATE_SEASON: RemoteCallDescriptor = {
  name: "RateSeason",
  service: PRODUCT_WEB_SERVICE,
  path: "/RateSeason",
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
  path: "/UnrateSeason",
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
  path: "/GetIndividualSeasonRating",
  body: {
    messageType: GET_INDIVIDUAL_SEASON_RATING_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_INDIVIDUAL_SEASON_RATING_RESPONSE,
  },
}
