import { GetSeasonRequestBody, GetSeasonResponse, GET_SEASON, CreateSeasonRequestBody, CreateSeasonResponse, CREATE_SEASON, DeleteSeasonRequestBody, DeleteSeasonResponse, DELETE_SEASON, ArchiveSeasonRequestBody, ArchiveSeasonResponse, ARCHIVE_SEASON, UpdateSeasonRequestBody, UpdateSeasonResponse, UPDATE_SEASON, UploadCoverImageRequestMetadata, UploadCoverImageResponse, UPLOAD_COVER_IMAGE, UpdateSeasonGradeRequestBody, UpdateSeasonGradeResponse, UPDATE_SEASON_GRADE, ListSeasonsRequestBody, ListSeasonsResponse, LIST_SEASONS, SearchSeasonsRequestBody, SearchSeasonsResponse, SEARCH_SEASONS, CreateEpisodeRequestBody, CreateEpisodeResponse, CREATE_EPISODE, DeleteEpisodeRequestBody, DeleteEpisodeResponse, DELETE_EPISODE, GetEpisodeRequestBody, GetEpisodeResponse, GET_EPISODE, UpdateEpisodeRequestBody, UpdateEpisodeResponse, UPDATE_EPISODE, UpdateEpisodeOrderRequestBody, UpdateEpisodeOrderResponse, UPDATE_EPISODE_ORDER, PublishEpisodeRequestBody, PublishEpisodeResponse, PUBLISH_EPISODE, UnpublishEpisodeRequestBody, UnpublishEpisodeResponse, UNPUBLISH_EPISODE, ListEpisodesRequestBody, ListEpisodesResponse, LIST_EPISODES, CommitEpisodeStagingDataRequestBody, CommitEpisodeStagingDataResponse, COMMIT_EPISODE_STAGING_DATA, StartMediaUploadingRequestBody, StartMediaUploadingResponse, START_MEDIA_UPLOADING, CompleteMediaUploadingRequestBody, CompleteMediaUploadingResponse, COMPLETE_MEDIA_UPLOADING, CancelMediaUploadingRequestBody, CancelMediaUploadingResponse, CANCEL_MEDIA_UPLOADING, StartSubtitleUploadingRequestBody, StartSubtitleUploadingResponse, START_SUBTITLE_UPLOADING, CompleteSubtitleUploadingRequestBody, CompleteSubtitleUploadingResponse, COMPLETE_SUBTITLE_UPLOADING, CancelSubtitleUploadingRequestBody, CancelSubtitleUploadingResponse, CANCEL_SUBTITLE_UPLOADING, CancelMediaFormattingRequestBody, CancelMediaFormattingResponse, CANCEL_MEDIA_FORMATTING, CancelSubtitleFormattingRequestBody, CancelSubtitleFormattingResponse, CANCEL_SUBTITLE_FORMATTING, DeleteVideoTrackRequestBody, DeleteVideoTrackResponse, DELETE_VIDEO_TRACK, DropVideoTrackStagingDataRequestBody, DropVideoTrackStagingDataResponse, DROP_VIDEO_TRACK_STAGING_DATA, UpdateAudioTrackRequestBody, UpdateAudioTrackResponse, UPDATE_AUDIO_TRACK, DeleteAudioTrackRequestBody, DeleteAudioTrackResponse, DELETE_AUDIO_TRACK, DropAudioTrackStagingDataRequestBody, DropAudioTrackStagingDataResponse, DROP_AUDIO_TRACK_STAGING_DATA, UpdateSubtitleTrackRequestBody, UpdateSubtitleTrackResponse, UPDATE_SUBTITLE_TRACK, DeleteSubtitleTrackRequestBody, DeleteSubtitleTrackResponse, DELETE_SUBTITLE_TRACK, DropSubtitleTrackStagingDataRequestBody, DropSubtitleTrackStagingDataResponse, DROP_SUBTITLE_TRACK_STAGING_DATA } from './interface';
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

export function newUpdateEpisodeRequest(
  body: UpdateEpisodeRequestBody,
): ClientRequestInterface<UpdateEpisodeResponse> {
  return {
    descriptor: UPDATE_EPISODE,
    body,
  };
}

export function newUpdateEpisodeOrderRequest(
  body: UpdateEpisodeOrderRequestBody,
): ClientRequestInterface<UpdateEpisodeOrderResponse> {
  return {
    descriptor: UPDATE_EPISODE_ORDER,
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

export function newListEpisodesRequest(
  body: ListEpisodesRequestBody,
): ClientRequestInterface<ListEpisodesResponse> {
  return {
    descriptor: LIST_EPISODES,
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

export function newStartMediaUploadingRequest(
  body: StartMediaUploadingRequestBody,
): ClientRequestInterface<StartMediaUploadingResponse> {
  return {
    descriptor: START_MEDIA_UPLOADING,
    body,
  };
}

export function newCompleteMediaUploadingRequest(
  body: CompleteMediaUploadingRequestBody,
): ClientRequestInterface<CompleteMediaUploadingResponse> {
  return {
    descriptor: COMPLETE_MEDIA_UPLOADING,
    body,
  };
}

export function newCancelMediaUploadingRequest(
  body: CancelMediaUploadingRequestBody,
): ClientRequestInterface<CancelMediaUploadingResponse> {
  return {
    descriptor: CANCEL_MEDIA_UPLOADING,
    body,
  };
}

export function newStartSubtitleUploadingRequest(
  body: StartSubtitleUploadingRequestBody,
): ClientRequestInterface<StartSubtitleUploadingResponse> {
  return {
    descriptor: START_SUBTITLE_UPLOADING,
    body,
  };
}

export function newCompleteSubtitleUploadingRequest(
  body: CompleteSubtitleUploadingRequestBody,
): ClientRequestInterface<CompleteSubtitleUploadingResponse> {
  return {
    descriptor: COMPLETE_SUBTITLE_UPLOADING,
    body,
  };
}

export function newCancelSubtitleUploadingRequest(
  body: CancelSubtitleUploadingRequestBody,
): ClientRequestInterface<CancelSubtitleUploadingResponse> {
  return {
    descriptor: CANCEL_SUBTITLE_UPLOADING,
    body,
  };
}

export function newCancelMediaFormattingRequest(
  body: CancelMediaFormattingRequestBody,
): ClientRequestInterface<CancelMediaFormattingResponse> {
  return {
    descriptor: CANCEL_MEDIA_FORMATTING,
    body,
  };
}

export function newCancelSubtitleFormattingRequest(
  body: CancelSubtitleFormattingRequestBody,
): ClientRequestInterface<CancelSubtitleFormattingResponse> {
  return {
    descriptor: CANCEL_SUBTITLE_FORMATTING,
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
