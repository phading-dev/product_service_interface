import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { VideoContainerCached, VIDEO_CONTAINER_CACHED } from '../video_container_cached';
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
  videoContainerCached?: VideoContainerCached,
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
    name: 'videoContainerCached',
    index: 3,
    messageType: VIDEO_CONTAINER_CACHED,
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
  premiereTimeMs?: number,
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
  }, {
    name: 'premiereTimeMs',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
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

export interface AdminTakeDownSeasonRequestBody {
  seasonId?: string,
  reason?: string,
}

export let ADMIN_TAKE_DOWN_SEASON_REQUEST_BODY: MessageDescriptor<AdminTakeDownSeasonRequestBody> = {
  name: 'AdminTakeDownSeasonRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'reason',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface AdminTakeDownSeasonResponse {
}

export let ADMIN_TAKE_DOWN_SEASON_RESPONSE: MessageDescriptor<AdminTakeDownSeasonResponse> = {
  name: 'AdminTakeDownSeasonResponse',
  fields: [],
};

export interface AdminRestoreSeasonRequestBody {
  seasonId?: string,
}

export let ADMIN_RESTORE_SEASON_REQUEST_BODY: MessageDescriptor<AdminRestoreSeasonRequestBody> = {
  name: 'AdminRestoreSeasonRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface AdminRestoreSeasonResponse {
}

export let ADMIN_RESTORE_SEASON_RESPONSE: MessageDescriptor<AdminRestoreSeasonResponse> = {
  name: 'AdminRestoreSeasonResponse',
  fields: [],
};

export let GET_SEASON_PUBLISHER: RemoteCallDescriptor = {
  name: "GetSeasonPublisher",
  service: PRODUCT_NODE_SERVICE,
  path: "/s/GetSeasonPublisher",
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
  path: "/s/GetSeasonGrade",
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
  path: "/s/CacheVideoContainer",
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
  path: "/s/CheckPresenceOfSeason",
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
  path: "/s/CheckPresenceOfEpisode",
  body: {
    messageType: CHECK_PRESENCE_OF_EPISODE_REQUEST_BODY,
  },
  response: {
    messageType: CHECK_PRESENCE_OF_EPISODE_RESPONSE,
  },
}

export let PROCESS_VIDEO_CONTAINER_DELETING_TASK: RemoteCallDescriptor = {
  name: "ProcessVideoContainerDeletingTask",
  service: PRODUCT_NODE_SERVICE,
  path: "/s/ProcessVideoContainerDeletingTask",
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
  path: "/s/ListVideoContainerDeletingTasks",
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
  path: "/s/ProcessCoverImageDeletingTask",
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
  path: "/s/ListCoverImageDeletingTasks",
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
  path: "/s/ProcessSeasonRecentPremiereTimeUpdatingTask",
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
  path: "/s/ListSeasonRecentPremiereTimeUpdatingTasks",
  body: {
    messageType: LIST_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_SEASON_RECENT_PREMIERE_TIME_UPDATING_TASKS_RESPONSE,
  },
}

export let ADMIN_TAKE_DOWN_SEASON: RemoteCallDescriptor = {
  name: "AdminTakeDownSeason",
  service: PRODUCT_NODE_SERVICE,
  path: "/s/AdminTakeDownSeason",
  body: {
    messageType: ADMIN_TAKE_DOWN_SEASON_REQUEST_BODY,
  },
  response: {
    messageType: ADMIN_TAKE_DOWN_SEASON_RESPONSE,
  },
}

export let ADMIN_RESTORE_SEASON: RemoteCallDescriptor = {
  name: "AdminRestoreSeason",
  service: PRODUCT_NODE_SERVICE,
  path: "/s/AdminRestoreSeason",
  body: {
    messageType: ADMIN_RESTORE_SEASON_REQUEST_BODY,
  },
  response: {
    messageType: ADMIN_RESTORE_SEASON_RESPONSE,
  },
}
