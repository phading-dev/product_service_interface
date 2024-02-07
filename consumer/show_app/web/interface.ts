import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { Show, SHOW, Liking, LIKING } from '../show';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';
import { SavedShowListSnapshot, SAVED_SHOW_LIST_SNAPSHOT, SavedShowList, SAVED_SHOW_LIST } from './saved_show_list';

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

export interface RecordPlayHistoryRequestBody {
  showId?: string,
/* When it was played. */
  playedTimestamp?: number,
/* Timestamp of the show. */
  timestamp?: number,
}

export let RECORD_PLAY_HISTORY_REQUEST_BODY: MessageDescriptor<RecordPlayHistoryRequestBody> = {
  name: 'RecordPlayHistoryRequestBody',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'playedTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'timestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface RecordPlayHistoryResponse {
}

export let RECORD_PLAY_HISTORY_RESPONSE: MessageDescriptor<RecordPlayHistoryResponse> = {
  name: 'RecordPlayHistoryResponse',
  fields: [
  ]
};

export let RECORD_PLAY_HISTORY: ServiceDescriptor = {
  name: "RecordPlayHistory",
  path: "/RecordPlayHistory",
  body: {
    messageType: RECORD_PLAY_HISTORY_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: RECORD_PLAY_HISTORY_RESPONSE,
  },
}

export interface LikeShowRequestBody {
  showId?: string,
  liking?: Liking,
}

export let LIKE_SHOW_REQUEST_BODY: MessageDescriptor<LikeShowRequestBody> = {
  name: 'LikeShowRequestBody',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'liking',
      enumType: LIKING,
    },
  ]
};

export interface LikeShowResponse {
}

export let LIKE_SHOW_RESPONSE: MessageDescriptor<LikeShowResponse> = {
  name: 'LikeShowResponse',
  fields: [
  ]
};

export let LIKE_SHOW: ServiceDescriptor = {
  name: "LikeShow",
  path: "/LikeShow",
  body: {
    messageType: LIKE_SHOW_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: LIKE_SHOW_RESPONSE,
  },
}

export interface SaveShowRequestBody {
  showId?: string,
/* Optional. If empty, save to the default list. */
  listId?: string,
}

export let SAVE_SHOW_REQUEST_BODY: MessageDescriptor<SaveShowRequestBody> = {
  name: 'SaveShowRequestBody',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'listId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface SaveShowResponse {
}

export let SAVE_SHOW_RESPONSE: MessageDescriptor<SaveShowResponse> = {
  name: 'SaveShowResponse',
  fields: [
  ]
};

export let SAVE_SHOW: ServiceDescriptor = {
  name: "SaveShow",
  path: "/SaveShow",
  body: {
    messageType: SAVE_SHOW_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: SAVE_SHOW_RESPONSE,
  },
}

export interface CreateSavedShowListRequestBody {
  name?: string,
}

export let CREATE_SAVED_SHOW_LIST_REQUEST_BODY: MessageDescriptor<CreateSavedShowListRequestBody> = {
  name: 'CreateSavedShowListRequestBody',
  fields: [
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface CreateSavedShowListResponse {
  listId?: string,
}

export let CREATE_SAVED_SHOW_LIST_RESPONSE: MessageDescriptor<CreateSavedShowListResponse> = {
  name: 'CreateSavedShowListResponse',
  fields: [
    {
      name: 'listId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let CREATE_SAVED_SHOW_LIST: ServiceDescriptor = {
  name: "CreateSavedShowList",
  path: "/CreateSavedShowList",
  body: {
    messageType: CREATE_SAVED_SHOW_LIST_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: CREATE_SAVED_SHOW_LIST_RESPONSE,
  },
}

export interface DeleteSavedShowListRequestBody {
  listId?: string,
}

export let DELETE_SAVED_SHOW_LIST_REQUEST_BODY: MessageDescriptor<DeleteSavedShowListRequestBody> = {
  name: 'DeleteSavedShowListRequestBody',
  fields: [
    {
      name: 'listId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface DeleteSavedShowListResponse {
}

export let DELETE_SAVED_SHOW_LIST_RESPONSE: MessageDescriptor<DeleteSavedShowListResponse> = {
  name: 'DeleteSavedShowListResponse',
  fields: [
  ]
};

export let DELETE_SAVED_SHOW_LIST: ServiceDescriptor = {
  name: "DeleteSavedShowList",
  path: "/DeleteSavedShowList",
  body: {
    messageType: DELETE_SAVED_SHOW_LIST_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: DELETE_SAVED_SHOW_LIST_RESPONSE,
  },
}

export interface ListSavedShowListsRequestBody {
}

export let LIST_SAVED_SHOW_LISTS_REQUEST_BODY: MessageDescriptor<ListSavedShowListsRequestBody> = {
  name: 'ListSavedShowListsRequestBody',
  fields: [
  ]
};

export interface ListSavedShowListsResponse {
  lists?: Array<SavedShowListSnapshot>,
}

export let LIST_SAVED_SHOW_LISTS_RESPONSE: MessageDescriptor<ListSavedShowListsResponse> = {
  name: 'ListSavedShowListsResponse',
  fields: [
    {
      name: 'lists',
      messageType: SAVED_SHOW_LIST_SNAPSHOT,
      isArray: true,
    },
  ]
};

export let LIST_SAVED_SHOW_LISTS: ServiceDescriptor = {
  name: "ListSavedShowLists",
  path: "/ListSavedShowLists",
  body: {
    messageType: LIST_SAVED_SHOW_LISTS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: LIST_SAVED_SHOW_LISTS_RESPONSE,
  },
}

export interface GetSavedShowListRequestBody {
  listId?: string,
}

export let GET_SAVED_SHOW_LIST_REQUEST_BODY: MessageDescriptor<GetSavedShowListRequestBody> = {
  name: 'GetSavedShowListRequestBody',
  fields: [
    {
      name: 'listId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetSavedShowListResponse {
  list?: SavedShowList,
}

export let GET_SAVED_SHOW_LIST_RESPONSE: MessageDescriptor<GetSavedShowListResponse> = {
  name: 'GetSavedShowListResponse',
  fields: [
    {
      name: 'list',
      messageType: SAVED_SHOW_LIST,
    },
  ]
};

export let GET_SAVED_SHOW_LIST: ServiceDescriptor = {
  name: "GetSavedShowList",
  path: "/GetSavedShowList",
  body: {
    messageType: GET_SAVED_SHOW_LIST_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: GET_SAVED_SHOW_LIST_RESPONSE,
  },
}

export interface EditSavedShowListRequestBody {
  list?: SavedShowList,
}

export let EDIT_SAVED_SHOW_LIST_REQUEST_BODY: MessageDescriptor<EditSavedShowListRequestBody> = {
  name: 'EditSavedShowListRequestBody',
  fields: [
    {
      name: 'list',
      messageType: SAVED_SHOW_LIST,
    },
  ]
};

export interface EditSavedShowListResponse {
}

export let EDIT_SAVED_SHOW_LIST_RESPONSE: MessageDescriptor<EditSavedShowListResponse> = {
  name: 'EditSavedShowListResponse',
  fields: [
  ]
};

export let EDIT_SAVED_SHOW_LIST: ServiceDescriptor = {
  name: "EditSavedShowList",
  path: "/EditSavedShowList",
  body: {
    messageType: EDIT_SAVED_SHOW_LIST_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: EDIT_SAVED_SHOW_LIST_RESPONSE,
  },
}
