import { GetSeasonDetailsRequestBody, GET_SEASON_DETAILS, GetSeasonDetailsResponse, GetVideoToPlayRequestBody, GET_VIDEO_TO_PLAY, GetVideoToPlayResponse, GetMoreEpisodesRequestBody, GET_MORE_EPISODES, GetMoreEpisodesResponse } from './interface';
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

export abstract class GetMoreEpisodesHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_MORE_EPISODES;
  public abstract handle(
    loggingPrefix: string,
    body: GetMoreEpisodesRequestBody,
    sessionStr: string,
  ): Promise<GetMoreEpisodesResponse>;
}
