import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { SeasonDetails, SEASON_DETAILS, EpisodeDetails, EPISODE_DETAILS } from './details';
import { SeasonState, SEASON_STATE } from '../../season_state';
import { SeasonSummary, SEASON_SUMMARY, EpisodeSummary, EPISODE_SUMMARY } from './summary';
import { VideoContainerStagingData, VIDEO_CONTAINER_STAGING_DATA } from '@phading/video_service_interface/node/video_container_staging_data';
import { ValidationError, VALIDATION_ERROR } from '@phading/video_service_interface/node/validation_error';
import { PRODUCT_WEB_SERVICE } from '../../../service';
import { RemoteCallDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';

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
  seasonDetails?: SeasonDetails,
}

export let GET_SEASON_RESPONSE: MessageDescriptor<GetSeasonResponse> = {
  name: 'GetSeasonResponse',
  fields: [{
    name: 'seasonDetails',
    index: 1,
    messageType: SEASON_DETAILS,
  }],
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
  }],
};

export interface UpdateSeasonGradeResponse {
}

export let UPDATE_SEASON_GRADE_RESPONSE: MessageDescriptor<UpdateSeasonGradeResponse> = {
  name: 'UpdateSeasonGradeResponse',
  fields: [],
};

export interface UpdateNextSeasonGradeRequestBody {
  seasonId?: string,
  grade?: number,
  effectiveDate?: string,
}

export let UPDATE_NEXT_SEASON_GRADE_REQUEST_BODY: MessageDescriptor<UpdateNextSeasonGradeRequestBody> = {
  name: 'UpdateNextSeasonGradeRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'grade',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'effectiveDate',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface UpdateNextSeasonGradeResponse {
}

export let UPDATE_NEXT_SEASON_GRADE_RESPONSE: MessageDescriptor<UpdateNextSeasonGradeResponse> = {
  name: 'UpdateNextSeasonGradeResponse',
  fields: [],
};

export interface DeleteNextSeasonGradeRequestBody {
  seasonId?: string,
}

export let DELETE_NEXT_SEASON_GRADE_REQUEST_BODY: MessageDescriptor<DeleteNextSeasonGradeRequestBody> = {
  name: 'DeleteNextSeasonGradeRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DeleteNextSeasonGradeResponse {
}

export let DELETE_NEXT_SEASON_GRADE_RESPONSE: MessageDescriptor<DeleteNextSeasonGradeResponse> = {
  name: 'DeleteNextSeasonGradeResponse',
  fields: [],
};

