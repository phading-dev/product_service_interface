import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { CREATE_DRAFT_SHOW, CreateDraftShowRequestBody, CreateDraftShowResponse, EDIT_SHOW, EditShowRequestBody, EditShowResponse, UPLOAD_COVER_IMAGE_OF_SHOW, UploadCoverImageOfShowRequestMetadata, UploadCoverImageOfShowResponse, GET_PENDING_UPLOAD_SHOW, GetPendingUploadShowRequestBody, GetPendingUploadShowResponse, RESTART_UPLOAD_SHOW, RestartUploadShowRequestBody, RestartUploadShowResponse, UPLOAD_SHOW, UploadShowRequestMetadata, UploadShowResponse, GET_SHOW, GetShowRequestBody, GetShowResponse, LIST_SHOWS_SNAPSHOT, ListShowsSnapshotRequestBody, ListShowsSnapshotResponse, CREATE_SERIES_OF_SHOWS, CreateSeriesOfShowsRequestBody, CreateSeriesOfShowsResponse, DELETE_SERIES_OF_SHOWS, DeleteSeriesOfShowsRequestBody, DeleteSeriesOfShowsResponse, LIST_SERIES_OF_SHOWS, ListSeriesOfShowsRequestBody, ListSeriesOfShowsResponse, GET_SERIES_OF_SHOWS, GetSeriesOfShowsRequestBody, GetSeriesOfShowsResponse, EDIT_SERIES_OF_SHOWS, EditSeriesOfShowsRequestBody, EditSeriesOfShowsResponse, UPLOAD_COVER_IMAGE_OF_SERIES_OF_SHOWS, UploadCoverImageOfSeriesOfShowsRequestMetadata, UploadCoverImageOfSeriesOfShowsResponse, CREATE_SEASON_OF_SHOWS, CreateSeasonOfShowsRequestBody, CreateSeasonOfShowsResponse, DELETE_SEASON_OF_SHOWS, DeleteSeasonOfShowsRequestBody, DeleteSeasonOfShowsResponse, LIST_SEASON_OF_SHOWS, ListSeasonOfShowsRequestBody, ListSeasonOfShowsResponse, GET_SEASON_OF_SHOWS, GetSeasonOfShowsRequestBody, GetSeasonOfShowsResponse, EDIT_SEASON_OF_SHOWS, EditSeasonOfShowsRequestBody, EditSeasonOfShowsResponse, UPLOAD_COVER_IMAGE_OF_SEASON_OF_SHOWS, UploadCoverImageOfSeasonOfShowsRequestMetadata, UploadCoverImageOfSeasonOfShowsResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';
import { Readable } from 'stream';

export abstract class CreateDraftShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_DRAFT_SHOW;
  public abstract handle(
    requestId: string,
    body: CreateDraftShowRequestBody,
    auth: WebClientSession,
  ): Promise<CreateDraftShowResponse>;
}

export abstract class EditShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = EDIT_SHOW;
  public abstract handle(
    requestId: string,
    body: EditShowRequestBody,
    auth: WebClientSession,
  ): Promise<EditShowResponse>;
}

export abstract class UploadCoverImageOfShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_COVER_IMAGE_OF_SHOW;
  public abstract handle(
    requestId: string,
    body: Readable,
    metadata: UploadCoverImageOfShowRequestMetadata,
    auth: WebClientSession,
  ): Promise<UploadCoverImageOfShowResponse>;
}

export abstract class GetPendingUploadShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_PENDING_UPLOAD_SHOW;
  public abstract handle(
    requestId: string,
    body: GetPendingUploadShowRequestBody,
    auth: WebClientSession,
  ): Promise<GetPendingUploadShowResponse>;
}

export abstract class RestartUploadShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = RESTART_UPLOAD_SHOW;
  public abstract handle(
    requestId: string,
    body: RestartUploadShowRequestBody,
    auth: WebClientSession,
  ): Promise<RestartUploadShowResponse>;
}

export abstract class UploadShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_SHOW;
  public abstract handle(
    requestId: string,
    body: Readable,
    metadata: UploadShowRequestMetadata,
    auth: WebClientSession,
  ): Promise<UploadShowResponse>;
}

