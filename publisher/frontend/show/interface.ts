import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';
import { SeasonSnapshot, SEASON_SNAPSHOT } from './season_snapshot';

export interface UploadCoverImageResponse {
  path?: string,
}

export let UPLOAD_COVER_IMAGE_RESPONSE: MessageDescriptor<UploadCoverImageResponse> = {
  name: 'UploadCoverImageResponse',
  fields: [
    {
      name: 'path',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let UPLOAD_COVER_IMAGE: ServiceDescriptor = {
  name: "UploadCoverImage",
  path: "/UploadCoverImage",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: UPLOAD_COVER_IMAGE_RESPONSE,
  },
}

export interface CreateSeasonRequestBody {
  name?: string,
  description?: string,
  coverImagePath?: string,
/* 1 - 8. Lowest grade means lowest quality. */
  grade?: number,
}

export let CREATE_SEASON_REQUEST_BODY: MessageDescriptor<CreateSeasonRequestBody> = {
  name: 'CreateSeasonRequestBody',
  fields: [
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'description',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'coverImagePath',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'grade',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface CreateSeasonResponse {
  season?: SeasonSnapshot,
}

export let CREATE_SEASON_RESPONSE: MessageDescriptor<CreateSeasonResponse> = {
  name: 'CreateSeasonResponse',
  fields: [
    {
      name: 'season',
      messageType: SEASON_SNAPSHOT,
    },
  ]
};

export let CREATE_SEASON: ServiceDescriptor = {
  name: "CreateSeason",
  path: "/CreateSeason",
  body: {
    messageType: CREATE_SEASON_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: CREATE_SEASON_RESPONSE,
  },
}
