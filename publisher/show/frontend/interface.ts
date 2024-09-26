import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { SeasonDetails, SEASON_DETAILS, EpisodeDraft, EPISODE_DRAFT, Episode, EPISODE } from './season_details';
import { SeasonState, SEASON_STATE } from '../season_state';
import { SeasonSummary, SEASON_SUMMARY } from './season_summary';
import { ResumableVideoUpload, RESUMABLE_VIDEO_UPLOAD } from '../resumable_video_upload';
import { WebRemoteCallDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';

export interface GetSeasonDetailsRequestBody {
  seasonId?: string,
}

export let GET_SEASON_DETAILS_REQUEST_BODY: MessageDescriptor<GetSeasonDetailsRequestBody> = {
  name: 'GetSeasonDetailsRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetSeasonDetailsResponse {
  seasonDetails?: SeasonDetails,
  drafts?: Array<EpisodeDraft>,
  episodes?: Array<Episode>,
  indexCursor?: number,
}

export let GET_SEASON_DETAILS_RESPONSE: MessageDescriptor<GetSeasonDetailsResponse> = {
  name: 'GetSeasonDetailsResponse',
  fields: [{
    name: 'seasonDetails',
    index: 1,
    messageType: SEASON_DETAILS,
  }, {
    name: 'drafts',
    index: 2,
    messageType: EPISODE_DRAFT,
    isArray: true,
  }, {
    name: 'episodes',
    index: 3,
    messageType: EPISODE,
    isArray: true,
  }, {
    name: 'indexCursor',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface CreateSeasonRequestBody {
  name?: string,
}

export let CREATE_SEASON_REQUEST_BODY: MessageDescriptor<CreateSeasonRequestBody> = {
  name: 'CreateSeasonRequestBody',
  fields: [{
    name: 'name',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CreateSeasonResponse {
  seasonId?: string,
}

export let CREATE_SEASON_RESPONSE: MessageDescriptor<CreateSeasonResponse> = {
  name: 'CreateSeasonResponse',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface UpdateSeasonRequestBody {
  seasonId?: string,
  name?: string,
  description?: string,
}

export let UPDATE_SEASON_REQUEST_BODY: MessageDescriptor<UpdateSeasonRequestBody> = {
  name: 'UpdateSeasonRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'description',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface UpdateSeasonResponse {
}

export let UPDATE_SEASON_RESPONSE: MessageDescriptor<UpdateSeasonResponse> = {
  name: 'UpdateSeasonResponse',
  fields: [],
};

export interface UploadCoverImageRequestMetadata {
  seasonId?: string,
}

export let UPLOAD_COVER_IMAGE_REQUEST_METADATA: MessageDescriptor<UploadCoverImageRequestMetadata> = {
  name: 'UploadCoverImageRequestMetadata',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface UploadCoverImageResponse {
}

export let UPLOAD_COVER_IMAGE_RESPONSE: MessageDescriptor<UploadCoverImageResponse> = {
  name: 'UploadCoverImageResponse',
  fields: [],
};

export interface UpdateSeasonGradeRequestBody {
  seasonId?: string,
  grade?: number,
  effectiveTimestamp?: number,
}

export let UPDATE_SEASON_GRADE_REQUEST_BODY: MessageDescriptor<UpdateSeasonGradeRequestBody> = {
  name: 'UpdateSeasonGradeRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'grade',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'effectiveTimestamp',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface UpdateSeasonGradeResponse {
}

export let UPDATE_SEASON_GRADE_RESPONSE: MessageDescriptor<UpdateSeasonGradeResponse> = {
  name: 'UpdateSeasonGradeResponse',
  fields: [],
};

export interface DeleteSeasonRequestBody {
  seasonId?: string,
}

export let DELETE_SEASON_REQUEST_BODY: MessageDescriptor<DeleteSeasonRequestBody> = {
  name: 'DeleteSeasonRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DeleteSeasonResponse {
}

export let DELETE_SEASON_RESPONSE: MessageDescriptor<DeleteSeasonResponse> = {
  name: 'DeleteSeasonResponse',
  fields: [],
};

export interface ArchiveSeasonRequestBody {
  seasonId?: string,
}

export let ARCHIVE_SEASON_REQUEST_BODY: MessageDescriptor<ArchiveSeasonRequestBody> = {
  name: 'ArchiveSeasonRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ArchiveSeasonResponse {
}

export let ARCHIVE_SEASON_RESPONSE: MessageDescriptor<ArchiveSeasonResponse> = {
  name: 'ArchiveSeasonResponse',
  fields: [],
};

export interface ListSeasonsRequestBody {
  state?: SeasonState,
  lastChangeTimeCursor?: number,
}

export let LIST_SEASONS_REQUEST_BODY: MessageDescriptor<ListSeasonsRequestBody> = {
  name: 'ListSeasonsRequestBody',
  fields: [{
    name: 'state',
    index: 1,
    enumType: SEASON_STATE,
  }, {
    name: 'lastChangeTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListSeasonsResponse {
  seasons?: Array<SeasonSummary>,
  lastChangeTimeCursor?: number,
}

export let LIST_SEASONS_RESPONSE: MessageDescriptor<ListSeasonsResponse> = {
  name: 'ListSeasonsResponse',
  fields: [{
    name: 'seasons',
    index: 1,
    messageType: SEASON_SUMMARY,
    isArray: true,
  }, {
    name: 'lastChangeTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface CreateEpisodeDraftRequestBody {
  seasonId?: string,
  episodeName?: string,
}

export let CREATE_EPISODE_DRAFT_REQUEST_BODY: MessageDescriptor<CreateEpisodeDraftRequestBody> = {
  name: 'CreateEpisodeDraftRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeName',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CreateEpisodeDraftResponse {
  draft?: EpisodeDraft,
}

export let CREATE_EPISODE_DRAFT_RESPONSE: MessageDescriptor<CreateEpisodeDraftResponse> = {
  name: 'CreateEpisodeDraftResponse',
  fields: [{
    name: 'draft',
    index: 1,
    messageType: EPISODE_DRAFT,
  }],
};

export interface UpdateEpisodeDraftRequestBody {
  seasonId?: string,
  episodeId?: string,
  name?: string,
}

export let UPDATE_EPISODE_DRAFT_REQUEST_BODY: MessageDescriptor<UpdateEpisodeDraftRequestBody> = {
  name: 'UpdateEpisodeDraftRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface UpdateEpisodeDraftResponse {
}

export let UPDATE_EPISODE_DRAFT_RESPONSE: MessageDescriptor<UpdateEpisodeDraftResponse> = {
  name: 'UpdateEpisodeDraftResponse',
  fields: [],
};

export interface UploadEpisodeVideoMetadata {
  seasonId?: string,
  episodeId?: string,
  resumableVideoUpload?: ResumableVideoUpload,
  videoLength?: number,
  videoContentType?: string,
}

export let UPLOAD_EPISODE_VIDEO_METADATA: MessageDescriptor<UploadEpisodeVideoMetadata> = {
  name: 'UploadEpisodeVideoMetadata',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'resumableVideoUpload',
    index: 3,
    messageType: RESUMABLE_VIDEO_UPLOAD,
  }, {
    name: 'videoLength',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'videoContentType',
    index: 5,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface UploadEpisodeVideoResponse {
  videoSize?: number,
  videoUploadedTimestamp?: number,
}

export let UPLOAD_EPISODE_VIDEO_RESPONSE: MessageDescriptor<UploadEpisodeVideoResponse> = {
  name: 'UploadEpisodeVideoResponse',
  fields: [{
    name: 'videoSize',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'videoUploadedTimestamp',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface DeleteEpisodeVideoRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let DELETE_EPISODE_VIDEO_REQUEST_BODY: MessageDescriptor<DeleteEpisodeVideoRequestBody> = {
  name: 'DeleteEpisodeVideoRequestBody',
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

export interface DeleteEpisodeVideoResponse {
}

export let DELETE_EPISODE_VIDEO_RESPONSE: MessageDescriptor<DeleteEpisodeVideoResponse> = {
  name: 'DeleteEpisodeVideoResponse',
  fields: [],
};

export interface DeleteEpisodeDraftRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let DELETE_EPISODE_DRAFT_REQUEST_BODY: MessageDescriptor<DeleteEpisodeDraftRequestBody> = {
  name: 'DeleteEpisodeDraftRequestBody',
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

export interface DeleteEpisodeDraftResponse {
}

export let DELETE_EPISODE_DRAFT_RESPONSE: MessageDescriptor<DeleteEpisodeDraftResponse> = {
  name: 'DeleteEpisodeDraftResponse',
  fields: [],
};

export interface GetMoreEpisodesRequestBody {
  seasonId?: string,
  indexCursor?: number,
}

export let GET_MORE_EPISODES_REQUEST_BODY: MessageDescriptor<GetMoreEpisodesRequestBody> = {
  name: 'GetMoreEpisodesRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'indexCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GetMoreEpisodesResponse {
  episodes?: Array<Episode>,
  indexCursor?: number,
}

export let GET_MORE_EPISODES_RESPONSE: MessageDescriptor<GetMoreEpisodesResponse> = {
  name: 'GetMoreEpisodesResponse',
  fields: [{
    name: 'episodes',
    index: 1,
    messageType: EPISODE,
    isArray: true,
  }, {
    name: 'indexCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface PublishEpisodeRequestBody {
  seasonId?: string,
  episodeId?: string,
  premierTimestamp?: number,
}

export let PUBLISH_EPISODE_REQUEST_BODY: MessageDescriptor<PublishEpisodeRequestBody> = {
  name: 'PublishEpisodeRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'premierTimestamp',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface PublishEpisodeResponse {
  episode?: Episode,
}

export let PUBLISH_EPISODE_RESPONSE: MessageDescriptor<PublishEpisodeResponse> = {
  name: 'PublishEpisodeResponse',
  fields: [{
    name: 'episode',
    index: 1,
    messageType: EPISODE,
  }],
};

export interface UpdateEpisodeOrderRequestBody {
  seasonId?: string,
  episodeId?: string,
  toIndex?: number,
}

export let UPDATE_EPISODE_ORDER_REQUEST_BODY: MessageDescriptor<UpdateEpisodeOrderRequestBody> = {
  name: 'UpdateEpisodeOrderRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'toIndex',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface UpdateEpisodeOrderResponse {
}

export let UPDATE_EPISODE_ORDER_RESPONSE: MessageDescriptor<UpdateEpisodeOrderResponse> = {
  name: 'UpdateEpisodeOrderResponse',
  fields: [],
};

export interface DeleteEpisodeRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let DELETE_EPISODE_REQUEST_BODY: MessageDescriptor<DeleteEpisodeRequestBody> = {
  name: 'DeleteEpisodeRequestBody',
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

export interface DeleteEpisodeResponse {
}

export let DELETE_EPISODE_RESPONSE: MessageDescriptor<DeleteEpisodeResponse> = {
  name: 'DeleteEpisodeResponse',
  fields: [],
};

export let GET_SEASON_DETAILS: WebRemoteCallDescriptor = {
  name: "GetSeasonDetails",
  path: "/GetSeasonDetails",
  body: {
    messageType: GET_SEASON_DETAILS_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: GET_SEASON_DETAILS_RESPONSE,
  },
}

export let CREATE_SEASON: WebRemoteCallDescriptor = {
  name: "CreateSeason",
  path: "/CreateSeason",
  body: {
    messageType: CREATE_SEASON_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: CREATE_SEASON_RESPONSE,
  },
}

export let UPDATE_SEASON: WebRemoteCallDescriptor = {
  name: "UpdateSeason",
  path: "/UpdateSeason",
  body: {
    messageType: UPDATE_SEASON_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: UPDATE_SEASON_RESPONSE,
  },
}

export let UPLOAD_COVER_IMAGE: WebRemoteCallDescriptor = {
  name: "UploadCoverImage",
  path: "/UploadCoverImage",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  metadata: {
    key: "mt",
    type: UPLOAD_COVER_IMAGE_REQUEST_METADATA,
  },
  sessionKey: "sk",
  response: {
    messageType: UPLOAD_COVER_IMAGE_RESPONSE,
  },
}

export let UPDATE_SEASON_GRADE: WebRemoteCallDescriptor = {
  name: "UpdateSeasonGrade",
  path: "/UpdateSeasonGrade",
  body: {
    messageType: UPDATE_SEASON_GRADE_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: UPDATE_SEASON_GRADE_RESPONSE,
  },
}

export let DELETE_SEASON: WebRemoteCallDescriptor = {
  name: "DeleteSeason",
  path: "/DeleteSeason",
  body: {
    messageType: DELETE_SEASON_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: DELETE_SEASON_RESPONSE,
  },
}

export let ARCHIVE_SEASON: WebRemoteCallDescriptor = {
  name: "ArchiveSeason",
  path: "/ArchiveSeason",
  body: {
    messageType: ARCHIVE_SEASON_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: ARCHIVE_SEASON_RESPONSE,
  },
}

export let LIST_SEASONS: WebRemoteCallDescriptor = {
  name: "ListSeasons",
  path: "/ListSeasons",
  body: {
    messageType: LIST_SEASONS_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: LIST_SEASONS_RESPONSE,
  },
}

export let CREATE_EPISODE_DRAFT: WebRemoteCallDescriptor = {
  name: "CreateEpisodeDraft",
  path: "/CreateEpisodeDraft",
  body: {
    messageType: CREATE_EPISODE_DRAFT_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: CREATE_EPISODE_DRAFT_RESPONSE,
  },
}

export let UPDATE_EPISODE_DRAFT: WebRemoteCallDescriptor = {
  name: "UpdateEpisodeDraft",
  path: "/UpdateEpisodeDraft",
  body: {
    messageType: UPDATE_EPISODE_DRAFT_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: UPDATE_EPISODE_DRAFT_RESPONSE,
  },
}

export let UPLOAD_EPISODE_VIDEO: WebRemoteCallDescriptor = {
  name: "UploadEpisodeVideo",
  path: "/UploadEpisodeVideo",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  metadata: {
    key: "mt",
    type: UPLOAD_EPISODE_VIDEO_METADATA,
  },
  sessionKey: "sk",
  response: {
    messageType: UPLOAD_EPISODE_VIDEO_RESPONSE,
  },
}

export let DELETE_EPISODE_VIDEO: WebRemoteCallDescriptor = {
  name: "DeleteEpisodeVideo",
  path: "/DeleteEpisodeVideo",
  body: {
    messageType: DELETE_EPISODE_VIDEO_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: DELETE_EPISODE_VIDEO_RESPONSE,
  },
}

export let DELETE_EPISODE_DRAFT: WebRemoteCallDescriptor = {
  name: "DeleteEpisodeDraft",
  path: "/DeleteEpisodeDraft",
  body: {
    messageType: DELETE_EPISODE_DRAFT_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: DELETE_EPISODE_DRAFT_RESPONSE,
  },
}

export let GET_MORE_EPISODES: WebRemoteCallDescriptor = {
  name: "GetMoreEpisodes",
  path: "/GetMoreEpisodes",
  body: {
    messageType: GET_MORE_EPISODES_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: GET_MORE_EPISODES_RESPONSE,
  },
}

export let PUBLISH_EPISODE: WebRemoteCallDescriptor = {
  name: "PublishEpisode",
  path: "/PublishEpisode",
  body: {
    messageType: PUBLISH_EPISODE_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: PUBLISH_EPISODE_RESPONSE,
  },
}

export let UPDATE_EPISODE_ORDER: WebRemoteCallDescriptor = {
  name: "UpdateEpisodeOrder",
  path: "/UpdateEpisodeOrder",
  body: {
    messageType: UPDATE_EPISODE_ORDER_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: UPDATE_EPISODE_ORDER_RESPONSE,
  },
}

export let DELETE_EPISODE: WebRemoteCallDescriptor = {
  name: "DeleteEpisode",
  path: "/DeleteEpisode",
  body: {
    messageType: DELETE_EPISODE_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: DELETE_EPISODE_RESPONSE,
  },
}
