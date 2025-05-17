import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface VideoContainerCached {
  version?: number,
  r2RootDirname?: string,
  r2MasterPlaylistFilename?: string,
  durationSec?: number,
  resolution?: string,
}

export let VIDEO_CONTAINER_CACHED: MessageDescriptor<VideoContainerCached> = {
  name: 'VideoContainerCached',
  fields: [{
    name: 'version',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'r2RootDirname',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2MasterPlaylistFilename',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'durationSec',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'resolution',
    index: 5,
    primitiveType: PrimitiveType.STRING,
  }],
};
