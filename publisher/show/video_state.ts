import { EnumDescriptor } from '@selfage/message/descriptor';

export enum VideoState {
  EMPTY = 1,
  UPLOAD_IN_PROGRESS = 2,
  UPLOADED = 3,
}

export let VIDEO_STATE: EnumDescriptor<VideoState> = {
  name: 'VideoState',
  values: [{
    name: 'EMPTY',
    value: 1,
  }, {
    name: 'UPLOAD_IN_PROGRESS',
    value: 2,
  }, {
    name: 'UPLOADED',
    value: 3,
  }]
}
