import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface ResumableVideoUpload {
  url?: string,
  byteOffset?: number,
}

export let RESUMABLE_VIDEO_UPLOAD: MessageDescriptor<ResumableVideoUpload> = {
  name: 'ResumableVideoUpload',
  fields: [{
    name: 'url',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'byteOffset',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
