import { UploadCoverImageResponse, UPLOAD_COVER_IMAGE, CreateSeasonRequestBody, CreateSeasonResponse, CREATE_SEASON } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function uploadCoverImage(
  client: WebClientInterface,
  body: Blob,
  options?: WebClientOptions,
): Promise<UploadCoverImageResponse> {
  return client.send(
    {
      descriptor: UPLOAD_COVER_IMAGE,
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
