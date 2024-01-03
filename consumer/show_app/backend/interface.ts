import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ShowSnapshot, SHOW_SNAPSHOT } from '../show';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';

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
  show?: ShowSnapshot,
}

export let GET_SHOW_SNAPSHOT_RESPONSE: MessageDescriptor<GetShowSnapshotResponse> = {
  name: 'GetShowSnapshotResponse',
  fields: [
    {
      name: 'show',
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
