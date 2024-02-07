import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { GET_SHOW, GetShowRequestBody, GetShowResponse, RECORD_PLAY_HISTORY, RecordPlayHistoryRequestBody, RecordPlayHistoryResponse, LIKE_SHOW, LikeShowRequestBody, LikeShowResponse, SAVE_SHOW, SaveShowRequestBody, SaveShowResponse, CREATE_SAVED_SHOW_LIST, CreateSavedShowListRequestBody, CreateSavedShowListResponse, DELETE_SAVED_SHOW_LIST, DeleteSavedShowListRequestBody, DeleteSavedShowListResponse, LIST_SAVED_SHOW_LISTS, ListSavedShowListsRequestBody, ListSavedShowListsResponse, GET_SAVED_SHOW_LIST, GetSavedShowListRequestBody, GetSavedShowListResponse, EDIT_SAVED_SHOW_LIST, EditSavedShowListRequestBody, EditSavedShowListResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';

export abstract class GetShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_SHOW;
  public abstract handle(
    requestId: string,
    body: GetShowRequestBody,
    auth: WebClientSession,
  ): Promise<GetShowResponse>;
}

export abstract class RecordPlayHistoryHandlerInterface implements ServiceHandlerInterface {
  public descriptor = RECORD_PLAY_HISTORY;
  public abstract handle(
    requestId: string,
    body: RecordPlayHistoryRequestBody,
    auth: WebClientSession,
  ): Promise<RecordPlayHistoryResponse>;
}

export abstract class LikeShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIKE_SHOW;
  public abstract handle(
    requestId: string,
    body: LikeShowRequestBody,
    auth: WebClientSession,
  ): Promise<LikeShowResponse>;
}

export abstract class SaveShowHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SAVE_SHOW;
  public abstract handle(
    requestId: string,
    body: SaveShowRequestBody,
    auth: WebClientSession,
  ): Promise<SaveShowResponse>;
}

export abstract class CreateSavedShowListHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_SAVED_SHOW_LIST;
  public abstract handle(
    requestId: string,
    body: CreateSavedShowListRequestBody,
    auth: WebClientSession,
  ): Promise<CreateSavedShowListResponse>;
}

export abstract class DeleteSavedShowListHandlerInterface implements ServiceHandlerInterface {
  public descriptor = DELETE_SAVED_SHOW_LIST;
  public abstract handle(
    requestId: string,
    body: DeleteSavedShowListRequestBody,
    auth: WebClientSession,
  ): Promise<DeleteSavedShowListResponse>;
}

export abstract class ListSavedShowListsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_SAVED_SHOW_LISTS;
  public abstract handle(
    requestId: string,
    body: ListSavedShowListsRequestBody,
    auth: WebClientSession,
  ): Promise<ListSavedShowListsResponse>;
}

export abstract class GetSavedShowListHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_SAVED_SHOW_LIST;
  public abstract handle(
    requestId: string,
    body: GetSavedShowListRequestBody,
    auth: WebClientSession,
  ): Promise<GetSavedShowListResponse>;
}

export abstract class EditSavedShowListHandlerInterface implements ServiceHandlerInterface {
  public descriptor = EDIT_SAVED_SHOW_LIST;
  public abstract handle(
    requestId: string,
    body: EditSavedShowListRequestBody,
    auth: WebClientSession,
  ): Promise<EditSavedShowListResponse>;
}
