import { GetSeasonPublisherAndGradeRequestBody, GetSeasonPublisherAndGradeResponse, GET_SEASON_PUBLISHER_AND_GRADE } from './interface';
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
