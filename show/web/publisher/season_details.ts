import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { SeasonState, SEASON_STATE } from '../../season_state';

export interface NextGrade {
  grade?: number,
  effectiveDate?: string,
}

export let NEXT_GRADE: MessageDescriptor<NextGrade> = {
  name: 'NextGrade',
  fields: [{
    name: 'grade',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'effectiveDate',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface SeasonDetails {
  name?: string,
  description?: string,
  coverImageUrl?: string,
  totalEpisodes?: number,
  grade?: number,
  nextGrade?: NextGrade,
  createdTimeMs?: number,
  lastChangeTimeMs?: number,
  state?: SeasonState,
  averageRating?: number,
}

export let SEASON_DETAILS: MessageDescriptor<SeasonDetails> = {
  name: 'SeasonDetails',
  fields: [{
    name: 'name',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'description',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'coverImageUrl',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'totalEpisodes',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'grade',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'nextGrade',
    index: 6,
    messageType: NEXT_GRADE,
  }, {
    name: 'createdTimeMs',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'lastChangeTimeMs',
    index: 8,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'state',
    index: 9,
    enumType: SEASON_STATE,
  }, {
    name: 'averageRating',
    index: 10,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
