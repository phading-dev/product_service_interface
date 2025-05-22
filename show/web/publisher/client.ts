import { GetSeasonRequestBody, GetSeasonResponse, GET_SEASON, CreateSeasonRequestBody, CreateSeasonResponse, CREATE_SEASON, DeleteSeasonRequestBody, DeleteSeasonResponse, DELETE_SEASON, ArchiveSeasonRequestBody, ArchiveSeasonResponse, ARCHIVE_SEASON, UpdateSeasonRequestBody, UpdateSeasonResponse, UPDATE_SEASON, UploadCoverImageRequestMetadata, UploadCoverImageResponse, UPLOAD_COVER_IMAGE, UpdateSeasonGradeRequestBody, UpdateSeasonGradeResponse, UPDATE_SEASON_GRADE, UpdateNextSeasonGradeRequestBody, UpdateNextSeasonGradeResponse, UPDATE_NEXT_SEASON_GRADE, DeleteNextSeasonGradeRequestBody, DeleteNextSeasonGradeResponse, DELETE_NEXT_SEASON_GRADE, ListSeasonsRequestBody, ListSeasonsResponse, LIST_SEASONS, SearchSeasonsRequestBody, SearchSeasonsResponse, SEARCH_SEASONS, CreateEpisodeRequestBody, CreateEpisodeResponse, CREATE_EPISODE, DeleteEpisodeRequestBody, DeleteEpisodeResponse, DELETE_EPISODE, GetEpisodeRequestBody, GetEpisodeResponse, GET_EPISODE, UpdateEpisodeNameRequestBody, UpdateEpisodeNameResponse, UPDATE_EPISODE_NAME, UpdateEpisodePremiereTimeRequestBody, UpdateEpisodePremiereTimeResponse, UPDATE_EPISODE_PREMIERE_TIME, UpdateEpisodeIndexRequestBody, UpdateEpisodeIndexResponse, UPDATE_EPISODE_INDEX, PublishEpisodeRequestBody, PublishEpisodeResponse, PUBLISH_EPISODE, UnpublishEpisodeRequestBody, UnpublishEpisodeResponse, UNPUBLISH_EPISODE, ListDraftEpisodesRequestBody, ListDraftEpisodesResponse, LIST_DRAFT_EPISODES, ListPublishedEpisodesRequestBody, ListPublishedEpisodesResponse, LIST_PUBLISHED_EPISODES, CommitEpisodeStagingDataRequestBody, CommitEpisodeStagingDataResponse, COMMIT_EPISODE_STAGING_DATA, StartUploadingRequestBody, StartUploadingResponse, START_UPLOADING, CompleteUploadingRequestBody, CompleteUploadingResponse, COMPLETE_UPLOADING, CancelUploadingRequestBody, CancelUploadingResponse, CANCEL_UPLOADING, DeleteVideoTrackRequestBody, DeleteVideoTrackResponse, DELETE_VIDEO_TRACK, DropVideoTrackStagingDataRequestBody, DropVideoTrackStagingDataResponse, DROP_VIDEO_TRACK_STAGING_DATA, UpdateAudioTrackRequestBody, UpdateAudioTrackResponse, UPDATE_AUDIO_TRACK, DeleteAudioTrackRequestBody, DeleteAudioTrackResponse, DELETE_AUDIO_TRACK, DropAudioTrackStagingDataRequestBody, DropAudioTrackStagingDataResponse, DROP_AUDIO_TRACK_STAGING_DATA, UpdateSubtitleTrackRequestBody, UpdateSubtitleTrackResponse, UPDATE_SUBTITLE_TRACK, DeleteSubtitleTrackRequestBody, DeleteSubtitleTrackResponse, DELETE_SUBTITLE_TRACK, DropSubtitleTrackStagingDataRequestBody, DropSubtitleTrackStagingDataResponse, DROP_SUBTITLE_TRACK_STAGING_DATA } from './interface';
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

export function newCommitEpisodeStagingDataRequest(
  body: CommitEpisodeStagingDataRequestBody,
): ClientRequestInterface<CommitEpisodeStagingDataResponse> {
  return {
    descriptor: COMMIT_EPISODE_STAGING_DATA,
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

export function newDeleteVideoTrackRequest(
  body: DeleteVideoTrackRequestBody,
): ClientRequestInterface<DeleteVideoTrackResponse> {
  return {
    descriptor: DELETE_VIDEO_TRACK,
    body,
  };
}

export function newDropVideoTrackStagingDataRequest(
  body: DropVideoTrackStagingDataRequestBody,
): ClientRequestInterface<DropVideoTrackStagingDataResponse> {
  return {
    descriptor: DROP_VIDEO_TRACK_STAGING_DATA,
    body,
  };
}

export function newUpdateAudioTrackRequest(
  body: UpdateAudioTrackRequestBody,
): ClientRequestInterface<UpdateAudioTrackResponse> {
  return {
    descriptor: UPDATE_AUDIO_TRACK,
    body,
  };
}

export function newDeleteAudioTrackRequest(
  body: DeleteAudioTrackRequestBody,
): ClientRequestInterface<DeleteAudioTrackResponse> {
  return {
    descriptor: DELETE_AUDIO_TRACK,
    body,
  };
}

export function newDropAudioTrackStagingDataRequest(
  body: DropAudioTrackStagingDataRequestBody,
): ClientRequestInterface<DropAudioTrackStagingDataResponse> {
  return {
    descriptor: DROP_AUDIO_TRACK_STAGING_DATA,
    body,
  };
}

export function newUpdateSubtitleTrackRequest(
  body: UpdateSubtitleTrackRequestBody,
): ClientRequestInterface<UpdateSubtitleTrackResponse> {
  return {
    descriptor: UPDATE_SUBTITLE_TRACK,
    body,
  };
}

export function newDeleteSubtitleTrackRequest(
  body: DeleteSubtitleTrackRequestBody,
): ClientRequestInterface<DeleteSubtitleTrackResponse> {
  return {
    descriptor: DELETE_SUBTITLE_TRACK,
    body,
  };
}

export function newDropSubtitleTrackStagingDataRequest(
  body: DropSubtitleTrackStagingDataRequestBody,
): ClientRequestInterface<DropSubtitleTrackStagingDataResponse> {
  return {
    descriptor: DROP_SUBTITLE_TRACK_STAGING_DATA,
    body,
  };
}
