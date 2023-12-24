import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { ListShowsRequestBody, ListShowsResponse, LIST_SHOWS, GetShowRequestBody, GetShowResponse, GET_SHOW } from './interface';

export function listShows(
  client: WebServiceClientInterface,
  body: ListShowsRequestBody,
): Promise<ListShowsResponse> {
  return client.send({
    descriptor: LIST_SHOWS,
    body,
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
