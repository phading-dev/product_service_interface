import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { SeasonOfShowsSnapshot, SEASON_OF_SHOWS_SNAPSHOT } from './season_of_shows';

export interface SeriesOfShows {
  seriesId?: string,
  name?: string,
  description?: string,
  coverImagePath?: string,
  createdTimestamp?: number,
  seasons?: Array<SeasonOfShowsSnapshot>,
}

export let SERIES_OF_SHOWS: MessageDescriptor<SeriesOfShows> = {
  name: 'SeriesOfShows',
  fields: [
    {
      name: 'seriesId',
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
      name: 'seasons',
      messageType: SEASON_OF_SHOWS_SNAPSHOT,
      isArray: true,
    },
  ]
};

export interface SeriesOfShowsSnapshot {
  seriesId?: string,
  name?: string,
  coverImagePath?: string,
/* The number of items contained. */
  count?: number,
  createdTimestamp?: number,
}

export let SERIES_OF_SHOWS_SNAPSHOT: MessageDescriptor<SeriesOfShowsSnapshot> = {
  name: 'SeriesOfShowsSnapshot',
  fields: [
    {
      name: 'seriesId',
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
      name: 'count',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'createdTimestamp',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};
