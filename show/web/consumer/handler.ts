import { GetSeasonNameRequestBody, GET_SEASON_NAME, GetSeasonNameResponse, GetSeasonSummaryRequestBody, GET_SEASON_SUMMARY, GetSeasonSummaryResponse, GetSeasonDetailsRequestBody, GET_SEASON_DETAILS, GetSeasonDetailsResponse, ListEpisodesRequestBody, LIST_EPISODES, ListEpisodesResponse, GetEpisodeRequestBody, GET_EPISODE, GetEpisodeResponse, GetEpisodeWithSeasonSummaryRequestBody, GET_EPISODE_WITH_SEASON_SUMMARY, GetEpisodeWithSeasonSummaryResponse, ListSeasonsByRecentPremiereTimeRequestBody, LIST_SEASONS_BY_RECENT_PREMIERE_TIME, ListSeasonsByRecentPremiereTimeResponse, ListSeasonsByRatingRequestBody, LIST_SEASONS_BY_RATING, ListSeasonsByRatingResponse, ListSeasonsByRecentPremiereTimeAndPublisherRequestBody, LIST_SEASONS_BY_RECENT_PREMIERE_TIME_AND_PUBLISHER, ListSeasonsByRecentPremiereTimeAndPublisherResponse, ListSeasonsByRatingAndPublisherRequestBody, LIST_SEASONS_BY_RATING_AND_PUBLISHER, ListSeasonsByRatingAndPublisherResponse, GetContinueEpisodeRequestBody, GET_CONTINUE_EPISODE, GetContinueEpisodeResponse, ListContinueWatchingSeasonsRequestBody, LIST_CONTINUE_WATCHING_SEASONS, ListContinueWatchingSeasonsResponse, AuthorizeEpisodePlaybackRequestBody, AUTHORIZE_EPISODE_PLAYBACK, AuthorizeEpisodePlaybackResponse, SearchSeasonsRequestBody, SEARCH_SEASONS, SearchSeasonsResponse, RateSeasonRequestBody, RATE_SEASON, RateSeasonResponse, UnrateSeasonRequestBody, UNRATE_SEASON, UnrateSeasonResponse, GetIndividualSeasonRatingRequestBody, GET_INDIVIDUAL_SEASON_RATING, GetIndividualSeasonRatingResponse } from './interface';
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

export abstract class GetContinueEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_CONTINUE_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: GetContinueEpisodeRequestBody,
    authStr: string,
  ): Promise<GetContinueEpisodeResponse>;
}

export abstract class ListContinueWatchingSeasonsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_CONTINUE_WATCHING_SEASONS;
  public abstract handle(
    loggingPrefix: string,
    body: ListContinueWatchingSeasonsRequestBody,
    authStr: string,
  ): Promise<ListContinueWatchingSeasonsResponse>;
}

export abstract class AuthorizeEpisodePlaybackHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = AUTHORIZE_EPISODE_PLAYBACK;
  public abstract handle(
    loggingPrefix: string,
    body: AuthorizeEpisodePlaybackRequestBody,
    authStr: string,
  ): Promise<AuthorizeEpisodePlaybackResponse>;
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
