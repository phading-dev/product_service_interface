import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { EpisodeToPlay, EPISODE_TO_PLAY } from './episode_to_play';
import { PlayerSettings, PLAYER_SETTINGS } from './player_settings';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';
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

export interface GetPlayerSettingsRequestBody {
}

export let GET_PLAYER_SETTINGS_REQUEST_BODY: MessageDescriptor<GetPlayerSettingsRequestBody> = {
  name: 'GetPlayerSettingsRequestBody',
  fields: [],
};

export interface GetPlayerSettingsResponse {
  playerSettings?: PlayerSettings,
}

export let GET_PLAYER_SETTINGS_RESPONSE: MessageDescriptor<GetPlayerSettingsResponse> = {
  name: 'GetPlayerSettingsResponse',
  fields: [{
    name: 'playerSettings',
    index: 1,
    messageType: PLAYER_SETTINGS,
  }],
};

export interface SavePlayerSettingsRequestBody {
  playerSettings?: PlayerSettings,
}

export let SAVE_PLAYER_SETTINGS_REQUEST_BODY: MessageDescriptor<SavePlayerSettingsRequestBody> = {
  name: 'SavePlayerSettingsRequestBody',
  fields: [{
    name: 'playerSettings',
    index: 1,
    messageType: PLAYER_SETTINGS,
  }],
};

export interface SavePlayerSettingsResponse {
}

export let SAVE_PLAYER_SETTINGS_RESPONSE: MessageDescriptor<SavePlayerSettingsResponse> = {
  name: 'SavePlayerSettingsResponse',
  fields: [],
};

export let GET_EPISODE_TO_PLAY: WebRemoteCallDescriptor = {
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

export let GET_PLAYER_SETTINGS: WebRemoteCallDescriptor = {
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

export let SAVE_PLAYER_SETTINGS: WebRemoteCallDescriptor = {
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
