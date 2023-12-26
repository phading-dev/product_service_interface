import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { CreateDraftShowRequestBody, CreateDraftShowResponse, CREATE_DRAFT_SHOW, EditShowRequestBody, EditShowResponse, EDIT_SHOW, UploadCoverImageOfShowRequestMetadata, UploadCoverImageOfShowResponse, UPLOAD_COVER_IMAGE_OF_SHOW, GetPendingUploadShowRequestBody, GetPendingUploadShowResponse, GET_PENDING_UPLOAD_SHOW, RestartUploadShowRequestBody, RestartUploadShowResponse, RESTART_UPLOAD_SHOW, UploadShowRequestMetadata, UploadShowResponse, UPLOAD_SHOW, GetShowRequestBody, GetShowResponse, GET_SHOW, ListShowsSnapshotRequestBody, ListShowsSnapshotResponse, LIST_SHOWS_SNAPSHOT, CreateSeriesOfShowsRequestBody, CreateSeriesOfShowsResponse, CREATE_SERIES_OF_SHOWS, DeleteSeriesOfShowsRequestBody, DeleteSeriesOfShowsResponse, DELETE_SERIES_OF_SHOWS, ListSeriesOfShowsRequestBody, ListSeriesOfShowsResponse, LIST_SERIES_OF_SHOWS, GetSeriesOfShowsRequestBody, GetSeriesOfShowsResponse, GET_SERIES_OF_SHOWS, EditSeriesOfShowsRequestBody, EditSeriesOfShowsResponse, EDIT_SERIES_OF_SHOWS, UploadCoverImageOfSeriesOfShowsRequestMetadata, UploadCoverImageOfSeriesOfShowsResponse, UPLOAD_COVER_IMAGE_OF_SERIES_OF_SHOWS, CreateSeasonOfShowsRequestBody, CreateSeasonOfShowsResponse, CREATE_SEASON_OF_SHOWS, DeleteSeasonOfShowsRequestBody, DeleteSeasonOfShowsResponse, DELETE_SEASON_OF_SHOWS, ListSeasonOfShowsRequestBody, ListSeasonOfShowsResponse, LIST_SEASON_OF_SHOWS, GetSeasonOfShowsRequestBody, GetSeasonOfShowsResponse, GET_SEASON_OF_SHOWS, EditSeasonOfShowsRequestBody, EditSeasonOfShowsResponse, EDIT_SEASON_OF_SHOWS, UploadCoverImageOfSeasonOfShowsRequestMetadata, UploadCoverImageOfSeasonOfShowsResponse, UPLOAD_COVER_IMAGE_OF_SEASON_OF_SHOWS } from './interface';

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

export function uploadCoverImageOfShow(
  client: WebServiceClientInterface,
  body: Blob,
  metadata: UploadCoverImageOfShowRequestMetadata,
): Promise<UploadCoverImageOfShowResponse> {
  return client.send({
    descriptor: UPLOAD_COVER_IMAGE_OF_SHOW,
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

export function createSeriesOfShows(
  client: WebServiceClientInterface,
  body: CreateSeriesOfShowsRequestBody,
): Promise<CreateSeriesOfShowsResponse> {
  return client.send({
    descriptor: CREATE_SERIES_OF_SHOWS,
    body,
  });
}

export function deleteSeriesOfShows(
  client: WebServiceClientInterface,
  body: DeleteSeriesOfShowsRequestBody,
): Promise<DeleteSeriesOfShowsResponse> {
  return client.send({
    descriptor: DELETE_SERIES_OF_SHOWS,
    body,
  });
}

export function listSeriesOfShows(
  client: WebServiceClientInterface,
  body: ListSeriesOfShowsRequestBody,
): Promise<ListSeriesOfShowsResponse> {
  return client.send({
    descriptor: LIST_SERIES_OF_SHOWS,
    body,
  });
}

export function getSeriesOfShows(
  client: WebServiceClientInterface,
  body: GetSeriesOfShowsRequestBody,
): Promise<GetSeriesOfShowsResponse> {
  return client.send({
    descriptor: GET_SERIES_OF_SHOWS,
    body,
  });
}

export function editSeriesOfShows(
  client: WebServiceClientInterface,
  body: EditSeriesOfShowsRequestBody,
): Promise<EditSeriesOfShowsResponse> {
  return client.send({
    descriptor: EDIT_SERIES_OF_SHOWS,
    body,
  });
}

export function uploadCoverImageOfSeriesOfShows(
  client: WebServiceClientInterface,
  body: Blob,
  metadata: UploadCoverImageOfSeriesOfShowsRequestMetadata,
): Promise<UploadCoverImageOfSeriesOfShowsResponse> {
  return client.send({
    descriptor: UPLOAD_COVER_IMAGE_OF_SERIES_OF_SHOWS,
    body,
    metadata,
  });
}

export function createSeasonOfShows(
  client: WebServiceClientInterface,
  body: CreateSeasonOfShowsRequestBody,
): Promise<CreateSeasonOfShowsResponse> {
  return client.send({
    descriptor: CREATE_SEASON_OF_SHOWS,
    body,
  });
}

export function deleteSeasonOfShows(
  client: WebServiceClientInterface,
  body: DeleteSeasonOfShowsRequestBody,
): Promise<DeleteSeasonOfShowsResponse> {
  return client.send({
    descriptor: DELETE_SEASON_OF_SHOWS,
    body,
  });
}

export function listSeasonOfShows(
  client: WebServiceClientInterface,
  body: ListSeasonOfShowsRequestBody,
): Promise<ListSeasonOfShowsResponse> {
  return client.send({
    descriptor: LIST_SEASON_OF_SHOWS,
    body,
  });
}

export function getSeasonOfShows(
  client: WebServiceClientInterface,
  body: GetSeasonOfShowsRequestBody,
): Promise<GetSeasonOfShowsResponse> {
  return client.send({
    descriptor: GET_SEASON_OF_SHOWS,
    body,
  });
}

export function editSeasonOfShows(
  client: WebServiceClientInterface,
  body: EditSeasonOfShowsRequestBody,
): Promise<EditSeasonOfShowsResponse> {
  return client.send({
    descriptor: EDIT_SEASON_OF_SHOWS,
    body,
  });
}

export function uploadCoverImageOfSeasonOfShows(
  client: WebServiceClientInterface,
  body: Blob,
  metadata: UploadCoverImageOfSeasonOfShowsRequestMetadata,
): Promise<UploadCoverImageOfSeasonOfShowsResponse> {
  return client.send({
    descriptor: UPLOAD_COVER_IMAGE_OF_SEASON_OF_SHOWS,
    body,
    metadata,
  });
}
