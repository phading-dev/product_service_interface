import { GetSeasonDetailsRequestBody, GetSeasonDetailsResponse, GET_SEASON_DETAILS, GetVideoToPlayRequestBody, GetVideoToPlayResponse, GET_VIDEO_TO_PLAY, GetMoreEpisodesRequestBody, GetMoreEpisodesResponse, GET_MORE_EPISODES } from './interface';
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

export function getVideoToPlay(
  client: WebClientInterface,
  body: GetVideoToPlayRequestBody,
  options?: WebClientOptions,
): Promise<GetVideoToPlayResponse> {
  return client.send(
    {
      descriptor: GET_VIDEO_TO_PLAY,
      body,
    },
    options,
  );
}

export function getMoreEpisodes(
  client: WebClientInterface,
  body: GetMoreEpisodesRequestBody,
  options?: WebClientOptions,
): Promise<GetMoreEpisodesResponse> {
  return client.send(
    {
      descriptor: GET_MORE_EPISODES,
      body,
    },
    options,
  );
}
