import { GetSeasonPublisherRequestBody, GetSeasonPublisherResponse, GET_SEASON_PUBLISHER, GetSeasonGradeRequestBody, GetSeasonGradeResponse, GET_SEASON_GRADE, ProcessVideoContainerCreatingTaskRequestBody, ProcessVideoContainerCreatingTaskResponse, PROCESS_VIDEO_CONTAINER_CREATING_TASK, ListVideoContainerCreatingTasksRequestBody, ListVideoContainerCreatingTasksResponse, LIST_VIDEO_CONTAINER_CREATING_TASKS, ProcessVideoContainerDeletingTaskRequestBody, ProcessVideoContainerDeletingTaskResponse, PROCESS_VIDEO_CONTAINER_DELETING_TASK, ListVideoContainerDeletingTasksRequestBody, ListVideoContainerDeletingTasksResponse, LIST_VIDEO_CONTAINER_DELETING_TASKS, ProcessCoverImageDeletingTaskRequestBody, ProcessCoverImageDeletingTaskResponse, PROCESS_COVER_IMAGE_DELETING_TASK, ListCoverImageDeletingTasksRequestBody, ListCoverImageDeletingTasksResponse, LIST_COVER_IMAGE_DELETING_TASKS, CacheVideoContainerRequestBody, CacheVideoContainerResponse, CACHE_VIDEO_CONTAINER } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGetSeasonPublisherRequest(
  body: GetSeasonPublisherRequestBody,
): ClientRequestInterface<GetSeasonPublisherResponse> {
  return {
    descriptor: GET_SEASON_PUBLISHER,
    body,
  };
}

export function newGetSeasonGradeRequest(
  body: GetSeasonGradeRequestBody,
): ClientRequestInterface<GetSeasonGradeResponse> {
  return {
    descriptor: GET_SEASON_GRADE,
    body,
  };
}

export function newProcessVideoContainerCreatingTaskRequest(
  body: ProcessVideoContainerCreatingTaskRequestBody,
): ClientRequestInterface<ProcessVideoContainerCreatingTaskResponse> {
  return {
    descriptor: PROCESS_VIDEO_CONTAINER_CREATING_TASK,
    body,
  };
}

export function newListVideoContainerCreatingTasksRequest(
  body: ListVideoContainerCreatingTasksRequestBody,
): ClientRequestInterface<ListVideoContainerCreatingTasksResponse> {
  return {
    descriptor: LIST_VIDEO_CONTAINER_CREATING_TASKS,
    body,
  };
}

export function newProcessVideoContainerDeletingTaskRequest(
  body: ProcessVideoContainerDeletingTaskRequestBody,
): ClientRequestInterface<ProcessVideoContainerDeletingTaskResponse> {
  return {
    descriptor: PROCESS_VIDEO_CONTAINER_DELETING_TASK,
    body,
  };
}

export function newListVideoContainerDeletingTasksRequest(
  body: ListVideoContainerDeletingTasksRequestBody,
): ClientRequestInterface<ListVideoContainerDeletingTasksResponse> {
  return {
    descriptor: LIST_VIDEO_CONTAINER_DELETING_TASKS,
    body,
  };
}

export function newProcessCoverImageDeletingTaskRequest(
  body: ProcessCoverImageDeletingTaskRequestBody,
): ClientRequestInterface<ProcessCoverImageDeletingTaskResponse> {
  return {
    descriptor: PROCESS_COVER_IMAGE_DELETING_TASK,
    body,
  };
}

export function newListCoverImageDeletingTasksRequest(
  body: ListCoverImageDeletingTasksRequestBody,
): ClientRequestInterface<ListCoverImageDeletingTasksResponse> {
  return {
    descriptor: LIST_COVER_IMAGE_DELETING_TASKS,
    body,
  };
}

export function newCacheVideoContainerRequest(
  body: CacheVideoContainerRequestBody,
): ClientRequestInterface<CacheVideoContainerResponse> {
  return {
    descriptor: CACHE_VIDEO_CONTAINER,
    body,
  };
}
