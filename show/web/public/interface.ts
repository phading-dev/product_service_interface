import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { SeasonSummary, SEASON_SUMMARY, SeasonDetails, SEASON_DETAILS, Episode, EPISODE, SeasonSummaryAndEpisode, SEASON_SUMMARY_AND_EPISODE } from './info';
import { SeasonFlagReason, SEASON_FLAG_REASON } from '../../season_flag_reason';
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

export interface FlagSeasonRequestBody {
  seasonId?: string,
  reason?: SeasonFlagReason,
  comment?: string,
}

export let FLAG_SEASON_REQUEST_BODY: MessageDescriptor<FlagSeasonRequestBody> = {
  name: 'FlagSeasonRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'reason',
    index: 2,
    enumType: SEASON_FLAG_REASON,
  }, {
    name: 'comment',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface FlagSeasonResponse {
}

export let FLAG_SEASON_RESPONSE: MessageDescriptor<FlagSeasonResponse> = {
  name: 'FlagSeasonResponse',
  fields: [],
};

export let GET_SEASON_NAME: RemoteCallDescriptor = {
  name: "GetSeasonName",
  service: PRODUCT_WEB_SERVICE,
  path: "/su/GetSeasonName",
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
  path: "/su/GetSeasonSummary",
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
  path: "/su/GetSeasonDetails",
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
  path: "/su/ListEpisodes",
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
  path: "/su/GetEpisode",
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
  path: "/su/GetEpisodeWithSeasonSummary",
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
  path: "/su/ListSeasonsByRecentPremiereTime",
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
  path: "/su/ListSeasonsByRating",
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
  path: "/su/ListSeasonsByRecentPremiereTimeAndPublisher",
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
  path: "/su/ListSeasonsByRatingAndPublisher",
  body: {
    messageType: LIST_SEASONS_BY_RATING_AND_PUBLISHER_REQUEST_BODY,
  },
  response: {
    messageType: LIST_SEASONS_BY_RATING_AND_PUBLISHER_RESPONSE,
  },
}

export let SEARCH_SEASONS: RemoteCallDescriptor = {
  name: "SearchSeasons",
  service: PRODUCT_WEB_SERVICE,
  path: "/su/SearchSeasons",
  body: {
    messageType: SEARCH_SEASONS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: SEARCH_SEASONS_RESPONSE,
  },
}

export let FLAG_SEASON: RemoteCallDescriptor = {
  name: "FlagSeason",
  service: PRODUCT_WEB_SERVICE,
  path: "/su/FlagSeason",
  body: {
    messageType: FLAG_SEASON_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: FLAG_SEASON_RESPONSE,
  },
}
