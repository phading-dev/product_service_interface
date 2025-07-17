import { GetSeasonPublisherRequestBody, GetSeasonPublisherResponse, GET_SEASON_PUBLISHER, GetSeasonGradeRequestBody, GetSeasonGradeResponse, GET_SEASON_GRADE, CacheVideoContainerRequestBody, CacheVideoContainerResponse, CACHE_VIDEO_CONTAINER, CheckPresenceOfSeasonRequestBody, CheckPresenceOfSeasonResponse, CHECK_PRESENCE_OF_SEASON, CheckPresenceOfEpisodeRequestBody, CheckPresenceOfEpisodeResponse, CHECK_PRESENCE_OF_EPISODE, ProcessVideoContainerDeletingTaskRequestBody, ProcessVideoContainerDeletingTaskResponse, PROCESS_VIDEO_CONTAINER_DELETING_TASK, ListVideoContainerDeletingTasksRequestBody, ListVideoContainerDeletingTasksResponse, LIST_VIDEO_CONTAINER_DELETING_TASKS, ProcessCoverImageDeletingTaskRequestBody, ProcessCoverImageDeletingTaskResponse, PROCESS_COVER_IMAGE_DELETING_TASK, ListCoverImageDeletingTasksRequestBody, ListCoverImageDeletingTasksResponse, LIST_COVER_IMAGE_DELETING_TASKS, ProcessSeasonRecentPremiereTimeUpdatingTaskRequestBody, ProcessSeasonRecentPremiereTimeUpdatingTaskResponse, PROCESS_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASK, ListSeasonRecentPremiereTimeUpdatingTasksRequestBody, ListSeasonRecentPremiereTimeUpdatingTasksResponse, LIST_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASKS, AdminTakeDownSeasonRequestBody, AdminTakeDownSeasonResponse, ADMIN_TAKE_DOWN_SEASON, AdminRestoreSeasonRequestBody, AdminRestoreSeasonResponse, ADMIN_RESTORE_SEASON } from './interface';
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

export function newCacheVideoContainerRequest(
  body: CacheVideoContainerRequestBody,
): ClientRequestInterface<CacheVideoContainerResponse> {
  return {
    descriptor: CACHE_VIDEO_CONTAINER,
    body,
  };
}

export function newCheckPresenceOfSeasonRequest(
  body: CheckPresenceOfSeasonRequestBody,
): ClientRequestInterface<CheckPresenceOfSeasonResponse> {
  return {
    descriptor: CHECK_PRESENCE_OF_SEASON,
    body,
  };
}

export function newCheckPresenceOfEpisodeRequest(
  body: CheckPresenceOfEpisodeRequestBody,
): ClientRequestInterface<CheckPresenceOfEpisodeResponse> {
  return {
    descriptor: CHECK_PRESENCE_OF_EPISODE,
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

export function newProcessSeasonRecentPremiereTimeUpdatingTaskRequest(
  body: ProcessSeasonRecentPremiereTimeUpdatingTaskRequestBody,
): ClientRequestInterface<ProcessSeasonRecentPremiereTimeUpdatingTaskResponse> {
  return {
    descriptor: PROCESS_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASK,
    body,
  };
}

export function newListSeasonRecentPremiereTimeUpdatingTasksRequest(
  body: ListSeasonRecentPremiereTimeUpdatingTasksRequestBody,
): ClientRequestInterface<ListSeasonRecentPremiereTimeUpdatingTasksResponse> {
  return {
    descriptor: LIST_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASKS,
    body,
  };
}

export function newAdminTakeDownSeasonRequest(
  body: AdminTakeDownSeasonRequestBody,
): ClientRequestInterface<AdminTakeDownSeasonResponse> {
  return {
    descriptor: ADMIN_TAKE_DOWN_SEASON,
    body,
  };
}

export function newAdminRestoreSeasonRequest(
  body: AdminRestoreSeasonRequestBody,
): ClientRequestInterface<AdminRestoreSeasonResponse> {
  return {
    descriptor: ADMIN_RESTORE_SEASON,
    body,
  };
}
