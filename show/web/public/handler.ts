import { GetSeasonNameRequestBody, GET_SEASON_NAME, GetSeasonNameResponse, GetSeasonSummaryRequestBody, GET_SEASON_SUMMARY, GetSeasonSummaryResponse, GetSeasonDetailsRequestBody, GET_SEASON_DETAILS, GetSeasonDetailsResponse, ListEpisodesRequestBody, LIST_EPISODES, ListEpisodesResponse, GetEpisodeRequestBody, GET_EPISODE, GetEpisodeResponse, GetEpisodeWithSeasonSummaryRequestBody, GET_EPISODE_WITH_SEASON_SUMMARY, GetEpisodeWithSeasonSummaryResponse, ListSeasonsByRecentPremiereTimeRequestBody, LIST_SEASONS_BY_RECENT_PREMIERE_TIME, ListSeasonsByRecentPremiereTimeResponse, ListSeasonsByRatingRequestBody, LIST_SEASONS_BY_RATING, ListSeasonsByRatingResponse, ListSeasonsByRecentPremiereTimeAndPublisherRequestBody, LIST_SEASONS_BY_RECENT_PREMIERE_TIME_AND_PUBLISHER, ListSeasonsByRecentPremiereTimeAndPublisherResponse, ListSeasonsByRatingAndPublisherRequestBody, LIST_SEASONS_BY_RATING_AND_PUBLISHER, ListSeasonsByRatingAndPublisherResponse, SearchSeasonsRequestBody, SEARCH_SEASONS, SearchSeasonsResponse, FlagSeasonRequestBody, FLAG_SEASON, FlagSeasonResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GetSeasonNameHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_SEASON_NAME;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonNameRequestBody,
  ): Promise<GetSeasonNameResponse>;
}

export abstract class GetSeasonSummaryHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_SEASON_SUMMARY;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonSummaryRequestBody,
  ): Promise<GetSeasonSummaryResponse>;
}

export abstract class GetSeasonDetailsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_SEASON_DETAILS;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonDetailsRequestBody,
  ): Promise<GetSeasonDetailsResponse>;
}

export abstract class ListEpisodesHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_EPISODES;
  public abstract handle(
    loggingPrefix: string,
    body: ListEpisodesRequestBody,
  ): Promise<ListEpisodesResponse>;
}

export abstract class GetEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: GetEpisodeRequestBody,
  ): Promise<GetEpisodeResponse>;
}

export abstract class GetEpisodeWithSeasonSummaryHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_EPISODE_WITH_SEASON_SUMMARY;
  public abstract handle(
    loggingPrefix: string,
    body: GetEpisodeWithSeasonSummaryRequestBody,
  ): Promise<GetEpisodeWithSeasonSummaryResponse>;
}

export abstract class ListSeasonsByRecentPremiereTimeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_SEASONS_BY_RECENT_PREMIERE_TIME;
  public abstract handle(
    loggingPrefix: string,
    body: ListSeasonsByRecentPremiereTimeRequestBody,
  ): Promise<ListSeasonsByRecentPremiereTimeResponse>;
}

export abstract class ListSeasonsByRatingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_SEASONS_BY_RATING;
  public abstract handle(
    loggingPrefix: string,
    body: ListSeasonsByRatingRequestBody,
  ): Promise<ListSeasonsByRatingResponse>;
}

export abstract class ListSeasonsByRecentPremiereTimeAndPublisherHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_SEASONS_BY_RECENT_PREMIERE_TIME_AND_PUBLISHER;
  public abstract handle(
    loggingPrefix: string,
    body: ListSeasonsByRecentPremiereTimeAndPublisherRequestBody,
  ): Promise<ListSeasonsByRecentPremiereTimeAndPublisherResponse>;
}

export abstract class ListSeasonsByRatingAndPublisherHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_SEASONS_BY_RATING_AND_PUBLISHER;
  public abstract handle(
    loggingPrefix: string,
    body: ListSeasonsByRatingAndPublisherRequestBody,
  ): Promise<ListSeasonsByRatingAndPublisherResponse>;
}

export abstract class SearchSeasonsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SEARCH_SEASONS;
  public abstract handle(
    loggingPrefix: string,
    body: SearchSeasonsRequestBody,
    authStr: string,
  ): Promise<SearchSeasonsResponse>;
}

export abstract class FlagSeasonHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = FLAG_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: FlagSeasonRequestBody,
    authStr: string,
  ): Promise<FlagSeasonResponse>;
}
