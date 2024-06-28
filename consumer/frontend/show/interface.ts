import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { EpisodeToPlay, EPISODE_TO_PLAY } from './episode_to_play';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';
import { PlayerSettings, PLAYER_SETTINGS } from './player_settings';

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

export interface GetPlayerSettingsRequestBody {
}

export let GET_PLAYER_SETTINGS_REQUEST_BODY: MessageDescriptor<GetPlayerSettingsRequestBody> = {
  name: 'GetPlayerSettingsRequestBody',
  fields: [
  ]
};

export interface GetPlayerSettingsResponse {
  playerSettings?: PlayerSettings,
}

export let GET_PLAYER_SETTINGS_RESPONSE: MessageDescriptor<GetPlayerSettingsResponse> = {
  name: 'GetPlayerSettingsResponse',
  fields: [
    {
      name: 'playerSettings',
      messageType: PLAYER_SETTINGS,
    },
  ]
};

export let GET_PLAYER_SETTINGS: ServiceDescriptor = {
  name: "GetPlayerSettings",
  path: "/GetPlayerSettings",
  body: {
    messageType: GET_PLAYER_SETTINGS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: GET_PLAYER_SETTINGS_RESPONSE,
  },
}

export interface SavePlayerSettingsRequestBody {
  playerSettings?: PlayerSettings,
}

export let SAVE_PLAYER_SETTINGS_REQUEST_BODY: MessageDescriptor<SavePlayerSettingsRequestBody> = {
  name: 'SavePlayerSettingsRequestBody',
  fields: [
    {
      name: 'playerSettings',
      messageType: PLAYER_SETTINGS,
    },
  ]
};

export interface SavePlayerSettingsResponse {
}

export let SAVE_PLAYER_SETTINGS_RESPONSE: MessageDescriptor<SavePlayerSettingsResponse> = {
  name: 'SavePlayerSettingsResponse',
  fields: [
  ]
};

export let SAVE_PLAYER_SETTINGS: ServiceDescriptor = {
  name: "SavePlayerSettings",
  path: "/SavePlayerSettings",
  body: {
    messageType: SAVE_PLAYER_SETTINGS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: SAVE_PLAYER_SETTINGS_RESPONSE,
  },
}
