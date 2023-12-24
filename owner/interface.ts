import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';
import { Show, SHOW } from './show';
import { ShowSnapshot, SHOW_SNAPSHOT } from './show_snapshot';

export interface CreateDraftShowRequestBody {
}

export let CREATE_DRAFT_SHOW_REQUEST_BODY: MessageDescriptor<CreateDraftShowRequestBody> = {
  name: 'CreateDraftShowRequestBody',
  fields: [
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
  title?: string,
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
      name: 'title',
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

export interface UploadCoverImageRequestMetadata {
  showId?: string,
}

export let UPLOAD_COVER_IMAGE_REQUEST_METADATA: MessageDescriptor<UploadCoverImageRequestMetadata> = {
  name: 'UploadCoverImageRequestMetadata',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface UploadCoverImageResponse {
}

export let UPLOAD_COVER_IMAGE_RESPONSE: MessageDescriptor<UploadCoverImageResponse> = {
  name: 'UploadCoverImageResponse',
  fields: [
  ]
};

export let UPLOAD_COVER_IMAGE: ServiceDescriptor = {
  name: "UploadCoverImage",
  path: "/UploadCoverImage",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  metadata: {
    key: "metadata",
    type: UPLOAD_COVER_IMAGE_REQUEST_METADATA,
  },
  response: {
    messageType: UPLOAD_COVER_IMAGE_RESPONSE,
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
