import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { PUBLISH_SHOW, PublishShowRequestBody, PublishShowResponse, GET_PENDING_UPLOAD_SHOW, GetPendingUploadShowRequestBody, GetPendingUploadShowResponse, UPLOAD_SHOW, UploadShowRequestMetadata, UploadShowResponse } from './interface';
import { UserSession } from '@phading/user_service_interface/user_session';
import { Readable } from 'stream';

export abstract class PublishShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = PUBLISH_SHOW;
  public abstract handle(
    requestId: string,
    body: PublishShowRequestBody,
    auth: UserSession,
  ): Promise<PublishShowResponse>;
}

export abstract class GetPendingUploadShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_PENDING_UPLOAD_SHOW;
  public abstract handle(
    requestId: string,
    body: GetPendingUploadShowRequestBody,
    auth: UserSession,
  ): Promise<GetPendingUploadShowResponse>;
}

export abstract class UploadShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_SHOW;
  public abstract handle(
    requestId: string,
    body: Readable,
    metadata: UploadShowRequestMetadata,
    auth: UserSession,
  ): Promise<UploadShowResponse>;
}
