import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { GetShowRequestBody, GetShowResponse, GET_SHOW, GetShowSnapshotRequestBody, GetShowSnapshotResponse, GET_SHOW_SNAPSHOT } from './interface';

export function getShow(
  client: WebServiceClientInterface,
  body: GetShowRequestBody,
): Promise<GetShowResponse> {
  return client.send({
    descriptor: GET_SHOW,
    body,
  });
}

export function getShowSnapshot(
  client: WebServiceClientInterface,
  body: GetShowSnapshotRequestBody,
): Promise<GetShowSnapshotResponse> {
  return client.send({
    descriptor: GET_SHOW_SNAPSHOT,
    body,
  });
}
