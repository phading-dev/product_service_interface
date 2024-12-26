import { PrimitiveType, MessageDescriptor, EnumDescriptor } from '@selfage/message/descriptor';
import { SeasonDetails, SEASON_DETAILS } from './season_details';
import { SeasonState, SEASON_STATE } from '../../season_state';
import { SeasonSummary, SEASON_SUMMARY } from './season_summary';
import { EpisodeSummary, EPISODE_SUMMARY } from './episode_summary';
import { EpisodeDetails, EPISODE_DETAILS } from './episode_details';
import { WebRemoteCallDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';

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
  effectiveDate?: string,
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
    name: 'effectiveDate',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface UpdateSeasonGradeResponse {
}

export let UPDATE_SEASON_GRADE_RESPONSE: MessageDescriptor<UpdateSeasonGradeResponse> = {
  name: 'UpdateSeasonGradeResponse',
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

export interface UpdateEpisodeRequestBody {
  seasonId?: string,
  episodeId?: string,
  name?: string,
}

export let UPDATE_EPISODE_REQUEST_BODY: MessageDescriptor<UpdateEpisodeRequestBody> = {
  name: 'UpdateEpisodeRequestBody',
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

export interface UpdateEpisodeResponse {
}

export let UPDATE_EPISODE_RESPONSE: MessageDescriptor<UpdateEpisodeResponse> = {
  name: 'UpdateEpisodeResponse',
  fields: [],
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

export interface PublishEpisodeRequestBody {
  seasonId?: string,
  episodeId?: string,
  premierTimeMs?: number,
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
    name: 'premierTimeMs',
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

export interface ListEpisodesRequestBody {
  seasonId?: string,
  indexCursor?: number,
  limit?: number,
}

export let LIST_EPISODES_REQUEST_BODY: MessageDescriptor<ListEpisodesRequestBody> = {
  name: 'ListEpisodesRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'indexCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'limit',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListEpisodesResponse {
  episodes?: Array<EpisodeSummary>,
  indexCursor?: number,
}

export let LIST_EPISODES_RESPONSE: MessageDescriptor<ListEpisodesResponse> = {
  name: 'ListEpisodesResponse',
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

export interface StartMediaUploadingRequestBody {
  seasonId?: string,
  episodeId?: string,
  contentLength?: number,
  fileType?: string,
}

export let START_MEDIA_UPLOADING_REQUEST_BODY: MessageDescriptor<StartMediaUploadingRequestBody> = {
  name: 'StartMediaUploadingRequestBody',
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
    name: 'fileType',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface StartMediaUploadingResponse {
  uploadSessionUrl?: string,
  byteOffset?: number,
}

export let START_MEDIA_UPLOADING_RESPONSE: MessageDescriptor<StartMediaUploadingResponse> = {
  name: 'StartMediaUploadingResponse',
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

export interface CompleteMediaUploadingRequestBody {
  seasonId?: string,
  episodeId?: string,
  uploadSessionUrl?: string,
}

export let COMPLETE_MEDIA_UPLOADING_REQUEST_BODY: MessageDescriptor<CompleteMediaUploadingRequestBody> = {
  name: 'CompleteMediaUploadingRequestBody',
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

export interface CompleteMediaUploadingResponse {
}

export let COMPLETE_MEDIA_UPLOADING_RESPONSE: MessageDescriptor<CompleteMediaUploadingResponse> = {
  name: 'CompleteMediaUploadingResponse',
  fields: [],
};

export interface CancelMediaUploadingRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let CANCEL_MEDIA_UPLOADING_REQUEST_BODY: MessageDescriptor<CancelMediaUploadingRequestBody> = {
  name: 'CancelMediaUploadingRequestBody',
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

export interface CancelMediaUploadingResponse {
}

export let CANCEL_MEDIA_UPLOADING_RESPONSE: MessageDescriptor<CancelMediaUploadingResponse> = {
  name: 'CancelMediaUploadingResponse',
  fields: [],
};

export interface StartSubtitleUploadingRequestBody {
  seasonId?: string,
  episodeId?: string,
  contentLength?: number,
  fileType?: string,
}

export let START_SUBTITLE_UPLOADING_REQUEST_BODY: MessageDescriptor<StartSubtitleUploadingRequestBody> = {
  name: 'StartSubtitleUploadingRequestBody',
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
    name: 'fileType',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface StartSubtitleUploadingResponse {
  uploadSessionUrl?: string,
  byteOffset?: number,
}

export let START_SUBTITLE_UPLOADING_RESPONSE: MessageDescriptor<StartSubtitleUploadingResponse> = {
  name: 'StartSubtitleUploadingResponse',
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

export interface CompleteSubtitleUploadingRequestBody {
  seasonId?: string,
  episodeId?: string,
  uploadSessionUrl?: string,
}

export let COMPLETE_SUBTITLE_UPLOADING_REQUEST_BODY: MessageDescriptor<CompleteSubtitleUploadingRequestBody> = {
  name: 'CompleteSubtitleUploadingRequestBody',
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

export interface CompleteSubtitleUploadingResponse {
}

export let COMPLETE_SUBTITLE_UPLOADING_RESPONSE: MessageDescriptor<CompleteSubtitleUploadingResponse> = {
  name: 'CompleteSubtitleUploadingResponse',
  fields: [],
};

export interface CancelSubtitleUploadingRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let CANCEL_SUBTITLE_UPLOADING_REQUEST_BODY: MessageDescriptor<CancelSubtitleUploadingRequestBody> = {
  name: 'CancelSubtitleUploadingRequestBody',
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

export interface CancelSubtitleUploadingResponse {
}

export let CANCEL_SUBTITLE_UPLOADING_RESPONSE: MessageDescriptor<CancelSubtitleUploadingResponse> = {
  name: 'CancelSubtitleUploadingResponse',
  fields: [],
};

export interface CancelMediaFormattingRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let CANCEL_MEDIA_FORMATTING_REQUEST_BODY: MessageDescriptor<CancelMediaFormattingRequestBody> = {
  name: 'CancelMediaFormattingRequestBody',
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

export interface CancelMediaFormattingResponse {
}

export let CANCEL_MEDIA_FORMATTING_RESPONSE: MessageDescriptor<CancelMediaFormattingResponse> = {
  name: 'CancelMediaFormattingResponse',
  fields: [],
};

export interface CancelSubtitleFormattingRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let CANCEL_SUBTITLE_FORMATTING_REQUEST_BODY: MessageDescriptor<CancelSubtitleFormattingRequestBody> = {
  name: 'CancelSubtitleFormattingRequestBody',
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

export interface CancelSubtitleFormattingResponse {
}

export let CANCEL_SUBTITLE_FORMATTING_RESPONSE: MessageDescriptor<CancelSubtitleFormattingResponse> = {
  name: 'CancelSubtitleFormattingResponse',
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
  isDefault?: boolean,
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
  }, {
    name: 'isDefault',
    index: 5,
    primitiveType: PrimitiveType.BOOLEAN,
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

export let GET_SEASON: WebRemoteCallDescriptor = {
  name: "GetSeason",
  path: "/GetSeason",
  body: {
    messageType: GET_SEASON_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: GET_SEASON_RESPONSE,
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

export let CREATE_EPISODE: WebRemoteCallDescriptor = {
  name: "CreateEpisode",
  path: "/CreateEpisode",
  body: {
    messageType: CREATE_EPISODE_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: CREATE_EPISODE_RESPONSE,
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

export let GET_EPISODE: WebRemoteCallDescriptor = {
  name: "GetEpisode",
  path: "/GetEpisode",
  body: {
    messageType: GET_EPISODE_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: GET_EPISODE_RESPONSE,
  },
}

export let UPDATE_EPISODE: WebRemoteCallDescriptor = {
  name: "UpdateEpisode",
  path: "/UpdateEpisode",
  body: {
    messageType: UPDATE_EPISODE_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: UPDATE_EPISODE_RESPONSE,
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

export let UNPUBLISH_EPISODE: WebRemoteCallDescriptor = {
  name: "UnpublishEpisode",
  path: "/UnpublishEpisode",
  body: {
    messageType: UNPUBLISH_EPISODE_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: UNPUBLISH_EPISODE_RESPONSE,
  },
}

export let LIST_EPISODES: WebRemoteCallDescriptor = {
  name: "ListEpisodes",
  path: "/ListEpisodes",
  body: {
    messageType: LIST_EPISODES_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: LIST_EPISODES_RESPONSE,
  },
}

export let COMMIT_EPISODE_STAGING_DATA: WebRemoteCallDescriptor = {
  name: "CommitEpisodeStagingData",
  path: "/CommitEpisodeStagingData",
  body: {
    messageType: COMMIT_EPISODE_STAGING_DATA_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: COMMIT_EPISODE_STAGING_DATA_RESPONSE,
  },
}

export let START_MEDIA_UPLOADING: WebRemoteCallDescriptor = {
  name: "StartMediaUploading",
  path: "/StartMediaUploading",
  body: {
    messageType: START_MEDIA_UPLOADING_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: START_MEDIA_UPLOADING_RESPONSE,
  },
}

export let COMPLETE_MEDIA_UPLOADING: WebRemoteCallDescriptor = {
  name: "CompleteMediaUploading",
  path: "/CompleteMediaUploading",
  body: {
    messageType: COMPLETE_MEDIA_UPLOADING_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: COMPLETE_MEDIA_UPLOADING_RESPONSE,
  },
}

export let CANCEL_MEDIA_UPLOADING: WebRemoteCallDescriptor = {
  name: "CancelMediaUploading",
  path: "/CancelMediaUploading",
  body: {
    messageType: CANCEL_MEDIA_UPLOADING_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: CANCEL_MEDIA_UPLOADING_RESPONSE,
  },
}

export let START_SUBTITLE_UPLOADING: WebRemoteCallDescriptor = {
  name: "StartSubtitleUploading",
  path: "/StartSubtitleUploading",
  body: {
    messageType: START_SUBTITLE_UPLOADING_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: START_SUBTITLE_UPLOADING_RESPONSE,
  },
}

export let COMPLETE_SUBTITLE_UPLOADING: WebRemoteCallDescriptor = {
  name: "CompleteSubtitleUploading",
  path: "/CompleteSubtitleUploading",
  body: {
    messageType: COMPLETE_SUBTITLE_UPLOADING_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: COMPLETE_SUBTITLE_UPLOADING_RESPONSE,
  },
}

export let CANCEL_SUBTITLE_UPLOADING: WebRemoteCallDescriptor = {
  name: "CancelSubtitleUploading",
  path: "/CancelSubtitleUploading",
  body: {
    messageType: CANCEL_SUBTITLE_UPLOADING_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: CANCEL_SUBTITLE_UPLOADING_RESPONSE,
  },
}

export let CANCEL_MEDIA_FORMATTING: WebRemoteCallDescriptor = {
  name: "CancelMediaFormatting",
  path: "/CancelMediaFormatting",
  body: {
    messageType: CANCEL_MEDIA_FORMATTING_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: CANCEL_MEDIA_FORMATTING_RESPONSE,
  },
}

export let CANCEL_SUBTITLE_FORMATTING: WebRemoteCallDescriptor = {
  name: "CancelSubtitleFormatting",
  path: "/CancelSubtitleFormatting",
  body: {
    messageType: CANCEL_SUBTITLE_FORMATTING_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: CANCEL_SUBTITLE_FORMATTING_RESPONSE,
  },
}

export let DELETE_VIDEO_TRACK: WebRemoteCallDescriptor = {
  name: "DeleteVideoTrack",
  path: "/DeleteVideoTrack",
  body: {
    messageType: DELETE_VIDEO_TRACK_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: DELETE_VIDEO_TRACK_RESPONSE,
  },
}

export let DROP_VIDEO_TRACK_STAGING_DATA: WebRemoteCallDescriptor = {
  name: "DropVideoTrackStagingData",
  path: "/DropVideoTrackStagingData",
  body: {
    messageType: DROP_VIDEO_TRACK_STAGING_DATA_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: DROP_VIDEO_TRACK_STAGING_DATA_RESPONSE,
  },
}

export let UPDATE_AUDIO_TRACK: WebRemoteCallDescriptor = {
  name: "UpdateAudioTrack",
  path: "/UpdateAudioTrack",
  body: {
    messageType: UPDATE_AUDIO_TRACK_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: UPDATE_AUDIO_TRACK_RESPONSE,
  },
}

export let DELETE_AUDIO_TRACK: WebRemoteCallDescriptor = {
  name: "DeleteAudioTrack",
  path: "/DeleteAudioTrack",
  body: {
    messageType: DELETE_AUDIO_TRACK_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: DELETE_AUDIO_TRACK_RESPONSE,
  },
}

export let DROP_AUDIO_TRACK_STAGING_DATA: WebRemoteCallDescriptor = {
  name: "DropAudioTrackStagingData",
  path: "/DropAudioTrackStagingData",
  body: {
    messageType: DROP_AUDIO_TRACK_STAGING_DATA_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: DROP_AUDIO_TRACK_STAGING_DATA_RESPONSE,
  },
}

export let UPDATE_SUBTITLE_TRACK: WebRemoteCallDescriptor = {
  name: "UpdateSubtitleTrack",
  path: "/UpdateSubtitleTrack",
  body: {
    messageType: UPDATE_SUBTITLE_TRACK_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: UPDATE_SUBTITLE_TRACK_RESPONSE,
  },
}

export let DELETE_SUBTITLE_TRACK: WebRemoteCallDescriptor = {
  name: "DeleteSubtitleTrack",
  path: "/DeleteSubtitleTrack",
  body: {
    messageType: DELETE_SUBTITLE_TRACK_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: DELETE_SUBTITLE_TRACK_RESPONSE,
  },
}

export let DROP_SUBTITLE_TRACK_STAGING_DATA: WebRemoteCallDescriptor = {
  name: "DropSubtitleTrackStagingData",
  path: "/DropSubtitleTrackStagingData",
  body: {
    messageType: DROP_SUBTITLE_TRACK_STAGING_DATA_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: DROP_SUBTITLE_TRACK_STAGING_DATA_RESPONSE,
  },
}
