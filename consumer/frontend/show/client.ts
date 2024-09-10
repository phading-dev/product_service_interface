import { GetEpisodeToPlayRequestBody, GetEpisodeToPlayResponse, GET_EPISODE_TO_PLAY, GetPlayerSettingsRequestBody, GetPlayerSettingsResponse, GET_PLAYER_SETTINGS, SavePlayerSettingsRequestBody, SavePlayerSettingsResponse, SAVE_PLAYER_SETTINGS } from './interface';
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

export function getPlayerSettings(
  client: WebClientInterface,
  body: GetPlayerSettingsRequestBody,
  options?: WebClientOptions,
): Promise<GetPlayerSettingsResponse> {
  return client.send(
    {
      descriptor: GET_PLAYER_SETTINGS,
      body,
    },
    options,
  );
}

export function savePlayerSettings(
  client: WebClientInterface,
  body: SavePlayerSettingsRequestBody,
  options?: WebClientOptions,
): Promise<SavePlayerSettingsResponse> {
  return client.send(
    {
      descriptor: SAVE_PLAYER_SETTINGS,
      body,
    },
    options,
  );
}
