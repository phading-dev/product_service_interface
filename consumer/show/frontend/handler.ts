import { GetSeasonDetailsRequestBody, GET_SEASON_DETAILS, GetSeasonDetailsResponse, GetVideoToPlayRequestBody, GET_VIDEO_TO_PLAY, GetVideoToPlayResponse, GetMoreEpisdoesRequestBody, GET_MORE_EPISDOES, GetMoreEpisdoesResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetSeasonDetailsHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_SEASON_DETAILS;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonDetailsRequestBody,
    sessionStr: string,
  ): Promise<GetSeasonDetailsResponse>;
}

export abstract class GetVideoToPlayHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_VIDEO_TO_PLAY;
  public abstract handle(
    loggingPrefix: string,
    body: GetVideoToPlayRequestBody,
    sessionStr: string,
  ): Promise<GetVideoToPlayResponse>;
}

export abstract class GetMoreEpisdoesHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_MORE_EPISDOES;
  public abstract handle(
    loggingPrefix: string,
    body: GetMoreEpisdoesRequestBody,
    sessionStr: string,
  ): Promise<GetMoreEpisdoesResponse>;
}
