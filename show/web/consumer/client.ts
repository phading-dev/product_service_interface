import { GetSeasonDetailsRequestBody, GetSeasonDetailsResponse, GET_SEASON_DETAILS, GetEpisodeDetailsRequestBody, GetEpisodeDetailsResponse, GET_EPISODE_DETAILS, ListEpisodesRequestBody, ListEpisodesResponse, LIST_EPISODES } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function getSeasonDetails(
  client: WebClientInterface,
  body: GetSeasonDetailsRequestBody,
  options?: WebClientOptions,
): Promise<GetSeasonDetailsResponse> {
  return client.send(
    {
      descriptor: GET_SEASON_DETAILS,
      body,
    },
    options,
  );
}

export function getEpisodeDetails(
  client: WebClientInterface,
  body: GetEpisodeDetailsRequestBody,
  options?: WebClientOptions,
): Promise<GetEpisodeDetailsResponse> {
  return client.send(
    {
      descriptor: GET_EPISODE_DETAILS,
      body,
    },
    options,
  );
}

export function listEpisodes(
  client: WebClientInterface,
  body: ListEpisodesRequestBody,
  options?: WebClientOptions,
): Promise<ListEpisodesResponse> {
  return client.send(
    {
      descriptor: LIST_EPISODES,
      body,
    },
    options,
  );
}
