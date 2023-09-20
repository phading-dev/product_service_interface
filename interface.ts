import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';
import { USER_SESSION } from '@phading/user_service_interface/user_session';

export interface PublishShowRequestBody {
  title?: string,
  description?: string,
  scheduledPublishTime?: string,
}

export let PUBLISH_SHOW_REQUEST_BODY: MessageDescriptor<PublishShowRequestBody> = {
  name: 'PublishShowRequestBody',
  fields: [
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
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface PublishShowResponse {
  videoPathToBeUploaded?: string,
}

export let PUBLISH_SHOW_RESPONSE: MessageDescriptor<PublishShowResponse> = {
  name: 'PublishShowResponse',
  fields: [
    {
      name: 'videoPathToBeUploaded',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let PUBLISH_SHOW: ServiceDescriptor = {
  name: "PublishShow",
  path: "/PublishShow",
  body: {
    messageType: PUBLISH_SHOW_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: PUBLISH_SHOW_RESPONSE,
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
  videoPath?: string,
  offsetBytes?: number,
}

export let GET_PENDING_UPLOAD_SHOW_RESPONSE: MessageDescriptor<GetPendingUploadShowResponse> = {
  name: 'GetPendingUploadShowResponse',
  fields: [
    {
      name: 'videoPath',
      primitiveType: PrimitiveType.STRING,
    },
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
    type: USER_SESSION
  },
  response: {
    messageType: GET_PENDING_UPLOAD_SHOW_RESPONSE,
  },
}

export interface UploadShowRequestMetadata {
  videoPath?: string,
  offsetBytes?: number,
}

export let UPLOAD_SHOW_REQUEST_METADATA: MessageDescriptor<UploadShowRequestMetadata> = {
  name: 'UploadShowRequestMetadata',
  fields: [
    {
      name: 'videoPath',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'offsetBytes',
      primitiveType: PrimitiveType.NUMBER,
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
    type: USER_SESSION
  },
  metadata: {
    key: "metadata",
    type: UPLOAD_SHOW_REQUEST_METADATA,
  },
  response: {
    messageType: UPLOAD_SHOW_RESPONSE,
  },
}
