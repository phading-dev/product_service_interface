import { GetSeasonPublisherAndGradeRequestBody, GET_SEASON_PUBLISHER_AND_GRADE, GetSeasonPublisherAndGradeResponse, GetSeasonNameRequestBody, GET_SEASON_NAME, GetSeasonNameResponse, ProcessVideoContainerCreatingTaskRequsetBody, PROCESS_VIDEO_CONTAINER_CREATING_TASK, ProcessVideoContainerCreatingTaskResponse, GetVideoContainerCreatingTasksRequestBody, GET_VIDEO_CONTAINER_CREATING_TASKS, GetVideoContainerCreatingTasksResponse, SyncEpisodeVideoContainerInfoRequestBody, SYNC_EPISODE_VIDEO_CONTAINER_INFO, SyncEpisodeVideoContainerInfoResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetSeasonPublisherAndGradeHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_SEASON_PUBLISHER_AND_GRADE;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonPublisherAndGradeRequestBody,
  ): Promise<GetSeasonPublisherAndGradeResponse>;
}

export abstract class GetSeasonNameHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_SEASON_NAME;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonNameRequestBody,
  ): Promise<GetSeasonNameResponse>;
}

export abstract class ProcessVideoContainerCreatingTaskHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_VIDEO_CONTAINER_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessVideoContainerCreatingTaskRequsetBody,
  ): Promise<ProcessVideoContainerCreatingTaskResponse>;
}

export abstract class GetVideoContainerCreatingTasksHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_VIDEO_CONTAINER_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: GetVideoContainerCreatingTasksRequestBody,
  ): Promise<GetVideoContainerCreatingTasksResponse>;
}

export abstract class SyncEpisodeVideoContainerInfoHandlerInterface implements NodeHandlerInterface {
  public descriptor = SYNC_EPISODE_VIDEO_CONTAINER_INFO;
  public abstract handle(
    loggingPrefix: string,
    body: SyncEpisodeVideoContainerInfoRequestBody,
  ): Promise<SyncEpisodeVideoContainerInfoResponse>;
}
