import { PrimitiveType, MessageDescriptor, EnumDescriptor } from '@selfage/message/descriptor';
import { SeasonDetails, SEASON_DETAILS, EpisodeDetails, EPISODE_DETAILS } from './details';
import { SeasonState, SEASON_STATE } from '../../season_state';
import { SeasonSummary, SEASON_SUMMARY, EpisodeSummary, EPISODE_SUMMARY } from './summary';
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
  episode?: EpisodeSummary,
}

export let CREATE_EPISODE_RESPONSE: MessageDescriptor<CreateEpisodeResponse> = {
  name: 'CreateEpisodeResponse',
  fields: [{
    name: 'episode',
    index: 1,
    messageType: EPISODE_SUMMARY,
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

export interface CommitEpisodeStagingDataRequestBody {
  seasonId?: string,
  episodeId?: string,
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
  }],
};

export enum ValidationError {
  NO_VIDEO_TRACK = 1,
  MORE_THAN_ONE_VIDEO_TRACKS = 2,
  TOO_MANY_AUDIO_TRACKS = 3,
  NO_DEFAULT_AUDIO_TRACK = 4,
  MORE_THAN_ONE_DEFAULT_AUDIO_TRACKS = 5,
  TOO_MANY_SUBTITLE_TRACKS = 6,
  NO_DEFAULT_SUBTITLE_TRACK = 7,
  MORE_THAN_ONE_DEFAULT_SUBTITLE_TRACKS = 8,
}

export let VALIDATION_ERROR: EnumDescriptor<ValidationError> = {
  name: 'ValidationError',
  values: [{
    name: 'NO_VIDEO_TRACK',
    value: 1,
  }, {
    name: 'MORE_THAN_ONE_VIDEO_TRACKS',
    value: 2,
  }, {
    name: 'TOO_MANY_AUDIO_TRACKS',
    value: 3,
  }, {
    name: 'NO_DEFAULT_AUDIO_TRACK',
    value: 4,
  }, {
    name: 'MORE_THAN_ONE_DEFAULT_AUDIO_TRACKS',
    value: 5,
  }, {
    name: 'TOO_MANY_SUBTITLE_TRACKS',
    value: 6,
  }, {
    name: 'NO_DEFAULT_SUBTITLE_TRACK',
    value: 7,
  }, {
    name: 'MORE_THAN_ONE_DEFAULT_SUBTITLE_TRACKS',
    value: 8,
  }]
}

export interface CommitEpisodeStagingDataResponse {
  success?: boolean,
  error?: ValidationError,
}

export let COMMIT_EPISODE_STAGING_DATA_RESPONSE: MessageDescriptor<CommitEpisodeStagingDataResponse> = {
  name: 'CommitEpisodeStagingDataResponse',
  fields: [{
    name: 'success',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'error',
    index: 2,
    enumType: VALIDATION_ERROR,
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

export interface DeleteVideoTrackRequestBody {
  seasonId?: string,
  episodeId?: string,
  r2TrackDirname?: string,
}

export let DELETE_VIDEO_TRACK_REQUEST_BODY: MessageDescriptor<DeleteVideoTrackRequestBody> = {
  name: 'DeleteVideoTrackRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DeleteVideoTrackResponse {
}

export let DELETE_VIDEO_TRACK_RESPONSE: MessageDescriptor<DeleteVideoTrackResponse> = {
  name: 'DeleteVideoTrackResponse',
  fields: [],
};

export interface DropVideoTrackStagingDataRequestBody {
  seasonId?: string,
  episodeId?: string,
  r2TrackDirname?: string,
}

export let DROP_VIDEO_TRACK_STAGING_DATA_REQUEST_BODY: MessageDescriptor<DropVideoTrackStagingDataRequestBody> = {
  name: 'DropVideoTrackStagingDataRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DropVideoTrackStagingDataResponse {
}

export let DROP_VIDEO_TRACK_STAGING_DATA_RESPONSE: MessageDescriptor<DropVideoTrackStagingDataResponse> = {
  name: 'DropVideoTrackStagingDataResponse',
  fields: [],
};

export interface UpdateAudioTrackRequestBody {
  seasonId?: string,
  episodeId?: string,
  r2TrackDirname?: string,
  name?: string,
  isDefault?: boolean,
}

export let UPDATE_AUDIO_TRACK_REQUEST_BODY: MessageDescriptor<UpdateAudioTrackRequestBody> = {
  name: 'UpdateAudioTrackRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'isDefault',
    index: 5,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface UpdateAudioTrackResponse {
}

export let UPDATE_AUDIO_TRACK_RESPONSE: MessageDescriptor<UpdateAudioTrackResponse> = {
  name: 'UpdateAudioTrackResponse',
  fields: [],
};

export interface DeleteAudioTrackRequestBody {
  seasonId?: string,
  episodeId?: string,
  r2TrackDirname?: string,
}

export let DELETE_AUDIO_TRACK_REQUEST_BODY: MessageDescriptor<DeleteAudioTrackRequestBody> = {
  name: 'DeleteAudioTrackRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DeleteAudioTrackResponse {
}

export let DELETE_AUDIO_TRACK_RESPONSE: MessageDescriptor<DeleteAudioTrackResponse> = {
  name: 'DeleteAudioTrackResponse',
  fields: [],
};

export interface DropAudioTrackStagingDataRequestBody {
  seasonId?: string,
  episodeId?: string,
  r2TrackDirname?: string,
}

export let DROP_AUDIO_TRACK_STAGING_DATA_REQUEST_BODY: MessageDescriptor<DropAudioTrackStagingDataRequestBody> = {
  name: 'DropAudioTrackStagingDataRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DropAudioTrackStagingDataResponse {
}

export let DROP_AUDIO_TRACK_STAGING_DATA_RESPONSE: MessageDescriptor<DropAudioTrackStagingDataResponse> = {
  name: 'DropAudioTrackStagingDataResponse',
  fields: [],
};

export interface UpdateSubtitleTrackRequestBody {
  seasonId?: string,
  episodeId?: string,
  r2TrackDirname?: string,
  name?: string,
}

export let UPDATE_SUBTITLE_TRACK_REQUEST_BODY: MessageDescriptor<UpdateSubtitleTrackRequestBody> = {
  name: 'UpdateSubtitleTrackRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface UpdateSubtitleTrackResponse {
}

export let UPDATE_SUBTITLE_TRACK_RESPONSE: MessageDescriptor<UpdateSubtitleTrackResponse> = {
  name: 'UpdateSubtitleTrackResponse',
  fields: [],
};

export interface DeleteSubtitleTrackRequestBody {
  seasonId?: string,
  episodeId?: string,
  r2TrackDirname?: string,
}

export let DELETE_SUBTITLE_TRACK_REQUEST_BODY: MessageDescriptor<DeleteSubtitleTrackRequestBody> = {
  name: 'DeleteSubtitleTrackRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DeleteSubtitleTrackResponse {
}

export let DELETE_SUBTITLE_TRACK_RESPONSE: MessageDescriptor<DeleteSubtitleTrackResponse> = {
  name: 'DeleteSubtitleTrackResponse',
  fields: [],
};

export interface DropSubtitleTrackStagingDataRequestBody {
  seasonId?: string,
  episodeId?: string,
  r2TrackDirname?: string,
}

export let DROP_SUBTITLE_TRACK_STAGING_DATA_REQUEST_BODY: MessageDescriptor<DropSubtitleTrackStagingDataRequestBody> = {
  name: 'DropSubtitleTrackStagingDataRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DropSubtitleTrackStagingDataResponse {
}

export let DROP_SUBTITLE_TRACK_STAGING_DATA_RESPONSE: MessageDescriptor<DropSubtitleTrackStagingDataResponse> = {
  name: 'DropSubtitleTrackStagingDataResponse',
  fields: [],
};

export let GET_SEASON: RemoteCallDescriptor = {
  name: "GetSeason",
  service: PRODUCT_WEB_SERVICE,
  path: "/GetSeason",
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
  path: "/CreateSeason",
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
  path: "/DeleteSeason",
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
  path: "/ArchiveSeason",
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
  path: "/UpdateSeason",
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
  path: "/UploadCoverImage",
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
  path: "/UpdateSeasonGrade",
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
  path: "/UpdateNextSeasonGrade",
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
  path: "/DeleteNextSeasonGrade",
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
  path: "/ListSeasons",
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
  path: "/SearchSeasons",
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
  path: "/CreateEpisode",
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
  path: "/DeleteEpisode",
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
  path: "/GetEpisode",
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
  path: "/UpdateEpisodeName",
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
  path: "/UpdateEpisodePremiereTime",
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
  path: "/UpdateEpisodeIndex",
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
  path: "/PublishEpisode",
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
  path: "/UnpublishEpisode",
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
  path: "/ListDraftEpisodes",
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
  path: "/ListPublishedEpisodes",
  body: {
    messageType: LIST_PUBLISHED_EPISODES_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_PUBLISHED_EPISODES_RESPONSE,
  },
}

export let COMMIT_EPISODE_STAGING_DATA: RemoteCallDescriptor = {
  name: "CommitEpisodeStagingData",
  service: PRODUCT_WEB_SERVICE,
  path: "/CommitEpisodeStagingData",
  body: {
    messageType: COMMIT_EPISODE_STAGING_DATA_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: COMMIT_EPISODE_STAGING_DATA_RESPONSE,
  },
}

export let START_UPLOADING: RemoteCallDescriptor = {
  name: "StartUploading",
  service: PRODUCT_WEB_SERVICE,
  path: "/StartUploading",
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
  path: "/CompleteUploading",
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
  path: "/CancelUploading",
  body: {
    messageType: CANCEL_UPLOADING_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: CANCEL_UPLOADING_RESPONSE,
  },
}

export let DELETE_VIDEO_TRACK: RemoteCallDescriptor = {
  name: "DeleteVideoTrack",
  service: PRODUCT_WEB_SERVICE,
  path: "/DeleteVideoTrack",
  body: {
    messageType: DELETE_VIDEO_TRACK_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: DELETE_VIDEO_TRACK_RESPONSE,
  },
}

export let DROP_VIDEO_TRACK_STAGING_DATA: RemoteCallDescriptor = {
  name: "DropVideoTrackStagingData",
  service: PRODUCT_WEB_SERVICE,
  path: "/DropVideoTrackStagingData",
  body: {
    messageType: DROP_VIDEO_TRACK_STAGING_DATA_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: DROP_VIDEO_TRACK_STAGING_DATA_RESPONSE,
  },
}

export let UPDATE_AUDIO_TRACK: RemoteCallDescriptor = {
  name: "UpdateAudioTrack",
  service: PRODUCT_WEB_SERVICE,
  path: "/UpdateAudioTrack",
  body: {
    messageType: UPDATE_AUDIO_TRACK_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: UPDATE_AUDIO_TRACK_RESPONSE,
  },
}

export let DELETE_AUDIO_TRACK: RemoteCallDescriptor = {
  name: "DeleteAudioTrack",
  service: PRODUCT_WEB_SERVICE,
  path: "/DeleteAudioTrack",
  body: {
    messageType: DELETE_AUDIO_TRACK_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: DELETE_AUDIO_TRACK_RESPONSE,
  },
}

export let DROP_AUDIO_TRACK_STAGING_DATA: RemoteCallDescriptor = {
  name: "DropAudioTrackStagingData",
  service: PRODUCT_WEB_SERVICE,
  path: "/DropAudioTrackStagingData",
  body: {
    messageType: DROP_AUDIO_TRACK_STAGING_DATA_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: DROP_AUDIO_TRACK_STAGING_DATA_RESPONSE,
  },
}

export let UPDATE_SUBTITLE_TRACK: RemoteCallDescriptor = {
  name: "UpdateSubtitleTrack",
  service: PRODUCT_WEB_SERVICE,
  path: "/UpdateSubtitleTrack",
  body: {
    messageType: UPDATE_SUBTITLE_TRACK_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: UPDATE_SUBTITLE_TRACK_RESPONSE,
  },
}

export let DELETE_SUBTITLE_TRACK: RemoteCallDescriptor = {
  name: "DeleteSubtitleTrack",
  service: PRODUCT_WEB_SERVICE,
  path: "/DeleteSubtitleTrack",
  body: {
    messageType: DELETE_SUBTITLE_TRACK_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: DELETE_SUBTITLE_TRACK_RESPONSE,
  },
}

export let DROP_SUBTITLE_TRACK_STAGING_DATA: RemoteCallDescriptor = {
  name: "DropSubtitleTrackStagingData",
  service: PRODUCT_WEB_SERVICE,
  path: "/DropSubtitleTrackStagingData",
  body: {
    messageType: DROP_SUBTITLE_TRACK_STAGING_DATA_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: DROP_SUBTITLE_TRACK_STAGING_DATA_RESPONSE,
  },
}
