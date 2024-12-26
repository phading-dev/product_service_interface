import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { VideoContainer, VIDEO_CONTAINER } from '../video_container';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetSeasonPublisherRequestBody {
  seasonId?: string,
}

export let GET_SEASON_PUBLISHER_REQUEST_BODY: MessageDescriptor<GetSeasonPublisherRequestBody> = {
  name: 'GetSeasonPublisherRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetSeasonPublisherResponse {
  publisherId?: string,
}

export let GET_SEASON_PUBLISHER_RESPONSE: MessageDescriptor<GetSeasonPublisherResponse> = {
  name: 'GetSeasonPublisherResponse',
  fields: [{
    name: 'publisherId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetSeasonGradeRequestBody {
  seasonId?: string,
  date?: string,
}

export let GET_SEASON_GRADE_REQUEST_BODY: MessageDescriptor<GetSeasonGradeRequestBody> = {
  name: 'GetSeasonGradeRequestBody',
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

export interface GetSeasonGradeResponse {
  grade?: number,
}

export let GET_SEASON_GRADE_RESPONSE: MessageDescriptor<GetSeasonGradeResponse> = {
  name: 'GetSeasonGradeResponse',
  fields: [{
    name: 'grade',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GetSeasonRequestBody {
  seasonId?: string,
}

export let GET_SEASON_REQUEST_BODY: MessageDescriptor<GetSeasonRequestBody> = {
  name: 'GetSeasonRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetSeasonResponse {
  name?: string,
}

export let GET_SEASON_RESPONSE: MessageDescriptor<GetSeasonResponse> = {
  name: 'GetSeasonResponse',
  fields: [{
    name: 'name',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessVideoContainerCreatingTaskRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let PROCESS_VIDEO_CONTAINER_CREATING_TASK_REQUEST_BODY: MessageDescriptor<ProcessVideoContainerCreatingTaskRequestBody> = {
  name: 'ProcessVideoContainerCreatingTaskRequestBody',
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

export interface ListVideoContainerCreatingTasksRequestBody {
}

export let LIST_VIDEO_CONTAINER_CREATING_TASKS_REQUEST_BODY: MessageDescriptor<ListVideoContainerCreatingTasksRequestBody> = {
  name: 'ListVideoContainerCreatingTasksRequestBody',
  fields: [],
};

export interface ListVideoContainerCreatingTasksResponse {
  tasks?: Array<ProcessVideoContainerCreatingTaskRequestBody>,
}

export let LIST_VIDEO_CONTAINER_CREATING_TASKS_RESPONSE: MessageDescriptor<ListVideoContainerCreatingTasksResponse> = {
  name: 'ListVideoContainerCreatingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_VIDEO_CONTAINER_CREATING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessVideoContainerDeletingTaskRequestBody {
  videoContainerId?: string,
}

export let PROCESS_VIDEO_CONTAINER_DELETING_TASK_REQUEST_BODY: MessageDescriptor<ProcessVideoContainerDeletingTaskRequestBody> = {
  name: 'ProcessVideoContainerDeletingTaskRequestBody',
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

export interface ListVideoContainerDeletingTasksRequestBody {
}

export let LIST_VIDEO_CONTAINER_DELETING_TASKS_REQUEST_BODY: MessageDescriptor<ListVideoContainerDeletingTasksRequestBody> = {
  name: 'ListVideoContainerDeletingTasksRequestBody',
  fields: [],
};

export interface ListVideoContainerDeletingTasksResponse {
  tasks?: Array<ProcessVideoContainerDeletingTaskRequestBody>,
}

export let LIST_VIDEO_CONTAINER_DELETING_TASKS_RESPONSE: MessageDescriptor<ListVideoContainerDeletingTasksResponse> = {
  name: 'ListVideoContainerDeletingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_VIDEO_CONTAINER_DELETING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface CacheVideoContainerRequestBody {
  seasonId?: string,
  episodeId?: string,
  videoContainerId?: string,
  videoContainer?: VideoContainer,
}

export let CACHE_VIDEO_CONTAINER_REQUEST_BODY: MessageDescriptor<CacheVideoContainerRequestBody> = {
  name: 'CacheVideoContainerRequestBody',
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

export interface CacheVideoContainerResponse {
}

export let CACHE_VIDEO_CONTAINER_RESPONSE: MessageDescriptor<CacheVideoContainerResponse> = {
  name: 'CacheVideoContainerResponse',
  fields: [],
};

export let GET_SEASON_PUBLISHER: NodeRemoteCallDescriptor = {
  name: "GetSeasonPublisher",
  path: "/GetSeasonPublisher",
  body: {
    messageType: GET_SEASON_PUBLISHER_REQUEST_BODY,
  },
  response: {
    messageType: GET_SEASON_PUBLISHER_RESPONSE,
  },
}

export let GET_SEASON_GRADE: NodeRemoteCallDescriptor = {
  name: "GetSeasonGrade",
  path: "/GetSeasonGrade",
  body: {
    messageType: GET_SEASON_GRADE_REQUEST_BODY,
  },
  response: {
    messageType: GET_SEASON_GRADE_RESPONSE,
  },
}

export let GET_SEASON: NodeRemoteCallDescriptor = {
  name: "GetSeason",
  path: "/GetSeason",
  body: {
    messageType: GET_SEASON_REQUEST_BODY,
  },
  response: {
    messageType: GET_SEASON_RESPONSE,
  },
}

export let PROCESS_VIDEO_CONTAINER_CREATING_TASK: NodeRemoteCallDescriptor = {
  name: "ProcessVideoContainerCreatingTask",
  path: "/ProcessVideoContainerCreatingTask",
  body: {
    messageType: PROCESS_VIDEO_CONTAINER_CREATING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_VIDEO_CONTAINER_CREATING_TASK_RESPONSE,
  },
}

export let LIST_VIDEO_CONTAINER_CREATING_TASKS: NodeRemoteCallDescriptor = {
  name: "ListVideoContainerCreatingTasks",
  path: "/ListVideoContainerCreatingTasks",
  body: {
    messageType: LIST_VIDEO_CONTAINER_CREATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_VIDEO_CONTAINER_CREATING_TASKS_RESPONSE,
  },
}

export let PROCESS_VIDEO_CONTAINER_DELETING_TASK: NodeRemoteCallDescriptor = {
  name: "ProcessVideoContainerDeletingTask",
  path: "/ProcessVideoContainerDeletingTask",
  body: {
    messageType: PROCESS_VIDEO_CONTAINER_DELETING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_VIDEO_CONTAINER_DELETING_TASK_RESPONSE,
  },
}

export let LIST_VIDEO_CONTAINER_DELETING_TASKS: NodeRemoteCallDescriptor = {
  name: "ListVideoContainerDeletingTasks",
  path: "/ListVideoContainerDeletingTasks",
  body: {
    messageType: LIST_VIDEO_CONTAINER_DELETING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_VIDEO_CONTAINER_DELETING_TASKS_RESPONSE,
  },
}

export let CACHE_VIDEO_CONTAINER: NodeRemoteCallDescriptor = {
  name: "CacheVideoContainer",
  path: "/CacheVideoContainer",
  body: {
    messageType: CACHE_VIDEO_CONTAINER_REQUEST_BODY,
  },
  response: {
    messageType: CACHE_VIDEO_CONTAINER_RESPONSE,
  },
}
