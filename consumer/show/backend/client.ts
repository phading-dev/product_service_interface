import { GetSeasonPublisherAndGradeRequestBody, GetSeasonPublisherAndGradeResponse, GET_SEASON_PUBLISHER_AND_GRADE, GetVideoDurationAndSizeRequestBody, GetVideoDurationAndSizeResponse, GET_VIDEO_DURATION_AND_SIZE } from './interface';
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