export abstract class GetShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_SHOW;
  public abstract handle(
    requestId: string,
    body: GetShowRequestBody,
    auth: WebClientSession,
  ): Promise<GetShowResponse>;
}

export abstract class ListShowsSnapshotHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_SHOWS_SNAPSHOT;
  public abstract handle(
    requestId: string,
    body: ListShowsSnapshotRequestBody,
    auth: WebClientSession,
  ): Promise<ListShowsSnapshotResponse>;
}

export abstract class CreateSeriesOfShowsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_SERIES_OF_SHOWS;
  public abstract handle(
    requestId: string,
    body: CreateSeriesOfShowsRequestBody,
    auth: WebClientSession,
  ): Promise<CreateSeriesOfShowsResponse>;
}

export abstract class DeleteSeriesOfShowsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = DELETE_SERIES_OF_SHOWS;
  public abstract handle(
    requestId: string,
    body: DeleteSeriesOfShowsRequestBody,
    auth: WebClientSession,
  ): Promise<DeleteSeriesOfShowsResponse>;
}

export abstract class ListSeriesOfShowsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_SERIES_OF_SHOWS;
  public abstract handle(
    requestId: string,
    body: ListSeriesOfShowsRequestBody,
    auth: WebClientSession,
  ): Promise<ListSeriesOfShowsResponse>;
}

export abstract class GetSeriesOfShowsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_SERIES_OF_SHOWS;
  public abstract handle(
    requestId: string,
    body: GetSeriesOfShowsRequestBody,
    auth: WebClientSession,
  ): Promise<GetSeriesOfShowsResponse>;
}

export abstract class EditSeriesOfShowsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = EDIT_SERIES_OF_SHOWS;
  public abstract handle(
    requestId: string,
    body: EditSeriesOfShowsRequestBody,
    auth: WebClientSession,
  ): Promise<EditSeriesOfShowsResponse>;
}

export abstract class UploadCoverImageOfSeriesOfShowsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_COVER_IMAGE_OF_SERIES_OF_SHOWS;
  public abstract handle(
    requestId: string,
    body: Readable,
    metadata: UploadCoverImageOfSeriesOfShowsRequestMetadata,
    auth: WebClientSession,
  ): Promise<UploadCoverImageOfSeriesOfShowsResponse>;
}

export abstract class CreateSeasonOfShowsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_SEASON_OF_SHOWS;
  public abstract handle(
    requestId: string,
    body: CreateSeasonOfShowsRequestBody,
    auth: WebClientSession,
  ): Promise<CreateSeasonOfShowsResponse>;
}

export abstract class DeleteSeasonOfShowsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = DELETE_SEASON_OF_SHOWS;
  public abstract handle(
    requestId: string,
    body: DeleteSeasonOfShowsRequestBody,
    auth: WebClientSession,
  ): Promise<DeleteSeasonOfShowsResponse>;
}

export abstract class ListSeasonOfShowsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_SEASON_OF_SHOWS;
  public abstract handle(
    requestId: string,
    body: ListSeasonOfShowsRequestBody,
    auth: WebClientSession,
  ): Promise<ListSeasonOfShowsResponse>;
}

export abstract class GetSeasonOfShowsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_SEASON_OF_SHOWS;
  public abstract handle(
    requestId: string,
    body: GetSeasonOfShowsRequestBody,
    auth: WebClientSession,
  ): Promise<GetSeasonOfShowsResponse>;
}

export abstract class EditSeasonOfShowsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = EDIT_SEASON_OF_SHOWS;
  public abstract handle(
    requestId: string,
    body: EditSeasonOfShowsRequestBody,
    auth: WebClientSession,
  ): Promise<EditSeasonOfShowsResponse>;
}

export abstract class UploadCoverImageOfSeasonOfShowsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_COVER_IMAGE_OF_SEASON_OF_SHOWS;
  public abstract handle(
    requestId: string,
    body: Readable,
    metadata: UploadCoverImageOfSeasonOfShowsRequestMetadata,
    auth: WebClientSession,
  ): Promise<UploadCoverImageOfSeasonOfShowsResponse>;
}
