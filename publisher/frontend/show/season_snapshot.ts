import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface SeasonSnapshot {
  seasonId?: string,
  name?: string,
  coverImagePath?: string,
  grade?: number,
  episodesCount?: number,
  /* Timestamp in seconds. */
  createdTime?: number,
}

export let SEASON_SNAPSHOT: MessageDescriptor<SeasonSnapshot> = {
  name: 'SeasonSnapshot',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
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
  }, {
    name: 'episodesCount',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'createdTime',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
