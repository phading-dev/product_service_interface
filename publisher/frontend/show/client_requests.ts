import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { UploadCoverImageResponse, UPLOAD_COVER_IMAGE, CreateSeasonRequestBody, CreateSeasonResponse, CREATE_SEASON } from './interface';

export function uploadCoverImage(
  client: WebServiceClientInterface,
  body: Blob,
): Promise<UploadCoverImageResponse> {
  return client.send({
    descriptor: UPLOAD_COVER_IMAGE,
    body,
  });
}

export function createSeason(
  client: WebServiceClientInterface,
  body: CreateSeasonRequestBody,
): Promise<CreateSeasonResponse> {
  return client.send({
    descriptor: CREATE_SEASON,
    body,
  });
}
