import { Readable } from 'stream';
import { ClientSession } from '@phading/user_session_service_interface/client_session';
import { UPLOAD_COVER_IMAGE, UploadCoverImageResponse, CreateSeasonRequestBody, CREATE_SEASON, CreateSeasonResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class UploadCoverImageHandlerInterface implements WebHandlerInterface {
  public descriptor = UPLOAD_COVER_IMAGE;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    auth: ClientSession,
  ): Promise<UploadCoverImageResponse>;
}

export abstract class CreateSeasonHandlerInterface implements WebHandlerInterface {
  public descriptor = CREATE_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: CreateSeasonRequestBody,
    auth: ClientSession,
  ): Promise<CreateSeasonResponse>;
}
