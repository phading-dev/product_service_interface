import { GetSeasonRequestBody, GetSeasonResponse, GET_SEASON, CreateSeasonRequestBody, CreateSeasonResponse, CREATE_SEASON, DeleteSeasonRequestBody, DeleteSeasonResponse, DELETE_SEASON, ArchiveSeasonRequestBody, ArchiveSeasonResponse, ARCHIVE_SEASON, UpdateSeasonRequestBody, UpdateSeasonResponse, UPDATE_SEASON, UploadCoverImageRequestMetadata, UploadCoverImageResponse, UPLOAD_COVER_IMAGE, UpdateSeasonGradeRequestBody, UpdateSeasonGradeResponse, UPDATE_SEASON_GRADE, UpdateNextSeasonGradeRequestBody, UpdateNextSeasonGradeResponse, UPDATE_NEXT_SEASON_GRADE, DeleteNextSeasonGradeRequestBody, DeleteNextSeasonGradeResponse, DELETE_NEXT_SEASON_GRADE, ListSeasonsRequestBody, ListSeasonsResponse, LIST_SEASONS, SearchSeasonsRequestBody, SearchSeasonsResponse, SEARCH_SEASONS, CreateEpisodeRequestBody, CreateEpisodeResponse, CREATE_EPISODE, DeleteEpisodeRequestBody, DeleteEpisodeResponse, DELETE_EPISODE, GetEpisodeRequestBody, GetEpisodeResponse, GET_EPISODE, UpdateEpisodeNameRequestBody, UpdateEpisodeNameResponse, UPDATE_EPISODE_NAME, UpdateEpisodePremiereTimeRequestBody, UpdateEpisodePremiereTimeResponse, UPDATE_EPISODE_PREMIERE_TIME, UpdateEpisodeIndexRequestBody, UpdateEpisodeIndexResponse, UPDATE_EPISODE_INDEX, PublishEpisodeRequestBody, PublishEpisodeResponse, PUBLISH_EPISODE, UnpublishEpisodeRequestBody, UnpublishEpisodeResponse, UNPUBLISH_EPISODE, ListDraftEpisodesRequestBody, ListDraftEpisodesResponse, LIST_DRAFT_EPISODES, ListPublishedEpisodesRequestBody, ListPublishedEpisodesResponse, LIST_PUBLISHED_EPISODES, StartUploadingRequestBody, StartUploadingResponse, START_UPLOADING, CompleteUploadingRequestBody, CompleteUploadingResponse, COMPLETE_UPLOADING, CancelUploadingRequestBody, CancelUploadingResponse, CANCEL_UPLOADING, SaveEpisodeStagingDataRequestBody, SaveEpisodeStagingDataResponse, SAVE_EPISODE_STAGING_DATA, CommitEpisodeStagingDataRequestBody, CommitEpisodeStagingDataResponse, COMMIT_EPISODE_STAGING_DATA } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGetSeasonRequest(
  body: GetSeasonRequestBody,
): ClientRequestInterface<GetSeasonResponse> {
  return {
    descriptor: GET_SEASON,
    body,
  };
}

export function newCreateSeasonRequest(
  body: CreateSeasonRequestBody,
): ClientRequestInterface<CreateSeasonResponse> {
  return {
    descriptor: CREATE_SEASON,
    body,
  };
}

export function newDeleteSeasonRequest(
  body: DeleteSeasonRequestBody,
): ClientRequestInterface<DeleteSeasonResponse> {
  return {
    descriptor: DELETE_SEASON,
    body,
  };
}

export function newArchiveSeasonRequest(
  body: ArchiveSeasonRequestBody,
): ClientRequestInterface<ArchiveSeasonResponse> {
  return {
    descriptor: ARCHIVE_SEASON,
    body,
  };
}

export function newUpdateSeasonRequest(
  body: UpdateSeasonRequestBody,
): ClientRequestInterface<UpdateSeasonResponse> {
  return {
    descriptor: UPDATE_SEASON,
    body,
  };
}

export function newUploadCoverImageRequest(
  body: Blob,
  metadata: UploadCoverImageRequestMetadata,
): ClientRequestInterface<UploadCoverImageResponse> {
  return {
    descriptor: UPLOAD_COVER_IMAGE,
    body,
      metadata,
  };
}

export function newUpdateSeasonGradeRequest(
  body: UpdateSeasonGradeRequestBody,
): ClientRequestInterface<UpdateSeasonGradeResponse> {
  return {
    descriptor: UPDATE_SEASON_GRADE,
    body,
  };
}

