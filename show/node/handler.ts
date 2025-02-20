import { GetSeasonPublisherRequestBody, GET_SEASON_PUBLISHER, GetSeasonPublisherResponse, GetSeasonGradeRequestBody, GET_SEASON_GRADE, GetSeasonGradeResponse, ProcessVideoContainerCreatingTaskRequestBody, PROCESS_VIDEO_CONTAINER_CREATING_TASK, ProcessVideoContainerCreatingTaskResponse, ListVideoContainerCreatingTasksRequestBody, LIST_VIDEO_CONTAINER_CREATING_TASKS, ListVideoContainerCreatingTasksResponse, ProcessVideoContainerDeletingTaskRequestBody, PROCESS_VIDEO_CONTAINER_DELETING_TASK, ProcessVideoContainerDeletingTaskResponse, ListVideoContainerDeletingTasksRequestBody, LIST_VIDEO_CONTAINER_DELETING_TASKS, ListVideoContainerDeletingTasksResponse, ProcessCoverImageDeletingTaskRequestBody, PROCESS_COVER_IMAGE_DELETING_TASK, ProcessCoverImageDeletingTaskResponse, ListCoverImageDeletingTasksRequestBody, LIST_COVER_IMAGE_DELETING_TASKS, ListCoverImageDeletingTasksResponse, CacheVideoContainerRequestBody, CACHE_VIDEO_CONTAINER, CacheVideoContainerResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GetSeasonPublisherHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_SEASON_PUBLISHER;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonPublisherRequestBody,
  ): Promise<GetSeasonPublisherResponse>;
}

export abstract class GetSeasonGradeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_SEASON_GRADE;
  public abstract handle(
    loggingPrefix: string,
    body: GetSeasonGradeRequestBody,
  ): Promise<GetSeasonGradeResponse>;
}

export abstract class ProcessVideoContainerCreatingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_VIDEO_CONTAINER_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessVideoContainerCreatingTaskRequestBody,
  ): Promise<ProcessVideoContainerCreatingTaskResponse>;
}

export abstract class ListVideoContainerCreatingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_VIDEO_CONTAINER_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListVideoContainerCreatingTasksRequestBody,
  ): Promise<ListVideoContainerCreatingTasksResponse>;
}

export abstract class ProcessVideoContainerDeletingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_VIDEO_CONTAINER_DELETING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessVideoContainerDeletingTaskRequestBody,
  ): Promise<ProcessVideoContainerDeletingTaskResponse>;
}

export abstract class ListVideoContainerDeletingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_VIDEO_CONTAINER_DELETING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListVideoContainerDeletingTasksRequestBody,
  ): Promise<ListVideoContainerDeletingTasksResponse>;
}

export abstract class ProcessCoverImageDeletingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_COVER_IMAGE_DELETING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessCoverImageDeletingTaskRequestBody,
  ): Promise<ProcessCoverImageDeletingTaskResponse>;
}

export abstract class ListCoverImageDeletingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_COVER_IMAGE_DELETING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListCoverImageDeletingTasksRequestBody,
  ): Promise<ListCoverImageDeletingTasksResponse>;
}

export abstract class CacheVideoContainerHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CACHE_VIDEO_CONTAINER;
  public abstract handle(
    loggingPrefix: string,
    body: CacheVideoContainerRequestBody,
  ): Promise<CacheVideoContainerResponse>;
}
