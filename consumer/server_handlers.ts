import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { RECORD_PLAY_HISTORY, RecordPlayHistoryRequestBody, RecordPlayHistoryResponse, SAVE_PRODUCT, SaveProductRequestBody, SaveProductResponse, CREATE_SAVED_PRODUCT_LIST, CreateSavedProductListRequestBody, CreateSavedProductListResponse, DELETE_SAVED_PRODUCT_LIST, DeleteSavedProductListRequestBody, DeleteSavedProductListResponse, LIST_SAVED_PRODUCT_LISTS, ListSavedProductListsRequestBody, ListSavedProductListsResponse, EDIT_SAVED_PRODUCT_LIST, EditSavedProductListRequestBody, EditSavedProductListResponse, GET_SHOW, GetShowRequestBody, GetShowResponse, GET_SHOW_SNAPSHOT, GetShowSnapshotRequestBody, GetShowSnapshotResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';

export abstract class RecordPlayHistoryHandlerInterface implements ServiceHandlerInterface {
  public descriptor = RECORD_PLAY_HISTORY;
  public abstract handle(
    requestId: string,
    body: RecordPlayHistoryRequestBody,
    auth: WebClientSession,
  ): Promise<RecordPlayHistoryResponse>;
}

export abstract class SaveProductHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SAVE_PRODUCT;
  public abstract handle(
    requestId: string,
    body: SaveProductRequestBody,
    auth: WebClientSession,
  ): Promise<SaveProductResponse>;
}

export abstract class CreateSavedProductListHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_SAVED_PRODUCT_LIST;
  public abstract handle(
    requestId: string,
    body: CreateSavedProductListRequestBody,
    auth: WebClientSession,
  ): Promise<CreateSavedProductListResponse>;
}

export abstract class DeleteSavedProductListHandlerInterface implements ServiceHandlerInterface {
  public descriptor = DELETE_SAVED_PRODUCT_LIST;
  public abstract handle(
    requestId: string,
    body: DeleteSavedProductListRequestBody,
    auth: WebClientSession,
  ): Promise<DeleteSavedProductListResponse>;
}

export abstract class ListSavedProductListsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_SAVED_PRODUCT_LISTS;
  public abstract handle(
    requestId: string,
    body: ListSavedProductListsRequestBody,
    auth: WebClientSession,
  ): Promise<ListSavedProductListsResponse>;
}

export abstract class EditSavedProductListHandlerInterface implements ServiceHandlerInterface {
  public descriptor = EDIT_SAVED_PRODUCT_LIST;
  public abstract handle(
    requestId: string,
    body: EditSavedProductListRequestBody,
    auth: WebClientSession,
  ): Promise<EditSavedProductListResponse>;
}

export abstract class GetShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_SHOW;
  public abstract handle(
    requestId: string,
    body: GetShowRequestBody,
    auth: WebClientSession,
  ): Promise<GetShowResponse>;
}

export abstract class GetShowSnapshotHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_SHOW_SNAPSHOT;
  public abstract handle(
    requestId: string,
    body: GetShowSnapshotRequestBody,
    auth: WebClientSession,
  ): Promise<GetShowSnapshotResponse>;
}