export interface ListSeasonsRequestBody {
  state?: SeasonState,
  lastChangeTimeCursor?: number,
  limit?: number,
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
  }, {
    name: 'limit',
    index: 3,
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

export interface SearchSeasonsRequestBody {
  state?: SeasonState,
  query?: string,
  limit?: number,
  scoreCursor?: number,
  createdTimeCursor?: number,
}

export let SEARCH_SEASONS_REQUEST_BODY: MessageDescriptor<SearchSeasonsRequestBody> = {
  name: 'SearchSeasonsRequestBody',
  fields: [{
    name: 'state',
    index: 1,
    enumType: SEASON_STATE,
  }, {
    name: 'query',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'limit',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'scoreCursor',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'createdTimeCursor',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SearchSeasonsResponse {
  seasons?: Array<SeasonSummary>,
  scoreCursor?: number,
  createdTimeCursor?: number,
}

export let SEARCH_SEASONS_RESPONSE: MessageDescriptor<SearchSeasonsResponse> = {
  name: 'SearchSeasonsResponse',
  fields: [{
    name: 'seasons',
    index: 1,
    messageType: SEASON_SUMMARY,
    isArray: true,
  }, {
    name: 'scoreCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'createdTimeCursor',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface CreateEpisodeRequestBody {
  seasonId?: string,
  episodeName?: string,
}

export let CREATE_EPISODE_REQUEST_BODY: MessageDescriptor<CreateEpisodeRequestBody> = {
  name: 'CreateEpisodeRequestBody',
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

export interface CreateEpisodeResponse {
  episodeId?: string,
}

export let CREATE_EPISODE_RESPONSE: MessageDescriptor<CreateEpisodeResponse> = {
  name: 'CreateEpisodeResponse',
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
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

export interface GetEpisodeRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let GET_EPISODE_REQUEST_BODY: MessageDescriptor<GetEpisodeRequestBody> = {
  name: 'GetEpisodeRequestBody',
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

export interface GetEpisodeResponse {
  episode?: EpisodeDetails,
}

export let GET_EPISODE_RESPONSE: MessageDescriptor<GetEpisodeResponse> = {
  name: 'GetEpisodeResponse',
  fields: [{
    name: 'episode',
    index: 1,
    messageType: EPISODE_DETAILS,
  }],
};

export interface UpdateEpisodeNameRequestBody {
  seasonId?: string,
  episodeId?: string,
  name?: string,
}

export let UPDATE_EPISODE_NAME_REQUEST_BODY: MessageDescriptor<UpdateEpisodeNameRequestBody> = {
  name: 'UpdateEpisodeNameRequestBody',
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

export interface UpdateEpisodeNameResponse {
}

export let UPDATE_EPISODE_NAME_RESPONSE: MessageDescriptor<UpdateEpisodeNameResponse> = {
  name: 'UpdateEpisodeNameResponse',
  fields: [],
};

export interface UpdateEpisodePremiereTimeRequestBody {
  seasonId?: string,
  episodeId?: string,
  premiereTimeMs?: number,
}

export let UPDATE_EPISODE_PREMIERE_TIME_REQUEST_BODY: MessageDescriptor<UpdateEpisodePremiereTimeRequestBody> = {
  name: 'UpdateEpisodePremiereTimeRequestBody',
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

export interface UpdateEpisodePremiereTimeResponse {
}

export let UPDATE_EPISODE_PREMIERE_TIME_RESPONSE: MessageDescriptor<UpdateEpisodePremiereTimeResponse> = {
  name: 'UpdateEpisodePremiereTimeResponse',
  fields: [],
};

export interface UpdateEpisodeIndexRequestBody {
  seasonId?: string,
  episodeId?: string,
  toIndex?: number,
}

export let UPDATE_EPISODE_INDEX_REQUEST_BODY: MessageDescriptor<UpdateEpisodeIndexRequestBody> = {
  name: 'UpdateEpisodeIndexRequestBody',
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

export interface UpdateEpisodeIndexResponse {
}

export let UPDATE_EPISODE_INDEX_RESPONSE: MessageDescriptor<UpdateEpisodeIndexResponse> = {
  name: 'UpdateEpisodeIndexResponse',
  fields: [],
};

export interface PublishEpisodeRequestBody {
  seasonId?: string,
  episodeId?: string,
  premiereTimeMs?: number,
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
    name: 'premiereTimeMs',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface PublishEpisodeResponse {
}

export let PUBLISH_EPISODE_RESPONSE: MessageDescriptor<PublishEpisodeResponse> = {
  name: 'PublishEpisodeResponse',
  fields: [],
};

export interface UnpublishEpisodeRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let UNPUBLISH_EPISODE_REQUEST_BODY: MessageDescriptor<UnpublishEpisodeRequestBody> = {
  name: 'UnpublishEpisodeRequestBody',
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

export interface UnpublishEpisodeResponse {
}

export let UNPUBLISH_EPISODE_RESPONSE: MessageDescriptor<UnpublishEpisodeResponse> = {
  name: 'UnpublishEpisodeResponse',
  fields: [],
};

export interface ListDraftEpisodesRequestBody {
  seasonId?: string,
}

export let LIST_DRAFT_EPISODES_REQUEST_BODY: MessageDescriptor<ListDraftEpisodesRequestBody> = {
  name: 'ListDraftEpisodesRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ListDraftEpisodesResponse {
  episodes?: Array<EpisodeSummary>,
}

export let LIST_DRAFT_EPISODES_RESPONSE: MessageDescriptor<ListDraftEpisodesResponse> = {
  name: 'ListDraftEpisodesResponse',
  fields: [{
    name: 'episodes',
    index: 1,
    messageType: EPISODE_SUMMARY,
    isArray: true,
  }],
};

export interface ListPublishedEpisodesRequestBody {
  seasonId?: string,
  indexCursor?: number,
  next?: boolean,
  limit?: number,
}

export let LIST_PUBLISHED_EPISODES_REQUEST_BODY: MessageDescriptor<ListPublishedEpisodesRequestBody> = {
  name: 'ListPublishedEpisodesRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'indexCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'next',
    index: 3,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'limit',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListPublishedEpisodesResponse {
  episodes?: Array<EpisodeSummary>,
  indexCursor?: number,
}

export let LIST_PUBLISHED_EPISODES_RESPONSE: MessageDescriptor<ListPublishedEpisodesResponse> = {
  name: 'ListPublishedEpisodesResponse',
  fields: [{
    name: 'episodes',
    index: 1,
    messageType: EPISODE_SUMMARY,
    isArray: true,
  }, {
    name: 'indexCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface StartUploadingRequestBody {
  seasonId?: string,
  episodeId?: string,
  contentLength?: number,
  fileExt?: string,
  md5?: string,
}

export let START_UPLOADING_REQUEST_BODY: MessageDescriptor<StartUploadingRequestBody> = {
  name: 'StartUploadingRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'contentLength',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'fileExt',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'md5',
    index: 5,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface StartUploadingResponse {
  uploadSessionUrl?: string,
  byteOffset?: number,
}

export let START_UPLOADING_RESPONSE: MessageDescriptor<StartUploadingResponse> = {
  name: 'StartUploadingResponse',
  fields: [{
    name: 'uploadSessionUrl',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'byteOffset',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface CompleteUploadingRequestBody {
  seasonId?: string,
  episodeId?: string,
  uploadSessionUrl?: string,
}

export let COMPLETE_UPLOADING_REQUEST_BODY: MessageDescriptor<CompleteUploadingRequestBody> = {
  name: 'CompleteUploadingRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'uploadSessionUrl',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CompleteUploadingResponse {
}

export let COMPLETE_UPLOADING_RESPONSE: MessageDescriptor<CompleteUploadingResponse> = {
  name: 'CompleteUploadingResponse',
  fields: [],
};

export interface CancelUploadingRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let CANCEL_UPLOADING_REQUEST_BODY: MessageDescriptor<CancelUploadingRequestBody> = {
  name: 'CancelUploadingRequestBody',
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

export interface CancelUploadingResponse {
}

export let CANCEL_UPLOADING_RESPONSE: MessageDescriptor<CancelUploadingResponse> = {
  name: 'CancelUploadingResponse',
  fields: [],
};

export interface SaveEpisodeStagingDataRequestBody {
  seasonId?: string,
  episodeId?: string,
  videoContainer?: VideoContainerStagingData,
}

export let SAVE_EPISODE_STAGING_DATA_REQUEST_BODY: MessageDescriptor<SaveEpisodeStagingDataRequestBody> = {
  name: 'SaveEpisodeStagingDataRequestBody',
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
    messageType: VIDEO_CONTAINER_STAGING_DATA,
  }],
};

export interface SaveEpisodeStagingDataResponse {
  error?: ValidationError,
}

export let SAVE_EPISODE_STAGING_DATA_RESPONSE: MessageDescriptor<SaveEpisodeStagingDataResponse> = {
  name: 'SaveEpisodeStagingDataResponse',
  fields: [{
    name: 'error',
    index: 1,
    enumType: VALIDATION_ERROR,
  }],
};

export interface CommitEpisodeStagingDataRequestBody {
  seasonId?: string,
  episodeId?: string,
  videoContainer?: VideoContainerStagingData,
}

export let COMMIT_EPISODE_STAGING_DATA_REQUEST_BODY: MessageDescriptor<CommitEpisodeStagingDataRequestBody> = {
  name: 'CommitEpisodeStagingDataRequestBody',
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
    messageType: VIDEO_CONTAINER_STAGING_DATA,
  }],
};

export interface CommitEpisodeStagingDataResponse {
  error?: ValidationError,
}

export let COMMIT_EPISODE_STAGING_DATA_RESPONSE: MessageDescriptor<CommitEpisodeStagingDataResponse> = {
  name: 'CommitEpisodeStagingDataResponse',
  fields: [{
    name: 'error',
    index: 1,
    enumType: VALIDATION_ERROR,
  }],
};

export let GET_SEASON: RemoteCallDescriptor = {
  name: "GetSeason",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/GetSeason",
  body: {
    messageType: GET_SEASON_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_SEASON_RESPONSE,
  },
}

export let CREATE_SEASON: RemoteCallDescriptor = {
  name: "CreateSeason",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/CreateSeason",
  body: {
    messageType: CREATE_SEASON_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: CREATE_SEASON_RESPONSE,
  },
}

export let DELETE_SEASON: RemoteCallDescriptor = {
  name: "DeleteSeason",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/DeleteSeason",
  body: {
    messageType: DELETE_SEASON_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: DELETE_SEASON_RESPONSE,
  },
}

export let ARCHIVE_SEASON: RemoteCallDescriptor = {
  name: "ArchiveSeason",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/ArchiveSeason",
  body: {
    messageType: ARCHIVE_SEASON_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: ARCHIVE_SEASON_RESPONSE,
  },
}

export let UPDATE_SEASON: RemoteCallDescriptor = {
  name: "UpdateSeason",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/UpdateSeason",
  body: {
    messageType: UPDATE_SEASON_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: UPDATE_SEASON_RESPONSE,
  },
}

export let UPLOAD_COVER_IMAGE: RemoteCallDescriptor = {
  name: "UploadCoverImage",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/UploadCoverImage",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  metadata: {
    key: "mt",
    type: UPLOAD_COVER_IMAGE_REQUEST_METADATA,
  },
  authKey: "a",
  response: {
    messageType: UPLOAD_COVER_IMAGE_RESPONSE,
  },
}

export let UPDATE_SEASON_GRADE: RemoteCallDescriptor = {
  name: "UpdateSeasonGrade",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/UpdateSeasonGrade",
  body: {
    messageType: UPDATE_SEASON_GRADE_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: UPDATE_SEASON_GRADE_RESPONSE,
  },
}

export let UPDATE_NEXT_SEASON_GRADE: RemoteCallDescriptor = {
  name: "UpdateNextSeasonGrade",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/UpdateNextSeasonGrade",
  body: {
    messageType: UPDATE_NEXT_SEASON_GRADE_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: UPDATE_NEXT_SEASON_GRADE_RESPONSE,
  },
}

export let DELETE_NEXT_SEASON_GRADE: RemoteCallDescriptor = {
  name: "DeleteNextSeasonGrade",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/DeleteNextSeasonGrade",
  body: {
    messageType: DELETE_NEXT_SEASON_GRADE_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: DELETE_NEXT_SEASON_GRADE_RESPONSE,
  },
}

export let LIST_SEASONS: RemoteCallDescriptor = {
  name: "ListSeasons",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/ListSeasons",
  body: {
    messageType: LIST_SEASONS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_SEASONS_RESPONSE,
  },
}

export let SEARCH_SEASONS: RemoteCallDescriptor = {
  name: "SearchSeasons",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/SearchSeasons",
  body: {
    messageType: SEARCH_SEASONS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: SEARCH_SEASONS_RESPONSE,
  },
}

export let CREATE_EPISODE: RemoteCallDescriptor = {
  name: "CreateEpisode",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/CreateEpisode",
  body: {
    messageType: CREATE_EPISODE_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: CREATE_EPISODE_RESPONSE,
  },
}

export let DELETE_EPISODE: RemoteCallDescriptor = {
  name: "DeleteEpisode",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/DeleteEpisode",
  body: {
    messageType: DELETE_EPISODE_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: DELETE_EPISODE_RESPONSE,
  },
}

export let GET_EPISODE: RemoteCallDescriptor = {
  name: "GetEpisode",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/GetEpisode",
  body: {
    messageType: GET_EPISODE_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_EPISODE_RESPONSE,
  },
}

export let UPDATE_EPISODE_NAME: RemoteCallDescriptor = {
  name: "UpdateEpisodeName",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/UpdateEpisodeName",
  body: {
    messageType: UPDATE_EPISODE_NAME_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: UPDATE_EPISODE_NAME_RESPONSE,
  },
}

export let UPDATE_EPISODE_PREMIERE_TIME: RemoteCallDescriptor = {
  name: "UpdateEpisodePremiereTime",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/UpdateEpisodePremiereTime",
  body: {
    messageType: UPDATE_EPISODE_PREMIERE_TIME_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: UPDATE_EPISODE_PREMIERE_TIME_RESPONSE,
  },
}

export let UPDATE_EPISODE_INDEX: RemoteCallDescriptor = {
  name: "UpdateEpisodeIndex",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/UpdateEpisodeIndex",
  body: {
    messageType: UPDATE_EPISODE_INDEX_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: UPDATE_EPISODE_INDEX_RESPONSE,
  },
}

export let PUBLISH_EPISODE: RemoteCallDescriptor = {
  name: "PublishEpisode",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/PublishEpisode",
  body: {
    messageType: PUBLISH_EPISODE_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: PUBLISH_EPISODE_RESPONSE,
  },
}

export let UNPUBLISH_EPISODE: RemoteCallDescriptor = {
  name: "UnpublishEpisode",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/UnpublishEpisode",
  body: {
    messageType: UNPUBLISH_EPISODE_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: UNPUBLISH_EPISODE_RESPONSE,
  },
}

export let LIST_DRAFT_EPISODES: RemoteCallDescriptor = {
  name: "ListDraftEpisodes",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/ListDraftEpisodes",
  body: {
    messageType: LIST_DRAFT_EPISODES_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_DRAFT_EPISODES_RESPONSE,
  },
}

export let LIST_PUBLISHED_EPISODES: RemoteCallDescriptor = {
  name: "ListPublishedEpisodes",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/ListPublishedEpisodes",
  body: {
    messageType: LIST_PUBLISHED_EPISODES_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_PUBLISHED_EPISODES_RESPONSE,
  },
}

export let START_UPLOADING: RemoteCallDescriptor = {
  name: "StartUploading",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/StartUploading",
  body: {
    messageType: START_UPLOADING_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: START_UPLOADING_RESPONSE,
  },
}

export let COMPLETE_UPLOADING: RemoteCallDescriptor = {
  name: "CompleteUploading",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/CompleteUploading",
  body: {
    messageType: COMPLETE_UPLOADING_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: COMPLETE_UPLOADING_RESPONSE,
  },
}

export let CANCEL_UPLOADING: RemoteCallDescriptor = {
  name: "CancelUploading",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/CancelUploading",
  body: {
    messageType: CANCEL_UPLOADING_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: CANCEL_UPLOADING_RESPONSE,
  },
}

export let SAVE_EPISODE_STAGING_DATA: RemoteCallDescriptor = {
  name: "SaveEpisodeStagingData",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/SaveEpisodeStagingData",
  body: {
    messageType: SAVE_EPISODE_STAGING_DATA_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: SAVE_EPISODE_STAGING_DATA_RESPONSE,
  },
}

export let COMMIT_EPISODE_STAGING_DATA: RemoteCallDescriptor = {
  name: "CommitEpisodeStagingData",
  service: PRODUCT_WEB_SERVICE,
  path: "/sp/CommitEpisodeStagingData",
  body: {
    messageType: COMMIT_EPISODE_STAGING_DATA_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: COMMIT_EPISODE_STAGING_DATA_RESPONSE,
  },
}
