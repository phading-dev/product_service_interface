import { GetSeasonDetailsRequestBody, GET_SEASON_DETAILS, GetSeasonDetailsResponse, GetEpisodeDetailsRequestBody, GET_EPISODE_DETAILS, GetEpisodeDetailsResponse, ListEpisodesRequestBody, LIST_EPISODES, ListEpisodesResponse, GetContinueEpisodeRequestBody, GET_CONTINUE_EPISODE, GetContinueEpisodeResponse, ListSeasonsByRecentPremiereTimeRequestBody, LIST_SEASONS_BY_RECENT_PREMIERE_TIME, ListSeasonsByRecentPremiereTimeResponse, ListSeasonsByRatingRequestBody, LIST_SEASONS_BY_RATING, ListSeasonsByRatingResponse, ListContinueWatchingSeasonsRequestBody, LIST_CONTINUE_WATCHING_SEASONS, ListContinueWatchingSeasonsResponse, SearchSeasonsRequestBody, SEARCH_SEASONS, SearchSeasonsResponse, RateSeasonRequestBody, RATE_SEASON, RateSeasonResponse, UnrateSeasonRequestBody, UNRATE_SEASON, UnrateSeasonResponse, GetIndividualSeasonRatingRequestBody, GET_INDIVIDUAL_SEASON_RATING, GetIndividualSeasonRatingResponse } from './interface';
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

export abstract class GetContinueEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_CONTINUE_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: GetContinueEpisodeRequestBody,
    authStr: string,
  ): Promise<GetContinueEpisodeResponse>;
}

export abstract class ListSeasonsByRecentPremiereTimeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_SEASONS_BY_RECENT_PREMIERE_TIME;
  public abstract handle(
    loggingPrefix: string,
    body: ListSeasonsByRecentPremiereTimeRequestBody,
    authStr: string,
  ): Promise<ListSeasonsByRecentPremiereTimeResponse>;
}

export abstract class ListSeasonsByRatingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_SEASONS_BY_RATING;
  public abstract handle(
    loggingPrefix: string,
    body: ListSeasonsByRatingRequestBody,
    authStr: string,
  ): Promise<ListSeasonsByRatingResponse>;
}

export abstract class ListContinueWatchingSeasonsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_CONTINUE_WATCHING_SEASONS;
  public abstract handle(
    loggingPrefix: string,
    body: ListContinueWatchingSeasonsRequestBody,
    authStr: string,
  ): Promise<ListContinueWatchingSeasonsResponse>;
}

export abstract class SearchSeasonsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SEARCH_SEASONS;
  public abstract handle(
    loggingPrefix: string,
    body: SearchSeasonsRequestBody,
    authStr: string,
  ): Promise<SearchSeasonsResponse>;
}

export abstract class RateSeasonHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = RATE_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: RateSeasonRequestBody,
    authStr: string,
  ): Promise<RateSeasonResponse>;
}

export abstract class UnrateSeasonHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UNRATE_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: UnrateSeasonRequestBody,
    authStr: string,
  ): Promise<UnrateSeasonResponse>;
}

export abstract class GetIndividualSeasonRatingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_INDIVIDUAL_SEASON_RATING;
  public abstract handle(
    loggingPrefix: string,
    body: GetIndividualSeasonRatingRequestBody,
    authStr: string,
  ): Promise<GetIndividualSeasonRatingResponse>;
}
