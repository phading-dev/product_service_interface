import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';
import { AppType, APP_TYPE } from '../app_type';
import { SavedProductListSnapshot, SAVED_PRODUCT_LIST_SNAPSHOT, SavedProductList, SAVED_PRODUCT_LIST } from './saved_product_list';
import { Show, SHOW, ShowSnapshot, SHOW_SNAPSHOT } from './show';

export interface RecordPlayHistoryRequestBody {
  productId?: string,
/* When it was played. */
  playedTimestamp?: number,
/* Interpert differently per app type. */
  progress?: number,
}

export let RECORD_PLAY_HISTORY_REQUEST_BODY: MessageDescriptor<RecordPlayHistoryRequestBody> = {
  name: 'RecordPlayHistoryRequestBody',
  fields: [
    {
      name: 'productId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'playedTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'progress',
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

export interface SaveProductRequestBody {
  productId?: number,
/* Optional. If empty, save to the default list. */
  listId?: string,
}

export let SAVE_PRODUCT_REQUEST_BODY: MessageDescriptor<SaveProductRequestBody> = {
  name: 'SaveProductRequestBody',
  fields: [
    {
      name: 'productId',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'listId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface SaveProductResponse {
}

export let SAVE_PRODUCT_RESPONSE: MessageDescriptor<SaveProductResponse> = {
  name: 'SaveProductResponse',
  fields: [
  ]
};

export let SAVE_PRODUCT: ServiceDescriptor = {
  name: "SaveProduct",
  path: "/SaveProduct",
  body: {
    messageType: SAVE_PRODUCT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: SAVE_PRODUCT_RESPONSE,
  },
}

export interface CreateSavedProductListRequestBody {
  appType?: AppType,
  name?: string,
}

export let CREATE_SAVED_PRODUCT_LIST_REQUEST_BODY: MessageDescriptor<CreateSavedProductListRequestBody> = {
  name: 'CreateSavedProductListRequestBody',
  fields: [
    {
      name: 'appType',
      enumType: APP_TYPE,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface CreateSavedProductListResponse {
  listId?: string,
}

export let CREATE_SAVED_PRODUCT_LIST_RESPONSE: MessageDescriptor<CreateSavedProductListResponse> = {
  name: 'CreateSavedProductListResponse',
  fields: [
    {
      name: 'listId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let CREATE_SAVED_PRODUCT_LIST: ServiceDescriptor = {
  name: "CreateSavedProductList",
  path: "/CreateSavedProductList",
  body: {
    messageType: CREATE_SAVED_PRODUCT_LIST_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: CREATE_SAVED_PRODUCT_LIST_RESPONSE,
  },
}

export interface DeleteSavedProductListRequestBody {
  listId?: string,
}

export let DELETE_SAVED_PRODUCT_LIST_REQUEST_BODY: MessageDescriptor<DeleteSavedProductListRequestBody> = {
  name: 'DeleteSavedProductListRequestBody',
  fields: [
    {
      name: 'listId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface DeleteSavedProductListResponse {
}

export let DELETE_SAVED_PRODUCT_LIST_RESPONSE: MessageDescriptor<DeleteSavedProductListResponse> = {
  name: 'DeleteSavedProductListResponse',
  fields: [
  ]
};

export let DELETE_SAVED_PRODUCT_LIST: ServiceDescriptor = {
  name: "DeleteSavedProductList",
  path: "/DeleteSavedProductList",
  body: {
    messageType: DELETE_SAVED_PRODUCT_LIST_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: DELETE_SAVED_PRODUCT_LIST_RESPONSE,
  },
}

export interface ListSavedProductListsRequestBody {
  appType?: AppType,
}

export let LIST_SAVED_PRODUCT_LISTS_REQUEST_BODY: MessageDescriptor<ListSavedProductListsRequestBody> = {
  name: 'ListSavedProductListsRequestBody',
  fields: [
    {
      name: 'appType',
      enumType: APP_TYPE,
    },
  ]
};

export interface ListSavedProductListsResponse {
  lists?: Array<SavedProductListSnapshot>,
}

export let LIST_SAVED_PRODUCT_LISTS_RESPONSE: MessageDescriptor<ListSavedProductListsResponse> = {
  name: 'ListSavedProductListsResponse',
  fields: [
    {
      name: 'lists',
      messageType: SAVED_PRODUCT_LIST_SNAPSHOT,
      isArray: true,
    },
  ]
};

export let LIST_SAVED_PRODUCT_LISTS: ServiceDescriptor = {
  name: "ListSavedProductLists",
  path: "/ListSavedProductLists",
  body: {
    messageType: LIST_SAVED_PRODUCT_LISTS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: LIST_SAVED_PRODUCT_LISTS_RESPONSE,
  },
}

export interface GetSavedProductListRequestBody {
  listId?: string,
}

export let GET_SAVED_PRODUCT_LIST_REQUEST_BODY: MessageDescriptor<GetSavedProductListRequestBody> = {
  name: 'GetSavedProductListRequestBody',
  fields: [
    {
      name: 'listId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetSavedProductListResponse {
  list?: SavedProductList,
}

export let GET_SAVED_PRODUCT_LIST_RESPONSE: MessageDescriptor<GetSavedProductListResponse> = {
  name: 'GetSavedProductListResponse',
  fields: [
    {
      name: 'list',
      messageType: SAVED_PRODUCT_LIST,
    },
  ]
};

export let GET_SAVED_PRODUCT_LIST: ServiceDescriptor = {
  name: "GetSavedProductList",
  path: "/GetSavedProductList",
  body: {
    messageType: GET_SAVED_PRODUCT_LIST_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: GET_SAVED_PRODUCT_LIST_RESPONSE,
  },
}

export interface EditSavedProductListRequestBody {
  list?: SavedProductList,
}

export let EDIT_SAVED_PRODUCT_LIST_REQUEST_BODY: MessageDescriptor<EditSavedProductListRequestBody> = {
  name: 'EditSavedProductListRequestBody',
  fields: [
    {
      name: 'list',
      messageType: SAVED_PRODUCT_LIST,
    },
  ]
};

export interface EditSavedProductListResponse {
}

export let EDIT_SAVED_PRODUCT_LIST_RESPONSE: MessageDescriptor<EditSavedProductListResponse> = {
  name: 'EditSavedProductListResponse',
  fields: [
  ]
};

export let EDIT_SAVED_PRODUCT_LIST: ServiceDescriptor = {
  name: "EditSavedProductList",
  path: "/EditSavedProductList",
  body: {
    messageType: EDIT_SAVED_PRODUCT_LIST_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: EDIT_SAVED_PRODUCT_LIST_RESPONSE,
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
