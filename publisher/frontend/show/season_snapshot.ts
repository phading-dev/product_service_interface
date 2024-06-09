import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

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
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
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
    {
      name: 'episodesCount',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'createdTime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
