import { GetEpisodeToPlayRequestBody, GET_EPISODE_TO_PLAY, GetEpisodeToPlayResponse, GetVideoUrlRequestBody, GET_VIDEO_URL, GetVideoUrlResponse, GetMoreEpisdoesRequestBody, GET_MORE_EPISDOES, GetMoreEpisdoesResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetEpisodeToPlayHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_EPISODE_TO_PLAY;
  public abstract handle(
    loggingPrefix: string,
    body: GetEpisodeToPlayRequestBody,
    sessionStr: string,
  ): Promise<GetEpisodeToPlayResponse>;
}

export abstract class GetVideoUrlHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_VIDEO_URL;
  public abstract handle(
    loggingPrefix: string,
    body: GetVideoUrlRequestBody,
    sessionStr: string,
  ): Promise<GetVideoUrlResponse>;
}

export abstract class GetMoreEpisdoesHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_MORE_EPISDOES;
  public abstract handle(
    loggingPrefix: string,
    body: GetMoreEpisdoesRequestBody,
    sessionStr: string,
  ): Promise<GetMoreEpisdoesResponse>;
}
