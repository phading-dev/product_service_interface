import { GetSeasonPublisherAndGradeRequestBody, GetSeasonPublisherAndGradeResponse, GET_SEASON_PUBLISHER_AND_GRADE, GetSeasonNameRequestBody, GetSeasonNameResponse, GET_SEASON_NAME, ProcessVideoContainerCreatingTaskRequsetBody, ProcessVideoContainerCreatingTaskResponse, PROCESS_VIDEO_CONTAINER_CREATING_TASK, GetVideoContainerCreatingTasksRequestBody, GetVideoContainerCreatingTasksResponse, GET_VIDEO_CONTAINER_CREATING_TASKS, ProcessVideoContainerDeletingTaskRequsetBody, ProcessVideoContainerDeletingTaskResponse, PROCESS_VIDEO_CONTAINER_DELETING_TASK, GetVideoContainerDeletingTasksRequestBody, GetVideoContainerDeletingTasksResponse, GET_VIDEO_CONTAINER_DELETING_TASKS, SyncEpisodeVideoContainerInfoRequestBody, SyncEpisodeVideoContainerInfoResponse, SYNC_EPISODE_VIDEO_CONTAINER_INFO } from './interface';
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

export function getSeasonName(
  client: NodeClientInterface,
  body: GetSeasonNameRequestBody,
  options?: NodeClientOptions,
): Promise<GetSeasonNameResponse> {
  return client.send(
    {
      descriptor: GET_SEASON_NAME,
      body,
    },
    options,
  );
}

export function processVideoContainerCreatingTask(
  client: NodeClientInterface,
  body: ProcessVideoContainerCreatingTaskRequsetBody,
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

export function getVideoContainerCreatingTasks(
  client: NodeClientInterface,
  body: GetVideoContainerCreatingTasksRequestBody,
  options?: NodeClientOptions,
): Promise<GetVideoContainerCreatingTasksResponse> {
  return client.send(
    {
      descriptor: GET_VIDEO_CONTAINER_CREATING_TASKS,
      body,
    },
    options,
  );
}

export function processVideoContainerDeletingTask(
  client: NodeClientInterface,
  body: ProcessVideoContainerDeletingTaskRequsetBody,
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

export function getVideoContainerDeletingTasks(
  client: NodeClientInterface,
  body: GetVideoContainerDeletingTasksRequestBody,
  options?: NodeClientOptions,
): Promise<GetVideoContainerDeletingTasksResponse> {
  return client.send(
    {
      descriptor: GET_VIDEO_CONTAINER_DELETING_TASKS,
      body,
    },
    options,
  );
}

export function syncEpisodeVideoContainerInfo(
  client: NodeClientInterface,
  body: SyncEpisodeVideoContainerInfoRequestBody,
  options?: NodeClientOptions,
): Promise<SyncEpisodeVideoContainerInfoResponse> {
  return client.send(
    {
      descriptor: SYNC_EPISODE_VIDEO_CONTAINER_INFO,
      body,
    },
    options,
  );
}
