import { GetSeasonDetailsRequestBody, GET_SEASON_DETAILS, GetSeasonDetailsResponse, GetEpisodeDetailsRequestBody, GET_EPISODE_DETAILS, GetEpisodeDetailsResponse, ListEpisodesRequestBody, LIST_EPISODES, ListEpisodesResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GetSeasonDetailsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_SEASON_DETAILS;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonDetailsRequestBody,
    authStr: string,
  ): Promise<GetSeasonDetailsResponse>;
}

export abstract class GetEpisodeDetailsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_EPISODE_DETAILS;
  public abstract handle(
    loggingPrefix: string,
    body: GetEpisodeDetailsRequestBody,
    authStr: string,
  ): Promise<GetEpisodeDetailsResponse>;
}

export abstract class ListEpisodesHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_EPISODES;
  public abstract handle(
    loggingPrefix: string,
    body: ListEpisodesRequestBody,
    authStr: string,
  ): Promise<ListEpisodesResponse>;
}
