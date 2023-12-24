import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ShowSnapshot, SHOW_SNAPSHOT } from './show_snapshot';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';
import { Show, SHOW } from './show';

export interface ListShowsRequestBody {
  showId?: Array<string>,
}

export let LIST_SHOWS_REQUEST_BODY: MessageDescriptor<ListShowsRequestBody> = {
  name: 'ListShowsRequestBody',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
      isArray: true,
    },
  ]
};

export interface ListShowsResponse {
  shows?: Array<ShowSnapshot>,
}

export let LIST_SHOWS_RESPONSE: MessageDescriptor<ListShowsResponse> = {
  name: 'ListShowsResponse',
  fields: [
    {
      name: 'shows',
      messageType: SHOW_SNAPSHOT,
      isArray: true,
    },
  ]
};

export let LIST_SHOWS: ServiceDescriptor = {
  name: "ListShows",
  path: "/ListShows",
  body: {
    messageType: LIST_SHOWS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: LIST_SHOWS_RESPONSE,
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
