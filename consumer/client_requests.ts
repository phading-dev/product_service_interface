import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { RecordPlayHistoryRequestBody, RecordPlayHistoryResponse, RECORD_PLAY_HISTORY, SaveProductRequestBody, SaveProductResponse, SAVE_PRODUCT, CreateSavedProductListRequestBody, CreateSavedProductListResponse, CREATE_SAVED_PRODUCT_LIST, DeleteSavedProductListRequestBody, DeleteSavedProductListResponse, DELETE_SAVED_PRODUCT_LIST, ListSavedProductListsRequestBody, ListSavedProductListsResponse, LIST_SAVED_PRODUCT_LISTS, EditSavedProductListRequestBody, EditSavedProductListResponse, EDIT_SAVED_PRODUCT_LIST, GetShowRequestBody, GetShowResponse, GET_SHOW, GetShowSnapshotRequestBody, GetShowSnapshotResponse, GET_SHOW_SNAPSHOT } from './interface';

export function recordPlayHistory(
  client: WebServiceClientInterface,
  body: RecordPlayHistoryRequestBody,
): Promise<RecordPlayHistoryResponse> {
  return client.send({
    descriptor: RECORD_PLAY_HISTORY,
    body,
  });
}

export function saveProduct(
  client: WebServiceClientInterface,
  body: SaveProductRequestBody,
): Promise<SaveProductResponse> {
  return client.send({
    descriptor: SAVE_PRODUCT,
    body,
  });
}

export function createSavedProductList(
  client: WebServiceClientInterface,
  body: CreateSavedProductListRequestBody,
): Promise<CreateSavedProductListResponse> {
  return client.send({
    descriptor: CREATE_SAVED_PRODUCT_LIST,
    body,
  });
}

export function deleteSavedProductList(
  client: WebServiceClientInterface,
  body: DeleteSavedProductListRequestBody,
): Promise<DeleteSavedProductListResponse> {
  return client.send({
    descriptor: DELETE_SAVED_PRODUCT_LIST,
    body,
  });
}

export function listSavedProductLists(
  client: WebServiceClientInterface,
  body: ListSavedProductListsRequestBody,
): Promise<ListSavedProductListsResponse> {
  return client.send({
    descriptor: LIST_SAVED_PRODUCT_LISTS,
    body,
  });
}

export function editSavedProductList(
  client: WebServiceClientInterface,
  body: EditSavedProductListRequestBody,
): Promise<EditSavedProductListResponse> {
  return client.send({
    descriptor: EDIT_SAVED_PRODUCT_LIST,
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

export function getShowSnapshot(
  client: WebServiceClientInterface,
  body: GetShowSnapshotRequestBody,
): Promise<GetShowSnapshotResponse> {
  return client.send({
    descriptor: GET_SHOW_SNAPSHOT,
    body,
  });
}
