import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ShowSnapshot, SHOW_SNAPSHOT } from './show';

export interface SeasonOfShows {
  seasonOfShowsId?: string,
  name?: string,
  description?: string,
  coverImagePath?: string,
  createdTimestamp?: number,
  shows?: Array<ShowSnapshot>,
}

export let SEASON_OF_SHOWS: MessageDescriptor<SeasonOfShows> = {
  name: 'SeasonOfShows',
  fields: [
    {
      name: 'seasonOfShowsId',
      primitiveType: PrimitiveType.STRING,
    },
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
      name: 'createdTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'shows',
      messageType: SHOW_SNAPSHOT,
      isArray: true,
    },
  ]
};

export interface SeasonOfShowsSnapshot {
  seasonOfShowsId?: string,
  name?: string,
  coverImagePath?: string,
  createdTimestamp?: number,
}

export let SEASON_OF_SHOWS_SNAPSHOT: MessageDescriptor<SeasonOfShowsSnapshot> = {
  name: 'SeasonOfShowsSnapshot',
  fields: [
    {
      name: 'seasonOfShowsId',
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
      name: 'createdTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
