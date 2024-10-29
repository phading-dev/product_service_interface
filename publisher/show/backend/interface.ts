import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetVideoDurationAndSizeRequestBody {
  seasonId?: string,
  episodeId?: string,
}

export let GET_VIDEO_DURATION_AND_SIZE_REQUEST_BODY: MessageDescriptor<GetVideoDurationAndSizeRequestBody> = {
  name: 'GetVideoDurationAndSizeRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetVideoDurationAndSizeResponse {
  seasonId?: string,
  episodeId?: string,
  videoDuration?: number,
  videoSize?: number,
}

export let GET_VIDEO_DURATION_AND_SIZE_RESPONSE: MessageDescriptor<GetVideoDurationAndSizeResponse> = {
  name: 'GetVideoDurationAndSizeResponse',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'videoDuration',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'videoSize',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export let GET_VIDEO_DURATION_AND_SIZE: NodeRemoteCallDescriptor = {
  name: "GetVideoDurationAndSize",
  path: "/GetVideoDurationAndSize",
  body: {
    messageType: GET_VIDEO_DURATION_AND_SIZE_REQUEST_BODY,
  },
  response: {
    messageType: GET_VIDEO_DURATION_AND_SIZE_RESPONSE,
  },
}
