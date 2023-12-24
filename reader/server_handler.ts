import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { LIST_SHOWS, ListShowsRequestBody, ListShowsResponse, GET_SHOW, GetShowRequestBody, GetShowResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';

export abstract class ListShowsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_SHOWS;
  public abstract handle(
    requestId: string,
    body: ListShowsRequestBody,
    auth: WebClientSession,
  ): Promise<ListShowsResponse>;
}

export abstract class GetShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_SHOW;
  public abstract handle(
    requestId: string,
    body: GetShowRequestBody,
    auth: WebClientSession,
  ): Promise<GetShowResponse>;
}
