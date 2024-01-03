import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';
import { Show, SHOW, ShowSnapshot, SHOW_SNAPSHOT } from '../show';
import { SeriesOfShowsSnapshot, SERIES_OF_SHOWS_SNAPSHOT, SeriesOfShows, SERIES_OF_SHOWS } from './series_of_shows';
import { SeasonOfShowsSnapshot, SEASON_OF_SHOWS_SNAPSHOT, SeasonOfShows, SEASON_OF_SHOWS } from './season_of_shows';

export interface CreateDraftShowRequestBody {
  name?: string,
}

export let CREATE_DRAFT_SHOW_REQUEST_BODY: MessageDescriptor<CreateDraftShowRequestBody> = {
  name: 'CreateDraftShowRequestBody',
  fields: [
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface CreateDraftShowResponse {
  showId?: string,
}

export let CREATE_DRAFT_SHOW_RESPONSE: MessageDescriptor<CreateDraftShowResponse> = {
  name: 'CreateDraftShowResponse',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let CREATE_DRAFT_SHOW: ServiceDescriptor = {
  name: "CreateDraftShow",
  path: "/CreateDraftShow",
  body: {
    messageType: CREATE_DRAFT_SHOW_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: CREATE_DRAFT_SHOW_RESPONSE,
  },
}

export interface EditShowRequestBody {
  showId?: string,
  name?: string,
  description?: string,
/* Timestamp in sec. Empty means in draft or unpublished. */
  scheduledPublishTime?: number,
}

export let EDIT_SHOW_REQUEST_BODY: MessageDescriptor<EditShowRequestBody> = {
  name: 'EditShowRequestBody',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'description',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'scheduledPublishTime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface EditShowResponse {
}

export let EDIT_SHOW_RESPONSE: MessageDescriptor<EditShowResponse> = {
  name: 'EditShowResponse',
  fields: [
  ]
};

export let EDIT_SHOW: ServiceDescriptor = {
  name: "EditShow",
  path: "/EditShow",
  body: {
    messageType: EDIT_SHOW_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: EDIT_SHOW_RESPONSE,
  },
}

export interface UploadCoverImageOfShowRequestMetadata {
  showId?: string,
}

export let UPLOAD_COVER_IMAGE_OF_SHOW_REQUEST_METADATA: MessageDescriptor<UploadCoverImageOfShowRequestMetadata> = {
  name: 'UploadCoverImageOfShowRequestMetadata',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface UploadCoverImageOfShowResponse {
}

export let UPLOAD_COVER_IMAGE_OF_SHOW_RESPONSE: MessageDescriptor<UploadCoverImageOfShowResponse> = {
  name: 'UploadCoverImageOfShowResponse',
  fields: [
  ]
};

export let UPLOAD_COVER_IMAGE_OF_SHOW: ServiceDescriptor = {
  name: "UploadCoverImageOfShow",
  path: "/UploadCoverImageOfShow",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  metadata: {
    key: "metadata",
    type: UPLOAD_COVER_IMAGE_OF_SHOW_REQUEST_METADATA,
  },
  response: {
    messageType: UPLOAD_COVER_IMAGE_OF_SHOW_RESPONSE,
  },
}

export interface GetPendingUploadShowRequestBody {
  showId?: string,
}

export let GET_PENDING_UPLOAD_SHOW_REQUEST_BODY: MessageDescriptor<GetPendingUploadShowRequestBody> = {
  name: 'GetPendingUploadShowRequestBody',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetPendingUploadShowResponse {
  offsetBytes?: number,
}

export let GET_PENDING_UPLOAD_SHOW_RESPONSE: MessageDescriptor<GetPendingUploadShowResponse> = {
  name: 'GetPendingUploadShowResponse',
  fields: [
    {
      name: 'offsetBytes',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export let GET_PENDING_UPLOAD_SHOW: ServiceDescriptor = {
  name: "GetPendingUploadShow",
  path: "/GetPendingUploadShow",
  body: {
    messageType: GET_PENDING_UPLOAD_SHOW_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: GET_PENDING_UPLOAD_SHOW_RESPONSE,
  },
}

export interface RestartUploadShowRequestBody {
  showId?: string,
}

export let RESTART_UPLOAD_SHOW_REQUEST_BODY: MessageDescriptor<RestartUploadShowRequestBody> = {
  name: 'RestartUploadShowRequestBody',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface RestartUploadShowResponse {
}

export let RESTART_UPLOAD_SHOW_RESPONSE: MessageDescriptor<RestartUploadShowResponse> = {
  name: 'RestartUploadShowResponse',
  fields: [
  ]
};

export let RESTART_UPLOAD_SHOW: ServiceDescriptor = {
  name: "RestartUploadShow",
  path: "/RestartUploadShow",
  body: {
    messageType: RESTART_UPLOAD_SHOW_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: RESTART_UPLOAD_SHOW_RESPONSE,
  },
}

export interface UploadShowRequestMetadata {
  showId?: string,
}

export let UPLOAD_SHOW_REQUEST_METADATA: MessageDescriptor<UploadShowRequestMetadata> = {
  name: 'UploadShowRequestMetadata',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface UploadShowResponse {
}

export let UPLOAD_SHOW_RESPONSE: MessageDescriptor<UploadShowResponse> = {
  name: 'UploadShowResponse',
  fields: [
  ]
};

export let UPLOAD_SHOW: ServiceDescriptor = {
  name: "UploadShow",
  path: "/UploadShow",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  metadata: {
    key: "metadata",
    type: UPLOAD_SHOW_REQUEST_METADATA,
  },
  response: {
    messageType: UPLOAD_SHOW_RESPONSE,
  },
}

export interface GetShowRequestBody {
  showId?: string,
}

export let GET_SHOW_REQUEST_BODY: MessageDescriptor<GetShowRequestBody> = {
  name: 'GetShowRequestBody',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetShowResponse {
  show?: Show,
}

export let GET_SHOW_RESPONSE: MessageDescriptor<GetShowResponse> = {
  name: 'GetShowResponse',
  fields: [
    {
      name: 'show',
      messageType: SHOW,
    },
  ]
};

export let GET_SHOW: ServiceDescriptor = {
  name: "GetShow",
  path: "/GetShow",
  body: {
    messageType: GET_SHOW_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: GET_SHOW_RESPONSE,
  },
}

export interface ListShowsSnapshotRequestBody {
}

export let LIST_SHOWS_SNAPSHOT_REQUEST_BODY: MessageDescriptor<ListShowsSnapshotRequestBody> = {
  name: 'ListShowsSnapshotRequestBody',
  fields: [
  ]
};

export interface ListShowsSnapshotResponse {
  shows?: Array<ShowSnapshot>,
}

export let LIST_SHOWS_SNAPSHOT_RESPONSE: MessageDescriptor<ListShowsSnapshotResponse> = {
  name: 'ListShowsSnapshotResponse',
  fields: [
    {
      name: 'shows',
      messageType: SHOW_SNAPSHOT,
      isArray: true,
    },
  ]
};

export let LIST_SHOWS_SNAPSHOT: ServiceDescriptor = {
  name: "ListShowsSnapshot",
  path: "/ListShowsSnapshot",
  body: {
    messageType: LIST_SHOWS_SNAPSHOT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: LIST_SHOWS_SNAPSHOT_RESPONSE,
  },
}

export interface CreateSeriesOfShowsRequestBody {
  name?: string,
}

export let CREATE_SERIES_OF_SHOWS_REQUEST_BODY: MessageDescriptor<CreateSeriesOfShowsRequestBody> = {
  name: 'CreateSeriesOfShowsRequestBody',
  fields: [
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface CreateSeriesOfShowsResponse {
  seriesId?: string,
}

export let CREATE_SERIES_OF_SHOWS_RESPONSE: MessageDescriptor<CreateSeriesOfShowsResponse> = {
  name: 'CreateSeriesOfShowsResponse',
  fields: [
    {
      name: 'seriesId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let CREATE_SERIES_OF_SHOWS: ServiceDescriptor = {
  name: "CreateSeriesOfShows",
  path: "/CreateSeriesOfShows",
  body: {
    messageType: CREATE_SERIES_OF_SHOWS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: CREATE_SERIES_OF_SHOWS_RESPONSE,
  },
}

export interface DeleteSeriesOfShowsRequestBody {
  seriesId?: string,
}

export let DELETE_SERIES_OF_SHOWS_REQUEST_BODY: MessageDescriptor<DeleteSeriesOfShowsRequestBody> = {
  name: 'DeleteSeriesOfShowsRequestBody',
  fields: [
    {
      name: 'seriesId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface DeleteSeriesOfShowsResponse {
}

export let DELETE_SERIES_OF_SHOWS_RESPONSE: MessageDescriptor<DeleteSeriesOfShowsResponse> = {
  name: 'DeleteSeriesOfShowsResponse',
  fields: [
  ]
};

export let DELETE_SERIES_OF_SHOWS: ServiceDescriptor = {
  name: "DeleteSeriesOfShows",
  path: "/DeleteSeriesOfShows",
  body: {
    messageType: DELETE_SERIES_OF_SHOWS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: DELETE_SERIES_OF_SHOWS_RESPONSE,
  },
}

export interface ListSeriesOfShowsRequestBody {
}

export let LIST_SERIES_OF_SHOWS_REQUEST_BODY: MessageDescriptor<ListSeriesOfShowsRequestBody> = {
  name: 'ListSeriesOfShowsRequestBody',
  fields: [
  ]
};

export interface ListSeriesOfShowsResponse {
  seriesOfShows?: Array<SeriesOfShowsSnapshot>,
}

export let LIST_SERIES_OF_SHOWS_RESPONSE: MessageDescriptor<ListSeriesOfShowsResponse> = {
  name: 'ListSeriesOfShowsResponse',
  fields: [
    {
      name: 'seriesOfShows',
      messageType: SERIES_OF_SHOWS_SNAPSHOT,
      isArray: true,
    },
  ]
};

export let LIST_SERIES_OF_SHOWS: ServiceDescriptor = {
  name: "ListSeriesOfShows",
  path: "/ListSeriesOfShows",
  body: {
    messageType: LIST_SERIES_OF_SHOWS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: LIST_SERIES_OF_SHOWS_RESPONSE,
  },
}

export interface GetSeriesOfShowsRequestBody {
  seriesId?: string,
}

export let GET_SERIES_OF_SHOWS_REQUEST_BODY: MessageDescriptor<GetSeriesOfShowsRequestBody> = {
  name: 'GetSeriesOfShowsRequestBody',
  fields: [
    {
      name: 'seriesId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetSeriesOfShowsResponse {
  seriesOfShows?: SeriesOfShows,
}

export let GET_SERIES_OF_SHOWS_RESPONSE: MessageDescriptor<GetSeriesOfShowsResponse> = {
  name: 'GetSeriesOfShowsResponse',
  fields: [
    {
      name: 'seriesOfShows',
      messageType: SERIES_OF_SHOWS,
    },
  ]
};

export let GET_SERIES_OF_SHOWS: ServiceDescriptor = {
  name: "GetSeriesOfShows",
  path: "/GetSeriesOfShows",
  body: {
    messageType: GET_SERIES_OF_SHOWS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: GET_SERIES_OF_SHOWS_RESPONSE,
  },
}

export interface EditSeriesOfShowsRequestBody {
  seriesId?: string,
  name?: string,
  description?: string,
}

export let EDIT_SERIES_OF_SHOWS_REQUEST_BODY: MessageDescriptor<EditSeriesOfShowsRequestBody> = {
  name: 'EditSeriesOfShowsRequestBody',
  fields: [
    {
      name: 'seriesId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'description',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface EditSeriesOfShowsResponse {
}

export let EDIT_SERIES_OF_SHOWS_RESPONSE: MessageDescriptor<EditSeriesOfShowsResponse> = {
  name: 'EditSeriesOfShowsResponse',
  fields: [
  ]
};

export let EDIT_SERIES_OF_SHOWS: ServiceDescriptor = {
  name: "EditSeriesOfShows",
  path: "/EditSeriesOfShows",
  body: {
    messageType: EDIT_SERIES_OF_SHOWS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: EDIT_SERIES_OF_SHOWS_RESPONSE,
  },
}

export interface UploadCoverImageOfSeriesOfShowsRequestMetadata {
  seriesId?: string,
}

export let UPLOAD_COVER_IMAGE_OF_SERIES_OF_SHOWS_REQUEST_METADATA: MessageDescriptor<UploadCoverImageOfSeriesOfShowsRequestMetadata> = {
  name: 'UploadCoverImageOfSeriesOfShowsRequestMetadata',
  fields: [
    {
      name: 'seriesId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface UploadCoverImageOfSeriesOfShowsResponse {
}

export let UPLOAD_COVER_IMAGE_OF_SERIES_OF_SHOWS_RESPONSE: MessageDescriptor<UploadCoverImageOfSeriesOfShowsResponse> = {
  name: 'UploadCoverImageOfSeriesOfShowsResponse',
  fields: [
  ]
};

export let UPLOAD_COVER_IMAGE_OF_SERIES_OF_SHOWS: ServiceDescriptor = {
  name: "UploadCoverImageOfSeriesOfShows",
  path: "/UploadCoverImageOfSeriesOfShows",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  metadata: {
    key: "metadata",
    type: UPLOAD_COVER_IMAGE_OF_SERIES_OF_SHOWS_REQUEST_METADATA,
  },
  response: {
    messageType: UPLOAD_COVER_IMAGE_OF_SERIES_OF_SHOWS_RESPONSE,
  },
}

export interface CreateSeasonOfShowsRequestBody {
  name?: string,
}

export let CREATE_SEASON_OF_SHOWS_REQUEST_BODY: MessageDescriptor<CreateSeasonOfShowsRequestBody> = {
  name: 'CreateSeasonOfShowsRequestBody',
  fields: [
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface CreateSeasonOfShowsResponse {
  seasonId?: string,
}

export let CREATE_SEASON_OF_SHOWS_RESPONSE: MessageDescriptor<CreateSeasonOfShowsResponse> = {
  name: 'CreateSeasonOfShowsResponse',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let CREATE_SEASON_OF_SHOWS: ServiceDescriptor = {
  name: "CreateSeasonOfShows",
  path: "/CreateSeasonOfShows",
  body: {
    messageType: CREATE_SEASON_OF_SHOWS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: CREATE_SEASON_OF_SHOWS_RESPONSE,
  },
}

export interface DeleteSeasonOfShowsRequestBody {
  seasonId?: string,
}

export let DELETE_SEASON_OF_SHOWS_REQUEST_BODY: MessageDescriptor<DeleteSeasonOfShowsRequestBody> = {
  name: 'DeleteSeasonOfShowsRequestBody',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface DeleteSeasonOfShowsResponse {
}

export let DELETE_SEASON_OF_SHOWS_RESPONSE: MessageDescriptor<DeleteSeasonOfShowsResponse> = {
  name: 'DeleteSeasonOfShowsResponse',
  fields: [
  ]
};

export let DELETE_SEASON_OF_SHOWS: ServiceDescriptor = {
  name: "DeleteSeasonOfShows",
  path: "/DeleteSeasonOfShows",
  body: {
    messageType: DELETE_SEASON_OF_SHOWS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: DELETE_SEASON_OF_SHOWS_RESPONSE,
  },
}

export interface ListSeasonOfShowsRequestBody {
}

export let LIST_SEASON_OF_SHOWS_REQUEST_BODY: MessageDescriptor<ListSeasonOfShowsRequestBody> = {
  name: 'ListSeasonOfShowsRequestBody',
  fields: [
  ]
};

export interface ListSeasonOfShowsResponse {
  seasonOfShows?: Array<SeasonOfShowsSnapshot>,
}

export let LIST_SEASON_OF_SHOWS_RESPONSE: MessageDescriptor<ListSeasonOfShowsResponse> = {
  name: 'ListSeasonOfShowsResponse',
  fields: [
    {
      name: 'seasonOfShows',
      messageType: SEASON_OF_SHOWS_SNAPSHOT,
      isArray: true,
    },
  ]
};

export let LIST_SEASON_OF_SHOWS: ServiceDescriptor = {
  name: "ListSeasonOfShows",
  path: "/ListSeasonOfShows",
  body: {
    messageType: LIST_SEASON_OF_SHOWS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: LIST_SEASON_OF_SHOWS_RESPONSE,
  },
}

export interface GetSeasonOfShowsRequestBody {
  seasonId?: string,
}

export let GET_SEASON_OF_SHOWS_REQUEST_BODY: MessageDescriptor<GetSeasonOfShowsRequestBody> = {
  name: 'GetSeasonOfShowsRequestBody',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetSeasonOfShowsResponse {
  seasonOfShows?: SeasonOfShows,
}

export let GET_SEASON_OF_SHOWS_RESPONSE: MessageDescriptor<GetSeasonOfShowsResponse> = {
  name: 'GetSeasonOfShowsResponse',
  fields: [
    {
      name: 'seasonOfShows',
      messageType: SEASON_OF_SHOWS,
    },
  ]
};

export let GET_SEASON_OF_SHOWS: ServiceDescriptor = {
  name: "GetSeasonOfShows",
  path: "/GetSeasonOfShows",
  body: {
    messageType: GET_SEASON_OF_SHOWS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: GET_SEASON_OF_SHOWS_RESPONSE,
  },
}

export interface EditSeasonOfShowsRequestBody {
  seasonId?: string,
  name?: string,
  description?: string,
}

export let EDIT_SEASON_OF_SHOWS_REQUEST_BODY: MessageDescriptor<EditSeasonOfShowsRequestBody> = {
  name: 'EditSeasonOfShowsRequestBody',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'description',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface EditSeasonOfShowsResponse {
}

export let EDIT_SEASON_OF_SHOWS_RESPONSE: MessageDescriptor<EditSeasonOfShowsResponse> = {
  name: 'EditSeasonOfShowsResponse',
  fields: [
  ]
};

export let EDIT_SEASON_OF_SHOWS: ServiceDescriptor = {
  name: "EditSeasonOfShows",
  path: "/EditSeasonOfShows",
  body: {
    messageType: EDIT_SEASON_OF_SHOWS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: EDIT_SEASON_OF_SHOWS_RESPONSE,
  },
}

export interface UploadCoverImageOfSeasonOfShowsRequestMetadata {
  seasonId?: string,
}

export let UPLOAD_COVER_IMAGE_OF_SEASON_OF_SHOWS_REQUEST_METADATA: MessageDescriptor<UploadCoverImageOfSeasonOfShowsRequestMetadata> = {
  name: 'UploadCoverImageOfSeasonOfShowsRequestMetadata',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface UploadCoverImageOfSeasonOfShowsResponse {
}

export let UPLOAD_COVER_IMAGE_OF_SEASON_OF_SHOWS_RESPONSE: MessageDescriptor<UploadCoverImageOfSeasonOfShowsResponse> = {
  name: 'UploadCoverImageOfSeasonOfShowsResponse',
  fields: [
  ]
};

export let UPLOAD_COVER_IMAGE_OF_SEASON_OF_SHOWS: ServiceDescriptor = {
  name: "UploadCoverImageOfSeasonOfShows",
  path: "/UploadCoverImageOfSeasonOfShows",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  metadata: {
    key: "metadata",
    type: UPLOAD_COVER_IMAGE_OF_SEASON_OF_SHOWS_REQUEST_METADATA,
  },
  response: {
    messageType: UPLOAD_COVER_IMAGE_OF_SEASON_OF_SHOWS_RESPONSE,
  },
}
