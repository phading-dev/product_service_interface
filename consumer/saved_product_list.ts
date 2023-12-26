import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface SavedProductList {
  listId?: string,
  name?: string,
  productIds?: Array<string>,
}

export let SAVED_PRODUCT_LIST: MessageDescriptor<SavedProductList> = {
  name: 'SavedProductList',
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
      name: 'productIds',
      primitiveType: PrimitiveType.STRING,
      isArray: true,
    },
  ]
};

export interface SavedProductListSnapshot {
  listId?: string,
  name?: string,
}

export let SAVED_PRODUCT_LIST_SNAPSHOT: MessageDescriptor<SavedProductListSnapshot> = {
  name: 'SavedProductListSnapshot',
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
