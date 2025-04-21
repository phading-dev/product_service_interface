import { GetSeasonRequestBody, GET_SEASON, GetSeasonResponse, CreateSeasonRequestBody, CREATE_SEASON, CreateSeasonResponse, DeleteSeasonRequestBody, DELETE_SEASON, DeleteSeasonResponse, ArchiveSeasonRequestBody, ARCHIVE_SEASON, ArchiveSeasonResponse, UpdateSeasonRequestBody, UPDATE_SEASON, UpdateSeasonResponse, UploadCoverImageRequestMetadata, UPLOAD_COVER_IMAGE, UploadCoverImageResponse, UpdateSeasonGradeRequestBody, UPDATE_SEASON_GRADE, UpdateSeasonGradeResponse, ListSeasonsRequestBody, LIST_SEASONS, ListSeasonsResponse, SearchSeasonsRequestBody, SEARCH_SEASONS, SearchSeasonsResponse, CreateEpisodeRequestBody, CREATE_EPISODE, CreateEpisodeResponse, DeleteEpisodeRequestBody, DELETE_EPISODE, DeleteEpisodeResponse, GetEpisodeRequestBody, GET_EPISODE, GetEpisodeResponse, UpdateEpisodeNameRequestBody, UPDATE_EPISODE_NAME, UpdateEpisodeNameResponse, UpdateEpisodePremiereTimeRequestBody, UPDATE_EPISODE_PREMIERE_TIME, UpdateEpisodePremiereTimeResponse, UpdateEpisodeIndexRequestBody, UPDATE_EPISODE_INDEX, UpdateEpisodeIndexResponse, PublishEpisodeRequestBody, PUBLISH_EPISODE, PublishEpisodeResponse, UnpublishEpisodeRequestBody, UNPUBLISH_EPISODE, UnpublishEpisodeResponse, ListDraftEpisodesRequestBody, LIST_DRAFT_EPISODES, ListDraftEpisodesResponse, ListPublishedEpisodesRequestBody, LIST_PUBLISHED_EPISODES, ListPublishedEpisodesResponse, CommitEpisodeStagingDataRequestBody, COMMIT_EPISODE_STAGING_DATA, CommitEpisodeStagingDataResponse, StartMediaUploadingRequestBody, START_MEDIA_UPLOADING, StartMediaUploadingResponse, CompleteMediaUploadingRequestBody, COMPLETE_MEDIA_UPLOADING, CompleteMediaUploadingResponse, CancelMediaUploadingRequestBody, CANCEL_MEDIA_UPLOADING, CancelMediaUploadingResponse, StartSubtitleUploadingRequestBody, START_SUBTITLE_UPLOADING, StartSubtitleUploadingResponse, CompleteSubtitleUploadingRequestBody, COMPLETE_SUBTITLE_UPLOADING, CompleteSubtitleUploadingResponse, CancelSubtitleUploadingRequestBody, CANCEL_SUBTITLE_UPLOADING, CancelSubtitleUploadingResponse, CancelMediaFormattingRequestBody, CANCEL_MEDIA_FORMATTING, CancelMediaFormattingResponse, CancelSubtitleFormattingRequestBody, CANCEL_SUBTITLE_FORMATTING, CancelSubtitleFormattingResponse, DeleteVideoTrackRequestBody, DELETE_VIDEO_TRACK, DeleteVideoTrackResponse, DropVideoTrackStagingDataRequestBody, DROP_VIDEO_TRACK_STAGING_DATA, DropVideoTrackStagingDataResponse, UpdateAudioTrackRequestBody, UPDATE_AUDIO_TRACK, UpdateAudioTrackResponse, DeleteAudioTrackRequestBody, DELETE_AUDIO_TRACK, DeleteAudioTrackResponse, DropAudioTrackStagingDataRequestBody, DROP_AUDIO_TRACK_STAGING_DATA, DropAudioTrackStagingDataResponse, UpdateSubtitleTrackRequestBody, UPDATE_SUBTITLE_TRACK, UpdateSubtitleTrackResponse, DeleteSubtitleTrackRequestBody, DELETE_SUBTITLE_TRACK, DeleteSubtitleTrackResponse, DropSubtitleTrackStagingDataRequestBody, DROP_SUBTITLE_TRACK_STAGING_DATA, DropSubtitleTrackStagingDataResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';
import { Readable } from 'stream';

export abstract class GetSeasonHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonRequestBody,
    authStr: string,
  ): Promise<GetSeasonResponse>;
}

