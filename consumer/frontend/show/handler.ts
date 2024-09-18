import { GetEpisodeToPlayRequestBody, GET_EPISODE_TO_PLAY, GetEpisodeToPlayResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetEpisodeToPlayHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_EPISODE_TO_PLAY;
  public abstract handle(
    loggingPrefix: string,
    body: GetEpisodeToPlayRequestBody,
    sessionStr: string,
  ): Promise<GetEpisodeToPlayResponse>;
}
