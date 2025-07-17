import { GetContinueEpisodeRequestBody, GET_CONTINUE_EPISODE, GetContinueEpisodeResponse, ListContinueWatchingSeasonsRequestBody, LIST_CONTINUE_WATCHING_SEASONS, ListContinueWatchingSeasonsResponse, AuthorizeEpisodePlaybackRequestBody, AUTHORIZE_EPISODE_PLAYBACK, AuthorizeEpisodePlaybackResponse, RateSeasonRequestBody, RATE_SEASON, RateSeasonResponse, UnrateSeasonRequestBody, UNRATE_SEASON, UnrateSeasonResponse, GetIndividualSeasonRatingRequestBody, GET_INDIVIDUAL_SEASON_RATING, GetIndividualSeasonRatingResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

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
