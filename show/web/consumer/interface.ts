import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { SeasonSummary, SEASON_SUMMARY, SeasonDetails, SEASON_DETAILS, Episode, EPISODE, SeasonSummaryAndEpisode, SEASON_SUMMARY_AND_EPISODE, ContinueEpisode, CONTINUE_EPISODE, ContinueSeason, CONTINUE_SEASON } from './info';
import { PRODUCT_WEB_SERVICE } from '../../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetSeasonNameRequestBody {
  seasonId?: string,
}

export let GET_SEASON_NAME_REQUEST_BODY: MessageDescriptor<GetSeasonNameRequestBody> = {
  name: 'GetSeasonNameRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetSeasonNameResponse {
  name?: string,
}

export let GET_SEASON_NAME_RESPONSE: MessageDescriptor<GetSeasonNameResponse> = {
  name: 'GetSeasonNameResponse',
  fields: [{
    name: 'name',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetSeasonSummaryRequestBody {
  seasonId?: string,
}

export let GET_SEASON_SUMMARY_REQUEST_BODY: MessageDescriptor<GetSeasonSummaryRequestBody> = {
  name: 'GetSeasonSummaryRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetSeasonSummaryResponse {
  seasonSummary?: SeasonSummary,
}

export let GET_SEASON_SUMMARY_RESPONSE: MessageDescriptor<GetSeasonSummaryResponse> = {
  name: 'GetSeasonSummaryResponse',
  fields: [{
    name: 'seasonSummary',
    index: 1,
    messageType: SEASON_SUMMARY,
  }],
};

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
  episodes?: Array<Episode>,
  indexCursor?: number,
}

export let LIST_EPISODES_RESPONSE: MessageDescriptor<ListEpisodesResponse> = {
  name: 'ListEpisodesResponse',
  fields: [{
    name: 'episodes',
    index: 1,
    messageType: EPISODE,
    isArray: true,
  }, {
    name: 'indexCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GetEpisodeRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let GET_EPISODE_REQUEST_BODY: MessageDescriptor<GetEpisodeRequestBody> = {
  name: 'GetEpisodeRequestBody',
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

export interface GetEpisodeResponse {
  episode?: Episode,
}

export let GET_EPISODE_RESPONSE: MessageDescriptor<GetEpisodeResponse> = {
  name: 'GetEpisodeResponse',
  fields: [{
    name: 'episode',
    index: 1,
    messageType: EPISODE,
  }],
};

export interface GetEpisodeWithSeasonSummaryRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let GET_EPISODE_WITH_SEASON_SUMMARY_REQUEST_BODY: MessageDescriptor<GetEpisodeWithSeasonSummaryRequestBody> = {
  name: 'GetEpisodeWithSeasonSummaryRequestBody',
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

export interface GetEpisodeWithSeasonSummaryResponse {
  summary?: SeasonSummaryAndEpisode,
}

export let GET_EPISODE_WITH_SEASON_SUMMARY_RESPONSE: MessageDescriptor<GetEpisodeWithSeasonSummaryResponse> = {
  name: 'GetEpisodeWithSeasonSummaryResponse',
  fields: [{
    name: 'summary',
    index: 1,
    messageType: SEASON_SUMMARY_AND_EPISODE,
  }],
};

export interface ListSeasonsByRecentPremiereTimeRequestBody {
  limit?: number,
  premiereTimeCursor?: number,
  createdTimeCursor?: number,
}

export let LIST_SEASONS_BY_RECENT_PREMIERE_TIME_REQUEST_BODY: MessageDescriptor<ListSeasonsByRecentPremiereTimeRequestBody> = {
  name: 'ListSeasonsByRecentPremiereTimeRequestBody',
  fields: [{
    name: 'limit',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'premiereTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'createdTimeCursor',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListSeasonsByRecentPremiereTimeResponse {
  seasons?: Array<SeasonSummary>,
  premiereTimeCursor?: number,
  createdTimeCursor?: number,
}

export let LIST_SEASONS_BY_RECENT_PREMIERE_TIME_RESPONSE: MessageDescriptor<ListSeasonsByRecentPremiereTimeResponse> = {
  name: 'ListSeasonsByRecentPremiereTimeResponse',
  fields: [{
    name: 'seasons',
    index: 1,
    messageType: SEASON_SUMMARY,
    isArray: true,
  }, {
    name: 'premiereTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'createdTimeCursor',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListSeasonsByRatingRequestBody {
  limit?: number,
  ratingCursor?: number,
  createdTimeCursor?: number,
}

export let LIST_SEASONS_BY_RATING_REQUEST_BODY: MessageDescriptor<ListSeasonsByRatingRequestBody> = {
  name: 'ListSeasonsByRatingRequestBody',
  fields: [{
    name: 'limit',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'ratingCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'createdTimeCursor',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListSeasonsByRatingResponse {
  seasons?: Array<SeasonSummary>,
  ratingCursor?: number,
  createdTimeCursor?: number,
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
    name: 'createdTimeCursor',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListSeasonsByRecentPremiereTimeAndPublisherRequestBody {
  publisherId?: string,
  limit?: number,
  premiereTimeCursor?: number,
  createdTimeCursor?: number,
}

export let LIST_SEASONS_BY_RECENT_PREMIERE_TIME_AND_PUBLISHER_REQUEST_BODY: MessageDescriptor<ListSeasonsByRecentPremiereTimeAndPublisherRequestBody> = {
  name: 'ListSeasonsByRecentPremiereTimeAndPublisherRequestBody',
  fields: [{
    name: 'publisherId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'limit',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'premiereTimeCursor',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'createdTimeCursor',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListSeasonsByRecentPremiereTimeAndPublisherResponse {
  seasons?: Array<SeasonSummary>,
  premiereTimeCursor?: number,
  createdTimeCursor?: number,
}

export let LIST_SEASONS_BY_RECENT_PREMIERE_TIME_AND_PUBLISHER_RESPONSE: MessageDescriptor<ListSeasonsByRecentPremiereTimeAndPublisherResponse> = {
  name: 'ListSeasonsByRecentPremiereTimeAndPublisherResponse',
  fields: [{
    name: 'seasons',
    index: 1,
    messageType: SEASON_SUMMARY,
    isArray: true,
  }, {
    name: 'premiereTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'createdTimeCursor',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListSeasonsByRatingAndPublisherRequestBody {
  publisherId?: string,
  limit?: number,
  ratingCursor?: number,
  createdTimeCursor?: number,
}

export let LIST_SEASONS_BY_RATING_AND_PUBLISHER_REQUEST_BODY: MessageDescriptor<ListSeasonsByRatingAndPublisherRequestBody> = {
  name: 'ListSeasonsByRatingAndPublisherRequestBody',
  fields: [{
    name: 'publisherId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'limit',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'ratingCursor',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'createdTimeCursor',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListSeasonsByRatingAndPublisherResponse {
  seasons?: Array<SeasonSummary>,
  ratingCursor?: number,
  createdTimeCursor?: number,
}

export let LIST_SEASONS_BY_RATING_AND_PUBLISHER_RESPONSE: MessageDescriptor<ListSeasonsByRatingAndPublisherResponse> = {
  name: 'ListSeasonsByRatingAndPublisherResponse',
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
    name: 'createdTimeCursor',
    index: 3,
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
  continue?: ContinueEpisode,
}

export let GET_CONTINUE_EPISODE_RESPONSE: MessageDescriptor<GetContinueEpisodeResponse> = {
  name: 'GetContinueEpisodeResponse',
  fields: [{
    name: 'continue',
    index: 1,
    messageType: CONTINUE_EPISODE,
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

export interface SearchSeasonsRequestBody {
  query?: string,
  limit?: number,
  scoreCursor?: number,
  createdTimeCursor?: number,
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
  }, {
    name: 'createdTimeCursor',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SearchSeasonsResponse {
  seasons?: Array<SeasonSummary>,
  scoreCursor?: number,
  createdTimeCursor?: number,
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
  }, {
    name: 'createdTimeCursor',
    index: 3,
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

export let GET_SEASON_NAME: RemoteCallDescriptor = {
  name: "GetSeasonName",
  service: PRODUCT_WEB_SERVICE,
  path: "/GetSeasonName",
  body: {
    messageType: GET_SEASON_NAME_REQUEST_BODY,
  },
  response: {
    messageType: GET_SEASON_NAME_RESPONSE,
  },
}

export let GET_SEASON_SUMMARY: RemoteCallDescriptor = {
  name: "GetSeasonSummary",
  service: PRODUCT_WEB_SERVICE,
  path: "/GetSeasonSummary",
  body: {
    messageType: GET_SEASON_SUMMARY_REQUEST_BODY,
  },
  response: {
    messageType: GET_SEASON_SUMMARY_RESPONSE,
  },
}

export let GET_SEASON_DETAILS: RemoteCallDescriptor = {
  name: "GetSeasonDetails",
  service: PRODUCT_WEB_SERVICE,
  path: "/GetSeasonDetails",
  body: {
    messageType: GET_SEASON_DETAILS_REQUEST_BODY,
  },
  response: {
    messageType: GET_SEASON_DETAILS_RESPONSE,
  },
}

export let LIST_EPISODES: RemoteCallDescriptor = {
  name: "ListEpisodes",
  service: PRODUCT_WEB_SERVICE,
  path: "/ListEpisodes",
  body: {
    messageType: LIST_EPISODES_REQUEST_BODY,
  },
  response: {
    messageType: LIST_EPISODES_RESPONSE,
  },
}

export let GET_EPISODE: RemoteCallDescriptor = {
  name: "GetEpisode",
  service: PRODUCT_WEB_SERVICE,
  path: "/GetEpisode",
  body: {
    messageType: GET_EPISODE_REQUEST_BODY,
  },
  response: {
    messageType: GET_EPISODE_RESPONSE,
  },
}

export let GET_EPISODE_WITH_SEASON_SUMMARY: RemoteCallDescriptor = {
  name: "GetEpisodeWithSeasonSummary",
  service: PRODUCT_WEB_SERVICE,
  path: "/GetEpisodeWithSeasonSummary",
  body: {
    messageType: GET_EPISODE_WITH_SEASON_SUMMARY_REQUEST_BODY,
  },
  response: {
    messageType: GET_EPISODE_WITH_SEASON_SUMMARY_RESPONSE,
  },
}

export let LIST_SEASONS_BY_RECENT_PREMIERE_TIME: RemoteCallDescriptor = {
  name: "ListSeasonsByRecentPremiereTime",
  service: PRODUCT_WEB_SERVICE,
  path: "/ListSeasonsByRecentPremiereTime",
  body: {
    messageType: LIST_SEASONS_BY_RECENT_PREMIERE_TIME_REQUEST_BODY,
  },
  response: {
    messageType: LIST_SEASONS_BY_RECENT_PREMIERE_TIME_RESPONSE,
  },
}

export let LIST_SEASONS_BY_RATING: RemoteCallDescriptor = {
  name: "ListSeasonsByRating",
  service: PRODUCT_WEB_SERVICE,
  path: "/ListSeasonsByRating",
  body: {
    messageType: LIST_SEASONS_BY_RATING_REQUEST_BODY,
  },
  response: {
    messageType: LIST_SEASONS_BY_RATING_RESPONSE,
  },
}

export let LIST_SEASONS_BY_RECENT_PREMIERE_TIME_AND_PUBLISHER: RemoteCallDescriptor = {
  name: "ListSeasonsByRecentPremiereTimeAndPublisher",
  service: PRODUCT_WEB_SERVICE,
  path: "/ListSeasonsByRecentPremiereTimeAndPublisher",
  body: {
    messageType: LIST_SEASONS_BY_RECENT_PREMIERE_TIME_AND_PUBLISHER_REQUEST_BODY,
  },
  response: {
    messageType: LIST_SEASONS_BY_RECENT_PREMIERE_TIME_AND_PUBLISHER_RESPONSE,
  },
}

export let LIST_SEASONS_BY_RATING_AND_PUBLISHER: RemoteCallDescriptor = {
  name: "ListSeasonsByRatingAndPublisher",
  service: PRODUCT_WEB_SERVICE,
  path: "/ListSeasonsByRatingAndPublisher",
  body: {
    messageType: LIST_SEASONS_BY_RATING_AND_PUBLISHER_REQUEST_BODY,
  },
  response: {
    messageType: LIST_SEASONS_BY_RATING_AND_PUBLISHER_RESPONSE,
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

export let AUTHORIZE_EPISODE_PLAYBACK: RemoteCallDescriptor = {
  name: "AuthorizeEpisodePlayback",
  service: PRODUCT_WEB_SERVICE,
  path: "/AuthorizeEpisodePlayback",
  body: {
    messageType: AUTHORIZE_EPISODE_PLAYBACK_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: AUTHORIZE_EPISODE_PLAYBACK_RESPONSE,
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
