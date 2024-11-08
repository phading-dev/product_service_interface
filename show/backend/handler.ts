import { GetSeasonPublisherAndGradeRequestBody, GET_SEASON_PUBLISHER_AND_GRADE, GetSeasonPublisherAndGradeResponse, GetVideoDurationAndSizeRequestBody, GET_VIDEO_DURATION_AND_SIZE, GetVideoDurationAndSizeResponse, GetSeasonNameRequestBody, GET_SEASON_NAME, GetSeasonNameResponse, GetStorageMeterReadingRequestBody, GET_STORAGE_METER_READING, GetStorageMeterReadingResponse, GetUploadMeterReadingRequestBody, GET_UPLOAD_METER_READING, GetUploadMeterReadingResponse } from './interface';
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

export abstract class GetSeasonNameHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_SEASON_NAME;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonNameRequestBody,
  ): Promise<GetSeasonNameResponse>;
}

export abstract class GetStorageMeterReadingHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_STORAGE_METER_READING;
  public abstract handle(
    loggingPrefix: string,
    body: GetStorageMeterReadingRequestBody,
  ): Promise<GetStorageMeterReadingResponse>;
}

export abstract class GetUploadMeterReadingHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_UPLOAD_METER_READING;
  public abstract handle(
    loggingPrefix: string,
    body: GetUploadMeterReadingRequestBody,
  ): Promise<GetUploadMeterReadingResponse>;
}
