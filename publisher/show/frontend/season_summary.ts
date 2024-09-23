import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { SeasonState, SEASON_STATE } from './season_state';

export interface SeasonSummary {
  seasonId?: string,
  name?: string,
  coverImageUrl?: string,
  state?: SeasonState,
  grade?: number,
  totalEpisodes?: number,
  lastChangeTime?: number,
}

export let SEASON_SUMMARY: MessageDescriptor<SeasonSummary> = {
  name: 'SeasonSummary',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'coverImageUrl',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'state',
    index: 4,
    enumType: SEASON_STATE,
  }, {
    name: 'grade',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'totalEpisodes',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'lastChangeTime',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
