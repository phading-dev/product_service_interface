import { GetSeasonPublisherAndGradeRequestBody, GetSeasonPublisherAndGradeResponse, GET_SEASON_PUBLISHER_AND_GRADE, GetVideoDurationAndSizeRequestBody, GetVideoDurationAndSizeResponse, GET_VIDEO_DURATION_AND_SIZE, GetSeasonNameRequestBody, GetSeasonNameResponse, GET_SEASON_NAME, GetStorageMeterReadingRequestBody, GetStorageMeterReadingResponse, GET_STORAGE_METER_READING, GetUploadMeterReadingRequestBody, GetUploadMeterReadingResponse, GET_UPLOAD_METER_READING } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function getSeasonPublisherAndGrade(
  client: NodeClientInterface,
  body: GetSeasonPublisherAndGradeRequestBody,
  options?: NodeClientOptions,
): Promise<GetSeasonPublisherAndGradeResponse> {
  return client.send(
    {
      descriptor: GET_SEASON_PUBLISHER_AND_GRADE,
      body,
    },
    options,
  );
}

export function getVideoDurationAndSize(
  client: NodeClientInterface,
  body: GetVideoDurationAndSizeRequestBody,
  options?: NodeClientOptions,
): Promise<GetVideoDurationAndSizeResponse> {
  return client.send(
    {
      descriptor: GET_VIDEO_DURATION_AND_SIZE,
      body,
    },
    options,
  );
}

export function getSeasonName(
  client: NodeClientInterface,
  body: GetSeasonNameRequestBody,
  options?: NodeClientOptions,
): Promise<GetSeasonNameResponse> {
  return client.send(
    {
      descriptor: GET_SEASON_NAME,
      body,
    },
    options,
  );
}

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
