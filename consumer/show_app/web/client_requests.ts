import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { RecordPlayHistoryRequestBody, RecordPlayHistoryResponse, RECORD_PLAY_HISTORY, SaveShowRequestBody, SaveShowResponse, SAVE_SHOW, CreateSavedShowListRequestBody, CreateSavedShowListResponse, CREATE_SAVED_SHOW_LIST, DeleteSavedShowListRequestBody, DeleteSavedShowListResponse, DELETE_SAVED_SHOW_LIST, ListSavedShowListsRequestBody, ListSavedShowListsResponse, LIST_SAVED_SHOW_LISTS, GetSavedShowListRequestBody, GetSavedShowListResponse, GET_SAVED_SHOW_LIST, EditSavedShowListRequestBody, EditSavedShowListResponse, EDIT_SAVED_SHOW_LIST, GetShowRequestBody, GetShowResponse, GET_SHOW } from './interface';

export function recordPlayHistory(
  client: WebServiceClientInterface,
  body: RecordPlayHistoryRequestBody,
): Promise<RecordPlayHistoryResponse> {
  return client.send({
    descriptor: RECORD_PLAY_HISTORY,
    body,
  });
}

export function saveShow(
  client: WebServiceClientInterface,
  body: SaveShowRequestBody,
): Promise<SaveShowResponse> {
  return client.send({
    descriptor: SAVE_SHOW,
    body,
  });
}

export function createSavedShowList(
  client: WebServiceClientInterface,
  body: CreateSavedShowListRequestBody,
): Promise<CreateSavedShowListResponse> {
  return client.send({
    descriptor: CREATE_SAVED_SHOW_LIST,
    body,
  });
}

export function deleteSavedShowList(
  client: WebServiceClientInterface,
  body: DeleteSavedShowListRequestBody,
): Promise<DeleteSavedShowListResponse> {
  return client.send({
    descriptor: DELETE_SAVED_SHOW_LIST,
    body,
  });
}

export function listSavedShowLists(
  client: WebServiceClientInterface,
  body: ListSavedShowListsRequestBody,
): Promise<ListSavedShowListsResponse> {
  return client.send({
    descriptor: LIST_SAVED_SHOW_LISTS,
    body,
  });
}

export function getSavedShowList(
  client: WebServiceClientInterface,
  body: GetSavedShowListRequestBody,
): Promise<GetSavedShowListResponse> {
  return client.send({
    descriptor: GET_SAVED_SHOW_LIST,
    body,
  });
}

export function editSavedShowList(
  client: WebServiceClientInterface,
  body: EditSavedShowListRequestBody,
): Promise<EditSavedShowListResponse> {
  return client.send({
    descriptor: EDIT_SAVED_SHOW_LIST,
    body,
  });
}

export function getShow(
  client: WebServiceClientInterface,
  body: GetShowRequestBody,
): Promise<GetShowResponse> {
  return client.send({
    descriptor: GET_SHOW,
    body,
  });
}
