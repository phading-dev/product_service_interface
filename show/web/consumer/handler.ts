import { GetSeasonDetailsRequestBody, GET_SEASON_DETAILS, GetSeasonDetailsResponse, GetEpisodeDetailsRequestBody, GET_EPISODE_DETAILS, GetEpisodeDetailsResponse, ListEpisodesRequestBody, LIST_EPISODES, ListEpisodesResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetSeasonDetailsHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_SEASON_DETAILS;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonDetailsRequestBody,
    sessionStr: string,
  ): Promise<GetSeasonDetailsResponse>;
}

export abstract class GetEpisodeDetailsHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_EPISODE_DETAILS;
  public abstract handle(
    loggingPrefix: string,
    body: GetEpisodeDetailsRequestBody,
    sessionStr: string,
  ): Promise<GetEpisodeDetailsResponse>;
}

export abstract class ListEpisodesHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_EPISODES;
  public abstract handle(
    loggingPrefix: string,
    body: ListEpisodesRequestBody,
    sessionStr: string,
  ): Promise<ListEpisodesResponse>;
}
