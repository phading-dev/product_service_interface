import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { SeasonSnapshot, SEASON_SNAPSHOT } from './season_snapshot';
import { PrimitveTypeForBody, WebRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface UploadCoverImageResponse {
  path?: string,
}

export let UPLOAD_COVER_IMAGE_RESPONSE: MessageDescriptor<UploadCoverImageResponse> = {
  name: 'UploadCoverImageResponse',
  fields: [{
    name: 'path',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CreateSeasonRequestBody {
  name?: string,
  description?: string,
  coverImagePath?: string,
  /* 1 - 8. Lowest grade means lowest quality. */
  grade?: number,
}

export let CREATE_SEASON_REQUEST_BODY: MessageDescriptor<CreateSeasonRequestBody> = {
  name: 'CreateSeasonRequestBody',
  fields: [{
    name: 'name',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'description',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'coverImagePath',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'grade',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface CreateSeasonResponse {
  season?: SeasonSnapshot,
}

export let CREATE_SEASON_RESPONSE: MessageDescriptor<CreateSeasonResponse> = {
  name: 'CreateSeasonResponse',
  fields: [{
    name: 'season',
    index: 1,
    messageType: SEASON_SNAPSHOT,
  }],
};

export let UPLOAD_COVER_IMAGE: WebRemoteCallDescriptor = {
  name: "UploadCoverImage",
  path: "/UploadCoverImage",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  sessionKey: "sk",
  response: {
    messageType: UPLOAD_COVER_IMAGE_RESPONSE,
  },
}

export let CREATE_SEASON: WebRemoteCallDescriptor = {
  name: "CreateSeason",
  path: "/CreateSeason",
  body: {
    messageType: CREATE_SEASON_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: CREATE_SEASON_RESPONSE,
  },
}
