import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { GetShowSnapshotRequestBody, GetShowSnapshotResponse, GET_SHOW_SNAPSHOT } from './interface';

export function getShowSnapshot(
  client: WebServiceClientInterface,
  body: GetShowSnapshotRequestBody,
): Promise<GetShowSnapshotResponse> {
  return client.send({
    descriptor: GET_SHOW_SNAPSHOT,
    body,
  });
}
