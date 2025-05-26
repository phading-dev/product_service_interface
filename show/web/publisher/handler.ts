import { GetSeasonRequestBody, GET_SEASON, GetSeasonResponse, CreateSeasonRequestBody, CREATE_SEASON, CreateSeasonResponse, DeleteSeasonRequestBody, DELETE_SEASON, DeleteSeasonResponse, ArchiveSeasonRequestBody, ARCHIVE_SEASON, ArchiveSeasonResponse, UpdateSeasonRequestBody, UPDATE_SEASON, UpdateSeasonResponse, UploadCoverImageRequestMetadata, UPLOAD_COVER_IMAGE, UploadCoverImageResponse, UpdateSeasonGradeRequestBody, UPDATE_SEASON_GRADE, UpdateSeasonGradeResponse, UpdateNextSeasonGradeRequestBody, UPDATE_NEXT_SEASON_GRADE, UpdateNextSeasonGradeResponse, DeleteNextSeasonGradeRequestBody, DELETE_NEXT_SEASON_GRADE, DeleteNextSeasonGradeResponse, ListSeasonsRequestBody, LIST_SEASONS, ListSeasonsResponse, SearchSeasonsRequestBody, SEARCH_SEASONS, SearchSeasonsResponse, CreateEpisodeRequestBody, CREATE_EPISODE, CreateEpisodeResponse, DeleteEpisodeRequestBody, DELETE_EPISODE, DeleteEpisodeResponse, GetEpisodeRequestBody, GET_EPISODE, GetEpisodeResponse, UpdateEpisodeNameRequestBody, UPDATE_EPISODE_NAME, UpdateEpisodeNameResponse, UpdateEpisodePremiereTimeRequestBody, UPDATE_EPISODE_PREMIERE_TIME, UpdateEpisodePremiereTimeResponse, UpdateEpisodeIndexRequestBody, UPDATE_EPISODE_INDEX, UpdateEpisodeIndexResponse, PublishEpisodeRequestBody, PUBLISH_EPISODE, PublishEpisodeResponse, UnpublishEpisodeRequestBody, UNPUBLISH_EPISODE, UnpublishEpisodeResponse, ListDraftEpisodesRequestBody, LIST_DRAFT_EPISODES, ListDraftEpisodesResponse, ListPublishedEpisodesRequestBody, LIST_PUBLISHED_EPISODES, ListPublishedEpisodesResponse, StartUploadingRequestBody, START_UPLOADING, StartUploadingResponse, CompleteUploadingRequestBody, COMPLETE_UPLOADING, CompleteUploadingResponse, CancelUploadingRequestBody, CANCEL_UPLOADING, CancelUploadingResponse, SaveEpisodeStagingDataRequestBody, SAVE_EPISODE_STAGING_DATA, SaveEpisodeStagingDataResponse, CommitEpisodeStagingDataRequestBody, COMMIT_EPISODE_STAGING_DATA, CommitEpisodeStagingDataResponse } from './interface';
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

export abstract class UpdateNextSeasonGradeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPDATE_NEXT_SEASON_GRADE;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateNextSeasonGradeRequestBody,
    authStr: string,
  ): Promise<UpdateNextSeasonGradeResponse>;
}

export abstract class DeleteNextSeasonGradeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DELETE_NEXT_SEASON_GRADE;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteNextSeasonGradeRequestBody,
    authStr: string,
  ): Promise<DeleteNextSeasonGradeResponse>;
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

export abstract class StartUploadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = START_UPLOADING;
  public abstract handle(
    loggingPrefix: string,
    body: StartUploadingRequestBody,
    authStr: string,
  ): Promise<StartUploadingResponse>;
}

export abstract class CompleteUploadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = COMPLETE_UPLOADING;
  public abstract handle(
    loggingPrefix: string,
    body: CompleteUploadingRequestBody,
    authStr: string,
  ): Promise<CompleteUploadingResponse>;
}

export abstract class CancelUploadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CANCEL_UPLOADING;
  public abstract handle(
    loggingPrefix: string,
    body: CancelUploadingRequestBody,
    authStr: string,
  ): Promise<CancelUploadingResponse>;
}

export abstract class SaveEpisodeStagingDataHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SAVE_EPISODE_STAGING_DATA;
  public abstract handle(
    loggingPrefix: string,
    body: SaveEpisodeStagingDataRequestBody,
    authStr: string,
  ): Promise<SaveEpisodeStagingDataResponse>;
}

export abstract class CommitEpisodeStagingDataHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = COMMIT_EPISODE_STAGING_DATA;
  public abstract handle(
    loggingPrefix: string,
    body: CommitEpisodeStagingDataRequestBody,
    authStr: string,
  ): Promise<CommitEpisodeStagingDataResponse>;
}
