import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { CreateDraftShowRequestBody, CreateDraftShowResponse, CREATE_DRAFT_SHOW, EditShowRequestBody, EditShowResponse, EDIT_SHOW, UploadCoverImageRequestMetadata, UploadCoverImageResponse, UPLOAD_COVER_IMAGE, GetPendingUploadShowRequestBody, GetPendingUploadShowResponse, GET_PENDING_UPLOAD_SHOW, RestartUploadShowRequestBody, RestartUploadShowResponse, RESTART_UPLOAD_SHOW, UploadShowRequestMetadata, UploadShowResponse, UPLOAD_SHOW, GetShowRequestBody, GetShowResponse, GET_SHOW, ListShowsSnapshotRequestBody, ListShowsSnapshotResponse, LIST_SHOWS_SNAPSHOT } from './interface';

export function createDraftShow(
  client: WebServiceClientInterface,
  body: CreateDraftShowRequestBody,
): Promise<CreateDraftShowResponse> {
  return client.send({
    descriptor: CREATE_DRAFT_SHOW,
    body,
  });
}

export function editShow(
  client: WebServiceClientInterface,
  body: EditShowRequestBody,
): Promise<EditShowResponse> {
  return client.send({
    descriptor: EDIT_SHOW,
    body,
  });
}

export function uploadCoverImage(
  client: WebServiceClientInterface,
  body: Blob,
  metadata: UploadCoverImageRequestMetadata,
): Promise<UploadCoverImageResponse> {
  return client.send({
    descriptor: UPLOAD_COVER_IMAGE,
    body,
    metadata,
  });
}

export function getPendingUploadShow(
  client: WebServiceClientInterface,
  body: GetPendingUploadShowRequestBody,
): Promise<GetPendingUploadShowResponse> {
  return client.send({
    descriptor: GET_PENDING_UPLOAD_SHOW,
    body,
  });
}

export function restartUploadShow(
  client: WebServiceClientInterface,
  body: RestartUploadShowRequestBody,
): Promise<RestartUploadShowResponse> {
  return client.send({
    descriptor: RESTART_UPLOAD_SHOW,
    body,
  });
}

export function uploadShow(
  client: WebServiceClientInterface,
  body: Blob,
  metadata: UploadShowRequestMetadata,
): Promise<UploadShowResponse> {
  return client.send({
    descriptor: UPLOAD_SHOW,
    body,
    metadata,
  });
}

export function getShow(
  client: WebServiceClientInterface,
  body: GetShowRequestBody,
): Promise<GetShowResponse> {
  return client.send({
    descriptor: GET_SHOW,
    body,
  });
}

export function listShowsSnapshot(
  client: WebServiceClientInterface,
  body: ListShowsSnapshotRequestBody,
): Promise<ListShowsSnapshotResponse> {
  return client.send({
    descriptor: LIST_SHOWS_SNAPSHOT,
    body,
  });
}
