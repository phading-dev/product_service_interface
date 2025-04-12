import { GetSeasonPublisherRequestBody, GET_SEASON_PUBLISHER, GetSeasonPublisherResponse, GetSeasonGradeRequestBody, GET_SEASON_GRADE, GetSeasonGradeResponse, CacheVideoContainerRequestBody, CACHE_VIDEO_CONTAINER, CacheVideoContainerResponse, CheckPresenceOfSeasonRequestBody, CHECK_PRESENCE_OF_SEASON, CheckPresenceOfSeasonResponse, CheckPresenceOfEpisodeRequestBody, CHECK_PRESENCE_OF_EPISODE, CheckPresenceOfEpisodeResponse, ProcessVideoContainerCreatingTaskRequestBody, PROCESS_VIDEO_CONTAINER_CREATING_TASK, ProcessVideoContainerCreatingTaskResponse, ListVideoContainerCreatingTasksRequestBody, LIST_VIDEO_CONTAINER_CREATING_TASKS, ListVideoContainerCreatingTasksResponse, ProcessVideoContainerDeletingTaskRequestBody, PROCESS_VIDEO_CONTAINER_DELETING_TASK, ProcessVideoContainerDeletingTaskResponse, ListVideoContainerDeletingTasksRequestBody, LIST_VIDEO_CONTAINER_DELETING_TASKS, ListVideoContainerDeletingTasksResponse, ProcessCoverImageDeletingTaskRequestBody, PROCESS_COVER_IMAGE_DELETING_TASK, ProcessCoverImageDeletingTaskResponse, ListCoverImageDeletingTasksRequestBody, LIST_COVER_IMAGE_DELETING_TASKS, ListCoverImageDeletingTasksResponse, ProcessSeasonRecentPremierTimeUpdatingTaskRequestBody, PROCESS_SEASON_RECENT_PREMIER_TIME_UPDATING_TASK, ProcessSeasonRecentPremierTimeUpdatingTaskResponse, ListSeasonRecentPremierTimeUpdatingTasksRequestBody, LIST_SEASON_RECENT_PREMIER_TIME_UPDATING_TASKS, ListSeasonRecentPremierTimeUpdatingTasksResponse } from './interface';
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

export abstract class CacheVideoContainerHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CACHE_VIDEO_CONTAINER;
  public abstract handle(
    loggingPrefix: string,
    body: CacheVideoContainerRequestBody,
  ): Promise<CacheVideoContainerResponse>;
}

export abstract class CheckPresenceOfSeasonHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CHECK_PRESENCE_OF_SEASON;
  public abstract handle(
    loggingPrefix: string,
    body: CheckPresenceOfSeasonRequestBody,
  ): Promise<CheckPresenceOfSeasonResponse>;
}

export abstract class CheckPresenceOfEpisodeHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CHECK_PRESENCE_OF_EPISODE;
  public abstract handle(
    loggingPrefix: string,
    body: CheckPresenceOfEpisodeRequestBody,
  ): Promise<CheckPresenceOfEpisodeResponse>;
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

export abstract class ProcessSeasonRecentPremierTimeUpdatingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_SEASON_RECENT_PREMIER_TIME_UPDATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessSeasonRecentPremierTimeUpdatingTaskRequestBody,
  ): Promise<ProcessSeasonRecentPremierTimeUpdatingTaskResponse>;
}

export abstract class ListSeasonRecentPremierTimeUpdatingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_SEASON_RECENT_PREMIER_TIME_UPDATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListSeasonRecentPremierTimeUpdatingTasksRequestBody,
  ): Promise<ListSeasonRecentPremierTimeUpdatingTasksResponse>;
}
