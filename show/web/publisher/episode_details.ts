import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { VideoContainer, VIDEO_CONTAINER } from '@phading/video_service_interface/node/video_container';

export interface EpisodeDetails {
  seasonName?: string,
  episodeName?: string,
  videoContainer?: VideoContainer,
  publishTimeMs?: number,
  premierTimeMs?: number,
}

export let EPISODE_DETAILS: MessageDescriptor<EpisodeDetails> = {
  name: 'EpisodeDetails',
  fields: [{
    name: 'seasonName',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeName',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'videoContainer',
    index: 3,
    messageType: VIDEO_CONTAINER,
  }, {
    name: 'publishTimeMs',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'premierTimeMs',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
