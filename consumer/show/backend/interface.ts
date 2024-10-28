import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetSeasonPublisherAndGradeRequestBody {
  seasonId?: string,
  date?: string,
}

export let GET_SEASON_PUBLISHER_AND_GRADE_REQUEST_BODY: MessageDescriptor<GetSeasonPublisherAndGradeRequestBody> = {
  name: 'GetSeasonPublisherAndGradeRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'date',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetSeasonPublisherAndGradeResponse {
  seasonId?: string,
  publisherId?: string,
  grade?: number,
}

export let GET_SEASON_PUBLISHER_AND_GRADE_RESPONSE: MessageDescriptor<GetSeasonPublisherAndGradeResponse> = {
  name: 'GetSeasonPublisherAndGradeResponse',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'publisherId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'grade',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export let GET_SEASON_PUBLISHER_AND_GRADE: NodeRemoteCallDescriptor = {
  name: "GetSeasonPublisherAndGrade",
  path: "/GetSeasonPublisherAndGrade",
  body: {
    messageType: GET_SEASON_PUBLISHER_AND_GRADE_REQUEST_BODY,
  },
  response: {
    messageType: GET_SEASON_PUBLISHER_AND_GRADE_RESPONSE,
  },
}
