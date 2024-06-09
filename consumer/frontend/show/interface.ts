import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { SeasonToPlay, SEASON_TO_PLAY } from './season_to_play';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';
import { EpisodeToPlay, EPISODE_TO_PLAY } from './episode_to_play';

export interface GetSeasonToPlayRequestBody {
  seasonId?: string,
}

export let GET_SEASON_TO_PLAY_REQUEST_BODY: MessageDescriptor<GetSeasonToPlayRequestBody> = {
  name: 'GetSeasonToPlayRequestBody',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetSeasonToPlayResponse {
  season?: SeasonToPlay,
}

export let GET_SEASON_TO_PLAY_RESPONSE: MessageDescriptor<GetSeasonToPlayResponse> = {
  name: 'GetSeasonToPlayResponse',
  fields: [
    {
      name: 'season',
      messageType: SEASON_TO_PLAY,
    },
  ]
};

export let GET_SEASON_TO_PLAY: ServiceDescriptor = {
  name: "GetSeasonToPlay",
  path: "/GetSeasonToPlay",
  body: {
    messageType: GET_SEASON_TO_PLAY_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: GET_SEASON_TO_PLAY_RESPONSE,
  },
}

export interface GetEpisodeToPlayRequestBody {
  episodeId?: string,
}

export let GET_EPISODE_TO_PLAY_REQUEST_BODY: MessageDescriptor<GetEpisodeToPlayRequestBody> = {
  name: 'GetEpisodeToPlayRequestBody',
  fields: [
    {
      name: 'episodeId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetEpisodeToPlayResponse {
  episode?: EpisodeToPlay,
}

export let GET_EPISODE_TO_PLAY_RESPONSE: MessageDescriptor<GetEpisodeToPlayResponse> = {
  name: 'GetEpisodeToPlayResponse',
  fields: [
    {
      name: 'episode',
      messageType: EPISODE_TO_PLAY,
    },
  ]
};

export let GET_EPISODE_TO_PLAY: ServiceDescriptor = {
  name: "GetEpisodeToPlay",
  path: "/GetEpisodeToPlay",
  body: {
    messageType: GET_EPISODE_TO_PLAY_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: GET_EPISODE_TO_PLAY_RESPONSE,
  },
}
