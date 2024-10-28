import { GetSeasonPublisherAndGradeRequestBody, GET_SEASON_PUBLISHER_AND_GRADE, GetSeasonPublisherAndGradeResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetSeasonPublisherAndGradeHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_SEASON_PUBLISHER_AND_GRADE;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonPublisherAndGradeRequestBody,
  ): Promise<GetSeasonPublisherAndGradeResponse>;
}
