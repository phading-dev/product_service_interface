import { GetVideoDurationAndSizeRequestBody, GET_VIDEO_DURATION_AND_SIZE, GetVideoDurationAndSizeResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetVideoDurationAndSizeHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_VIDEO_DURATION_AND_SIZE;
  public abstract handle(
    loggingPrefix: string,
    body: GetVideoDurationAndSizeRequestBody,
  ): Promise<GetVideoDurationAndSizeResponse>;
}
