import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { GetSeasonToPlayRequestBody, GetSeasonToPlayResponse, GET_SEASON_TO_PLAY, GetEpisodeToPlayRequestBody, GetEpisodeToPlayResponse, GET_EPISODE_TO_PLAY } from './interface';

export function getSeasonToPlay(
  client: WebServiceClientInterface,
  body: GetSeasonToPlayRequestBody,
): Promise<GetSeasonToPlayResponse> {
  return client.send({
    descriptor: GET_SEASON_TO_PLAY,
    body,
  });
}

export function getEpisodeToPlay(
  client: WebServiceClientInterface,
  body: GetEpisodeToPlayRequestBody,
): Promise<GetEpisodeToPlayResponse> {
  return client.send({
    descriptor: GET_EPISODE_TO_PLAY,
    body,
  });
}
