import { GetStorageMeterReadingRequestBody, GET_STORAGE_METER_READING, GetStorageMeterReadingResponse, GetUploadMeterReadingRequestBody, GET_UPLOAD_METER_READING, GetUploadMeterReadingResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

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
