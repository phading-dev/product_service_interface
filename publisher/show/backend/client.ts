import { GetStorageMeterReadingRequestBody, GetStorageMeterReadingResponse, GET_STORAGE_METER_READING, GetUploadMeterReadingRequestBody, GetUploadMeterReadingResponse, GET_UPLOAD_METER_READING } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function getStorageMeterReading(
  client: NodeClientInterface,
  body: GetStorageMeterReadingRequestBody,
  options?: NodeClientOptions,
): Promise<GetStorageMeterReadingResponse> {
  return client.send(
    {
      descriptor: GET_STORAGE_METER_READING,
      body,
    },
    options,
  );
}

export function getUploadMeterReading(
  client: NodeClientInterface,
  body: GetUploadMeterReadingRequestBody,
  options?: NodeClientOptions,
): Promise<GetUploadMeterReadingResponse> {
  return client.send(
    {
      descriptor: GET_UPLOAD_METER_READING,
      body,
    },
    options,
  );
}
