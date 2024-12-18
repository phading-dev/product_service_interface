import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { VideoContainer, VIDEO_CONTAINER } from '../season_details';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetSeasonPublisherAndGradeRequestBody {
  seasonId?: string,
  date?: string,
}

export let GET_SEASON_PUBLISHER_AND_GRADE_REQUEST_BODY: MessageDescriptor<GetSeasonPublisherAndGradeRequestBody> = {
  name: 'GetSeasonPublisherAndGradeRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'date',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetSeasonPublisherAndGradeResponse {
  publisherId?: string,
  grade?: number,
}

export let GET_SEASON_PUBLISHER_AND_GRADE_RESPONSE: MessageDescriptor<GetSeasonPublisherAndGradeResponse> = {
  name: 'GetSeasonPublisherAndGradeResponse',
  fields: [{
    name: 'publisherId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'grade',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GetSeasonNameRequestBody {
  seasonId?: string,
}

export let GET_SEASON_NAME_REQUEST_BODY: MessageDescriptor<GetSeasonNameRequestBody> = {
  name: 'GetSeasonNameRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetSeasonNameResponse {
  seasonName?: string,
}

export let GET_SEASON_NAME_RESPONSE: MessageDescriptor<GetSeasonNameResponse> = {
  name: 'GetSeasonNameResponse',
  fields: [{
    name: 'seasonName',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessVideoContainerCreatingTaskRequsetBody {
  seasonId?: string,
  episodeId?: string,
}

export let PROCESS_VIDEO_CONTAINER_CREATING_TASK_REQUSET_BODY: MessageDescriptor<ProcessVideoContainerCreatingTaskRequsetBody> = {
  name: 'ProcessVideoContainerCreatingTaskRequsetBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessVideoContainerCreatingTaskResponse {
}

export let PROCESS_VIDEO_CONTAINER_CREATING_TASK_RESPONSE: MessageDescriptor<ProcessVideoContainerCreatingTaskResponse> = {
  name: 'ProcessVideoContainerCreatingTaskResponse',
  fields: [],
};

export interface GetVideoContainerCreatingTasksRequestBody {
}

export let GET_VIDEO_CONTAINER_CREATING_TASKS_REQUEST_BODY: MessageDescriptor<GetVideoContainerCreatingTasksRequestBody> = {
  name: 'GetVideoContainerCreatingTasksRequestBody',
  fields: [],
};

export interface GetVideoContainerCreatingTasksResponse {
  tasks?: Array<ProcessVideoContainerCreatingTaskRequsetBody>,
}

export let GET_VIDEO_CONTAINER_CREATING_TASKS_RESPONSE: MessageDescriptor<GetVideoContainerCreatingTasksResponse> = {
  name: 'GetVideoContainerCreatingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_VIDEO_CONTAINER_CREATING_TASK_REQUSET_BODY,
    isArray: true,
  }],
};

export interface ProcessVideoContainerDeletingTaskRequsetBody {
  videoContainerId?: string,
}

export let PROCESS_VIDEO_CONTAINER_DELETING_TASK_REQUSET_BODY: MessageDescriptor<ProcessVideoContainerDeletingTaskRequsetBody> = {
  name: 'ProcessVideoContainerDeletingTaskRequsetBody',
  fields: [{
    name: 'videoContainerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessVideoContainerDeletingTaskResponse {
}

export let PROCESS_VIDEO_CONTAINER_DELETING_TASK_RESPONSE: MessageDescriptor<ProcessVideoContainerDeletingTaskResponse> = {
  name: 'ProcessVideoContainerDeletingTaskResponse',
  fields: [],
};

export interface GetVideoContainerDeletingTasksRequestBody {
}

export let GET_VIDEO_CONTAINER_DELETING_TASKS_REQUEST_BODY: MessageDescriptor<GetVideoContainerDeletingTasksRequestBody> = {
  name: 'GetVideoContainerDeletingTasksRequestBody',
  fields: [],
};

export interface GetVideoContainerDeletingTasksResponse {
  tasks?: Array<ProcessVideoContainerDeletingTaskRequsetBody>,
}

export let GET_VIDEO_CONTAINER_DELETING_TASKS_RESPONSE: MessageDescriptor<GetVideoContainerDeletingTasksResponse> = {
  name: 'GetVideoContainerDeletingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_VIDEO_CONTAINER_DELETING_TASK_REQUSET_BODY,
    isArray: true,
  }],
};

export interface SyncEpisodeVideoContainerInfoRequestBody {
  seasonId?: string,
  episodeId?: string,
  videoContainerId?: string,
  videoContainer?: VideoContainer,
}

export let SYNC_EPISODE_VIDEO_CONTAINER_INFO_REQUEST_BODY: MessageDescriptor<SyncEpisodeVideoContainerInfoRequestBody> = {
  name: 'SyncEpisodeVideoContainerInfoRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'videoContainerId',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'videoContainer',
    index: 4,
    messageType: VIDEO_CONTAINER,
  }],
};

export interface SyncEpisodeVideoContainerInfoResponse {
}

export let SYNC_EPISODE_VIDEO_CONTAINER_INFO_RESPONSE: MessageDescriptor<SyncEpisodeVideoContainerInfoResponse> = {
  name: 'SyncEpisodeVideoContainerInfoResponse',
  fields: [],
};

export let GET_SEASON_PUBLISHER_AND_GRADE: NodeRemoteCallDescriptor = {
  name: "GetSeasonPublisherAndGrade",
  path: "/GetSeasonPublisherAndGrade",
  body: {
    messageType: GET_SEASON_PUBLISHER_AND_GRADE_REQUEST_BODY,
  },
  response: {
    messageType: GET_SEASON_PUBLISHER_AND_GRADE_RESPONSE,
  },
}

export let GET_SEASON_NAME: NodeRemoteCallDescriptor = {
  name: "GetSeasonName",
  path: "/GetSeasonName",
  body: {
    messageType: GET_SEASON_NAME_REQUEST_BODY,
  },
  response: {
    messageType: GET_SEASON_NAME_RESPONSE,
  },
}

export let PROCESS_VIDEO_CONTAINER_CREATING_TASK: NodeRemoteCallDescriptor = {
  name: "ProcessVideoContainerCreatingTask",
  path: "/ProcessVideoContainerCreatingTask",
  body: {
    messageType: PROCESS_VIDEO_CONTAINER_CREATING_TASK_REQUSET_BODY,
  },
  response: {
    messageType: PROCESS_VIDEO_CONTAINER_CREATING_TASK_RESPONSE,
  },
}

export let GET_VIDEO_CONTAINER_CREATING_TASKS: NodeRemoteCallDescriptor = {
  name: "GetVideoContainerCreatingTasks",
  path: "/GetVideoContainerCreatingTasks",
  body: {
    messageType: GET_VIDEO_CONTAINER_CREATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: GET_VIDEO_CONTAINER_CREATING_TASKS_RESPONSE,
  },
}

export let PROCESS_VIDEO_CONTAINER_DELETING_TASK: NodeRemoteCallDescriptor = {
  name: "ProcessVideoContainerDeletingTask",
  path: "/ProcessVideoContainerDeletingTask",
  body: {
    messageType: PROCESS_VIDEO_CONTAINER_DELETING_TASK_REQUSET_BODY,
  },
  response: {
    messageType: PROCESS_VIDEO_CONTAINER_DELETING_TASK_RESPONSE,
  },
}

export let GET_VIDEO_CONTAINER_DELETING_TASKS: NodeRemoteCallDescriptor = {
  name: "GetVideoContainerDeletingTasks",
  path: "/GetVideoContainerDeletingTasks",
  body: {
    messageType: GET_VIDEO_CONTAINER_DELETING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: GET_VIDEO_CONTAINER_DELETING_TASKS_RESPONSE,
  },
}

export let SYNC_EPISODE_VIDEO_CONTAINER_INFO: NodeRemoteCallDescriptor = {
  name: "SyncEpisodeVideoContainerInfo",
  path: "/SyncEpisodeVideoContainerInfo",
  body: {
    messageType: SYNC_EPISODE_VIDEO_CONTAINER_INFO_REQUEST_BODY,
  },
  response: {
    messageType: SYNC_EPISODE_VIDEO_CONTAINER_INFO_RESPONSE,
  },
}
