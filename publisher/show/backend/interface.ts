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
  videoDurationSec?: number,
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
    name: 'videoDurationSec',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'videoSize',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GetStorageMeterReadingRequestBody {
  accountId?: string,
  startTimeMs?: number,
  endTimeMs?: number,
}

export let GET_STORAGE_METER_READING_REQUEST_BODY: MessageDescriptor<GetStorageMeterReadingRequestBody> = {
  name: 'GetStorageMeterReadingRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'startTimeMs',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'endTimeMs',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GetStorageMeterReadingResponse {
  mbh?: number,
}

export let GET_STORAGE_METER_READING_RESPONSE: MessageDescriptor<GetStorageMeterReadingResponse> = {
  name: 'GetStorageMeterReadingResponse',
  fields: [{
    name: 'mbh',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GetUploadMeterReadingRequestBody {
  accountId?: string,
  startTimeMs?: number,
  endTimeMs?: number,
}

export let GET_UPLOAD_METER_READING_REQUEST_BODY: MessageDescriptor<GetUploadMeterReadingRequestBody> = {
  name: 'GetUploadMeterReadingRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'startTimeMs',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'endTimeMs',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface GetUploadMeterReadingResponse {
  mb?: number,
}

export let GET_UPLOAD_METER_READING_RESPONSE: MessageDescriptor<GetUploadMeterReadingResponse> = {
  name: 'GetUploadMeterReadingResponse',
  fields: [{
    name: 'mb',
    index: 1,
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

export let GET_STORAGE_METER_READING: NodeRemoteCallDescriptor = {
  name: "GetStorageMeterReading",
  path: "/GetStorageMeterReading",
  body: {
    messageType: GET_STORAGE_METER_READING_REQUEST_BODY,
  },
  response: {
    messageType: GET_STORAGE_METER_READING_RESPONSE,
  },
}

export let GET_UPLOAD_METER_READING: NodeRemoteCallDescriptor = {
  name: "GetUploadMeterReading",
  path: "/GetUploadMeterReading",
  body: {
    messageType: GET_UPLOAD_METER_READING_REQUEST_BODY,
  },
  response: {
    messageType: GET_UPLOAD_METER_READING_RESPONSE,
  },
}
