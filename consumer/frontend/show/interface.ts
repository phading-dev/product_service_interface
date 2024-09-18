import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { EpisodeToPlay, EPISODE_TO_PLAY } from './episode_to_play';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetEpisodeToPlayRequestBody {
  episodeId?: string,
}

export let GET_EPISODE_TO_PLAY_REQUEST_BODY: MessageDescriptor<GetEpisodeToPlayRequestBody> = {
  name: 'GetEpisodeToPlayRequestBody',
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetEpisodeToPlayResponse {
  episode?: EpisodeToPlay,
}

export let GET_EPISODE_TO_PLAY_RESPONSE: MessageDescriptor<GetEpisodeToPlayResponse> = {
  name: 'GetEpisodeToPlayResponse',
  fields: [{
    name: 'episode',
    index: 1,
    messageType: EPISODE_TO_PLAY,
  }],
};

export let GET_EPISODE_TO_PLAY: WebRemoteCallDescriptor = {
  name: "GetEpisodeToPlay",
  path: "/GetEpisodeToPlay",
  body: {
    messageType: GET_EPISODE_TO_PLAY_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: GET_EPISODE_TO_PLAY_RESPONSE,
  },
}