export abstract class CreateSeasonHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CREATE_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: CreateSeasonRequestBody,
    authStr: string,
  ): Promise<CreateSeasonResponse>;
}

export abstract class DeleteSeasonHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DELETE_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteSeasonRequestBody,
    authStr: string,
  ): Promise<DeleteSeasonResponse>;
}

export abstract class ArchiveSeasonHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = ARCHIVE_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: ArchiveSeasonRequestBody,
    authStr: string,
  ): Promise<ArchiveSeasonResponse>;
}

export abstract class UpdateSeasonHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPDATE_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateSeasonRequestBody,
    authStr: string,
  ): Promise<UpdateSeasonResponse>;
}

export abstract class UploadCoverImageHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPLOAD_COVER_IMAGE;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    metadata: UploadCoverImageRequestMetadata,
    authStr: string,
  ): Promise<UploadCoverImageResponse>;
}

export abstract class UpdateSeasonGradeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPDATE_SEASON_GRADE;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateSeasonGradeRequestBody,
    authStr: string,
  ): Promise<UpdateSeasonGradeResponse>;
}

export abstract class ListSeasonsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_SEASONS;
  public abstract handle(
    loggingPrefix: string,
    body: ListSeasonsRequestBody,
    authStr: string,
  ): Promise<ListSeasonsResponse>;
}

export abstract class SearchSeasonsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SEARCH_SEASONS;
  public abstract handle(
    loggingPrefix: string,
    body: SearchSeasonsRequestBody,
    authStr: string,
  ): Promise<SearchSeasonsResponse>;
}

export abstract class CreateEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CREATE_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: CreateEpisodeRequestBody,
    authStr: string,
  ): Promise<CreateEpisodeResponse>;
}

export abstract class DeleteEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DELETE_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteEpisodeRequestBody,
    authStr: string,
  ): Promise<DeleteEpisodeResponse>;
}

export abstract class GetEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: GetEpisodeRequestBody,
    authStr: string,
  ): Promise<GetEpisodeResponse>;
}

export abstract class UpdateEpisodeNameHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPDATE_EPISODE_NAME;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateEpisodeNameRequestBody,
    authStr: string,
  ): Promise<UpdateEpisodeNameResponse>;
}

export abstract class UpdateEpisodePremiereTimeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPDATE_EPISODE_PREMIERE_TIME;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateEpisodePremiereTimeRequestBody,
    authStr: string,
  ): Promise<UpdateEpisodePremiereTimeResponse>;
}

export abstract class UpdateEpisodeIndexHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPDATE_EPISODE_INDEX;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateEpisodeIndexRequestBody,
    authStr: string,
  ): Promise<UpdateEpisodeIndexResponse>;
}

export abstract class PublishEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PUBLISH_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: PublishEpisodeRequestBody,
    authStr: string,
  ): Promise<PublishEpisodeResponse>;
}

export abstract class UnpublishEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UNPUBLISH_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: UnpublishEpisodeRequestBody,
    authStr: string,
  ): Promise<UnpublishEpisodeResponse>;
}

export abstract class ListDraftEpisodesHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_DRAFT_EPISODES;
  public abstract handle(
    loggingPrefix: string,
    body: ListDraftEpisodesRequestBody,
    authStr: string,
  ): Promise<ListDraftEpisodesResponse>;
}

export abstract class ListPublishedEpisodesHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_PUBLISHED_EPISODES;
  public abstract handle(
    loggingPrefix: string,
    body: ListPublishedEpisodesRequestBody,
    authStr: string,
  ): Promise<ListPublishedEpisodesResponse>;
}

export abstract class CommitEpisodeStagingDataHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = COMMIT_EPISODE_STAGING_DATA;
  public abstract handle(
    loggingPrefix: string,
    body: CommitEpisodeStagingDataRequestBody,
    authStr: string,
  ): Promise<CommitEpisodeStagingDataResponse>;
}

