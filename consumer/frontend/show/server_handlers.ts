import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { GET_EPISODE_TO_PLAY, GetEpisodeToPlayRequestBody, GetEpisodeToPlayResponse, GET_PLAYER_SETTINGS, GetPlayerSettingsRequestBody, GetPlayerSettingsResponse, SAVE_PLAYER_SETTINGS, SavePlayerSettingsRequestBody, SavePlayerSettingsResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';

export abstract class GetEpisodeToPlayHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_EPISODE_TO_PLAY;
  public abstract handle(
    loggingPrefix: string,
    body: GetEpisodeToPlayRequestBody,
    auth: ClientSession,
  ): Promise<GetEpisodeToPlayResponse>;
}

export abstract class GetPlayerSettingsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_PLAYER_SETTINGS;
  public abstract handle(
    loggingPrefix: string,
    body: GetPlayerSettingsRequestBody,
    auth: ClientSession,
  ): Promise<GetPlayerSettingsResponse>;
}

export abstract class SavePlayerSettingsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SAVE_PLAYER_SETTINGS;
  public abstract handle(
    loggingPrefix: string,
    body: SavePlayerSettingsRequestBody,
    auth: ClientSession,
  ): Promise<SavePlayerSettingsResponse>;
}
