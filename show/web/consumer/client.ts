import { GetContinueEpisodeRequestBody, GetContinueEpisodeResponse, GET_CONTINUE_EPISODE, ListContinueWatchingSeasonsRequestBody, ListContinueWatchingSeasonsResponse, LIST_CONTINUE_WATCHING_SEASONS, AuthorizeEpisodePlaybackRequestBody, AuthorizeEpisodePlaybackResponse, AUTHORIZE_EPISODE_PLAYBACK, RateSeasonRequestBody, RateSeasonResponse, RATE_SEASON, UnrateSeasonRequestBody, UnrateSeasonResponse, UNRATE_SEASON, GetIndividualSeasonRatingRequestBody, GetIndividualSeasonRatingResponse, GET_INDIVIDUAL_SEASON_RATING } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGetContinueEpisodeRequest(
  body: GetContinueEpisodeRequestBody,
): ClientRequestInterface<GetContinueEpisodeResponse> {
  return {
    descriptor: GET_CONTINUE_EPISODE,
    body,
  };
}

export function newListContinueWatchingSeasonsRequest(
  body: ListContinueWatchingSeasonsRequestBody,
): ClientRequestInterface<ListContinueWatchingSeasonsResponse> {
  return {
    descriptor: LIST_CONTINUE_WATCHING_SEASONS,
    body,
  };
}

export function newAuthorizeEpisodePlaybackRequest(
  body: AuthorizeEpisodePlaybackRequestBody,
): ClientRequestInterface<AuthorizeEpisodePlaybackResponse> {
  return {
    descriptor: AUTHORIZE_EPISODE_PLAYBACK,
    body,
  };
}

export function newRateSeasonRequest(
  body: RateSeasonRequestBody,
): ClientRequestInterface<RateSeasonResponse> {
  return {
    descriptor: RATE_SEASON,
    body,
  };
}

export function newUnrateSeasonRequest(
  body: UnrateSeasonRequestBody,
): ClientRequestInterface<UnrateSeasonResponse> {
  return {
    descriptor: UNRATE_SEASON,
    body,
  };
}

export function newGetIndividualSeasonRatingRequest(
  body: GetIndividualSeasonRatingRequestBody,
): ClientRequestInterface<GetIndividualSeasonRatingResponse> {
  return {
    descriptor: GET_INDIVIDUAL_SEASON_RATING,
    body,
  };
}
