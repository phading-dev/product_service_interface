import { GetEpisodeToPlayRequestBody, GetEpisodeToPlayResponse, GET_EPISODE_TO_PLAY, GetVideoUrlRequestBody, GetVideoUrlResponse, GET_VIDEO_URL, GetMoreEpisdoesRequestBody, GetMoreEpisdoesResponse, GET_MORE_EPISDOES } from './interface';
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

export function getVideoUrl(
  client: WebClientInterface,
  body: GetVideoUrlRequestBody,
  options?: WebClientOptions,
): Promise<GetVideoUrlResponse> {
  return client.send(
    {
      descriptor: GET_VIDEO_URL,
      body,
    },
    options,
  );
}

export function getMoreEpisdoes(
  client: WebClientInterface,
  body: GetMoreEpisdoesRequestBody,
  options?: WebClientOptions,
): Promise<GetMoreEpisdoesResponse> {
  return client.send(
    {
      descriptor: GET_MORE_EPISDOES,
      body,
    },
    options,
  );
}
