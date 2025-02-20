import { GetSeasonDetailsRequestBody, GetSeasonDetailsResponse, GET_SEASON_DETAILS, GetEpisodeDetailsRequestBody, GetEpisodeDetailsResponse, GET_EPISODE_DETAILS, ListEpisodesRequestBody, ListEpisodesResponse, LIST_EPISODES } from './interface';
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
