import { GetSeasonPublisherRequestBody, GetSeasonPublisherResponse, GET_SEASON_PUBLISHER, GetSeasonGradeRequestBody, GetSeasonGradeResponse, GET_SEASON_GRADE, GetSeasonRequestBody, GetSeasonResponse, GET_SEASON, ProcessVideoContainerCreatingTaskRequestBody, ProcessVideoContainerCreatingTaskResponse, PROCESS_VIDEO_CONTAINER_CREATING_TASK, ListVideoContainerCreatingTasksRequestBody, ListVideoContainerCreatingTasksResponse, LIST_VIDEO_CONTAINER_CREATING_TASKS, ProcessVideoContainerDeletingTaskRequestBody, ProcessVideoContainerDeletingTaskResponse, PROCESS_VIDEO_CONTAINER_DELETING_TASK, ListVideoContainerDeletingTasksRequestBody, ListVideoContainerDeletingTasksResponse, LIST_VIDEO_CONTAINER_DELETING_TASKS, CacheVideoContainerRequestBody, CacheVideoContainerResponse, CACHE_VIDEO_CONTAINER } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function getSeasonPublisher(
  client: NodeClientInterface,
  body: GetSeasonPublisherRequestBody,
  options?: NodeClientOptions,
): Promise<GetSeasonPublisherResponse> {
  return client.send(
    {
      descriptor: GET_SEASON_PUBLISHER,
      body,
    },
    options,
  );
}

export function getSeasonGrade(
  client: NodeClientInterface,
  body: GetSeasonGradeRequestBody,
  options?: NodeClientOptions,
): Promise<GetSeasonGradeResponse> {
  return client.send(
    {
      descriptor: GET_SEASON_GRADE,
      body,
    },
    options,
  );
}

export function getSeason(
  client: NodeClientInterface,
  body: GetSeasonRequestBody,
  options?: NodeClientOptions,
): Promise<GetSeasonResponse> {
  return client.send(
    {
      descriptor: GET_SEASON,
      body,
    },
    options,
  );
}

export function processVideoContainerCreatingTask(
  client: NodeClientInterface,
  body: ProcessVideoContainerCreatingTaskRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessVideoContainerCreatingTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_VIDEO_CONTAINER_CREATING_TASK,
      body,
    },
    options,
  );
}

export function listVideoContainerCreatingTasks(
  client: NodeClientInterface,
  body: ListVideoContainerCreatingTasksRequestBody,
  options?: NodeClientOptions,
): Promise<ListVideoContainerCreatingTasksResponse> {
  return client.send(
    {
      descriptor: LIST_VIDEO_CONTAINER_CREATING_TASKS,
      body,
    },
    options,
  );
}

export function processVideoContainerDeletingTask(
  client: NodeClientInterface,
  body: ProcessVideoContainerDeletingTaskRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessVideoContainerDeletingTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_VIDEO_CONTAINER_DELETING_TASK,
      body,
    },
    options,
  );
}

export function listVideoContainerDeletingTasks(
  client: NodeClientInterface,
  body: ListVideoContainerDeletingTasksRequestBody,
  options?: NodeClientOptions,
): Promise<ListVideoContainerDeletingTasksResponse> {
  return client.send(
    {
      descriptor: LIST_VIDEO_CONTAINER_DELETING_TASKS,
      body,
    },
    options,
  );
}

export function cacheVideoContainer(
  client: NodeClientInterface,
  body: CacheVideoContainerRequestBody,
  options?: NodeClientOptions,
): Promise<CacheVideoContainerResponse> {
  return client.send(
    {
      descriptor: CACHE_VIDEO_CONTAINER,
      body,
    },
    options,
  );
}
