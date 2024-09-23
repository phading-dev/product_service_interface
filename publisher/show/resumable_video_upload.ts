import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface ResumableVideoUpload {
  uri?: string,
  crc32c?: string,
  byteOffset?: number,
}

export let RESUMABLE_VIDEO_UPLOAD: MessageDescriptor<ResumableVideoUpload> = {
  name: 'ResumableVideoUpload',
  fields: [{
    name: 'uri',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'crc32c',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'byteOffset',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
