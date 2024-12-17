import { GetSeasonDetailsRequestBody, GET_SEASON_DETAILS, GetSeasonDetailsResponse, CreateSeasonRequestBody, CREATE_SEASON, CreateSeasonResponse, DeleteSeasonRequestBody, DELETE_SEASON, DeleteSeasonResponse, ArchiveSeasonRequestBody, ARCHIVE_SEASON, ArchiveSeasonResponse, UpdateSeasonRequestBody, UPDATE_SEASON, UpdateSeasonResponse, UploadCoverImageRequestMetadata, UPLOAD_COVER_IMAGE, UploadCoverImageResponse, UpdateSeasonGradeRequestBody, UPDATE_SEASON_GRADE, UpdateSeasonGradeResponse, ListSeasonsRequestBody, LIST_SEASONS, ListSeasonsResponse, CreateEpisodeRequestBody, CREATE_EPISODE, CreateEpisodeResponse, DeleteEpisodeRequestBody, DELETE_EPISODE, DeleteEpisodeResponse, UpdateEpisodeRequestBody, UPDATE_EPISODE, UpdateEpisodeResponse, UpdateEpisodeOrderRequestBody, UPDATE_EPISODE_ORDER, UpdateEpisodeOrderResponse, ListEpisodesRequestBody, LIST_EPISODES, ListEpisodesResponse, PublishEpisodeRequestBody, PUBLISH_EPISODE, PublishEpisodeResponse } from './interface';
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

export abstract class ListSeasonsHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_SEASONS;
  public abstract handle(
    loggingPrefix: string,
    body: ListSeasonsRequestBody,
    sessionStr: string,
  ): Promise<ListSeasonsResponse>;
}

export abstract class CreateEpisodeHandlerInterface implements WebHandlerInterface {
  public descriptor = CREATE_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: CreateEpisodeRequestBody,
    sessionStr: string,
  ): Promise<CreateEpisodeResponse>;
}

export abstract class DeleteEpisodeHandlerInterface implements WebHandlerInterface {
  public descriptor = DELETE_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteEpisodeRequestBody,
    sessionStr: string,
  ): Promise<DeleteEpisodeResponse>;
}

export abstract class UpdateEpisodeHandlerInterface implements WebHandlerInterface {
  public descriptor = UPDATE_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateEpisodeRequestBody,
    sessionStr: string,
  ): Promise<UpdateEpisodeResponse>;
}

export abstract class UpdateEpisodeOrderHandlerInterface implements WebHandlerInterface {
  public descriptor = UPDATE_EPISODE_ORDER;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateEpisodeOrderRequestBody,
    sessionStr: string,
  ): Promise<UpdateEpisodeOrderResponse>;
}

export abstract class ListEpisodesHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_EPISODES;
  public abstract handle(
    loggingPrefix: string,
    body: ListEpisodesRequestBody,
    sessionStr: string,
  ): Promise<ListEpisodesResponse>;
}

export abstract class PublishEpisodeHandlerInterface implements WebHandlerInterface {
  public descriptor = PUBLISH_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: PublishEpisodeRequestBody,
    sessionStr: string,
  ): Promise<PublishEpisodeResponse>;
}
