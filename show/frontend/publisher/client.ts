import { GetSeasonDetailsRequestBody, GetSeasonDetailsResponse, GET_SEASON_DETAILS, CreateSeasonRequestBody, CreateSeasonResponse, CREATE_SEASON, UpdateSeasonRequestBody, UpdateSeasonResponse, UPDATE_SEASON, UploadCoverImageRequestMetadata, UploadCoverImageResponse, UPLOAD_COVER_IMAGE, UpdateSeasonGradeRequestBody, UpdateSeasonGradeResponse, UPDATE_SEASON_GRADE, DeleteSeasonRequestBody, DeleteSeasonResponse, DELETE_SEASON, ArchiveSeasonRequestBody, ArchiveSeasonResponse, ARCHIVE_SEASON, ListSeasonsRequestBody, ListSeasonsResponse, LIST_SEASONS, CreateEpisodeDraftRequestBody, CreateEpisodeDraftResponse, CREATE_EPISODE_DRAFT, UpdateEpisodeDraftRequestBody, UpdateEpisodeDraftResponse, UPDATE_EPISODE_DRAFT, UploadEpisodeVideoMetadata, UploadEpisodeVideoResponse, UPLOAD_EPISODE_VIDEO, DeleteEpisodeVideoRequestBody, DeleteEpisodeVideoResponse, DELETE_EPISODE_VIDEO, DeleteEpisodeDraftRequestBody, DeleteEpisodeDraftResponse, DELETE_EPISODE_DRAFT, GetMoreEpisodesRequestBody, GetMoreEpisodesResponse, GET_MORE_EPISODES, PublishEpisodeRequestBody, PublishEpisodeResponse, PUBLISH_EPISODE, UpdateEpisodeOrderRequestBody, UpdateEpisodeOrderResponse, UPDATE_EPISODE_ORDER, DeleteEpisodeRequestBody, DeleteEpisodeResponse, DELETE_EPISODE } from './interface';
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

export function createEpisodeDraft(
  client: WebClientInterface,
  body: CreateEpisodeDraftRequestBody,
  options?: WebClientOptions,
): Promise<CreateEpisodeDraftResponse> {
  return client.send(
    {
      descriptor: CREATE_EPISODE_DRAFT,
      body,
    },
    options,
  );
}

export function updateEpisodeDraft(
  client: WebClientInterface,
  body: UpdateEpisodeDraftRequestBody,
  options?: WebClientOptions,
): Promise<UpdateEpisodeDraftResponse> {
  return client.send(
    {
      descriptor: UPDATE_EPISODE_DRAFT,
      body,
    },
    options,
  );
}

export function uploadEpisodeVideo(
  client: WebClientInterface,
  body: Blob,
  metadata: UploadEpisodeVideoMetadata,
  options?: WebClientOptions,
): Promise<UploadEpisodeVideoResponse> {
  return client.send(
    {
      descriptor: UPLOAD_EPISODE_VIDEO,
      body,
      metadata,
    },
    options,
  );
}

export function deleteEpisodeVideo(
  client: WebClientInterface,
  body: DeleteEpisodeVideoRequestBody,
  options?: WebClientOptions,
): Promise<DeleteEpisodeVideoResponse> {
  return client.send(
    {
      descriptor: DELETE_EPISODE_VIDEO,
      body,
    },
    options,
  );
}

export function deleteEpisodeDraft(
  client: WebClientInterface,
  body: DeleteEpisodeDraftRequestBody,
  options?: WebClientOptions,
): Promise<DeleteEpisodeDraftResponse> {
  return client.send(
    {
      descriptor: DELETE_EPISODE_DRAFT,
      body,
    },
    options,
  );
}

export function getMoreEpisodes(
  client: WebClientInterface,
  body: GetMoreEpisodesRequestBody,
  options?: WebClientOptions,
): Promise<GetMoreEpisodesResponse> {
  return client.send(
    {
      descriptor: GET_MORE_EPISODES,
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
