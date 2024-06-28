import { WebServiceClientInterface, WebServiceClientOptions } from '@selfage/service_descriptor/web_service_client_interface';
import { GetEpisodeToPlayRequestBody, GetEpisodeToPlayResponse, GET_EPISODE_TO_PLAY, GetPlayerSettingsRequestBody, GetPlayerSettingsResponse, GET_PLAYER_SETTINGS, SavePlayerSettingsRequestBody, SavePlayerSettingsResponse, SAVE_PLAYER_SETTINGS } from './interface';

export function getEpisodeToPlay(
  client: WebServiceClientInterface,
  body: GetEpisodeToPlayRequestBody,
  options?: WebServiceClientOptions,
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
  client: WebServiceClientInterface,
  body: GetPlayerSettingsRequestBody,
  options?: WebServiceClientOptions,
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
  client: WebServiceClientInterface,
  body: SavePlayerSettingsRequestBody,
  options?: WebServiceClientOptions,
): Promise<SavePlayerSettingsResponse> {
  return client.send(
    {
      descriptor: SAVE_PLAYER_SETTINGS,
      body,
    },
    options,
  );
}
