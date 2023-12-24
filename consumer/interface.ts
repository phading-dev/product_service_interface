import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { Show, SHOW, ShowSnapshot, SHOW_SNAPSHOT } from './show';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';

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

export interface GetShowSnapshotRequestBody {
  showId?: string,
}

export let GET_SHOW_SNAPSHOT_REQUEST_BODY: MessageDescriptor<GetShowSnapshotRequestBody> = {
  name: 'GetShowSnapshotRequestBody',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetShowSnapshotResponse {
  shows?: ShowSnapshot,
}

export let GET_SHOW_SNAPSHOT_RESPONSE: MessageDescriptor<GetShowSnapshotResponse> = {
  name: 'GetShowSnapshotResponse',
  fields: [
    {
      name: 'shows',
      messageType: SHOW_SNAPSHOT,
    },
  ]
};

export let GET_SHOW_SNAPSHOT: ServiceDescriptor = {
  name: "GetShowSnapshot",
  path: "/GetShowSnapshot",
  body: {
    messageType: GET_SHOW_SNAPSHOT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: GET_SHOW_SNAPSHOT_RESPONSE,
  },
}
