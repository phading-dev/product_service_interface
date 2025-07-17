import { GetSeasonNameRequestBody, GetSeasonNameResponse, GET_SEASON_NAME, GetSeasonSummaryRequestBody, GetSeasonSummaryResponse, GET_SEASON_SUMMARY, GetSeasonDetailsRequestBody, GetSeasonDetailsResponse, GET_SEASON_DETAILS, ListEpisodesRequestBody, ListEpisodesResponse, LIST_EPISODES, GetEpisodeRequestBody, GetEpisodeResponse, GET_EPISODE, GetEpisodeWithSeasonSummaryRequestBody, GetEpisodeWithSeasonSummaryResponse, GET_EPISODE_WITH_SEASON_SUMMARY, ListSeasonsByRecentPremiereTimeRequestBody, ListSeasonsByRecentPremiereTimeResponse, LIST_SEASONS_BY_RECENT_PREMIERE_TIME, ListSeasonsByRatingRequestBody, ListSeasonsByRatingResponse, LIST_SEASONS_BY_RATING, ListSeasonsByRecentPremiereTimeAndPublisherRequestBody, ListSeasonsByRecentPremiereTimeAndPublisherResponse, LIST_SEASONS_BY_RECENT_PREMIERE_TIME_AND_PUBLISHER, ListSeasonsByRatingAndPublisherRequestBody, ListSeasonsByRatingAndPublisherResponse, LIST_SEASONS_BY_RATING_AND_PUBLISHER, SearchSeasonsRequestBody, SearchSeasonsResponse, SEARCH_SEASONS, FlagSeasonRequestBody, FlagSeasonResponse, FLAG_SEASON } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGetSeasonNameRequest(
  body: GetSeasonNameRequestBody,
): ClientRequestInterface<GetSeasonNameResponse> {
  return {
    descriptor: GET_SEASON_NAME,
    body,
  };
}

export function newGetSeasonSummaryRequest(
  body: GetSeasonSummaryRequestBody,
): ClientRequestInterface<GetSeasonSummaryResponse> {
  return {
    descriptor: GET_SEASON_SUMMARY,
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

export function newListEpisodesRequest(
  body: ListEpisodesRequestBody,
): ClientRequestInterface<ListEpisodesResponse> {
  return {
    descriptor: LIST_EPISODES,
    body,
  };
}

export function newGetEpisodeRequest(
  body: GetEpisodeRequestBody,
): ClientRequestInterface<GetEpisodeResponse> {
  return {
    descriptor: GET_EPISODE,
    body,
  };
}

export function newGetEpisodeWithSeasonSummaryRequest(
  body: GetEpisodeWithSeasonSummaryRequestBody,
): ClientRequestInterface<GetEpisodeWithSeasonSummaryResponse> {
  return {
    descriptor: GET_EPISODE_WITH_SEASON_SUMMARY,
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

export function newFlagSeasonRequest(
  body: FlagSeasonRequestBody,
): ClientRequestInterface<FlagSeasonResponse> {
  return {
    descriptor: FLAG_SEASON,
    body,
  };
}
