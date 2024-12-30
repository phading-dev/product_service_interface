import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { VideoContainer, VIDEO_CONTAINER } from '@phading/video_service_interface/node/video_container';

export interface EpisodeDetails {
  seasonName?: string,
  episodeName?: string,
  episodeIndex?: number,
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
    name: 'episodeIndex',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'videoContainer',
    index: 4,
    messageType: VIDEO_CONTAINER,
  }, {
    name: 'publishTimeMs',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'premierTimeMs',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
