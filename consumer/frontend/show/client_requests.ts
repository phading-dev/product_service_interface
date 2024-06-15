import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { GetSeasonToPlayRequestBody, GetSeasonToPlayResponse, GET_SEASON_TO_PLAY, GetEpisodeToPlayRequestBody, GetEpisodeToPlayResponse, GET_EPISODE_TO_PLAY, GetPlayerSettingsRequestBody, GetPlayerSettingsResponse, GET_PLAYER_SETTINGS, SavePlayerSettingsRequestBody, SavePlayerSettingsResponse, SAVE_PLAYER_SETTINGS } from './interface';

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

export function getPlayerSettings(
  client: WebServiceClientInterface,
  body: GetPlayerSettingsRequestBody,
): Promise<GetPlayerSettingsResponse> {
  return client.send({
    descriptor: GET_PLAYER_SETTINGS,
    body,
  });
}

export function savePlayerSettings(
  client: WebServiceClientInterface,
  body: SavePlayerSettingsRequestBody,
): Promise<SavePlayerSettingsResponse> {
  return client.send({
    descriptor: SAVE_PLAYER_SETTINGS,
    body,
  });
}
