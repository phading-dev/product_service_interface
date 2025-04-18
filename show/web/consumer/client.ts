import { GetSeasonNameRequestBody, GetSeasonNameResponse, GET_SEASON_NAME, GetSeasonDetailsRequestBody, GetSeasonDetailsResponse, GET_SEASON_DETAILS, GetEpisodeDetailsRequestBody, GetEpisodeDetailsResponse, GET_EPISODE_DETAILS, GetSeasonAndEpisodeSummaryRequestBody, GetSeasonAndEpisodeSummaryResponse, GET_SEASON_AND_EPISODE_SUMMARY, ListEpisodesRequestBody, ListEpisodesResponse, LIST_EPISODES, GetContinueEpisodeRequestBody, GetContinueEpisodeResponse, GET_CONTINUE_EPISODE, ListSeasonsByRecentPremiereTimeRequestBody, ListSeasonsByRecentPremiereTimeResponse, LIST_SEASONS_BY_RECENT_PREMIERE_TIME, ListSeasonsByRatingRequestBody, ListSeasonsByRatingResponse, LIST_SEASONS_BY_RATING, ListContinueWatchingSeasonsRequestBody, ListContinueWatchingSeasonsResponse, LIST_CONTINUE_WATCHING_SEASONS, ListSeasonsByRecentPremiereTimeAndPublisherRequestBody, ListSeasonsByRecentPremiereTimeAndPublisherResponse, LIST_SEASONS_BY_RECENT_PREMIERE_TIME_AND_PUBLISHER, ListSeasonsByRatingAndPublisherRequestBody, ListSeasonsByRatingAndPublisherResponse, LIST_SEASONS_BY_RATING_AND_PUBLISHER, SearchSeasonsRequestBody, SearchSeasonsResponse, SEARCH_SEASONS, RateSeasonRequestBody, RateSeasonResponse, RATE_SEASON, UnrateSeasonRequestBody, UnrateSeasonResponse, UNRATE_SEASON, GetIndividualSeasonRatingRequestBody, GetIndividualSeasonRatingResponse, GET_INDIVIDUAL_SEASON_RATING } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGetSeasonNameRequest(
  body: GetSeasonNameRequestBody,
): ClientRequestInterface<GetSeasonNameResponse> {
  return {
    descriptor: GET_SEASON_NAME,
    body,
  };
}

export function newGetSeasonDetailsRequest(
  body: GetSeasonDetailsRequestBody,
): ClientRequestInterface<GetSeasonDetailsResponse> {
  return {
    descriptor: GET_SEASON_DETAILS,
    body,
  };
}

export function newGetEpisodeDetailsRequest(
  body: GetEpisodeDetailsRequestBody,
): ClientRequestInterface<GetEpisodeDetailsResponse> {
  return {
    descriptor: GET_EPISODE_DETAILS,
    body,
  };
}

export function newGetSeasonAndEpisodeSummaryRequest(
  body: GetSeasonAndEpisodeSummaryRequestBody,
): ClientRequestInterface<GetSeasonAndEpisodeSummaryResponse> {
  return {
    descriptor: GET_SEASON_AND_EPISODE_SUMMARY,
    body,
  };
}

export function newListEpisodesRequest(
  body: ListEpisodesRequestBody,
): ClientRequestInterface<ListEpisodesResponse> {
  return {
    descriptor: LIST_EPISODES,
    body,
  };
}

export function newGetContinueEpisodeRequest(
  body: GetContinueEpisodeRequestBody,
): ClientRequestInterface<GetContinueEpisodeResponse> {
  return {
    descriptor: GET_CONTINUE_EPISODE,
    body,
  };
}

export function newListSeasonsByRecentPremiereTimeRequest(
  body: ListSeasonsByRecentPremiereTimeRequestBody,
): ClientRequestInterface<ListSeasonsByRecentPremiereTimeResponse> {
  return {
    descriptor: LIST_SEASONS_BY_RECENT_PREMIERE_TIME,
    body,
  };
}

export function newListSeasonsByRatingRequest(
  body: ListSeasonsByRatingRequestBody,
): ClientRequestInterface<ListSeasonsByRatingResponse> {
  return {
    descriptor: LIST_SEASONS_BY_RATING,
    body,
  };
}

export function newListContinueWatchingSeasonsRequest(
  body: ListContinueWatchingSeasonsRequestBody,
): ClientRequestInterface<ListContinueWatchingSeasonsResponse> {
  return {
    descriptor: LIST_CONTINUE_WATCHING_SEASONS,
    body,
  };
}

export function newListSeasonsByRecentPremiereTimeAndPublisherRequest(
  body: ListSeasonsByRecentPremiereTimeAndPublisherRequestBody,
): ClientRequestInterface<ListSeasonsByRecentPremiereTimeAndPublisherResponse> {
  return {
    descriptor: LIST_SEASONS_BY_RECENT_PREMIERE_TIME_AND_PUBLISHER,
    body,
  };
}

export function newListSeasonsByRatingAndPublisherRequest(
  body: ListSeasonsByRatingAndPublisherRequestBody,
): ClientRequestInterface<ListSeasonsByRatingAndPublisherResponse> {
  return {
    descriptor: LIST_SEASONS_BY_RATING_AND_PUBLISHER,
    body,
  };
}

export function newSearchSeasonsRequest(
  body: SearchSeasonsRequestBody,
): ClientRequestInterface<SearchSeasonsResponse> {
  return {
    descriptor: SEARCH_SEASONS,
    body,
  };
}

export function newRateSeasonRequest(
  body: RateSeasonRequestBody,
): ClientRequestInterface<RateSeasonResponse> {
  return {
    descriptor: RATE_SEASON,
    body,
  };
}

export function newUnrateSeasonRequest(
  body: UnrateSeasonRequestBody,
): ClientRequestInterface<UnrateSeasonResponse> {
  return {
    descriptor: UNRATE_SEASON,
    body,
  };
}

export function newGetIndividualSeasonRatingRequest(
  body: GetIndividualSeasonRatingRequestBody,
): ClientRequestInterface<GetIndividualSeasonRatingResponse> {
  return {
    descriptor: GET_INDIVIDUAL_SEASON_RATING,
    body,
  };
}
