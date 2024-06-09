import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AccountSnapshot, ACCOUNT_SNAPSHOT } from './account_snapshot';

export interface EpisodeItem {
  episodeId?: string,
  name?: string,
/* Video length in seconds. */
  length?: number,
}

export let EPISODE_ITEM: MessageDescriptor<EpisodeItem> = {
  name: 'EpisodeItem',
  fields: [
    {
      name: 'episodeId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'length',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface SeasonToPlay {
  seasonId?: string,
  name?: string,
  description?: string,
  coverImagePath?: string,
/* Small number means low quality and price. */
  grade?: number,
  episodes?: Array<EpisodeItem>,
  seriesId?: string,
  seriesName?: string,
  publisher?: AccountSnapshot,
}

export let SEASON_TO_PLAY: MessageDescriptor<SeasonToPlay> = {
  name: 'SeasonToPlay',
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
      name: 'description',
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
      name: 'episodes',
      messageType: EPISODE_ITEM,
      isArray: true,
    },
    {
      name: 'seriesId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'seriesName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'publisher',
      messageType: ACCOUNT_SNAPSHOT,
    },
  ]
};
