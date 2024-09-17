import { GetEpisodeToPlayRequestBody, GET_EPISODE_TO_PLAY, GetEpisodeToPlayResponse, GetPlayerSettingsRequestBody, GET_PLAYER_SETTINGS, GetPlayerSettingsResponse, SavePlayerSettingsRequestBody, SAVE_PLAYER_SETTINGS, SavePlayerSettingsResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetEpisodeToPlayHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_EPISODE_TO_PLAY;
  public abstract handle(
    loggingPrefix: string,
    body: GetEpisodeToPlayRequestBody,
    sessionStr: string,
  ): Promise<GetEpisodeToPlayResponse>;
}

export abstract class GetPlayerSettingsHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_PLAYER_SETTINGS;
  public abstract handle(
    loggingPrefix: string,
    body: GetPlayerSettingsRequestBody,
    sessionStr: string,
  ): Promise<GetPlayerSettingsResponse>;
}

export abstract class SavePlayerSettingsHandlerInterface implements WebHandlerInterface {
  public descriptor = SAVE_PLAYER_SETTINGS;
  public abstract handle(
    loggingPrefix: string,
    body: SavePlayerSettingsRequestBody,
    sessionStr: string,
  ): Promise<SavePlayerSettingsResponse>;
}
