import { GetEpisodeToPlayRequestBody, GetEpisodeToPlayResponse, GET_EPISODE_TO_PLAY } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function getEpisodeToPlay(
  client: WebClientInterface,
  body: GetEpisodeToPlayRequestBody,
  options?: WebClientOptions,
): Promise<GetEpisodeToPlayResponse> {
  return client.send(
    {
      descriptor: GET_EPISODE_TO_PLAY,
      body,
    },
    options,
  );
}
