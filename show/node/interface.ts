import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { VideoContainer, VIDEO_CONTAINER } from '../video_container';
import { PRODUCT_NODE_SERVICE } from '../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

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

export interface CacheVideoContainerRequestBody {
  seasonId?: string,
  episodeId?: string,
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
    name: 'videoContainer',
    index: 3,
    messageType: VIDEO_CONTAINER,
  }],
};

export interface CacheVideoContainerResponse {
}

export let CACHE_VIDEO_CONTAINER_RESPONSE: MessageDescriptor<CacheVideoContainerResponse> = {
  name: 'CacheVideoContainerResponse',
  fields: [],
};

export interface CheckPresenceOfSeasonRequestBody {
  seasonId?: string,
}

export let CHECK_PRESENCE_OF_SEASON_REQUEST_BODY: MessageDescriptor<CheckPresenceOfSeasonRequestBody> = {
  name: 'CheckPresenceOfSeasonRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CheckPresenceOfSeasonResponse {
  present?: boolean,
}

export let CHECK_PRESENCE_OF_SEASON_RESPONSE: MessageDescriptor<CheckPresenceOfSeasonResponse> = {
  name: 'CheckPresenceOfSeasonResponse',
  fields: [{
    name: 'present',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface CheckPresenceOfEpisodeRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let CHECK_PRESENCE_OF_EPISODE_REQUEST_BODY: MessageDescriptor<CheckPresenceOfEpisodeRequestBody> = {
  name: 'CheckPresenceOfEpisodeRequestBody',
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

export interface CheckPresenceOfEpisodeResponse {
  present?: boolean,
}

export let CHECK_PRESENCE_OF_EPISODE_RESPONSE: MessageDescriptor<CheckPresenceOfEpisodeResponse> = {
  name: 'CheckPresenceOfEpisodeResponse',
  fields: [{
    name: 'present',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
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

export interface ProcessCoverImageDeletingTaskRequestBody {
  r2Filename?: string,
}

export let PROCESS_COVER_IMAGE_DELETING_TASK_REQUEST_BODY: MessageDescriptor<ProcessCoverImageDeletingTaskRequestBody> = {
  name: 'ProcessCoverImageDeletingTaskRequestBody',
  fields: [{
    name: 'r2Filename',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessCoverImageDeletingTaskResponse {
}

export let PROCESS_COVER_IMAGE_DELETING_TASK_RESPONSE: MessageDescriptor<ProcessCoverImageDeletingTaskResponse> = {
  name: 'ProcessCoverImageDeletingTaskResponse',
  fields: [],
};

export interface ListCoverImageDeletingTasksRequestBody {
}

export let LIST_COVER_IMAGE_DELETING_TASKS_REQUEST_BODY: MessageDescriptor<ListCoverImageDeletingTasksRequestBody> = {
  name: 'ListCoverImageDeletingTasksRequestBody',
  fields: [],
};

export interface ListCoverImageDeletingTasksResponse {
  tasks?: Array<ProcessCoverImageDeletingTaskRequestBody>,
}

export let LIST_COVER_IMAGE_DELETING_TASKS_RESPONSE: MessageDescriptor<ListCoverImageDeletingTasksResponse> = {
  name: 'ListCoverImageDeletingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_COVER_IMAGE_DELETING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessSeasonRecentPremiereTimeUpdatingTaskRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let PROCESS_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASK_REQUEST_BODY: MessageDescriptor<ProcessSeasonRecentPremiereTimeUpdatingTaskRequestBody> = {
  name: 'ProcessSeasonRecentPremiereTimeUpdatingTaskRequestBody',
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

export interface ProcessSeasonRecentPremiereTimeUpdatingTaskResponse {
}

export let PROCESS_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASK_RESPONSE: MessageDescriptor<ProcessSeasonRecentPremiereTimeUpdatingTaskResponse> = {
  name: 'ProcessSeasonRecentPremiereTimeUpdatingTaskResponse',
  fields: [],
};

export interface ListSeasonRecentPremiereTimeUpdatingTasksRequestBody {
}

export let LIST_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASKS_REQUEST_BODY: MessageDescriptor<ListSeasonRecentPremiereTimeUpdatingTasksRequestBody> = {
  name: 'ListSeasonRecentPremiereTimeUpdatingTasksRequestBody',
  fields: [],
};

export interface ListSeasonRecentPremiereTimeUpdatingTasksResponse {
  tasks?: Array<ProcessSeasonRecentPremiereTimeUpdatingTaskRequestBody>,
}

export let LIST_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASKS_RESPONSE: MessageDescriptor<ListSeasonRecentPremiereTimeUpdatingTasksResponse> = {
  name: 'ListSeasonRecentPremiereTimeUpdatingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export let GET_SEASON_PUBLISHER: RemoteCallDescriptor = {
  name: "GetSeasonPublisher",
  service: PRODUCT_NODE_SERVICE,
  path: "/GetSeasonPublisher",
  body: {
    messageType: GET_SEASON_PUBLISHER_REQUEST_BODY,
  },
  response: {
    messageType: GET_SEASON_PUBLISHER_RESPONSE,
  },
}

export let GET_SEASON_GRADE: RemoteCallDescriptor = {
  name: "GetSeasonGrade",
  service: PRODUCT_NODE_SERVICE,
  path: "/GetSeasonGrade",
  body: {
    messageType: GET_SEASON_GRADE_REQUEST_BODY,
  },
  response: {
    messageType: GET_SEASON_GRADE_RESPONSE,
  },
}

export let CACHE_VIDEO_CONTAINER: RemoteCallDescriptor = {
  name: "CacheVideoContainer",
  service: PRODUCT_NODE_SERVICE,
  path: "/CacheVideoContainer",
  body: {
    messageType: CACHE_VIDEO_CONTAINER_REQUEST_BODY,
  },
  response: {
    messageType: CACHE_VIDEO_CONTAINER_RESPONSE,
  },
}

export let CHECK_PRESENCE_OF_SEASON: RemoteCallDescriptor = {
  name: "CheckPresenceOfSeason",
  service: PRODUCT_NODE_SERVICE,
  path: "/CheckPresenceOfSeason",
  body: {
    messageType: CHECK_PRESENCE_OF_SEASON_REQUEST_BODY,
  },
  response: {
    messageType: CHECK_PRESENCE_OF_SEASON_RESPONSE,
  },
}

export let CHECK_PRESENCE_OF_EPISODE: RemoteCallDescriptor = {
  name: "CheckPresenceOfEpisode",
  service: PRODUCT_NODE_SERVICE,
  path: "/CheckPresenceOfEpisode",
  body: {
    messageType: CHECK_PRESENCE_OF_EPISODE_REQUEST_BODY,
  },
  response: {
    messageType: CHECK_PRESENCE_OF_EPISODE_RESPONSE,
  },
}

export let PROCESS_VIDEO_CONTAINER_CREATING_TASK: RemoteCallDescriptor = {
  name: "ProcessVideoContainerCreatingTask",
  service: PRODUCT_NODE_SERVICE,
  path: "/ProcessVideoContainerCreatingTask",
  body: {
    messageType: PROCESS_VIDEO_CONTAINER_CREATING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_VIDEO_CONTAINER_CREATING_TASK_RESPONSE,
  },
}

export let LIST_VIDEO_CONTAINER_CREATING_TASKS: RemoteCallDescriptor = {
  name: "ListVideoContainerCreatingTasks",
  service: PRODUCT_NODE_SERVICE,
  path: "/ListVideoContainerCreatingTasks",
  body: {
    messageType: LIST_VIDEO_CONTAINER_CREATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_VIDEO_CONTAINER_CREATING_TASKS_RESPONSE,
  },
}

export let PROCESS_VIDEO_CONTAINER_DELETING_TASK: RemoteCallDescriptor = {
  name: "ProcessVideoContainerDeletingTask",
  service: PRODUCT_NODE_SERVICE,
  path: "/ProcessVideoContainerDeletingTask",
  body: {
    messageType: PROCESS_VIDEO_CONTAINER_DELETING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_VIDEO_CONTAINER_DELETING_TASK_RESPONSE,
  },
}

export let LIST_VIDEO_CONTAINER_DELETING_TASKS: RemoteCallDescriptor = {
  name: "ListVideoContainerDeletingTasks",
  service: PRODUCT_NODE_SERVICE,
  path: "/ListVideoContainerDeletingTasks",
  body: {
    messageType: LIST_VIDEO_CONTAINER_DELETING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_VIDEO_CONTAINER_DELETING_TASKS_RESPONSE,
  },
}

export let PROCESS_COVER_IMAGE_DELETING_TASK: RemoteCallDescriptor = {
  name: "ProcessCoverImageDeletingTask",
  service: PRODUCT_NODE_SERVICE,
  path: "/ProcessCoverImageDeletingTask",
  body: {
    messageType: PROCESS_COVER_IMAGE_DELETING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_COVER_IMAGE_DELETING_TASK_RESPONSE,
  },
}

export let LIST_COVER_IMAGE_DELETING_TASKS: RemoteCallDescriptor = {
  name: "ListCoverImageDeletingTasks",
  service: PRODUCT_NODE_SERVICE,
  path: "/ListCoverImageDeletingTasks",
  body: {
    messageType: LIST_COVER_IMAGE_DELETING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_COVER_IMAGE_DELETING_TASKS_RESPONSE,
  },
}

export let PROCESS_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASK: RemoteCallDescriptor = {
  name: "ProcessSeasonRecentPremiereTimeUpdatingTask",
  service: PRODUCT_NODE_SERVICE,
  path: "/ProcessSeasonRecentPremiereTimeUpdatingTask",
  body: {
    messageType: PROCESS_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASK_RESPONSE,
  },
}

export let LIST_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASKS: RemoteCallDescriptor = {
  name: "ListSeasonRecentPremiereTimeUpdatingTasks",
  service: PRODUCT_NODE_SERVICE,
  path: "/ListSeasonRecentPremiereTimeUpdatingTasks",
  body: {
    messageType: LIST_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASKS_RESPONSE,
  },
}
