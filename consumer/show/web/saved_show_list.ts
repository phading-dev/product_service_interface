import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ShowSnapshot, SHOW_SNAPSHOT } from '../show';

export interface SavedShowList {
  listId?: string,
  name?: string,
  shows?: Array<ShowSnapshot>,
}

export let SAVED_SHOW_LIST: MessageDescriptor<SavedShowList> = {
  name: 'SavedShowList',
  fields: [
    {
      name: 'listId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'shows',
      messageType: SHOW_SNAPSHOT,
      isArray: true,
    },
  ]
};

export interface SavedShowListSnapshot {
  listId?: string,
  name?: string,
}

export let SAVED_SHOW_LIST_SNAPSHOT: MessageDescriptor<SavedShowListSnapshot> = {
  name: 'SavedShowListSnapshot',
  fields: [
    {
      name: 'listId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
