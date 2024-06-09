import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { UPLOAD_COVER_IMAGE, UploadCoverImageResponse, CREATE_SEASON, CreateSeasonRequestBody, CreateSeasonResponse } from './interface';
import { Readable } from 'stream';
import { ClientSession } from '@phading/user_session_service_interface/client_session';

export abstract class UploadCoverImageHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_COVER_IMAGE;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    auth: ClientSession,
  ): Promise<UploadCoverImageResponse>;
}

export abstract class CreateSeasonHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: CreateSeasonRequestBody,
    auth: ClientSession,
  ): Promise<CreateSeasonResponse>;
}
