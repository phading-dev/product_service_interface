import { GetSeasonRequestBody, GetSeasonResponse, GET_SEASON, CreateSeasonRequestBody, CreateSeasonResponse, CREATE_SEASON, DeleteSeasonRequestBody, DeleteSeasonResponse, DELETE_SEASON, ArchiveSeasonRequestBody, ArchiveSeasonResponse, ARCHIVE_SEASON, UpdateSeasonRequestBody, UpdateSeasonResponse, UPDATE_SEASON, UploadCoverImageRequestMetadata, UploadCoverImageResponse, UPLOAD_COVER_IMAGE, UpdateSeasonGradeRequestBody, UpdateSeasonGradeResponse, UPDATE_SEASON_GRADE, ListSeasonsRequestBody, ListSeasonsResponse, LIST_SEASONS, CreateEpisodeRequestBody, CreateEpisodeResponse, CREATE_EPISODE, DeleteEpisodeRequestBody, DeleteEpisodeResponse, DELETE_EPISODE, GetEpisodeRequestBody, GetEpisodeResponse, GET_EPISODE, UpdateEpisodeRequestBody, UpdateEpisodeResponse, UPDATE_EPISODE, UpdateEpisodeOrderRequestBody, UpdateEpisodeOrderResponse, UPDATE_EPISODE_ORDER, PublishEpisodeRequestBody, PublishEpisodeResponse, PUBLISH_EPISODE, UnpublishEpisodeRequestBody, UnpublishEpisodeResponse, UNPUBLISH_EPISODE, ListEpisodesRequestBody, ListEpisodesResponse, LIST_EPISODES, CommitEpisodeStagingDataRequestBody, CommitEpisodeStagingDataResponse, COMMIT_EPISODE_STAGING_DATA, StartMediaUploadingRequestBody, StartMediaUploadingResponse, START_MEDIA_UPLOADING, CompleteMediaUploadingRequestBody, CompleteMediaUploadingResponse, COMPLETE_MEDIA_UPLOADING, CancelMediaUploadingRequestBody, CancelMediaUploadingResponse, CANCEL_MEDIA_UPLOADING, StartSubtitleUploadingRequestBody, StartSubtitleUploadingResponse, START_SUBTITLE_UPLOADING, CompleteSubtitleUploadingRequestBody, CompleteSubtitleUploadingResponse, COMPLETE_SUBTITLE_UPLOADING, CancelSubtitleUploadingRequestBody, CancelSubtitleUploadingResponse, CANCEL_SUBTITLE_UPLOADING, CancelMediaFormattingRequestBody, CancelMediaFormattingResponse, CANCEL_MEDIA_FORMATTING, CancelSubtitleFormattingRequestBody, CancelSubtitleFormattingResponse, CANCEL_SUBTITLE_FORMATTING, DeleteVideoTrackRequestBody, DeleteVideoTrackResponse, DELETE_VIDEO_TRACK, DropVideoTrackStagingDataRequestBody, DropVideoTrackStagingDataResponse, DROP_VIDEO_TRACK_STAGING_DATA, UpdateAudioTrackRequestBody, UpdateAudioTrackResponse, UPDATE_AUDIO_TRACK, DeleteAudioTrackRequestBody, DeleteAudioTrackResponse, DELETE_AUDIO_TRACK, DropAudioTrackStagingDataRequestBody, DropAudioTrackStagingDataResponse, DROP_AUDIO_TRACK_STAGING_DATA, UpdateSubtitleTrackRequestBody, UpdateSubtitleTrackResponse, UPDATE_SUBTITLE_TRACK, DeleteSubtitleTrackRequestBody, DeleteSubtitleTrackResponse, DELETE_SUBTITLE_TRACK, DropSubtitleTrackStagingDataRequestBody, DropSubtitleTrackStagingDataResponse, DROP_SUBTITLE_TRACK_STAGING_DATA } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function getSeason(
  client: WebClientInterface,
  body: GetSeasonRequestBody,
  options?: WebClientOptions,
): Promise<GetSeasonResponse> {
  return client.send(
    {
      descriptor: GET_SEASON,
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

export function getEpisode(
  client: WebClientInterface,
  body: GetEpisodeRequestBody,
  options?: WebClientOptions,
): Promise<GetEpisodeResponse> {
  return client.send(
    {
      descriptor: GET_EPISODE,
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

export function unpublishEpisode(
  client: WebClientInterface,
  body: UnpublishEpisodeRequestBody,
  options?: WebClientOptions,
): Promise<UnpublishEpisodeResponse> {
  return client.send(
    {
      descriptor: UNPUBLISH_EPISODE,
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

export function commitEpisodeStagingData(
  client: WebClientInterface,
  body: CommitEpisodeStagingDataRequestBody,
  options?: WebClientOptions,
): Promise<CommitEpisodeStagingDataResponse> {
  return client.send(
    {
      descriptor: COMMIT_EPISODE_STAGING_DATA,
      body,
    },
    options,
  );
}

export function startMediaUploading(
  client: WebClientInterface,
  body: StartMediaUploadingRequestBody,
  options?: WebClientOptions,
): Promise<StartMediaUploadingResponse> {
  return client.send(
    {
      descriptor: START_MEDIA_UPLOADING,
      body,
    },
    options,
  );
}

export function completeMediaUploading(
  client: WebClientInterface,
  body: CompleteMediaUploadingRequestBody,
  options?: WebClientOptions,
): Promise<CompleteMediaUploadingResponse> {
  return client.send(
    {
      descriptor: COMPLETE_MEDIA_UPLOADING,
      body,
    },
    options,
  );
}

export function cancelMediaUploading(
  client: WebClientInterface,
  body: CancelMediaUploadingRequestBody,
  options?: WebClientOptions,
): Promise<CancelMediaUploadingResponse> {
  return client.send(
    {
      descriptor: CANCEL_MEDIA_UPLOADING,
      body,
    },
    options,
  );
}

export function startSubtitleUploading(
  client: WebClientInterface,
  body: StartSubtitleUploadingRequestBody,
  options?: WebClientOptions,
): Promise<StartSubtitleUploadingResponse> {
  return client.send(
    {
      descriptor: START_SUBTITLE_UPLOADING,
      body,
    },
    options,
  );
}

export function completeSubtitleUploading(
  client: WebClientInterface,
  body: CompleteSubtitleUploadingRequestBody,
  options?: WebClientOptions,
): Promise<CompleteSubtitleUploadingResponse> {
  return client.send(
    {
      descriptor: COMPLETE_SUBTITLE_UPLOADING,
      body,
    },
    options,
  );
}

export function cancelSubtitleUploading(
  client: WebClientInterface,
  body: CancelSubtitleUploadingRequestBody,
  options?: WebClientOptions,
): Promise<CancelSubtitleUploadingResponse> {
  return client.send(
    {
      descriptor: CANCEL_SUBTITLE_UPLOADING,
      body,
    },
    options,
  );
}

export function cancelMediaFormatting(
  client: WebClientInterface,
  body: CancelMediaFormattingRequestBody,
  options?: WebClientOptions,
): Promise<CancelMediaFormattingResponse> {
  return client.send(
    {
      descriptor: CANCEL_MEDIA_FORMATTING,
      body,
    },
    options,
  );
}

export function cancelSubtitleFormatting(
  client: WebClientInterface,
  body: CancelSubtitleFormattingRequestBody,
  options?: WebClientOptions,
): Promise<CancelSubtitleFormattingResponse> {
  return client.send(
    {
      descriptor: CANCEL_SUBTITLE_FORMATTING,
      body,
    },
    options,
  );
}

export function deleteVideoTrack(
  client: WebClientInterface,
  body: DeleteVideoTrackRequestBody,
  options?: WebClientOptions,
): Promise<DeleteVideoTrackResponse> {
  return client.send(
    {
      descriptor: DELETE_VIDEO_TRACK,
      body,
    },
    options,
  );
}

export function dropVideoTrackStagingData(
  client: WebClientInterface,
  body: DropVideoTrackStagingDataRequestBody,
  options?: WebClientOptions,
): Promise<DropVideoTrackStagingDataResponse> {
  return client.send(
    {
      descriptor: DROP_VIDEO_TRACK_STAGING_DATA,
      body,
    },
    options,
  );
}

export function updateAudioTrack(
  client: WebClientInterface,
  body: UpdateAudioTrackRequestBody,
  options?: WebClientOptions,
): Promise<UpdateAudioTrackResponse> {
  return client.send(
    {
      descriptor: UPDATE_AUDIO_TRACK,
      body,
    },
    options,
  );
}

export function deleteAudioTrack(
  client: WebClientInterface,
  body: DeleteAudioTrackRequestBody,
  options?: WebClientOptions,
): Promise<DeleteAudioTrackResponse> {
  return client.send(
    {
      descriptor: DELETE_AUDIO_TRACK,
      body,
    },
    options,
  );
}

export function dropAudioTrackStagingData(
  client: WebClientInterface,
  body: DropAudioTrackStagingDataRequestBody,
  options?: WebClientOptions,
): Promise<DropAudioTrackStagingDataResponse> {
  return client.send(
    {
      descriptor: DROP_AUDIO_TRACK_STAGING_DATA,
      body,
    },
    options,
  );
}

export function updateSubtitleTrack(
  client: WebClientInterface,
  body: UpdateSubtitleTrackRequestBody,
  options?: WebClientOptions,
): Promise<UpdateSubtitleTrackResponse> {
  return client.send(
    {
      descriptor: UPDATE_SUBTITLE_TRACK,
      body,
    },
    options,
  );
}

export function deleteSubtitleTrack(
  client: WebClientInterface,
  body: DeleteSubtitleTrackRequestBody,
  options?: WebClientOptions,
): Promise<DeleteSubtitleTrackResponse> {
  return client.send(
    {
      descriptor: DELETE_SUBTITLE_TRACK,
      body,
    },
    options,
  );
}

export function dropSubtitleTrackStagingData(
  client: WebClientInterface,
  body: DropSubtitleTrackStagingDataRequestBody,
  options?: WebClientOptions,
): Promise<DropSubtitleTrackStagingDataResponse> {
  return client.send(
    {
      descriptor: DROP_SUBTITLE_TRACK_STAGING_DATA,
      body,
    },
    options,
  );
}
