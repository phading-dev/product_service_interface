import { GetSeasonPublisherRequestBody, GET_SEASON_PUBLISHER, GetSeasonPublisherResponse, GetSeasonGradeRequestBody, GET_SEASON_GRADE, GetSeasonGradeResponse, GetSeasonRequestBody, GET_SEASON, GetSeasonResponse, ProcessVideoContainerCreatingTaskRequestBody, PROCESS_VIDEO_CONTAINER_CREATING_TASK, ProcessVideoContainerCreatingTaskResponse, ListVideoContainerCreatingTasksRequestBody, LIST_VIDEO_CONTAINER_CREATING_TASKS, ListVideoContainerCreatingTasksResponse, ProcessVideoContainerDeletingTaskRequestBody, PROCESS_VIDEO_CONTAINER_DELETING_TASK, ProcessVideoContainerDeletingTaskResponse, ListVideoContainerDeletingTasksRequestBody, LIST_VIDEO_CONTAINER_DELETING_TASKS, ListVideoContainerDeletingTasksResponse, CacheVideoContainerRequestBody, CACHE_VIDEO_CONTAINER, CacheVideoContainerResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetSeasonPublisherHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_SEASON_PUBLISHER;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonPublisherRequestBody,
  ): Promise<GetSeasonPublisherResponse>;
}

export abstract class GetSeasonGradeHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_SEASON_GRADE;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonGradeRequestBody,
  ): Promise<GetSeasonGradeResponse>;
}

export abstract class GetSeasonHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonRequestBody,
  ): Promise<GetSeasonResponse>;
}

export abstract class ProcessVideoContainerCreatingTaskHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_VIDEO_CONTAINER_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessVideoContainerCreatingTaskRequestBody,
  ): Promise<ProcessVideoContainerCreatingTaskResponse>;
}

export abstract class ListVideoContainerCreatingTasksHandlerInterface implements NodeHandlerInterface {
  public descriptor = LIST_VIDEO_CONTAINER_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListVideoContainerCreatingTasksRequestBody,
  ): Promise<ListVideoContainerCreatingTasksResponse>;
}

export abstract class ProcessVideoContainerDeletingTaskHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_VIDEO_CONTAINER_DELETING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessVideoContainerDeletingTaskRequestBody,
  ): Promise<ProcessVideoContainerDeletingTaskResponse>;
}

export abstract class ListVideoContainerDeletingTasksHandlerInterface implements NodeHandlerInterface {
  public descriptor = LIST_VIDEO_CONTAINER_DELETING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListVideoContainerDeletingTasksRequestBody,
  ): Promise<ListVideoContainerDeletingTasksResponse>;
}

export abstract class CacheVideoContainerHandlerInterface implements NodeHandlerInterface {
  public descriptor = CACHE_VIDEO_CONTAINER;
  public abstract handle(
    loggingPrefix: string,
    body: CacheVideoContainerRequestBody,
  ): Promise<CacheVideoContainerResponse>;
}
