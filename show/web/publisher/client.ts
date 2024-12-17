import { GetSeasonDetailsRequestBody, GetSeasonDetailsResponse, GET_SEASON_DETAILS, CreateSeasonRequestBody, CreateSeasonResponse, CREATE_SEASON, DeleteSeasonRequestBody, DeleteSeasonResponse, DELETE_SEASON, ArchiveSeasonRequestBody, ArchiveSeasonResponse, ARCHIVE_SEASON, UpdateSeasonRequestBody, UpdateSeasonResponse, UPDATE_SEASON, UploadCoverImageRequestMetadata, UploadCoverImageResponse, UPLOAD_COVER_IMAGE, UpdateSeasonGradeRequestBody, UpdateSeasonGradeResponse, UPDATE_SEASON_GRADE, ListSeasonsRequestBody, ListSeasonsResponse, LIST_SEASONS, CreateEpisodeRequestBody, CreateEpisodeResponse, CREATE_EPISODE, DeleteEpisodeRequestBody, DeleteEpisodeResponse, DELETE_EPISODE, UpdateEpisodeRequestBody, UpdateEpisodeResponse, UPDATE_EPISODE, UpdateEpisodeOrderRequestBody, UpdateEpisodeOrderResponse, UPDATE_EPISODE_ORDER, ListEpisodesRequestBody, ListEpisodesResponse, LIST_EPISODES, PublishEpisodeRequestBody, PublishEpisodeResponse, PUBLISH_EPISODE } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function getSeasonDetails(
  client: WebClientInterface,
  body: GetSeasonDetailsRequestBody,
  options?: WebClientOptions,
): Promise<GetSeasonDetailsResponse> {
  return client.send(
    {
      descriptor: GET_SEASON_DETAILS,
      body,
    },
    options,
  );
}

export function createSeason(
  client: WebClientInterface,
  body: CreateSeasonRequestBody,
  options?: WebClientOptions,
): Promise<CreateSeasonResponse> {
  return client.send(
    {
      descriptor: CREATE_SEASON,
      body,
    },
    options,
  );
}

export function deleteSeason(
  client: WebClientInterface,
  body: DeleteSeasonRequestBody,
  options?: WebClientOptions,
): Promise<DeleteSeasonResponse> {
  return client.send(
    {
      descriptor: DELETE_SEASON,
      body,
    },
    options,
  );
}

export function archiveSeason(
  client: WebClientInterface,
  body: ArchiveSeasonRequestBody,
  options?: WebClientOptions,
): Promise<ArchiveSeasonResponse> {
  return client.send(
    {
      descriptor: ARCHIVE_SEASON,
      body,
    },
    options,
  );
}

export function updateSeason(
  client: WebClientInterface,
  body: UpdateSeasonRequestBody,
  options?: WebClientOptions,
): Promise<UpdateSeasonResponse> {
  return client.send(
    {
      descriptor: UPDATE_SEASON,
      body,
    },
    options,
  );
}

export function uploadCoverImage(
  client: WebClientInterface,
  body: Blob,
  metadata: UploadCoverImageRequestMetadata,
  options?: WebClientOptions,
): Promise<UploadCoverImageResponse> {
  return client.send(
    {
      descriptor: UPLOAD_COVER_IMAGE,
      body,
      metadata,
    },
    options,
  );
}

export function updateSeasonGrade(
  client: WebClientInterface,
  body: UpdateSeasonGradeRequestBody,
  options?: WebClientOptions,
): Promise<UpdateSeasonGradeResponse> {
  return client.send(
    {
      descriptor: UPDATE_SEASON_GRADE,
      body,
    },
    options,
  );
}

export function listSeasons(
  client: WebClientInterface,
  body: ListSeasonsRequestBody,
  options?: WebClientOptions,
): Promise<ListSeasonsResponse> {
  return client.send(
    {
      descriptor: LIST_SEASONS,
      body,
    },
    options,
  );
}

export function createEpisode(
  client: WebClientInterface,
  body: CreateEpisodeRequestBody,
  options?: WebClientOptions,
): Promise<CreateEpisodeResponse> {
  return client.send(
    {
      descriptor: CREATE_EPISODE,
      body,
    },
    options,
  );
}

export function deleteEpisode(
  client: WebClientInterface,
  body: DeleteEpisodeRequestBody,
  options?: WebClientOptions,
): Promise<DeleteEpisodeResponse> {
  return client.send(
    {
      descriptor: DELETE_EPISODE,
      body,
    },
    options,
  );
}

export function updateEpisode(
  client: WebClientInterface,
  body: UpdateEpisodeRequestBody,
  options?: WebClientOptions,
): Promise<UpdateEpisodeResponse> {
  return client.send(
    {
      descriptor: UPDATE_EPISODE,
      body,
    },
    options,
  );
}

export function updateEpisodeOrder(
  client: WebClientInterface,
  body: UpdateEpisodeOrderRequestBody,
  options?: WebClientOptions,
): Promise<UpdateEpisodeOrderResponse> {
  return client.send(
    {
      descriptor: UPDATE_EPISODE_ORDER,
      body,
    },
    options,
  );
}

export function listEpisodes(
  client: WebClientInterface,
  body: ListEpisodesRequestBody,
  options?: WebClientOptions,
): Promise<ListEpisodesResponse> {
  return client.send(
    {
      descriptor: LIST_EPISODES,
      body,
    },
    options,
  );
}

export function publishEpisode(
  client: WebClientInterface,
  body: PublishEpisodeRequestBody,
  options?: WebClientOptions,
): Promise<PublishEpisodeResponse> {
  return client.send(
    {
      descriptor: PUBLISH_EPISODE,
      body,
    },
    options,
  );
}
