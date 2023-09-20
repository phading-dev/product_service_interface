import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { PublishShowRequestBody, PublishShowResponse, PUBLISH_SHOW, GetPendingUploadShowRequestBody, GetPendingUploadShowResponse, GET_PENDING_UPLOAD_SHOW, UploadShowRequestMetadata, UploadShowResponse, UPLOAD_SHOW } from './interface';

export function publishShow(
  client: WebServiceClientInterface,
  body: PublishShowRequestBody,
): Promise<PublishShowResponse> {
  return client.send({
    descriptor: PUBLISH_SHOW,
    body,
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
