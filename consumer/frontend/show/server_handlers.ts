import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { GET_SEASON_TO_PLAY, GetSeasonToPlayRequestBody, GetSeasonToPlayResponse, GET_EPISODE_TO_PLAY, GetEpisodeToPlayRequestBody, GetEpisodeToPlayResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';

export abstract class GetSeasonToPlayHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_SEASON_TO_PLAY;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonToPlayRequestBody,
    auth: ClientSession,
  ): Promise<GetSeasonToPlayResponse>;
}

export abstract class GetEpisodeToPlayHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_EPISODE_TO_PLAY;
  public abstract handle(
    loggingPrefix: string,
    body: GetEpisodeToPlayRequestBody,
    auth: ClientSession,
  ): Promise<GetEpisodeToPlayResponse>;
}
