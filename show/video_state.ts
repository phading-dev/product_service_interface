import { EnumDescriptor } from '@selfage/message/descriptor';

export enum VideoState {
  INCOMPLETE = 1,
  UPLOADED = 2,
}

export let VIDEO_STATE: EnumDescriptor<VideoState> = {
  name: 'VideoState',
  values: [{
    name: 'INCOMPLETE',
    value: 1,
  }, {
    name: 'UPLOADED',
    value: 2,
  }]
}
