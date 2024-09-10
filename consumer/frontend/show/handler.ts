import { GetEpisodeToPlayRequestBody, GET_EPISODE_TO_PLAY, GetEpisodeToPlayResponse, GetPlayerSettingsRequestBody, GET_PLAYER_SETTINGS, GetPlayerSettingsResponse, SavePlayerSettingsRequestBody, SAVE_PLAYER_SETTINGS, SavePlayerSettingsResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetEpisodeToPlayHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_EPISODE_TO_PLAY;
  public abstract handle(
    loggingPrefix: string,
    body: GetEpisodeToPlayRequestBody,
    auth: ClientSession,
  ): Promise<GetEpisodeToPlayResponse>;
}

export abstract class GetPlayerSettingsHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_PLAYER_SETTINGS;
  public abstract handle(
    loggingPrefix: string,
    body: GetPlayerSettingsRequestBody,
    auth: ClientSession,
  ): Promise<GetPlayerSettingsResponse>;
}

export abstract class SavePlayerSettingsHandlerInterface implements WebHandlerInterface {
  public descriptor = SAVE_PLAYER_SETTINGS;
  public abstract handle(
    loggingPrefix: string,
    body: SavePlayerSettingsRequestBody,
    auth: ClientSession,
  ): Promise<SavePlayerSettingsResponse>;
}
