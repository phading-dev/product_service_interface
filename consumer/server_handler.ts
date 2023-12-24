import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { GET_SHOW, GetShowRequestBody, GetShowResponse, GET_SHOW_SNAPSHOT, GetShowSnapshotRequestBody, GetShowSnapshotResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';

export abstract class GetShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_SHOW;
  public abstract handle(
    requestId: string,
    body: GetShowRequestBody,
    auth: WebClientSession,
  ): Promise<GetShowResponse>;
}

export abstract class GetShowSnapshotHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_SHOW_SNAPSHOT;
  public abstract handle(
    requestId: string,
    body: GetShowSnapshotRequestBody,
    auth: WebClientSession,
  ): Promise<GetShowSnapshotResponse>;
}
