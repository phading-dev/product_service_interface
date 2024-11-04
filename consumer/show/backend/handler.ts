import { GetSeasonPublisherAndGradeRequestBody, GET_SEASON_PUBLISHER_AND_GRADE, GetSeasonPublisherAndGradeResponse, GetVideoDurationAndSizeRequestBody, GET_VIDEO_DURATION_AND_SIZE, GetVideoDurationAndSizeResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetSeasonPublisherAndGradeHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_SEASON_PUBLISHER_AND_GRADE;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonPublisherAndGradeRequestBody,
  ): Promise<GetSeasonPublisherAndGradeResponse>;
}

export abstract class GetVideoDurationAndSizeHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_VIDEO_DURATION_AND_SIZE;
  public abstract handle(
    loggingPrefix: string,
    body: GetVideoDurationAndSizeRequestBody,
  ): Promise<GetVideoDurationAndSizeResponse>;
}
