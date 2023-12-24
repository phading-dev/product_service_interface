import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { CREATE_DRAFT_SHOW, CreateDraftShowRequestBody, CreateDraftShowResponse, EDIT_SHOW, EditShowRequestBody, EditShowResponse, UPLOAD_COVER_IMAGE, UploadCoverImageRequestMetadata, UploadCoverImageResponse, GET_PENDING_UPLOAD_SHOW, GetPendingUploadShowRequestBody, GetPendingUploadShowResponse, RESTART_UPLOAD_SHOW, RestartUploadShowRequestBody, RestartUploadShowResponse, UPLOAD_SHOW, UploadShowRequestMetadata, UploadShowResponse, GET_SHOW, GetShowRequestBody, GetShowResponse, LIST_SHOWS_SNAPSHOT, ListShowsSnapshotRequestBody, ListShowsSnapshotResponse } from './interface';
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

export abstract class UploadCoverImageHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_COVER_IMAGE;
  public abstract handle(
    requestId: string,
    body: Readable,
    metadata: UploadCoverImageRequestMetadata,
    auth: WebClientSession,
  ): Promise<UploadCoverImageResponse>;
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