export function newUpdateNextSeasonGradeRequest(
  body: UpdateNextSeasonGradeRequestBody,
): ClientRequestInterface<UpdateNextSeasonGradeResponse> {
  return {
    descriptor: UPDATE_NEXT_SEASON_GRADE,
    body,
  };
}

export function newDeleteNextSeasonGradeRequest(
  body: DeleteNextSeasonGradeRequestBody,
): ClientRequestInterface<DeleteNextSeasonGradeResponse> {
  return {
    descriptor: DELETE_NEXT_SEASON_GRADE,
    body,
  };
}

export function newListSeasonsRequest(
  body: ListSeasonsRequestBody,
): ClientRequestInterface<ListSeasonsResponse> {
  return {
    descriptor: LIST_SEASONS,
    body,
  };
}

export function newSearchSeasonsRequest(
  body: SearchSeasonsRequestBody,
): ClientRequestInterface<SearchSeasonsResponse> {
  return {
    descriptor: SEARCH_SEASONS,
    body,
  };
}

export function newCreateEpisodeRequest(
  body: CreateEpisodeRequestBody,
): ClientRequestInterface<CreateEpisodeResponse> {
  return {
    descriptor: CREATE_EPISODE,
    body,
  };
}

export function newDeleteEpisodeRequest(
  body: DeleteEpisodeRequestBody,
): ClientRequestInterface<DeleteEpisodeResponse> {
  return {
    descriptor: DELETE_EPISODE,
    body,
  };
}

export function newGetEpisodeRequest(
  body: GetEpisodeRequestBody,
): ClientRequestInterface<GetEpisodeResponse> {
  return {
    descriptor: GET_EPISODE,
    body,
  };
}

export function newUpdateEpisodeNameRequest(
  body: UpdateEpisodeNameRequestBody,
): ClientRequestInterface<UpdateEpisodeNameResponse> {
  return {
    descriptor: UPDATE_EPISODE_NAME,
    body,
  };
}

export function newUpdateEpisodePremiereTimeRequest(
  body: UpdateEpisodePremiereTimeRequestBody,
): ClientRequestInterface<UpdateEpisodePremiereTimeResponse> {
  return {
    descriptor: UPDATE_EPISODE_PREMIERE_TIME,
    body,
  };
}

export function newUpdateEpisodeIndexRequest(
  body: UpdateEpisodeIndexRequestBody,
): ClientRequestInterface<UpdateEpisodeIndexResponse> {
  return {
    descriptor: UPDATE_EPISODE_INDEX,
    body,
  };
}

export function newPublishEpisodeRequest(
  body: PublishEpisodeRequestBody,
): ClientRequestInterface<PublishEpisodeResponse> {
  return {
    descriptor: PUBLISH_EPISODE,
    body,
  };
}

export function newUnpublishEpisodeRequest(
  body: UnpublishEpisodeRequestBody,
): ClientRequestInterface<UnpublishEpisodeResponse> {
  return {
    descriptor: UNPUBLISH_EPISODE,
    body,
  };
}

export function newListDraftEpisodesRequest(
  body: ListDraftEpisodesRequestBody,
): ClientRequestInterface<ListDraftEpisodesResponse> {
  return {
    descriptor: LIST_DRAFT_EPISODES,
    body,
  };
}

export function newListPublishedEpisodesRequest(
  body: ListPublishedEpisodesRequestBody,
): ClientRequestInterface<ListPublishedEpisodesResponse> {
  return {
    descriptor: LIST_PUBLISHED_EPISODES,
    body,
  };
}

export function newStartUploadingRequest(
  body: StartUploadingRequestBody,
): ClientRequestInterface<StartUploadingResponse> {
  return {
    descriptor: START_UPLOADING,
    body,
  };
}

export function newCompleteUploadingRequest(
  body: CompleteUploadingRequestBody,
): ClientRequestInterface<CompleteUploadingResponse> {
  return {
    descriptor: COMPLETE_UPLOADING,
    body,
  };
}

export function newCancelUploadingRequest(
  body: CancelUploadingRequestBody,
): ClientRequestInterface<CancelUploadingResponse> {
  return {
    descriptor: CANCEL_UPLOADING,
    body,
  };
}

export function newSaveEpisodeStagingDataRequest(
  body: SaveEpisodeStagingDataRequestBody,
): ClientRequestInterface<SaveEpisodeStagingDataResponse> {
  return {
    descriptor: SAVE_EPISODE_STAGING_DATA,
    body,
  };
}

export function newCommitEpisodeStagingDataRequest(
  body: CommitEpisodeStagingDataRequestBody,
): ClientRequestInterface<CommitEpisodeStagingDataResponse> {
  return {
    descriptor: COMMIT_EPISODE_STAGING_DATA,
    body,
  };
}