export abstract class StartMediaUploadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = START_MEDIA_UPLOADING;
  public abstract handle(
    loggingPrefix: string,
    body: StartMediaUploadingRequestBody,
    authStr: string,
  ): Promise<StartMediaUploadingResponse>;
}

export abstract class CompleteMediaUploadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = COMPLETE_MEDIA_UPLOADING;
  public abstract handle(
    loggingPrefix: string,
    body: CompleteMediaUploadingRequestBody,
    authStr: string,
  ): Promise<CompleteMediaUploadingResponse>;
}

export abstract class CancelMediaUploadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CANCEL_MEDIA_UPLOADING;
  public abstract handle(
    loggingPrefix: string,
    body: CancelMediaUploadingRequestBody,
    authStr: string,
  ): Promise<CancelMediaUploadingResponse>;
}

export abstract class StartSubtitleUploadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = START_SUBTITLE_UPLOADING;
  public abstract handle(
    loggingPrefix: string,
    body: StartSubtitleUploadingRequestBody,
    authStr: string,
  ): Promise<StartSubtitleUploadingResponse>;
}

export abstract class CompleteSubtitleUploadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = COMPLETE_SUBTITLE_UPLOADING;
  public abstract handle(
    loggingPrefix: string,
    body: CompleteSubtitleUploadingRequestBody,
    authStr: string,
  ): Promise<CompleteSubtitleUploadingResponse>;
}

export abstract class CancelSubtitleUploadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CANCEL_SUBTITLE_UPLOADING;
  public abstract handle(
    loggingPrefix: string,
    body: CancelSubtitleUploadingRequestBody,
    authStr: string,
  ): Promise<CancelSubtitleUploadingResponse>;
}

export abstract class CancelMediaFormattingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CANCEL_MEDIA_FORMATTING;
  public abstract handle(
    loggingPrefix: string,
    body: CancelMediaFormattingRequestBody,
    authStr: string,
  ): Promise<CancelMediaFormattingResponse>;
}

export abstract class CancelSubtitleFormattingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CANCEL_SUBTITLE_FORMATTING;
  public abstract handle(
    loggingPrefix: string,
    body: CancelSubtitleFormattingRequestBody,
    authStr: string,
  ): Promise<CancelSubtitleFormattingResponse>;
}

export abstract class DeleteVideoTrackHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DELETE_VIDEO_TRACK;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteVideoTrackRequestBody,
    authStr: string,
  ): Promise<DeleteVideoTrackResponse>;
}

export abstract class DropVideoTrackStagingDataHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DROP_VIDEO_TRACK_STAGING_DATA;
  public abstract handle(
    loggingPrefix: string,
    body: DropVideoTrackStagingDataRequestBody,
    authStr: string,
  ): Promise<DropVideoTrackStagingDataResponse>;
}

export abstract class UpdateAudioTrackHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPDATE_AUDIO_TRACK;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateAudioTrackRequestBody,
    authStr: string,
  ): Promise<UpdateAudioTrackResponse>;
}

export abstract class DeleteAudioTrackHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DELETE_AUDIO_TRACK;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteAudioTrackRequestBody,
    authStr: string,
  ): Promise<DeleteAudioTrackResponse>;
}

export abstract class DropAudioTrackStagingDataHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DROP_AUDIO_TRACK_STAGING_DATA;
  public abstract handle(
    loggingPrefix: string,
    body: DropAudioTrackStagingDataRequestBody,
    authStr: string,
  ): Promise<DropAudioTrackStagingDataResponse>;
}

export abstract class UpdateSubtitleTrackHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPDATE_SUBTITLE_TRACK;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateSubtitleTrackRequestBody,
    authStr: string,
  ): Promise<UpdateSubtitleTrackResponse>;
}

export abstract class DeleteSubtitleTrackHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DELETE_SUBTITLE_TRACK;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteSubtitleTrackRequestBody,
    authStr: string,
  ): Promise<DeleteSubtitleTrackResponse>;
}

export abstract class DropSubtitleTrackStagingDataHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DROP_SUBTITLE_TRACK_STAGING_DATA;
  public abstract handle(
    loggingPrefix: string,
    body: DropSubtitleTrackStagingDataRequestBody,
    authStr: string,
  ): Promise<DropSubtitleTrackStagingDataResponse>;
}
