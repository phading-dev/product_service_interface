import { GetSeasonDetailsRequestBody, GET_SEASON_DETAILS, GetSeasonDetailsResponse, CreateSeasonRequestBody, CREATE_SEASON, CreateSeasonResponse, UpdateSeasonRequestBody, UPDATE_SEASON, UpdateSeasonResponse, UploadCoverImageRequestMetadata, UPLOAD_COVER_IMAGE, UploadCoverImageResponse, UpdateSeasonGradeRequestBody, UPDATE_SEASON_GRADE, UpdateSeasonGradeResponse, DeleteSeasonRequestBody, DELETE_SEASON, DeleteSeasonResponse, ArchiveSeasonRequestBody, ARCHIVE_SEASON, ArchiveSeasonResponse, ListSeasonsRequestBody, LIST_SEASONS, ListSeasonsResponse, CreateEpisodeDraftRequestBody, CREATE_EPISODE_DRAFT, CreateEpisodeDraftResponse, UpdateEpisodeDraftRequestBody, UPDATE_EPISODE_DRAFT, UpdateEpisodeDraftResponse, UploadEpisodeVideoMetadata, UPLOAD_EPISODE_VIDEO, UploadEpisodeVideoResponse, DeleteEpisodeDraftRequestBody, DELETE_EPISODE_DRAFT, DeleteEpisodeDraftResponse, GetMoreEpisodeRequestBody, GET_MORE_EPISODE, GetMoreEpisodeResponse, PublishEpisodeRequestBody, PUBLISH_EPISODE, PublishEpisodeResponse, UpdateEpisodeOrderRequestBody, UPDATE_EPISODE_ORDER, UpdateEpisodeOrderResponse, DeleteEpisodeRequestBody, DELETE_EPISODE, DeleteEpisodeResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';
import { Readable } from 'stream';

export abstract class GetSeasonDetailsHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_SEASON_DETAILS;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonDetailsRequestBody,
    sessionStr: string,
  ): Promise<GetSeasonDetailsResponse>;
}

export abstract class CreateSeasonHandlerInterface implements WebHandlerInterface {
  public descriptor = CREATE_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: CreateSeasonRequestBody,
    sessionStr: string,
  ): Promise<CreateSeasonResponse>;
}

export abstract class UpdateSeasonHandlerInterface implements WebHandlerInterface {
  public descriptor = UPDATE_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateSeasonRequestBody,
    sessionStr: string,
  ): Promise<UpdateSeasonResponse>;
}

export abstract class UploadCoverImageHandlerInterface implements WebHandlerInterface {
  public descriptor = UPLOAD_COVER_IMAGE;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    metadata: UploadCoverImageRequestMetadata,
    sessionStr: string,
  ): Promise<UploadCoverImageResponse>;
}

export abstract class UpdateSeasonGradeHandlerInterface implements WebHandlerInterface {
  public descriptor = UPDATE_SEASON_GRADE;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateSeasonGradeRequestBody,
    sessionStr: string,
  ): Promise<UpdateSeasonGradeResponse>;
}

export abstract class DeleteSeasonHandlerInterface implements WebHandlerInterface {
  public descriptor = DELETE_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteSeasonRequestBody,
    sessionStr: string,
  ): Promise<DeleteSeasonResponse>;
}

export abstract class ArchiveSeasonHandlerInterface implements WebHandlerInterface {
  public descriptor = ARCHIVE_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: ArchiveSeasonRequestBody,
    sessionStr: string,
  ): Promise<ArchiveSeasonResponse>;
}

export abstract class ListSeasonsHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_SEASONS;
  public abstract handle(
    loggingPrefix: string,
    body: ListSeasonsRequestBody,
    sessionStr: string,
  ): Promise<ListSeasonsResponse>;
}

export abstract class CreateEpisodeDraftHandlerInterface implements WebHandlerInterface {
  public descriptor = CREATE_EPISODE_DRAFT;
  public abstract handle(
    loggingPrefix: string,
    body: CreateEpisodeDraftRequestBody,
    sessionStr: string,
  ): Promise<CreateEpisodeDraftResponse>;
}

export abstract class UpdateEpisodeDraftHandlerInterface implements WebHandlerInterface {
  public descriptor = UPDATE_EPISODE_DRAFT;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateEpisodeDraftRequestBody,
    sessionStr: string,
  ): Promise<UpdateEpisodeDraftResponse>;
}

export abstract class UploadEpisodeVideoHandlerInterface implements WebHandlerInterface {
  public descriptor = UPLOAD_EPISODE_VIDEO;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    metadata: UploadEpisodeVideoMetadata,
    sessionStr: string,
  ): Promise<UploadEpisodeVideoResponse>;
}

export abstract class DeleteEpisodeDraftHandlerInterface implements WebHandlerInterface {
  public descriptor = DELETE_EPISODE_DRAFT;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteEpisodeDraftRequestBody,
    sessionStr: string,
  ): Promise<DeleteEpisodeDraftResponse>;
}

export abstract class GetMoreEpisodeHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_MORE_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: GetMoreEpisodeRequestBody,
    sessionStr: string,
  ): Promise<GetMoreEpisodeResponse>;
}

export abstract class PublishEpisodeHandlerInterface implements WebHandlerInterface {
  public descriptor = PUBLISH_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: PublishEpisodeRequestBody,
    sessionStr: string,
  ): Promise<PublishEpisodeResponse>;
}

export abstract class UpdateEpisodeOrderHandlerInterface implements WebHandlerInterface {
  public descriptor = UPDATE_EPISODE_ORDER;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateEpisodeOrderRequestBody,
    sessionStr: string,
  ): Promise<UpdateEpisodeOrderResponse>;
}

export abstract class DeleteEpisodeHandlerInterface implements WebHandlerInterface {
  public descriptor = DELETE_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteEpisodeRequestBody,
    sessionStr: string,
  ): Promise<DeleteEpisodeResponse>;
}
