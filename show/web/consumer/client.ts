import { GetSeasonDetailsRequestBody, GetSeasonDetailsResponse, GET_SEASON_DETAILS, GetEpisodeDetailsRequestBody, GetEpisodeDetailsResponse, GET_EPISODE_DETAILS, ListEpisodesRequestBody, ListEpisodesResponse, LIST_EPISODES, ListSeasonsByRecentPublishTimeRequestBody, ListSeasonsByRecentPublishTimeResponse, LIST_SEASONS_BY_RECENT_PUBLISH_TIME, ListSeasonsByRatingRequestBody, ListSeasonsByRatingResponse, LIST_SEASONS_BY_RATING, RateSeasonRequestBody, RateSeasonResponse, RATE_SEASON, UnrateSeasonRequestBody, UnrateSeasonResponse, UNRATE_SEASON, GetIndividualSeasonRatingRequestBody, GetIndividualSeasonRatingResponse, GET_INDIVIDUAL_SEASON_RATING } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

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

export function newListEpisodesRequest(
  body: ListEpisodesRequestBody,
): ClientRequestInterface<ListEpisodesResponse> {
  return {
    descriptor: LIST_EPISODES,
    body,
  };
}

export function newListSeasonsByRecentPublishTimeRequest(
  body: ListSeasonsByRecentPublishTimeRequestBody,
): ClientRequestInterface<ListSeasonsByRecentPublishTimeResponse> {
  return {
    descriptor: LIST_SEASONS_BY_RECENT_PUBLISH_TIME,
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
